import { define } from '../../../storageHelper'
const HEALTH_CHECK = 'healthCheck'

module.exports = define('healthCheckService', ({ config }) => {
  let serverState = 'ACTIVE'
  
  const getState = async () => {
    return healthCheckService.get('HEALTH_CHECK', () => {
      let currentServerStatus = { serverState: serverState }
      return currentServerStatus.serverState
    })
  }

  return {
    getState
  }

})