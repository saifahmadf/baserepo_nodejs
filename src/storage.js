import { createContainer, asFunction, asValue, Lifetime, InjectionMode } from 'awilix'
import { scopePerRequest } from 'awilix-express'

import app from './app'
import server from './interfaces/http/server'
import router from './interfaces/http/router'
import config from '../config'
import constants from './constants'
import RuntimeError from './infra/error/runtime'
import loggerMiddleware from './interfaces/http/middlewares/http_logger'
import errorHandlerMiddleware from './interfaces/http/middlewares/error_handler'

const container = createContainer({
  injectionMode: InjectionMode.PROXY
})

// Systems
container
  .register({
    app: asFunction(app).singleton(),
    server: asFunction(server).singleton
    })
  .register({
    router: asFunction(router).singleton,
  })
  .router({
    config: asValue(config).singleton,
    constants: asValue(constants).singleton
  })

// Middlewares
container
  .register({
    loggerMiddleware: asFunction(loggerMiddleware).singleton
  })
  .register({
    containerMiddleware: asValue(scopePerRequest(container)),
    errorHandlerMiddleware: asFunction(errorHandlerMiddleware)
  })

// infra
container
  .register({
    RuntimeError: asFunction(RuntimeError).singleton
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