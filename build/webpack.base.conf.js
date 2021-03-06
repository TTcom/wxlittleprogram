const path = require('path')
const webpack = require('webpack')
const MpvuePlugin = require('webpack-mpvue-asset-plugin')
const MpvueEntry = require('mpvue-entry')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

const Px2rpx = require('px2rpx'); 
const px2rpxIns = new Px2rpx({ rpxUnit: 0.5 });  //根据微信官方文档在iphone6下1rpx=0.5px;vant的样式是在iphoe6的宽度下计算的，所以这里的转换单位值为0.5，也就是在iphone6下rpx是px的两倍

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const entry = MpvueEntry.getEntry('./src/app.js')

module.exports = {
  entry,
  target: require('mpvue-webpack-target'),
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      vue: 'mpvue'
    },
    symlinks: false,
    aliasFields: ['mpvue', 'weapp', 'browser'],
    mainFields: ['browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'mpvue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        include: resolve('src'),
        use: [
          'babel-loader',
          {
            loader: 'mpvue-loader',
            options: Object.assign({ checkMPEntry: true }, vueLoaderConfig)
          },
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      }
    ]
  },
  plugins: [
    new MpvuePlugin(),
    new MpvueEntry(),
    new webpack.DefinePlugin({
      'mpvue': 'wx',
      'mpvuePlatform': 'wx'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(__dirname, '../dist/static'),
        transform(content, path) {
          if (path.endsWith('.wxss')) {
            return px2rpxIns.generaterpx(content.toString(), 1)
          } else {
            return content
          }
        },
        ignore: ['.*']
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: resolve('node_modules/vant-weapp/dist'),
        to: resolve('dist/vant-weapp/dist'),
        ignore: ['.*']
      }
    ])
  ]
}
