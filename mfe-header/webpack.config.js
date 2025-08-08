const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const dependencies = require("./package.json").dependencies;
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: "./src/index",
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: true,
    static: path.join(__dirname, "dist"),
    port: 3002,
    liveReload: false,
  },
  output: {
    publicPath: "auto",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
          plugins: [require.resolve("react-refresh/babel")],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "MfeHeader",
      filename: "remoteEntry.js",
      exposes: {
        "./MfeHeaderApp": "./src/App",
      },
      remotes: {
        host: "host@http://localhost:3000/remoteEntry.js",
        MfeCheckout: "MfeHeader@http://localhost:3003/remoteEntry.js",
        MfeBookGenres: "MfeBookGenres@http://localhost:3004/remoteEntry.js",
        MfeBookList: "MfeCheckout@http://localhost:3005/remoteEntry.js",
        MfeUser: "MfeUser@http://localhost:3006/remoteEntry.js",
        sharedContext: "sharedContext@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
        "@mui/material": {
          singleton: true,
          requiredVersion: dependencies["@mui/material"],
        },
        "@mui/icons-material": {
          singleton: true,
          requiredVersion: dependencies["@mui/icons-material"],
        },
        redux: {
          singleton: true,
          requiredVersion: dependencies.redux,
        },
        "react-redux": {
          singleton: true,
          requiredVersion: dependencies["react-redux"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
    }),
    new ReactRefreshWebpackPlugin({
      exclude: ["/node_modules/", "/bootstrap.js$/"],
    }),
  ],
};
