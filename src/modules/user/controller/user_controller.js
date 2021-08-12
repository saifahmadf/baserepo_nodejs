const { Router } = require('express')
const Status = require('http-status')
const container = require('../../../storage')

module.exports = () => {
  const router = Router()
  const { userService } = container.cradle

  router.get('/insertUser' , async (req, res, next) => {
    try {      
      await userService.insertNewUser(req) 
      res.status(Status.OK).json({})
    } catch(e) {
      next(e)
    }
  })

  return router
}