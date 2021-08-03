import { createContainer, asFunction, asValue, Lifetime, InjectionMode } from 'awilix'
import { scopePerRequest } from 'awilix-express'

import app from './app'
import server from './interfaces/http/server'
import router from './interfaces/http/router'
import config from './config'
import constants from './constants'
import RuntimeError from './infra/error/runtime'
import loggerMiddleware from './interfaces/http/middlewares/http_logger'
import errorHandlerMiddleware from './interfaces/http/middlewares/error_handler'
import logger from './infra/logger/index'
import userContextMiddleware from './interfaces/http/middlewares/usercontext_handler'
const databaseConnector = require('./infra/mysql/database')

const container = createContainer({
  injectionMode: InjectionMode.PROXY
})

// Systems
container
  .register({
    app: asFunction(app).singleton(),
    server: asFunction(server).singleton()
    })
  .register({
    router: asFunction(router).singleton(),
    logger: asFunction(logger).singleton()
  })
  .register({
    config: asValue(config),
    constants: asValue(constants)
  })

// Middlewares
container
  .register({
    loggerMiddleware: asFunction(loggerMiddleware).singleton()
  })
  .register({
    containerMiddleware: asValue(scopePerRequest(container)),
    errorHandlerMiddleware: asFunction(errorHandlerMiddleware)
  })
  .register({
    userContextMiddleware: asFunction(userContextMiddleware).singleton()
  })

// infra
container
  .register({
    RuntimeError: asFunction(RuntimeError).singleton()
  })

// Database
container.register({
  databaseConnector: asFunction(databaseConnector).singleton()
})  

container.register({
  database: asValue(container.cradle['databaseConnector'])
})


container.loadModules(['modules/**/repository/*.js'], {
  resolverOptions: {
    register: asFunction,
    lifetime: Lifetime.SINGLETON
  },
  cwd: __dirname
})

container.loadModules(['modules/**/service/*.js'], {
  resolverOptions: {
    register: asFunction,
    lifetime: Lifetime.SINGLETON
  },
  cwd: __dirname
})

module.exports = container