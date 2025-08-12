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
      port: 3005,
      liveReload: false,
    },
    output: {
      publicPath: isProd ? '/mfe-shell-book-store/mfe-book-list/' : 'auto',
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
        name: "MfeBookList",
        filename: "remoteEntry.js",
        exposes: {
          "./MfeBookListApp": "./src/App",
        },
        remotes: {
          host: remoteUrl.HOST,
          sharedContext: remoteUrl.SHARED_CONTEXT,
          MfeHeader: remoteUrl.MFE_HEADER,
          MfeCheckout: remoteUrl.MFE_CHECKOUT,
          MfeBookGenres: remoteUrl.MFE_BOOK_GENRES,
          MfeUser: remoteUrl.MFE_USER,
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
