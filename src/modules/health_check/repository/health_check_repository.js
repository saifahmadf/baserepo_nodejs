import { define } from '../../../storageHelper'

module.exports = define('healthCheckRepository', ({ database }) => {
  const userModel = database['user']
  
  const insertUserDetails = (startRange, batchSize) => {
    const query =
      `insert into user values(3,"Farooqui","testing@testing.com","*****")`
      return userModel.sequelize.query(query, {
        type: userModel.sequelize.QueryTypes.INSERT
      })
  }

  return {
    insertUserDetails
  }
})
