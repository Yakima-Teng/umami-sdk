const WebpackBar = require('webpackbar');
const { resolve, PROJECT_PATH, pkg } = require('./constants');

const pkgName = pkg.name;

module.exports = {
  // 定义了入口文件路径
  entry: {
    index: resolve(PROJECT_PATH, './src/index.ts'),
  },
  experiments: {
    outputModule: true,
  },
  // 定义了编译打包之后的文件名以及所在路径。还有打包的模块类型
  output: {
    clean: true,
    // 打包后的产物名
    filename: `${pkgName}.js`,
    library: {
      // 在全局变量中增加一个全局变量用于访问SDK，如 window.TypescriptSdkStarter
      type: 'module',
    },
    // 路径
    path: resolve(PROJECT_PATH, './dist'),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '@docs': resolve(__dirname, '../docs'),
      '@public': resolve(__dirname, '../public'),
      '@test': resolve(__dirname, '../test'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new WebpackBar({
      name: '正在卖力打包中~',
      color: '#fa8c16',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
