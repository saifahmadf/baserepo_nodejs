import { createContainer, asFunction, asValue, Lifetime, InjectionMode } from 'awilix'
import { scopePerRequest } from 'awilix-express'

import app from '.app'
import server from './interfaces/http/server'
import router from './interfaces/http/router'
import config from '../config'
