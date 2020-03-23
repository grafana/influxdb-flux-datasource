module.exports.getWebpackConfig = (config, options) => ({
  ...config,
  output: {
    publicPath: '',
  }
});
