const httpContext = require('../../../infra/cls/index')
// const uuidv4 = require('uuid/v4')

// const getClient = (req) => {
//   return (req.headers['referer'] && req.headers['referer'].startsWith(process.env.UI_URL)) ? 'web' : 'web_admin'
// }
module.exports = () => {
  // return the validation middleware
  return (req, res, next) => {
    // register some request-specific data..
    // httpContext.set('currentuser', req.user)
    // req.request_id = uuidv4()
    // httpContext.set('client', getClient(req))
    // httpContext.set('request_id', req.request_id)
    // httpContext.set('apiName', req.path)
    // httpContext.set('trackingCode', req.query.trackingCode)
    // let span = tracer.scope().active()
    // if (span == null) {
    //   span = tracer.startSpan('web.request')
    // }
    // if (span !== null && req.user != null) {
    //   span.setTag('loginuser.id', req.user.id)
    //   span.setTag('loginuser.email', req.user.email)
    //   span.setTag('loginuser.mobile', req.user.mobile)
    // }
    next()
  }
}
