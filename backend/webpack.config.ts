import { resolve } from 'path';
import { sync } from 'glob';
import * as Webpack from 'webpack';

const SRC_PATH = resolve(__dirname, './src/handlers/');
const ENTRY_NAME = 'app.ts';
const BUILT_PATH = resolve(__dirname, './dist');
const BUILD_VARIANT = process.env.NODE_ENV;

const resolveEntry = (): Webpack.Entry => {
  const entries: { [key: string]: string } = {};
  const targets: string[] = sync(`${SRC_PATH}/*.ts`);
  const pathRegex = new RegExp(`${SRC_PATH}/(.+).ts`);
  targets.forEach((value: string) => {
    let key: string;
    switch (BUILD_VARIANT) {
      case 'production':
        key = value.replace(pathRegex, '$1');
        break;
      case 'development':
        key = value.replace(pathRegex, '$1');
        break;
    }
    entries[key] = value;
  });

  return entries;
};

const config: Webpack.Configuration = {
  target: 'node',
  mode: BUILD_VARIANT === 'production' ? 'production' : 'development',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  entry: resolveEntry(),
  output: {
    filename: '[name].js',
    path: BUILT_PATH,
    library: '[name]',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
};

export default config;
