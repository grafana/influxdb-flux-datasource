package datasource

import (
	"fmt"
	"regexp"

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
	fields map[string]*data.Field
	frame  *data.Frame
	names  []string
}

func isTag(schk string) bool {
	return (schk != "result" && schk != "table" && schk[0] != '_')
}

var isField = regexp.MustCompile(`^_(time|value|measurement|field)$`)

func getFrameFieldType(t string) (data.FieldType, error) {
	switch t {
	case stringDatatype:
		return data.FieldTypeString, nil
	case timeDatatypeRFC:
		return data.FieldTypeTime, nil
	case timeDatatypeRFCNano:
		return data.FieldTypeTime, nil
	case durationDatatype:
		return data.FieldTypeFloat64, nil // ??? TODO: use arrow duration?
	case doubleDatatype:
		return data.FieldTypeFloat64, nil
	case boolDatatype:
		return data.FieldTypeBool, nil
	case longDatatype:
		return data.FieldTypeInt64, nil
	case uLongDatatype:
		return data.FieldTypeUint64, nil

	// Fall though to default
	case base64BinaryDataType:
	}
	return data.FieldTypeFloat64, fmt.Errorf("Unsupportd type %s", t)
}

func (fb *FrameBuilder) Init(metadata *influxdb2.FluxTableMetadata) error {
	columns := metadata.Columns()
	fb.fields = make(map[string]*data.Field)
	fb.frame = &data.Frame{
		Fields: make([]*data.Field, 0),
	}

	for _, col := range columns {
		ft, err := getFrameFieldType(col.DataType())
		if err != nil {
			backend.Logger.Info("unsupported column", "column", col)
			fb.frame.AppendNotices(data.Notice{
				Severity: data.NoticeSeverityWarning,
				Text:     err.Error(),
			})
			continue
		} else {
			f := data.NewFieldFromFieldType(ft, 0)
			switch col.Name() {
			case "_time":
				f.Name = "Time"
				fallthrough
			case "_value":
				f.Labels = make(map[string]string)
				fb.fields[col.Name()] = f
				fb.frame.Fields = append(fb.frame.Fields, f)
			}

			fb.names = append(fb.names, col.Name())
		}
	}

	return nil
}

func (fb *FrameBuilder) Append(record *influxdb2.FluxRecord) {
	for _, key := range fb.names {
		val := record.ValueByKey(key)
		switch {
		case isTag(key):
			fb.fields["_value"].Labels[key] = val.(string)
		case key == "_field":
			fb.fields["_value"].Name = val.(string)
		case key == "_measurement":
			fb.frame.Name = val.(string)
		case key == "_value":
			fallthrough
		case key == "_time":
			fb.fields[key].Append(val)
		}
	}
}
