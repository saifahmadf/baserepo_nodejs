import { define } from '../../../storageHelper'

module.exports = define('userDocument', ({ logDBConnection }) => {
  const Schema = logDBConnection.base.Schema
  const workScheetSchema = Schema({
    _id: { type: String },
    userId: { type: String, required: true },
    email: { type: String, required: true },
    userTasks: { type: Object, default: false }
  }, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    toJSON: { virtuals: true },
    versionKey: false
  })

  const UserWorkSheetModel = logDBConnection.model('user_worksheet', workScheetSchema)

  return {
    UserWorkSheetModel
  }
})
