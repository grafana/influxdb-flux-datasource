package datasource

import (
	"context"
	"fmt"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/grafana-plugin-sdk-go/experimental"
	"github.com/grafana/influxdb-flux-datasource/pkg/models"
	influxdb2 "github.com/influxdata/influxdb-client-go"
)

// This is an interface to help testing
type queryRunner interface {
	runQuery(ctx context.Context, q string) (*influxdb2.QueryTableResult, error)
}

// InfluxDataSource handler for google sheets
type InfluxDataSource struct {
	Runner queryRunner
}

// This is an interface to help testing
type InfluxRunner struct {
	client influxdb2.InfluxDBClient
	org    string
}

func (r *InfluxRunner) runQuery(ctx context.Context, q string) (*influxdb2.QueryTableResult, error) {
	return r.client.QueryApi(r.org).Query(ctx, q)
}

// CreateDataSource create the client...
func CreateDataSource(settings *models.DatasourceSettings) (*InfluxDataSource, error) {
	return &InfluxDataSource{
		Runner: &InfluxRunner{
			client: influxdb2.NewClientWithOptions(settings.URL, settings.Token, settings.Options),
			org:    settings.Organization,
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
			dr = ExecuteQuery(context.Background(), *query, ds.Runner)
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
