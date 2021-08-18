
import { define } from '../../../storageHelper'

const uuid = require('uuid')
// use intl when needed
module.exports = define('userWorksheetRepository', ({ userDocument, logger }) => {
  const UserWorkSheetModel = userDocument.UserWorkSheetModel

  const convertModelToJSON = (result) => {
    if (result) {
      result = result.toJSON()
      result.id = result._id
      delete result._id
      return result
    }
    return result
  }

  const getWorksheetDetailsById = async (worksheetId) => {
    logger.info(`user_worksheet getUserWorksheetDetailsById started`)
    let result = await WorkSheetModel.findById(worksheetId)
    if (!result) {
      return false
    }
    result = convertModelToJSON(result)
    logger.info(`user_worksheet getUserWorksheetDetailsById completed ${JSON.stringify(result)}`)
    return result
  }

  const createWorkSheet = async (worksheet) => {
    worksheet = {
      userId: 'ahmad',
      email: 'testing',
      userTasks: { 
        'python': '3.7',
        'java': '18'
      }
    }
    worksheet._id = uuid.v4()

    logger.info(`user_worksheet create :: createWorkSheet`)
    let createdWorksheet = await UserWorkSheetModel(worksheet).save()
    createdWorksheet = convertModelToJSON(createdWorksheet)
    logger.info(`user_worksheet created worksheets createWorkSheet result ${JSON.stringify(createdWorksheet)}`)
    return createdWorksheet
  }

  const updateWorksheet = async (worksheetId, worksheet) => {
    let dbWorksheet = await UserWorkSheetModel.findOneAndUpdate({ _id: worksheetId }, worksheet, { new: true })
    result = convertModelToJSON(dbWorksheet)
    return result
  }
  const getWorksheetForClass = async (worksheetId) => {
    let results = await UserWorkSheetModel.find({ worksheetId }) || []
    logger.info(`fetched user_worksheet :: ${results}`)
    return results
  }


  return {
    getWorksheetDetailsById,
    createWorkSheet,
    updateWorksheet,
    getWorksheetForClass
  }
})
