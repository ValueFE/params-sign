const {resolve} = require('path');

const nodeConfig = {
  entry: [
    './index.js'
  ],
  target: 'node',
  output: {
    path: resolve('./dist'),
    filename: 'params-sign.js',
  }
};

const webConfig = {
  entry: [
    './index.js'
  ],
  target: 'web',
  output: {
    path: resolve('./dist'),
    filename: 'params-sign.js',
    library: 'params-sign',
    libraryTarget: 'umd',
  }
};

module.exports = webConfig;// [nodeConfig, webConfig];
