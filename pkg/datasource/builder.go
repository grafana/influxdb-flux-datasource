package datasource

import (
	"fmt"

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
	frame *data.Frame
	names []string
}

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

	fb.names = make([]string, 0)
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
			f.Name = col.Name()
			fb.frame.Fields = append(fb.frame.Fields, f)
			fb.names = append(fb.names, col.Name())
		}
	}

	return nil
}

func (fb *FrameBuilder) Append(record *influxdb2.FluxRecord) {
	for i, key := range fb.names {
		val := record.ValueByKey(key)
		fb.frame.Fields[i].Append(val)
	}
}
