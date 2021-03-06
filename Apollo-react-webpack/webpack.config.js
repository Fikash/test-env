const path = require('path');

module.exports = {
  //entry: './client/index.js',
  entry:'./root.index.js',
  //entry:'./ApolloApp.js',
  mode: 'development',
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/api': 'http://localhost:3000',
    },
    historyApiFallback: true,
    // contentBase: './'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    {test: /\.css$/, use: ['style-loader', 'css-loader']},
  ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
};