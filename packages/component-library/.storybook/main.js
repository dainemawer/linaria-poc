/* Required for Linaria */
const LinariaBabelConfig = (config) => {
  config.presets.push(require.resolve('@linaria/babel-preset'));
  return config;
}

/* Required for Linaria */
const LinariaWebPackConfig = async (config) => {
  config.module.rules.push({
    test: /\.(ts|js|tsx|jsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('@linaria/webpack-loader'),
        options: {
          sourceMap: process.env.NODE_ENV !== 'production',
          extension: '.css',
        },
      },
    ],
  });
  return config;
}


module.exports = {
  "stories": [
    "../**/*.stories.mdx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  babel: LinariaBabelConfig,
  webpackFinal: LinariaWebPackConfig,
}