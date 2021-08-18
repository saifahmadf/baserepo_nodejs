
import { define } from '../../../storageHelper'

const uuid = require('uuid')
// use intl when needed
module.exports = define('userWorksheetRepository', ({ userDocument, logger }) => {
  const UserWorkSheetModel = userDocument.UserWorkSheetModel

  const getWorksheetDetailsById = async (worksheetId) => {
    logger.info(`user_worksheet getUserWorksheetDetailsById started`)
    let result = await WorkSheetModel.findById(worksheetId)
    if (!result) {
      return false
    }
    result = result.toJSON()
    logger.info(`user_worksheet getUserWorksheetDetailsById completed ${result}`)
    return result
  }

  const createWorkSheet = async (worksheet) => {
    worksheet._id = uuid.v4()
    worksheet = {
      userId: 'sadfruewpoqiru',
      email: 'testing',
      userTasks: { 
        'python': '3.7',
        'java': '18'
      }
    }
    logger.info(`user_worksheet create :: createWorkSheet`)
    let createdWorksheet = await UserWorkSheetModel(worksheet).save()
    createdWorksheet = createdWorksheet.toJSON()
    logger.info(`user_worksheet created worksheets createWorkSheet result ${createdWorksheet}`)
    return createdWorksheet
  }

  const updateWorksheet = async (worksheetId, worksheet) => {
    let dbWorksheet = await UserWorkSheetModel.findOneAndUpdate({ _id: worksheetId }, worksheet, { new: true })
    const result = dbWorksheet.toJSON()
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
