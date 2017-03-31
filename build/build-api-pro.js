/**
 * Created by lu on 2016/12/5.
 */

var config = require('./build-api');
var webpack = require('webpack');
config.output.filename = 'versionCompare.min.js'
config.plugins = (config.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
]);

module.exports = config;