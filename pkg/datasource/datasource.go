package datasource

import (
	"context"
	"fmt"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/grafana-plugin-sdk-go/experimental"
	"github.com/grafana/influx-datasource/pkg/models"
	"github.com/influxdata/influxdb-client-go/influxdb2"
)

// This is an interface to help testing
type queryRunner interface {
	runQuery(ctx context.Context, org string, q string) (*influxdb2.QueryTableResult, error)
}

// This is an interface to help testing
type InfluRunner struct {
	Client *influxdb2.InfluxDBClient
}

func (r *InfluRunner) runQuery(ctx context.Context, org string, q string) error {
	return r.Client.QueryApi(org).Query(ctx, q)
}

// InfluxDataSource handler for google sheets
type InfluxDataSource struct {
	Runner *influxdb2.InfluxDBClient
}

// CreateDataSource create the client...
func CreateDataSource(settings models.DatasourceSettings) (*InfluxDataSource, error) {
	return &InfluxDataSource{
		Runner: &InfluRunner{
			Client: influxdb2.NewClient(settings.URL, settings.Token),
		},
	}, nil
}

// CheckHealth will check the currently configured settings
func (ds *InfluxDataSource) CheckHealth() *backend.CheckHealthResult {

	// return &backend.CheckHealthResult{
	// 	Status:  backend.HealthStatusError,
	// 	Message: err.Error(),
	// }

	return &backend.CheckHealthResult{
		Status:  backend.HealthStatusOk,
		Message: fmt.Sprintf("OK!"),
	}
}

// QueryData - Primary method called by grafana-server
func (ds *InfluxDataSource) QueryData(req *backend.QueryDataRequest) (*backend.QueryDataResponse, error) {
	res := backend.NewQueryDataResponse()
	for _, q := range req.Queries {
		var dr *backend.DataResponse
		query, err := models.GetQueryModel(q)
		if err != nil {
			dr = &backend.DataResponse{
				Error: err,
			}
		} else {
			dr = ExecuteQuery(context.Background(), query, ds.Runner)
		}
		res.Responses[q.RefID] = *dr
	}
	return res, nil
}

// CallResource HTTP style resource
func (ds *InfluxDataSource) CallResource(req *backend.CallResourceRequest, sender backend.CallResourceResponseSender) error {

	if req.Path == "hello" {
		return experimental.SendPlainText(sender, "world")
	}

	return fmt.Errorf("unknown resource")
}

// Destroy destroy an instance (if necessary)
func (ds *InfluxDataSource) Destroy() {
	// If necessary, destroy the object (typically not required)
}
