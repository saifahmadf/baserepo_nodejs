import { define } from '../../../storageHelper'
const HEALTH_CHECK = 'healthCheck'

const pkg = require('../../../../package.json')

module.exports = define('healthCheckService', ({ config }) => {
  let serverState = 'ACTIVE'
  
  const getState = async () => {
    let currentServerStatus = { serverState: serverState }
    let healthCheckResponse = {
      status: currentServerStatus.serverState,
      version: pkg.version
    }
    return healthCheckResponse
  }

  return {
    getState
  }

})