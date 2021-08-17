const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.js"],
  addons: ["@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css$/,
      include: path.resolve(__dirname, "../"),
      use: [
        {
          loader: require("styled-jsx/webpack").loader,
        },
      ],
    });
    return config;
  },
};
