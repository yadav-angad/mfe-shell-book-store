const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const dependencies = require("./package.json").dependencies;
const { URL_CONFIG } = require('../shared/src/path/remote-config.js');

module.exports = (env, argv) => {
  const isProd = argv?.mode === 'production';
  const remoteUrl = URL_CONFIG(isProd)

  return {
    entry: "./src/index",
    mode: argv?.mode,
    devtool: "source-map",
    optimization: {
      minimize: false,
    },
    devServer: {
      hot: true,
      static: path.join(__dirname, 'dist'),
      port: 3003,
      liveReload: false,
      historyApiFallback: true,
    },
    output: {
      publicPath: isProd ? '/mfe-shell-book-store/mfe-checkout/' : 'auto',
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
        name: "MfeCheckout",
        filename: "remoteEntry.js",
        exposes: {
          "./MfeCheckoutApp": "./src/App",
        },
        remotes: {
          host: `host@${remoteUrl.HOST}`,
          sharedContext: `sharedContext@${remoteUrl.SHARED_CONTEXT}`,
          MfeHeader: `MfeHeader@${remoteUrl.MFE_HEADER}`,
          MfeBookList: `MfeBookList@${remoteUrl.MFE_BOOK_LIST}`,
          MfeBookGenres: `MfeBookGenres@${remoteUrl.MFE_BOOK_GENRES}`,
          MfeUser: `MfeUser@${remoteUrl.MFE_USER}`,
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
    ],
  };
}