const winston = require('winston')
const expressWinston = require(express-winston)

module.exports = ({ logger }) => {
  return expressWinston.logger({
    transports: [ new winston.transports.Console() ],
    format: winston.format.combine(winston.format.json()),
    msg: 'HTTP Requests {{req.method}} {{req.path}}',
    requestWhitelist: ['params', 'method', 'path', 'query', 'body', 'headers.user-agent', 'headers.referer'],
    ignoreRoute: (req, res) => {
      if(req.method === 'OPTIONS' || req.path === '/api/v1/healthCheck/getStatus'){
        return true
      }
      return false
    },
    dynamicMeta: (req, res) => {
      const data = { request_id: req.request_id }
      if(req.user){
        return Object.assign(data, {email: req.user.email, mobile: req.user.mobile})
      } else {
        return data
      }
    }
  })
}