const webpack = require('webpack');
const path = require('path');
const Uglify = require("uglifyjs-webpack-plugin");
const Dotenv = require('dotenv-webpack');


module.exports = {
    entry: path.join(__dirname, 'build/', 'index.js'),
    output: {
        path: path.join(__dirname, 'build/', 'public', 'javascripts'),
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
    new Dotenv({
        systemvars: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    //new webpack.optimize.DedupePlugin(), //dedupe similar code 
    //new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks
    new Uglify()
  ],
    devtool: '#source-map'
};