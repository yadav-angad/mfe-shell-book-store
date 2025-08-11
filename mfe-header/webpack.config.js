const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const dependencies = require("./package.json").dependencies;
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const REMOTE_CONFIG = require('../shared/src/path/remote-config.js');

const isLocalhost = false;

const URL_CONFIG = {
  SHARED_CONTEXT: isLocalhost
    ? "http://localhost:3001/remoteEntry.js"
    : "https://yadav-angad.github.io/mfe-shell-book-store/shared/remoteEntry.js",
  MFE_HEADER: isLocalhost
    ? "http://localhost:3002/remoteEntry.js"
    : "https://yadav-angad.github.io/mfe-shell-book-store/mfe-header/remoteEntry.js",
  MFE_CHECKOUT: isLocalhost
    ? "http://localhost:3003/remoteEntry.js"
    : "https://yadav-angad.github.io/mfe-shell-book-store/mfe-checkout/remoteEntry.js",
  MFE_BOOK_GENRES: isLocalhost
    ? "http://localhost:3004/remoteEntry.js"
    : "https://yadav-angad.github.io/mfe-shell-book-store/mfe-book-genres/remoteEntry.js",
  MFE_BOOK_LIST: isLocalhost
    ? "http://localhost:3005/remoteEntry.js"
    : "https://yadav-angad.github.io/mfe-shell-book-store/mfe-book-list/remoteEntry.js",
  MFE_USER: isLocalhost
    ? "http://localhost:3006/remoteEntry.js"
    : "https://yadav-angad.github.io/mfe-shell-book-store/mfe-user/remoteEntry.js",
  HOST: isLocalhost
    ? "http://localhost:3000/remoteEntry.js"
    : "https://yadav-angad.github.io/mfe-shell-book-store/host/remoteEntry.js",
};

module.exports = {
  entry: "./src/index",
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: true,
    static: path.join(__dirname, "build"),
    port: 3002,
    liveReload: false,
  },
  output: {
    publicPath: 'https://yadav-angad.github.io/mfe-shell-book-store/mfe-header',
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
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
        host: `host@${URL_CONFIG.HOST}`,
        sharedContext: `sharedContext@${URL_CONFIG.SHARED_CONTEXT}`,
        MfeCheckout: `MfeHeader@${URL_CONFIG.MFE_CHECKOUT}`,
        MfeBookList: `MfeBookList@${URL_CONFIG.MFE_BOOK_LIST}`,
        MfeBookGenres: `MfeBookGenres@${URL_CONFIG.MFE_BOOK_GENRES}`,
        MfeUser: `MfeUser@${URL_CONFIG.MFE_USER}`,
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
