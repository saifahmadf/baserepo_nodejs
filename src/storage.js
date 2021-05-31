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


