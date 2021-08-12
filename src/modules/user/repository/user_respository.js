import { define } from '../../../storageHelper'

module.exports = define('userRepository', ({ database }) => {
  const userModel = database['user']
  
  const insertUserDetails = () => {
    const query =
      `insert into user values(8,"Sdafdwereuddhanshu","gulmohar@gulmohar.com","*****")`
      return userModel.sequelize.query(query, {
        type: userModel.sequelize.QueryTypes.INSERT
      })
  }

  return {
    insertUserDetails
  }
})
