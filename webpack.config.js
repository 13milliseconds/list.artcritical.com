const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: path.join(__dirname, 'src/', 'app-client.jsx'),
    output: {
        path: path.join(__dirname, 'src/', 'public', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: 'babel_cache',
                    presets: ['react', 'es2015']
                }
    },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }, // use ! to chain loaders
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
    ]
    },
    plugins: [
    new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
    devtool: '#source-map'
};