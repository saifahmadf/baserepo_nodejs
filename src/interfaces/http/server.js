const express = require('express')
const process = require('process')
// for referral purpose, could be used other npm module like multer
const fileUpload = require('express-fileupload')

module.exports = ({ config, router, logger }) => {
  const app = express()

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, browsertimezone')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
  })
  app.disable('x-powered-by')
  app.use(fileUpload())
  app.use(router)
  app.use(express.static('public'))

  return {
    app,
    start: () => {
      new Promise(resolve => {
        const http = app.listen(config.port, () => {
          const { port } = http.address()
          logger.info(`Server is running on PORT ${port} with process id as ${process.pid}`)
        })
        return resolve(http)
      })
    }
  }
}