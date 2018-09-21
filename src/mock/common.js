const Mock = require('mockjs')
const config = require('../utils/config')

const NOTFOUND = {
  message: 'Not Found',
  documentation_url: 'http://localhost:8000/request',
}

module.exports = {
  NOTFOUND,
  Mock,
  config,
}
