package datasource

import (
	"context"
	"fmt"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/grafana-plugin-sdk-go/data"
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
	var points int64 = 0

	for result.Next() {
		// Observe when there is new grouping key producing new table
		if result.TableChanged() {
			if builder.frame != nil {
				dr.Frames = append(dr.Frames, builder.frame)
			}
			err := builder.Init(result.TableMetadata())
			points = 0
			if err != nil {
				dr.Error = err
				return
			}
		}

		if builder.frame == nil {
			dr.Error = fmt.Errorf("Invalid state")
			return dr
		}
		builder.Append(result.Record())
		points++
		if maxPoints > 0 && points > maxPoints {
			backend.Logger.Warn("max points reached")
			builder.frame.AppendNotices(data.Notice{
				Severity: data.NoticeSeverityWarning,
				Text:     "Reached max points",
			})
			break
		}
	}

	// Add the inprogress record
	if builder.frame != nil {
		dr.Frames = append(dr.Frames, builder.frame)
	}

	// Attach any errors (may be null)
	dr.Error = result.Err()
	return dr
}
