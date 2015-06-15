'use strict';

module.exports = {
  entry: {
    app: ['./src/js/app.js']
  },
  output: {
    path: './src',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  }
};