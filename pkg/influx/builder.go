package influx

import (
	"fmt"
	"regexp"
	"sort"
	"strings"
	"time"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/grafana-plugin-sdk-go/data"
	influxdb2 "github.com/influxdata/influxdb-client-go"
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
	frames    map[string]*data.Frame
	errFrame  *data.Frame
	tags      map[string]data.FieldType
	valueType data.FieldType
	maxPoints int
}

func isTag(schk string) bool {
	return (schk != "result" && schk != "table" && schk[0] != '_')
}

var isField = regexp.MustCompile(`^_(time|value|measurement|field|start|stop)$`)

func getFrameFieldType(t string) (data.FieldType, error) {
	switch t {
	case stringDatatype:
		return data.FieldTypeNullableString, nil
	case timeDatatypeRFC:
		return data.FieldTypeNullableTime, nil
	case timeDatatypeRFCNano:
		return data.FieldTypeNullableTime, nil
	case durationDatatype:
		return data.FieldTypeNullableFloat64, nil // ??? TODO: use arrow duration?
	case doubleDatatype:
		return data.FieldTypeNullableFloat64, nil
	case boolDatatype:
		return data.FieldTypeNullableBool, nil
	case longDatatype:
		return data.FieldTypeNullableInt64, nil
	case uLongDatatype:
		return data.FieldTypeNullableUint64, nil

	// Fall though to default
	case base64BinaryDataType:
	}
	return data.FieldTypeFloat64, fmt.Errorf("Unsupportd type %s", t)
}

// Init initializes the frame to be returned
// fields points at entries in the frame, and provides easier access
// names indexes the columns encountered
func (fb *FrameBuilder) Init(metadata *influxdb2.FluxTableMetadata, maxPoints int64) error {
	columns := metadata.Columns()
	fb.frames = make(map[string]*data.Frame)
	fb.tags = make(map[string]data.FieldType)
	fb.maxPoints = int(maxPoints)
	fb.errFrame = &data.Frame{
		Fields: make([]*data.Field, 0),
	}

	for _, col := range columns {
		ft, err := getFrameFieldType(col.DataType())
		if err != nil {
			backend.Logger.Info("unsupported column", "column", col)
			fb.errFrame.AppendNotices(data.Notice{
				Severity: data.NoticeSeverityWarning,
				Text:     err.Error(),
			})
			continue
		} else {
			if isTag(col.Name()) {
				fb.tags[col.Name()] = ft
			}

			if col.Name() == "_value" {
				fb.valueType = ft
			}
		}
	}

	return nil
}

// Append appends a single entry from an influxdb2 record to a data frame
// Values are appended to _value
// Tags are appended as labels
// _measurement holds the dataframe name
// _field holds the field name.
func (fb *FrameBuilder) Append(record *influxdb2.FluxRecord) {
	labels := make(map[string]string)
	for key := range fb.tags {
		labels[key] = record.ValueByKey(key).(string)
	}

	field := record.ValueByKey("_field").(string)
	measurement := record.ValueByKey("_measurement").(string)

	index := measurement + "." + field
	var labelText []string
	for key, val := range labels {
		labelText = append(labelText, key+"="+val)
	}

	sort.Strings(labelText)
	if len(labelText) > 0 {
		index += ": {" + strings.Join(labelText, ",") + "}"
	}

	if fb.frames[index] == nil {
		fb.frames[index] = &data.Frame{
			Name: index,
		}

		fb.frames[index].Fields = append(fb.frames[index].Fields, data.NewFieldFromFieldType(data.FieldTypeTime, 0))
		fb.frames[index].Fields = append(fb.frames[index].Fields, data.NewFieldFromFieldType(fb.valueType, 0))

		fb.frames[index].Fields[0].Name = "Time"
		fb.frames[index].Fields[1].Name = "Value"
		if len(labelText) > 0 {
			fb.frames[index].Fields[0].Labels = labels
			fb.frames[index].Fields[1].Labels = labels
		}
	}

	fb.frames[index].Fields[0].Append(record.ValueByKey("_time"))
	f := fb.frames[index].Fields[1]
	v := record.ValueByKey("_value")

	// Allow for 50% more points. Just in case.
	if f.Len() < (fb.maxPoints + fb.maxPoints/2) {
		if v == nil {
			f.Append(nil)
		} else {
			switch fb.valueType {
			case data.FieldTypeInt8:
				v1 := v.(int8)
				f.Append(v1)
			case data.FieldTypeNullableInt8:
				v1 := v.(int8)
				f.Append(&v1)
			case data.FieldTypeInt16:
				v1 := v.(int16)
				f.Append(v1)
			case data.FieldTypeNullableInt16:
				v1 := v.(int16)
				f.Append(&v1)
			case data.FieldTypeInt32:
				v1 := v.(int32)
				f.Append(v1)
			case data.FieldTypeNullableInt32:
				v1 := v.(int32)
				f.Append(&v1)
			case data.FieldTypeInt64:
				v1 := v.(int64)
				f.Append(v1)
			case data.FieldTypeNullableInt64:
				v1 := v.(int64)
				f.Append(&v1)
			case data.FieldTypeUint8:
				v1 := v.(uint8)
				f.Append(v1)
			case data.FieldTypeNullableUint8:
				v1 := v.(uint8)
				f.Append(&v1)
			case data.FieldTypeUint16:
				v1 := v.(uint16)
				f.Append(v1)
			case data.FieldTypeNullableUint16:
				v1 := v.(uint16)
				f.Append(&v1)
			case data.FieldTypeUint32:
				v1 := v.(uint32)
				f.Append(v1)
			case data.FieldTypeNullableUint32:
				v1 := v.(uint32)
				f.Append(&v1)
			case data.FieldTypeUint64:
				v1 := v.(uint64)
				f.Append(v1)
			case data.FieldTypeNullableUint64:
				v1 := v.(uint64)
				f.Append(&v1)
			case data.FieldTypeFloat32:
				v1 := v.(float32)
				f.Append(v1)
			case data.FieldTypeNullableFloat32:
				v1 := v.(float32)
				f.Append(&v1)
			case data.FieldTypeFloat64:
				v1 := v.(float64)
				f.Append(v1)
			case data.FieldTypeNullableFloat64:
				v1 := v.(float64)
				f.Append(&v1)
			case data.FieldTypeString:
				v1 := v.(string)
				f.Append(v1)
			case data.FieldTypeNullableString:
				v1 := v.(string)
				f.Append(&v1)
			case data.FieldTypeBool:
				v1 := v.(bool)
				f.Append(v1)
			case data.FieldTypeNullableBool:
				v1 := v.(bool)
				f.Append(&v1)
			case data.FieldTypeTime:
				v1 := v.(time.Time)
				f.Append(v1)
			case data.FieldTypeNullableTime:
				v1 := v.(time.Time)
				f.Append(&v1)
			default:
			}
		}
	} else {
		backend.Logger.Warn("max points reached")
		fb.errFrame.AppendNotices(data.Notice{
			Severity: data.NoticeSeverityWarning,
			Text:     "Reached max points",
		})
	}

}
