package main

import (
	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/grafana-plugin-sdk-go/experimental"
	"github.com/grafana/influxdb-flux-datasource/pkg/datasource"
	"github.com/grafana/influxdb-flux-datasource/pkg/models"
)

// InfluxHost is a singleton host service.
type InfluxHost struct{}

// CheckHostHealth returns a backend.CheckHealthResult.
func (ds *InfluxHost) CheckHostHealth(config backend.PluginContext) *backend.CheckHealthResult {
	return &backend.CheckHealthResult{
		Status:  backend.HealthStatusOk,
		Message: "Plugin is running",
	}
}

// NewDataSourceInstance creates a new datasource instance.
func (ds *InfluxHost) NewDataSourceInstance(ctx backend.PluginContext) (experimental.DataSourceInstance, error) {
	settings, err := models.LoadSettings(*ctx.DataSourceInstanceSettings)
	if err != nil {
		return nil, err
	}

	return datasource.CreateDataSource(settings)
}
