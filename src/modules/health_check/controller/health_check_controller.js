const { Router } = require('express')
const Status = require('http-status')
const container = require('../../../storage')

module.exports = () => {
  const router = Router()
  // const {
  //   response: { 
  //     Success
  //   }
  // } = container.cradle
  const { healthCheckService } = container.cradle

  router.get('/getStatus', async (req, res, next) => {
    try {
      const serverStatus = await healthCheckService.getState()
      if (serverStatus === 'ACTIVE'){
        // res.status(Status.OK).json(await Success(serverStatus))
        res.status(Status.OK).json(serverStatus)
      } else {
        // res.status(Status.BAD_REQUEST).json(await Success(serverStatus))
        res.status(Status.BAD_REQUEST).json(serverStatus)
      }
    } catch(e) {
      next(e)
    }
  })
  
}