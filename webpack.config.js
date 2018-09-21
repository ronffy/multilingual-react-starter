const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const getTitle = () => {
  const LOCALE_CODE = process.env.LOCALE_CODE;
  switch (LOCALE_CODE) {
    case 'en':
      return 'I am a HSK website';
    case 'th':
      return 'ผมเป็นหนึ่งในเว็บไซต์ที่ออกแบบมาสำหรับผู้เรียน';
    case 'cn':
      return '我是一个HSK网站';
  
    default:
      return 'I am a HSK website';
  }
}

module.exports = (webpackConfig, env) => {
  const production = env === 'production'
  const LOCALE_CODE = process.env.LOCALE_CODE;
  // FilenameHash
  webpackConfig.output.filename = '[name].js';
  webpackConfig.output.chunkFilename = '[name].[chunkhash:8].js';

  webpackConfig.plugins.push(
    new CommonsChunkPlugin({
      name: 'common'
    })
  )

  if (production) {
    webpackConfig.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      })
    )
  }

  webpackConfig.plugins = webpackConfig.plugins.concat([
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/entry.ejs`,
      title: getTitle(),
      lang: LOCALE_CODE,
      filename: production ? '../index.html' : 'index.html',
      minify: production ? {
        collapseWhitespace: true,
      } : null,
      hash: true,
    }),
  ])

  // Alias
  webpackConfig.resolve.alias = {
    components: `${__dirname}/src/components`,
    utils: `${__dirname}/src/utils`,
    config: `${__dirname}/src/utils/config`,
    services: `${__dirname}/src/services`,
    models: `${__dirname}/src/models`,
    routes: `${__dirname}/src/routes`,
  }
  return webpackConfig
}
