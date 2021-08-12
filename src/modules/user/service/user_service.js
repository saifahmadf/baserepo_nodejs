import { define } from '../../../storageHelper'

module.exports = define('userService', ({ userRepository }) => {
  
  const insertNewUser = async () => {
    await userRepository.insertUserDetails()
  }

  return {
    insertNewUser
  }

})