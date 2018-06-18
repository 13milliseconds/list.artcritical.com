var fs = require('fs')
var path = require('path')

module.exports = {

  entry: path.resolve(__dirname, 'build/' , 'app.js'),

  output: {
      path: path.join(__dirname, 'build/'),
      filename: 'server.bundle.js'
  },
    resolve: {
        extensions: ['.js', '.jsx'],
    },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
        { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, 
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
    devtool: 'source-map'

}