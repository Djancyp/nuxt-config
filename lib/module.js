import path from 'path'
const config = require('config')
export default function nuxtConfig(moduleOptions) {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: config
  })
}
module.exports.meta = require('../package.json')