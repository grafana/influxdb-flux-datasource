package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/influx-datasource/pkg/models"
	"github.com/influxdata/influxdb-client-go"
	"github.com/patrickmn/go-cache"
	"github.com/prometheus/client_golang/prometheus"

	"context"
)

const metricNamespace = "influxdb"

// InfluxDataSource handler for google sheets
type InfluxDataSource struct {
	Cache *cache.Cache
}

// NewDataSource creates the google sheets datasource and sets up all the routes
func NewDataSource(mux *http.ServeMux) *InfluxDataSource {
	queriesTotal := prometheus.NewCounterVec(
		prometheus.CounterOpts{
			Name:      "data_query_total",
			Help:      "data query counter",
			Namespace: metricNamespace,
		},
		[]string{"scenario"},
	)
	prometheus.MustRegister(queriesTotal)

	cache := cache.New(300*time.Second, 5*time.Second)
	ds := &InfluxDataSource{
		Cache: cache,
	}

	mux.HandleFunc("/spreadsheets", ds.handleResourceSpreadsheets)
	return ds
}

func readConfig(pluginConfig backend.PluginConfig) (*models.InfluxConfig, error) {
	config := models.InfluxConfig{}
	if err := json.Unmarshal(pluginConfig.DataSourceConfig.JSONData, &config); err != nil {
		return nil, fmt.Errorf("could not unmarshal DataSourceInfo json: %w", err)
	}
	// config.APIKey = pluginConfig.DataSourceConfig.DecryptedSecureJSONData["apiKey"]
	// config.JWT = pluginConfig.DataSourceConfig.DecryptedSecureJSONData["jwt"]
	return &config, nil
}

func readQuery(q backend.DataQuery) (*models.QueryModel, error) {
	queryModel := models.QueryModel{}
	if err := json.Unmarshal(q.JSON, &queryModel); err != nil {
		return nil, fmt.Errorf("failed to unmarshal query: %w", err)
	}
	return &queryModel, nil
}

// GetClient for the current datasource
func (ds *InfluxDataSource) GetClient(pluginConfig *models.InfluxConfig) (*influxdb.Client, error) {

	client, err := influxdb.New("http://127.0.0.1:9999/api/v2",
		"foo",
		influxdb.WithUserAgent("test"),
	)

	return client, err
}

// CheckHealth checks if the plugin is running properly
func (ds *InfluxDataSource) CheckHealth(ctx context.Context, req *backend.CheckHealthRequest) (*backend.CheckHealthResult, error) {
	res := &backend.CheckHealthResult{}

	// Just checking that the plugin exe is alive and running
	if req.PluginConfig.DataSourceConfig == nil {
		res.Status = backend.HealthStatusOk
		res.Message = "Plugin is Running"
		return res, nil
	}

	config, err := readConfig(req.PluginConfig)
	if err != nil {
		res.Status = backend.HealthStatusError
		res.Message = "Invalid config"
		return res, nil
	}
	fmt.Println("CHECK HEALTH: %s", config)

	res.Status = backend.HealthStatusOk
	res.Message = "Success"
	return res, nil
}

// QueryData queries for data.
func (ds *InfluxDataSource) QueryData(ctx context.Context, req *backend.QueryDataRequest) (*backend.QueryDataResponse, error) {
	res := &backend.QueryDataResponse{}
	config, err := readConfig(req.PluginConfig)
	if err != nil {
		return nil, err
	}

	client, err := ds.GetClient(config)
	if err != nil {
		return nil, err
	}
	fmt.Println("QUERY WITH: %s", client)

	for _, q := range req.Queries {
		queryModel, err := readQuery(q)
		if err != nil {
			return nil, fmt.Errorf("failed to read query: %w", err)
		}

		if len(queryModel.RawQuery) < 1 {
			continue // not query really exists
		}

		// TODO... actually query

		// res.Frames = append(res.Frames, []*data.Frame{frame}...)
	}

	return res, nil
}

func writeResult(rw http.ResponseWriter, path string, val interface{}, err error) {
	response := make(map[string]interface{})
	code := http.StatusOK
	if err != nil {
		response["error"] = err.Error()
		code = http.StatusBadRequest
	} else {
		response[path] = val
	}

	body, err := json.Marshal(response)
	if err != nil {
		body = []byte(err.Error())
		code = http.StatusInternalServerError
	}
	_, err = rw.Write(body)
	if err != nil {
		code = http.StatusInternalServerError
	}
	rw.WriteHeader(code)
}

func (ds *InfluxDataSource) handleResourceSpreadsheets(rw http.ResponseWriter, req *http.Request) {
	res := map[string]string{}
	res["hello"] = "world"
	writeResult(rw, "spreadsheets", res, nil)
}
