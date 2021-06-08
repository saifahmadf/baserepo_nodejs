const logger = require('./logger')
const R = require('ramda')
const httpContext = require('../cls')

const mergeUserData = (data) => {
  const user = httpContext.get('currentuser')
  const requestId = httpContext.get('request_id')
  const messageId = httpContext.get('MessageId')
  let meta = {}
  meta = R.mergeAll([meta, { request_id: requestId }])
  if (messageId && data.message) {
    data.message = `${messageId} ${data.message}`
  }
  if (user) {
    meta = R.mergeAll([meta, { email: user.email, user_id: user.id, mobile: user.mobile }])
  }

  return R.mergeAll([data, { meta: meta }])
}
module.exports = ({ config }) => {
  const _logger = logger({ config })
  let flgSilent = false

  return {
    info: (message, error) => {
      if (error && error instanceof Error) {
        error.message = `${message}  ${error.message}`
        !flgSilent && _logger.log(mergeUserData({ level: 'info', message: error }))
      } else {
        !flgSilent && _logger.log(mergeUserData({ level: 'info', message }))
      }
    },
    infoMap: (messageData) => {
      !flgSilent && _logger.log(mergeUserData({ level: 'info', ...messageData }))
    },
    debug: (message) => {
      !flgSilent && _logger.log(mergeUserData({ level: 'debug', message }))
    },
    warn: (message) => {
      !flgSilent && _logger.log(mergeUserData({ level: 'warn', message }))
    },
    error: (message, error) => {
      if (error && error instanceof Error) {
        error.message = `${message}  ${error.message}`
        !flgSilent && _logger.log(mergeUserData({ level: 'error', message: error }))
      } else {
        if (error) {
          message = message + JSON.stringify(error)
        }
        !flgSilent && _logger.log(mergeUserData({ level: 'error', message }))
      }
    },
    silent: (flg) => {
      flgSilent = flg
    }
  }
}
