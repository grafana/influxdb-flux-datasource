// Specify separate paths
const path = require('path');
const APP_DIR = path.resolve(__dirname, './src');
const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');

module.exports.getWebpackConfig = (config, options) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /flux_parser_bg.wasm$/,
        loaders: ['base64-loader'],
        type: 'webassembly/experimental',
      },
      {
        test: /flux-lsp-browser_bg.wasm$/,
        loaders: ['base64-loader'],
        type: 'webassembly/experimental',
      },
      {
        test: /^((?!flux_parser_bg|flux-lsp-browser_bg).)*.wasm$/,
        loader: 'file-loader',
        type: 'javascript/auto',
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            namedExport: true,
          },
        }],
      }, {
        test: /\.css$/,
        include: MONACO_DIR,
        use: ['style-loader', 'css-loader'],
      }
    ], 
  },
  plugins: [
    ...config.plugins,
  ]
});
