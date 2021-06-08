import statusMonitor from 'express-status-monitor'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import compression from 'compression'
import { Router } from 'express'
import controller from './utils/create_controller'

module.exports = ({
  config,
  containerMiddleware,
  loggerMiddleware
}) => {
  console.log("********** Setting up routes **********")
  const router = Router()

  if(config.env === 'development'){
    router.use(statusMonitor())
  }

  // router.use(loggerMiddleware())
  const apiRouter = Router()

  apiRouter
    .use(
      cors({
        origin: [config.clientEndPoint],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
      })
    )
    .use(
      urlencoded({
        limit: '2mb', extended: true, parameterLimit: 2000
      })
    )
    .use(json({ limit: '10mb' }))
    .use(compression())
    .use(containerMiddleware)

  apiRouter.use('/healthCheck', controller('health_check','health_check_controller'))
  router.use(`/api/${config.version}`, apiRouter)
  return router
}
