const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: path.join(__dirname, 'src/', 'app-client.js'),
  output: {
    path: path.join(__dirname, 'src/', 'public', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015']
      }
    },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: true,
      beautify: false,
      dead_code: true
    })
  ],
    devtool: '#source-map'
};