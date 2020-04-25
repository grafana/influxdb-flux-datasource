package models

import (
	"github.com/grafana/grafana-plugin-sdk-go/backend"
	influxdb2 "github.com/influxdata/influxdb-client-go"
)

// InfluxSettings contains config properties (share with other AWS services?)
type DatasourceSettings struct {
	URL   string
	Token string

	Options *influxdb2.Options
}

// // Whether to use GZip compression in requests. Default false
// useGZip bool
// // TLS configuration for secure connection. Default nil
// tlsConfig *tls.Config
// // HTTP request timeout in sec. Default 20
// httpRequestTimeout uint

func LoadSettings(settings backend.DataSourceInstanceSettings) (*DatasourceSettings, error) {
	model := &DatasourceSettings{}
	model.URL = settings.URL
	model.Token = settings.DecryptedSecureJSONData["token"]

	// TODO... other options
	model.Options = influxdb2.DefaultOptions()

	return model, nil
}
