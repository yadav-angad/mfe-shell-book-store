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
      port: 3006,
      liveReload: false,
    },
    output: {
      publicPath: isProd ? '/mfe-shell-book-store/mfe-user/' : 'auto',
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
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource', // emits file and returns URL
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "MfeUser",
        filename: "remoteEntry.js",
        exposes: {
          "./MfeUserApp": "./src/App",
        },
        remotes: {
          host: remoteUrl.HOST,
          sharedContext: remoteUrl.SHARED_CONTEXT,
          MfeCheckout: remoteUrl.MFE_CHECKOUT,
          MfeBookList: remoteUrl.MFE_BOOK_LIST,
          MfeBookGenres: remoteUrl.MFE_BOOK_GENRES,
          MfeHeader: remoteUrl.MFE_HEADER,
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
