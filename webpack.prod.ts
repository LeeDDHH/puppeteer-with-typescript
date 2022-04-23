'use strict';

import path from 'path';
import { Configuration } from 'webpack';
import base from './webpack.common';

const prod: Configuration = {
  ...base,
  entry: {
    prod: './src/index.ts',
  },
  output: {
    ...base.output,
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    puppeteer: 'require("puppeteer")',
    path: 'require("path")',
    fs: 'require("fs")',
  },
};

export default prod;
