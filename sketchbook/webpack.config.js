const path = require("path");

module.exports = {
  output: {
    filename: "config.js",
    path: __dirname,
  },
  entry: path.resolve(__dirname, "config.jsx"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};
