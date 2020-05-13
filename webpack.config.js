module.exports.getWebpackConfig = (config, options) => {
  let newConf = {
    ...config,
    output: {
      ...config.output,
      publicPath: '/public/plugins/grafana-influxdb-flux-datasource/'
    }
  };
  // console.log("config", newConf)
  return newConf;
};