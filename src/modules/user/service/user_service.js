import { define } from '../../../storageHelper'

module.exports = define('userService', ({ userRepository, userWorksheetRepository }) => {
  
  const findUserById = async (userId) => {
    let result = await userRepository.findUserById(userId)
    return result
  }

  const insertUserDetails = async (usrId) => {
    let result = await userRepository.insertUserDetails()
    return result
  }

  const insertUserWorksheet = async (userWorksheetDoc) => {
    let result = await userWorksheetRepository.createWorkSheet(userWorksheetDoc)

  }
  return {
    findUserById,
    insertUserDetails,
    insertUserWorksheet
  }

})