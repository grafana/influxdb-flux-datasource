package models

import "github.com/grafana/grafana-plugin-sdk-go/backend"

// InfluxSettings contains config properties (share with other AWS services?)
type DatasourceSettings struct {
	URL   string
	Token string
}

func GetSettings(settings backend.DataSourceInstanceSettings) (*DatasourceSettings, error) {
	model := &DatasourceSettings{}
	model.URL = settings.URL
	model.Token = settings.DecryptedSecureJSONData["token"]
	return model, nil
}
