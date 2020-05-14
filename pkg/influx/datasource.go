package influx

import (
	"context"
	"fmt"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/grafana-plugin-sdk-go/backend/datasource"
	"github.com/grafana/grafana-plugin-sdk-go/backend/instancemgmt"
	"github.com/grafana/grafana-plugin-sdk-go/backend/resource"
	"github.com/grafana/influxdb-flux-datasource/pkg/models"
	influxdb2 "github.com/influxdata/influxdb-client-go"
	"github.com/influxdata/influxdb-client-go/domain"
)

// This is an interface to help testing
type queryRunner interface {
	runQuery(ctx context.Context, q string) (*influxdb2.QueryTableResult, error)
	checkHealth(ctx context.Context) (*domain.HealthCheck, error)
}

// This is an interface to help testing
type InfluxRunner struct {
	client influxdb2.Client
	org    string
}

func (r *InfluxRunner) runQuery(ctx context.Context, q string) (*influxdb2.QueryTableResult, error) {
	return r.client.QueryApi(r.org).Query(ctx, q)
}
func (r *InfluxRunner) checkHealth(ctx context.Context) (*domain.HealthCheck, error) {
	return r.client.Health(ctx)
}

type instanceSettings struct {
	maxSeries int
	Runner    queryRunner
}

func newDataSourceInstance(s backend.DataSourceInstanceSettings) (instancemgmt.Instance, error) {
	settings, err := models.LoadSettings(s)
	if err != nil {
		return nil, fmt.Errorf("error reading settings: %s", err.Error())
	}

	return &instanceSettings{
		maxSeries: settings.MaxSeries,
		Runner: &InfluxRunner{
			client: influxdb2.NewClientWithOptions(settings.URL, settings.Token, settings.Options),
			org:    settings.Organization,
		},
	}, nil
}

func (s *instanceSettings) Dispose() {
	// Called before creatinga a new instance to allow plugin authors
	// to cleanup.
}

// NewRelicDS ...
type InfluxDataSource struct {
	im instancemgmt.InstanceManager
}

// NewDatasource creates a new datasource server
func NewDatasource() datasource.ServeOpts {
	im := datasource.NewInstanceManager(newDataSourceInstance)
	ds := &InfluxDataSource{
		im: im,
	}

	return datasource.ServeOpts{
		QueryDataHandler:    ds,
		CheckHealthHandler:  ds,
		CallResourceHandler: ds,
	}
}

func (ds *InfluxDataSource) getInstance(ctx backend.PluginContext) (*instanceSettings, error) {
	s, err := ds.im.Get(ctx)
	if err != nil {
		return nil, err
	}
	return s.(*instanceSettings), nil
}

// CheckHealth will check the currently configured settings
func (ds *InfluxDataSource) CheckHealth(ctx context.Context, req *backend.CheckHealthRequest) (*backend.CheckHealthResult, error) {
	s, err := ds.getInstance(req.PluginContext)
	if err != nil {
		return &backend.CheckHealthResult{
			Status:  backend.HealthStatusError,
			Message: err.Error(),
		}, nil
	}

	_, err = s.Runner.checkHealth(ctx)
	if err != nil {
		return &backend.CheckHealthResult{
			Status:  backend.HealthStatusError,
			Message: err.Error(),
		}, nil
	}

	res, err := s.Runner.runQuery(ctx, "buckets()")
	if err != nil {
		return &backend.CheckHealthResult{
			Status:  backend.HealthStatusError,
			Message: err.Error(),
		}, nil
	}

	dr := readDataFrames(res, 1000, 100)
	if dr.Error != nil {
		return &backend.CheckHealthResult{
			Status:  backend.HealthStatusError,
			Message: dr.Error.Error(),
		}, nil
	}

	rowLen, err := dr.Frames[0].RowLen()
	if err != nil {
		return &backend.CheckHealthResult{
			Status:  backend.HealthStatusError,
			Message: dr.Error.Error(),
		}, nil
	}

	return &backend.CheckHealthResult{
		Status:  backend.HealthStatusOk,
		Message: fmt.Sprintf("%d buckets", rowLen), // TODO!!
	}, nil
}

// QueryData - Primary method called by grafana-server
func (ds *InfluxDataSource) QueryData(ctx context.Context, req *backend.QueryDataRequest) (*backend.QueryDataResponse, error) {
	s, err := ds.getInstance(req.PluginContext)
	if err != nil {
		return nil, err
	}

	res := backend.NewQueryDataResponse()
	for _, q := range req.Queries {
		query, err := models.GetQueryModel(q)
		if err != nil {
			res.Responses[q.RefID] = backend.DataResponse{
				Error: err,
			}
		} else {
			res.Responses[q.RefID] = ExecuteQuery(context.Background(), *query, s.Runner, s.maxSeries)
		}
	}
	return res, nil
}

// CallResource HTTP style resource
func (ds *InfluxDataSource) CallResource(rtx context.Context, req *backend.CallResourceRequest, sender backend.CallResourceResponseSender) error {
	if req.Path == "hello" {
		return resource.SendPlainText(sender, "world")
	}

	return fmt.Errorf("unknown resource")
}
