'use strict';

import path from 'path';

import { Configuration } from 'webpack';

const base: Configuration = {
  mode: 'production',
  target: 'web',
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.ts', '.json'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    assetModuleFilename: 'images/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(bmp|ico|gif|jpe?g|png|svg|ttf|eot|woff?2?)$/,
        // ファイルそのまま取り込む
        // type: 'asset/resource',
        // Base64にして取り込む
        type: 'asset/inline',
      },
    ],
  },
};

export default base;
