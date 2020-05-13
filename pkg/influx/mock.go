package influx

import (
	"context"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"time"

	influxdb2 "github.com/influxdata/influxdb-client-go"
)

//--------------------------------------------------------------
// TestData -- reads result from saved files
//--------------------------------------------------------------

// MockRunner reads loacal file path
type MockRunner struct {
	testDataPath string
}

func (r *MockRunner) runQuery(ctx context.Context, q string) (*influxdb2.QueryTableResult, error) {
	bytes, err := ioutil.ReadFile("./testdata/" + r.testDataPath)
	if err != nil {
		return nil, err
	}

	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		time.Sleep(100 * time.Millisecond)
		if r.Method == http.MethodPost {
			w.WriteHeader(http.StatusOK)
			_, _ = w.Write(bytes)
		} else {
			w.WriteHeader(http.StatusNotFound)
		}
	}))
	defer server.Close()

	client := influxdb2.NewClient(server.URL, "a")
	return client.QueryApi("x").Query(ctx, q)
}
