const webpack = require('webpack');
const path = require('path');
const Uglify = require("uglifyjs-webpack-plugin");


module.exports = {
    entry: path.join(__dirname, 'src/', 'app-client.jsx'),
    output: {
        path: path.join(__dirname, 'src/', 'public', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    node: {
      fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: 'babel_cache',
                    presets: ['es2015', 'react']
                }
    },
            {
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"]
            }, // use ! to chain loaders
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            }
    ]
    },
    plugins: [
    new webpack.DefinePlugin({
            'process.env' : {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                'BASE_URI': JSON.stringify(process.env.BASE_URI),
                'MapboxAccessToken': JSON.stringify(process.env.MapboxAccessToken),
            }
        }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    //new webpack.optimize.DedupePlugin(), //dedupe similar code 
    //new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks
    new Uglify()
  ],
    devtool: '#source-map'
};