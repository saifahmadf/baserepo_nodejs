const { Router } = require('express')
const Status = require('http-status')
const container = require('../../../storage')

module.exports = () => {
  const router = Router()
  const { userService } = container.cradle

  router.get('/insertUser' , async (req, res, next) => {
    try {      
      // let result = await userService.findUserById(4)  //testing 
      let result = await userService.insertUserDetails()
      console.log("result::: ", result)
      res.status(Status.OK).json(result)
    } catch(e) {
      next(e)
    }
  })

  return router
}