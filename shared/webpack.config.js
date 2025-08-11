const { output } = require("../mfe-book-genres/webpack.config");
const path = require('path');
const { ModuleFederationPlugin } = require("webpack").container;
const dependencies = require("./package.json").dependencies;
const REMOTE_CONFIG = require('../shared/src/path/remote-config.js');

module.exports = {
  entry: "./src/context/SharedContextProvider.js", // Or a common entry point
  mode: "development",
  devServer: {
    port: 3001, // Port for your shared-context
    hot: true,
    static: path.join(__dirname, '../../dist/shared'),
    liveReload: false,
  },
  output: {
    publicPath: 'https://yadav-angad.github.io/mfe-shell-book-store/shared',
  },
   resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../shared'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "sharedContext",
      filename: "remoteEntry.js",
      exposes: {
        "./SharedContextProvider": "./src/context/SharedContextProvider.js",
        "./useSharedContext": "./src/context/useSharedContext.js",
        "./store": "./src/store/store.js",
        "./RemoteConfig": "./src/path/remote-config.js",
        "./EventBusService": "./src/event-listener/event-bus.js"
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
  ],
};
