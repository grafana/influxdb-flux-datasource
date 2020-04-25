package datasource

// func TestQueryMultipleYields(t *testing.T) {
// 	buf := bytes.NewBufferString(`
// #group,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,TRUE,TRUE,FALSE,FALSE
// #datatype,string,long,string,string,dateTime:RFC3339,dateTime:RFC3339,dateTime:RFC3339,double,string,string,double,double
// #default,mean,,,,,,,,,,,
// ,result,table,_field,_measurement,_start,_stop,_time,_value,cpu,host,other,otherother
// ,,0,usage_guest,cpu,2019-12-03T18:19:43.873403959Z,2019-12-03T19:19:43.873403959Z,2019-12-03T18:47:15Z,0,cpu-total,ip-192-168-1-101.ec2.internal,10.2,0
// ,,0,usage_guest,cpu,2019-12-03T18:19:43.873403959Z,2019-12-03T19:19:43.873403959Z,2019-12-03T18:47:30Z,0,cpu-total,ip-192-168-1-101.ec2.internal,0,20.5
// ,,0,usage_guest,cpu,2019-12-03T18:19:43.873403959Z,2019-12-03T19:19:43.873403959Z,2019-12-03T18:47:45Z,0,cpu-total,ip-192-168-1-101.ec2.internal,,0
// #group,FALSE,FALSE,TRUE,TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE
// #datatype,string,long,dateTime:RFC3339,dateTime:RFC3339,string,string,string,string,double,dateTime:RFC3339
// #default,median,,,,,,,,,
// ,result,table,_start,_stop,_field,_measurement,cpu,host,_value,_time
// ,,0,2019-12-03T18:19:43.873403959Z,2019-12-03T19:19:43.873403959Z,usage_guest,cpu,cpu-total,ip-192-168-1-101.ec2.internal,,2019-12-03T18:19:45Z
// ,,0,2019-12-03T18:19:43.873403959Z,2019-12-03T19:19:43.873403959Z,usage_guest,cpu,cpu-total,ip-192-168-1-101.ec2.internal,,2019-12-03T18:20:00Z
// ,,0,2019-12-03T18:19:43.873403959Z,2019-12-03T19:19:43.873403959Z,usage_guest,cpu,cpu-total,ip-192-168-1-101.ec2.internal,,2019-12-03T18:20:15Z
// `)

// 	q := &influxdb.QueryCSVResult{
// 		ReadCloser: ioutil.NopCloser(buf),
// 	}
// 	// q.csvReader = csv.NewReader(q.ReadCloser)
// 	// q.csvReader.FieldsPerRecord = -1
// 	line := 0
// 	for q.Next() {
// 		m := make(map[string]interface{})
// 		err := q.Unmarshal(m)
// 		if err != nil {
// 			t.Fatal(err)
// 		}

// 		fmt.Printf("LINE: %+v\n", m)

// 		line++
// 	}
// 	if line != 6 {
// 		t.Fatalf("expected 6 results but only got %d\n", line)
// 	}
// 	if q.Err != nil {
// 		t.Fatal(q.Err)
// 	}

// }
