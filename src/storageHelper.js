import { RESOLVER } from 'awilix'

/**
 *  This function can be used to make function compatible with DI awilix
 */
export const define = (name, fn) => {
  fn[RESOLVER] = {
    name
  }
  return fn
}

export const getService = (serviceName) => {
  const container = require('src/storage')
  return container.cradle[serviceName]
}
