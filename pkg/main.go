package main

import (
	"os"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
	ds "github.com/grafana/grafana-plugin-sdk-go/backend/datasource" // datassource name conflict (will fix later...)
	"github.com/grafana/grafana-plugin-sdk-go/backend/log"
	"github.com/grafana/influxdb-flux-datasource/pkg/datasource"
)

func main() {
	// Setup the plugin environment
	backend.SetupPluginEnvironment("influx-datasource")

	err := ds.Serve(datasource.NewDatasource())

	// Log any error if we could start the plugin.
	if err != nil {
		log.DefaultLogger.Error(err.Error())
		os.Exit(1)
	}
}
