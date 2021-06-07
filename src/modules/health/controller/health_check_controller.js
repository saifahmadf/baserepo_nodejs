const { Router } = require('express')
const Status = require('http-status')
const container = require('src/storage')

module.exports = () => {
  const router = Router()
  const {
    response: { 
      Success
    }
  } = container.cradle
  const { healthCheckService } = container.cradle

  router.get('/getStatus', async (req, res, next) => {
    try {
      const serverStatus = await healthCheckService.getState()
      if (serverStatus === 'ACTIVE'){
        res.status(Status.OK).json(await Success(serverStatus))
      } else {
        res.status(Status.BAD_REQUEST).json(await Success(serverStatus))
      }
    } catch(e) {
      next(e)
    }
  })
  
}