# InfluxDB (Flux) Datasource [BETA]

[![CircleCI](https://circleci.com/gh/grafana/influxdb-flux-datasource/tree/master.svg?style=svg)](https://circleci.com/gh/grafana/influxdb-flux-datasource/tree/master)
[![dependencies Status](https://david-dm.org/grafana/influxdb-flux-datasource/status.svg)](https://david-dm.org/grafana/influxdb-flux-datasource)
[![devDependencies Status](https://david-dm.org/grafana/influxdb-flux-datasource/dev-status.svg)](https://david-dm.org/grafana/influxdb-flux-datasource?type=dev)

Grafana ships with **built in** support for InfluxDB (>= 1.4.1).

Use this datasource if you want to use Flux to query your InfluxDB.
Feel free to run this datasource side-by-side with the non-Flux datasource.
If you point both datasources to the same InfluxDB instance, you can switch query mode by switching the datasources.

Read more about Flux here:

[https://github.com/influxdata/platform/tree/master/query](https://github.com/influxdata/platform/tree/master/query)

Read more about InfluxDB here:

[http://docs.grafana.org/datasources/influxdb/](http://docs.grafana.org/datasources/influxdb/)

## Supported Template Variable Macros:

* List all measurements for a given database: `measurements(database)`
* List all tags for a given database and measurement: `tags(database, measurement)`
* List all tag values for a given database, measurement, and tag: `tag_valuess(database, measurement, tag)`
* List all field keys for a given database and measurement: `field_keys(database, measurement)`

## Contributing

Getting started:

1. Install [InfluxDB 1.7+](https://portal.influxdata.com/downloads), then edit `influxdb.conf` setting [`[http] flux-enabled = true`](https://docs.influxdata.com/influxdb/v1.7/administration/config#flux-enabled-false) See also: [https://docs.influxdata.com/flux/v0.7/introduction/installation/](https://docs.influxdata.com/flux/v0.7/introduction/installation/)

2. Install telegraph to get some data: brew install telegraf. Then run telegraf.

3. Clone this plugin into Grafana's `data/plugins` directory. Install the deps: `yarn install`, build the JS bundle `yarn dev`. Then load Grafana in your browser and add Flux as a new datasource with the URL `http://localhost:8086`.

## Releasing

This plugin uses [release-it](https://github.com/webpro/release-it) to release to GitHub.

```
env GITHUB_TOKEN=your_token yarn release-it patch
```

## Roadmap

* Alerting integration
* Explore UI integration
