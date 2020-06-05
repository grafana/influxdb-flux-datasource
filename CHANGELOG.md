# Change Log


## [7.0.1] - 2020-05-17

- Support results without a measurment name
- use release influxdb client


## [7.0.0] - 2020-05-17

- Migrated to grafana backend plugin
- Signed for grafana 7.x
- Optimized for copy/paste from influxdb 2.0 data explorer.


## [5.4.1] - 2019-10-28

- Query editor bugfixes

## [5.4.0] - 2019-10-09

- Slate fixes for Grafana 6.4.x
- Fix for queries which group by time, and return _start and _stop rather than _time

NOTE: This version is only compatible with Grafana v6.4+

## [5.3.2] - 2019-07-07

- Fix for range error when expanding suggestion [#39](https://github.com/grafana/influxdb-flux-datasource/pull/39)

## [5.3.0] - 2019-06-11

- Update packages
- Add circleci publishing
- Add support for Influx V2.0 Alpha Server
