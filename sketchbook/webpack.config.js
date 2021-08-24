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
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "../"),
        use: [
          {
            loader: require("styled-jsx/webpack").loader,
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
