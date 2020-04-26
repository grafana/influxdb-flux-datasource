package datasource

import (
	"testing"
	"time"

	"github.com/google/go-cmp/cmp"
	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/influxdb-flux-datasource/pkg/models"
)

func TestInterpolate(t *testing.T) {
	// Unix sec: 1500376552
	// Unix ms:  1500376552001

	timeRange := backend.TimeRange{
		From: time.Unix(0, 1500376552001*1e6),
		To:   time.Unix(0, 1500376552002*1e6),
	}
	tests := []struct {
		name   string
		before string
		after  string
	}{
		{
			name:   "interpolate __timeFilter function",
			before: `SELECT average(value) FROM test $__timeFilter TIMESERIES`,
			after:  `SELECT average(value) FROM test SINCE 1500376552001 UNTIL 1500376552002 TIMESERIES`,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {

			query := models.QueryModel{
				RawQuery:  tt.before,
				TimeRange: timeRange,
			}
			nrql, err := Interpolate(query)
			if err != nil {
				t.Fatal(err)
			}
			if diff := cmp.Diff(tt.after, nrql); diff != "" {
				t.Fatalf("Result mismatch (-want +got):\n%s", diff)
			}
		})
	}
}
