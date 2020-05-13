package influx

import (
	"fmt"
	"regexp"

	"github.com/grafana/grafana-plugin-sdk-go/data"
	influxdb2 "github.com/influxdata/influxdb-client-go"

	"github.com/grafana/influxdb-flux-datasource/pkg/converters"
)

// Copied from: (Apache 2 license)
// https://github.com/influxdata/influxdb-client-go/blob/master/query.go#L30
const (
	stringDatatype       = "string"
	doubleDatatype       = "double"
	boolDatatype         = "bool"
	longDatatype         = "long"
	uLongDatatype        = "unsignedLong"
	durationDatatype     = "duration"
	base64BinaryDataType = "base64Binary"
	timeDatatypeRFC      = "dateTime:RFC3339"
	timeDatatypeRFCNano  = "dateTime:RFC3339Nano"
)

// This is an interface to help testing
type FrameBuilder struct {
	frames      []*data.Frame
	converter   *data.FieldConverter
	labels      []string
	maxSeries   int64
	totalSeries int64
}

func isTag(schk string) bool {
	return (schk != "result" && schk != "table" && schk[0] != '_')
}

var isField = regexp.MustCompile(`^_(time|value|measurement|field|start|stop)$`)

func getConverter(t string) (*data.FieldConverter, error) {
	switch t {
	case stringDatatype:
		return &converters.AnyToOptionalString, nil
	case timeDatatypeRFC:
		return &converters.Int64ToOptionalInt64, nil
	case timeDatatypeRFCNano:
		return &converters.Int64ToOptionalInt64, nil
	case durationDatatype:
		return &converters.Int64ToOptionalInt64, nil
	case doubleDatatype:
		return &converters.Float64ToOptionalFloat64, nil
	case boolDatatype:
		return &converters.BoolToOptionalBool, nil
	case longDatatype:
		return &converters.Int64ToOptionalInt64, nil
	case uLongDatatype:
		return &converters.UInt64ToOptionalUInt64, nil
	// Fall though to default
	case base64BinaryDataType:
	}

	return nil, fmt.Errorf("No matching converter found for [%v]", t)
}

// Init initializes the frame to be returned
// fields points at entries in the frame, and provides easier access
// names indexes the columns encountered
func (fb *FrameBuilder) Init(metadata *influxdb2.FluxTableMetadata, maxPoints int64) error {
	columns := metadata.Columns()
	fb.frames = make([]*data.Frame, 0)

	for _, col := range columns {
		switch {
		case col.Name() == "_value":
			converter, err := getConverter(col.DataType())
			if err != nil {
				return err
			}
			fb.converter = converter
		case isTag(col.Name()):
			fb.labels = append(fb.labels, col.Name())
		}
	}

	return nil
}

// Append appends a single entry from an influxdb2 record to a data frame
// Values are appended to _value
// Tags are appended as labels
// _measurement holds the dataframe name
// _field holds the field name.
func (fb *FrameBuilder) Append(record *influxdb2.FluxRecord) error {
	index := len(fb.frames) - 1
	if index == -1 || fb.frames[index].Fields[1].Name != record.Field() {

		labels := make(map[string]string)
		for _, name := range fb.labels {
			labels[name] = record.ValueByKey(name).(string)
		}
		frame := data.NewFrame(
			record.Measurement(),
			data.NewFieldFromFieldType(data.FieldTypeTime, 0),
			data.NewFieldFromFieldType(fb.converter.OutputFieldType, 0),
		)

		frame.Fields[0].Name = "Time"
		frame.Fields[1].Name = record.Field()
		frame.Fields[1].Labels = labels

		fb.totalSeries++
		if fb.maxSeries > 0 && fb.totalSeries > fb.maxSeries {
			return fmt.Errorf("reached max series limit (%d)", fb.maxSeries)
		}
		fb.frames = append(fb.frames, frame)
		index++
	}

	frame := fb.frames[index]
	frame.Fields[0].Append(record.Time())
	val, err := fb.converter.Converter(record.Value())
	if err != nil {
		return err
	}
	frame.Fields[1].Append(val)

	return nil
}
