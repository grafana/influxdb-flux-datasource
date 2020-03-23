package influxds

import (
	"github.com/grafana/grafana-plugin-sdk-go/data"
	"github.com/influxdata/influxdb-client-go"
)

// QueryResultToDataFrame creates a DataFrame from query results
func QueryResultToDataFrames(res *influxdb.QueryCSVResult) ([]*data.Frame, error) {
	frames := []*data.Frame{}

	// TODO...

	return frames, nil
}
