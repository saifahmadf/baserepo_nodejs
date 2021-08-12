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

  const createUser = userDetails =>
    userModel.sequelize.create(userDetails)

  const updateUserById = (id, userDetails) =>
    userModel.update(userDetails, { where: { id: id } })

  const findUserById = (userId) => {
    return userModel.findOne({
      where: {
        id: userId
      }
    })
  }

  const findAllUserDetails = (params) => {
    return userModel.findAll({
      where: params
    })
  }

  return {
    insertUserDetails,
    createUser,
    updateUserById,
    findUserById,
    findAllUserDetails
  }

})
