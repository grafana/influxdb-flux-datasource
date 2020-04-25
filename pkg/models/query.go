package models

import "github.com/grafana/grafana-plugin-sdk-go/backend"

// QueryModel represents a spreadsheet query.
type QueryModel struct {
	Org      string `json:"org"`
	RawQuery string `json:"rawQuery"`

	// Not from JSON
	TimeRange     backend.TimeRange `json:"-"`
	MaxDataPoints int64             `json:"-"`
}

func GetQueryModel(query backend.DataQuery) (*QueryModel, error) {
	model := &QueryModel{}

	// Copy directly from the well typed query
	model.TimeRange = query.TimeRange
	model.MaxDataPoints = query.MaxDataPoints
	return model, nil
}
