/**
 * Created by lu on 2016/12/5.
 */
var path = require('path');
var fileName = 'versionCompare';

var option = {
  entry: {
    main: './src/index'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: fileName + '.js',
    libraryTarget: 'umd',
    library: fileName,
    umdNamedDefine: true
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  babel: {
    presets: ['es2015']
  },
  plugins: []
};

module.exports = option;
