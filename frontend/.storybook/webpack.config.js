const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = async ({ config, mode }) => {
  const tsPaths = new TsconfigPathsPlugin();

  config.resolve.plugins
    ? config.resolve.plugins.push(tsPaths)
    : (config.resolve.plugins = [tsPaths]);

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });

  return config;
};