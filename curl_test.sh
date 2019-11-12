#url="http://localhost:9999/api/v2/query?org=grafana"
url="http://localhost/api/datasources/proxy/1/flux/api/v2/query?org=grafana"
curl $url -XPOST -sS \
  -H 'X-DS-Authorization: Token IoCSxdC80ORRdWRliRug9nNRhFHkgkzw4WGdTC0_avbLSHREt4_vzkba6o_X5ZS7OzF8gk1bphsK8MLYzBUoRQ==' \
  -H 'Accept: application/csv' \
  -H 'Content-type: application/vnd.flux' \
  -d 'from(bucket:"telegraf")
        |> range(start:-10y)
        |> last()'
