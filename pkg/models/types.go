package models

// QueryModel represents a spreadsheet query.
type QueryModel struct {
	RawQuery string `json:"rawQuery"`
}

// InfluxConfig contains config properties (share with other AWS services?)
type InfluxConfig struct {
	// Nothing for now...
}
