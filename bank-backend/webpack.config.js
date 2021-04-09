const webpack = require("webpack");

module.exports = {
  target: "node",
  mode: "development",
  entry: "./server.js",
  resolve: {
    modules: ["server", "node_modules"],
  },
  plugins: [
    new webpack.IgnorePlugin(/^pg-native$/),
    // Or, for WebPack 4+:
    new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ }),
  ],
};
