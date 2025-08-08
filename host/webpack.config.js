const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const dependencies = require("./package.json").dependencies;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: false,
    static: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  output: {
    publicPath: 'auto',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        sharedContext: 'sharedContext@http://localhost:3001/remoteEntry.js',
        MfeHeader: 'MfeHeader@http://localhost:3002/remoteEntry.js',
        MfeCheckout: 'MfeCheckout@http://localhost:3003/remoteEntry.js',
        MfeBookGenres: 'MfeBookGenres@http://localhost:3004/remoteEntry.js',
        MfeBookList: 'MfeBookList@http://localhost:3005/remoteEntry.js',
        MfeUser: 'host@http://localhost:3006/remoteEntry.js'
      },
      exposes: {},
      shared: {
        "react": {
          singleton: true,
          requiredVersion: dependencies.react
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"]
        },
        "@mui/material": {
          singleton: true,
          requiredVersion: dependencies["@mui/material"]
        },
        "@mui/icons-material": {
          singleton: true,
          requiredVersion: dependencies["@mui/icons-material"]
        },
        "redux": {
          singleton: true,
          requiredVersion: dependencies.redux
        },
        "react-redux": {
          singleton: true,
          requiredVersion: dependencies["react-redux"]
        },
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
