package datasource

import (
	"context"
	"fmt"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/grafana-plugin-sdk-go/data"
	"github.com/grafana/influx-datasource/pkg/models"
	"github.com/influxdata/influxdb-client-go/influxdb2"
)

// QueryResultToDataFrames creates a DataFrame from query results
func GetRawFluxQuery(query *models.QueryModel) (string, error) {
	// TODO apply macros!!!

	return query.RawQuery, nil
}

func ExecuteQuery(ctx context.Context, query *models.QueryModel, runner queryRunner) (dr *backend.DataResponse) {
	dr = &backend.DataResponse{}

	flux, err := GetRawFluxQuery(query)
	if err != nil {
		dr.Error = err
		return
	}

	table, err := runner.runQuery(ctx, query.Org, flux)
	if err != nil {
		dr.Error = err
		return
	}

	return readDataFrames(table, query.MaxDataPoints)
}

func readDataFrames(result *influxdb2.QueryTableResult, maxPoints int64) (dr *backend.DataResponse) {
	dr = &backend.DataResponse{}

	var frame *data.Frame

	for result.Next() {
		// Observe when there is new grouping key producing new table
		if result.TableChanged() {
			fmt.Printf("table: %s\n", result.TableMetadata().String())
		}

		if frame == nil {
			dr.Error = fmt.Errorf("Invalid state")
			return dr
		}

		// read result
		fmt.Printf("row: %s\n", result.Record().String())
	}

	// Attach any errors (may be null)
	dr.Error = result.Err()
	return dr
}
