package influxds

import (
	"github.com/grafana/grafana-plugin-sdk-go/data"
	"github.com/influxdata/influxdb-client-go"
)

// QueryResultToDataFrames creates a DataFrame from query results
func QueryResultToDataFrames(res *influxdb.QueryCSVResult) ([]*data.Frame, error) {
	frames := []*data.Frame{}

	// TODO...
	// SEE: https://github.com/ryantxu/influxdb-client-go/tree/expose-csv-props

	return frames, nil
}
