import { define } from '../../../storageHelper'

module.exports = define('userService', ({ userRepository }) => {
  
  const findUserById = async (userId) => {
    let result = await userRepository.findUserById(userId)
    return result
  }

  const insertUserDetails = async (usrId) => {
    let result = await userRepository.insertUserDetails()
    return result
  }
  return {
    findUserById,
    insertUserDetails
  }

})