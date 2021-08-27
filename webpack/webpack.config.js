const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = () => {
  const evn = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'
  const envConfig = require(`./webpack.${evn}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}
