#!/bin/bash

make
cid=$(docker ps -aqf "name=grafana-splunk-datasource_grafana_1")
docker exec -u 0 -it $cid bash > pkill -f "/var/lib/grafana/plugins/grafana-splunk-datasource/dist/grafana-splunk-datasource_linux_amd64"

