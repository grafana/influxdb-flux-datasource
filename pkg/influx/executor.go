package influx

import (
	"context"
	"fmt"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/influxdb-flux-datasource/pkg/models"
	influxdb2 "github.com/influxdata/influxdb-client-go"
)

func ExecuteQuery(ctx context.Context, query models.QueryModel, runner queryRunner, maxSeries int) (dr backend.DataResponse) {
	dr = backend.DataResponse{}

	flux, err := Interpolate(query)
	if err != nil {
		dr.Error = err
		return
	}

	tables, err := runner.runQuery(ctx, flux)
	if err != nil {
		dr.Error = err
		return
	}

	return readDataFrames(tables, int(float64(query.MaxDataPoints)*1.5), maxSeries)
}

func readDataFrames(result *influxdb2.QueryTableResult, maxPoints int, maxSeries int) (dr backend.DataResponse) {
	dr = backend.DataResponse{}

	builder := &FrameBuilder{
		maxPoints: maxPoints,
		maxSeries: maxSeries,
	}

	for result.Next() {
		// Observe when there is new grouping key producing new table
		if result.TableChanged() {
			if builder.frames != nil {
				for _, frame := range builder.frames {
					dr.Frames = append(dr.Frames, frame)
				}
			}
			err := builder.Init(result.TableMetadata())
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
			break
		}
	}

	// Add the inprogress record
	if builder.frames != nil {
		for _, frame := range builder.frames {
			dr.Frames = append(dr.Frames, frame)
		}
	}

	// Attach any errors (may be null)
	if result.Err() != nil {
		dr.Error = result.Err()
	}
	if dr.Error != nil {
		// reset frames to prevent any further errors (e.g. by incomplete rows)
		dr.Frames = nil
	}
	return dr
}
