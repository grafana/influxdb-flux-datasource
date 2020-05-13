package influx

import (
	"context"
	"fmt"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/influxdb-flux-datasource/pkg/models"
	influxdb2 "github.com/influxdata/influxdb-client-go"
)

func ExecuteQuery(ctx context.Context, query models.QueryModel, runner queryRunner) (dr backend.DataResponse) {
	dr = backend.DataResponse{}

	flux, err := Interpolate(query)
	if err != nil {
		dr.Error = err
		return
	}

	table, err := runner.runQuery(ctx, flux)
	if err != nil {
		dr.Error = err
		return
	}

	fmt.Println(table)
	return readDataFrames(table, query.MaxDataPoints)
}

func readDataFrames(result *influxdb2.QueryTableResult, maxPoints int64) (dr backend.DataResponse) {
	dr = backend.DataResponse{}

	builder := &FrameBuilder{}

	for result.Next() {
		// Observe when there is new grouping key producing new table
		if result.TableChanged() {
			if builder.frames != nil {
				for _, frame := range builder.frames {
					dr.Frames = append(dr.Frames, frame)
				}
			}
			err := builder.Init(result.TableMetadata(), maxPoints)
			if err != nil {
				dr.Error = err
				return
			}
		}

		if builder.frames == nil {
			dr.Error = fmt.Errorf("Invalid state")
			return dr
		}

		err := builder.Append(result.Record())
		if err != nil {
			dr.Error = err
		}
	}

	// Add the inprogress record
	if builder.frames != nil {
		for _, frame := range builder.frames {
			dr.Frames = append(dr.Frames, frame)
		}
	}

	// Attach any errors (may be null)
	dr.Error = result.Err()
	return dr
}
