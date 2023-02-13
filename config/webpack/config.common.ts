import path from 'path';
import { Configuration, RuleSetRule, WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const Dotenv = require('dotenv-webpack');

export const ROOT_DIR = path.resolve(__dirname, '../../');
export const SRC_DIR = `${ROOT_DIR}/src`;
export const ROOT_DIST = `${ROOT_DIR}/dist`;

console.log(ROOT_DIR);

const loadersWebpack: Array<RuleSetRule | '...'> = [
  {
    test: [/\.(j|t)sx?$/, /\.(j|t)s?$/],
    use: 'babel-loader',
    exclude: '/node_modules/',
  },
  {
    test: '/.html$/',
    exclude: '/node_modules/',
    use: 'html-loader',
  },
  {
    test: [/\.css$/, /\.scss$/],
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    exclude: '/node_modules/',
  },
  {
    test: /\.(png|mp3|jpg|svg|jpge|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: 'assets/[name].[ext]',
      },
    ],
  },
];

const pluginsWebpack: Array<WebpackPluginInstance> = [
  new HtmlWebpackPlugin({
    filename: './index.html',
    template: `${ROOT_DIR}/public/index.html`,
    inject: true,
    minify: false,
    title: 'webpack_first',
  }),
  new MiniCssExtractPlugin({
    filename: 'main.css',
  }),
  new Dotenv({
    path: `${ROOT_DIR}/config/env/process.env`,
  }),
];

export const configCommonWebpack = (env: any, arg: any): Configuration => {
  return {
    entry: `${SRC_DIR}/index.tsx`,
    output: {
      path: ROOT_DIST,
      filename: 'index.[contenthash].js',
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.js', '.tsx'],
      alias: {
        '@types-app': `${SRC_DIR}/Types`,
        '@components': `${SRC_DIR}/components`,
      },
    },
    module: {
      rules: loadersWebpack,
    },
    plugins: pluginsWebpack,
  };
};
