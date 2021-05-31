const activityRelation = {
  SELLER_TO_BUYER: 'SELLER_TO_BUYER',
  ADMIN_TO_SELLER: 'ADMIN_TO_SELLER'
}
const activityFrequencyType = {
  CYCLIC: 'JOIN_DATE_CYCLIC',
  SPECIFIC_DATE: 'SPECIFIC_DATE_CYCLIC',
  ONE_TIME: 'ONE_TIME'
}
const activityCommsType = {
  GROUP: 'GROUP',
  SELF: 'SELF',
  INDIVIDUAL: 'INDIVIDUAL'
}
const activityTrackerState = {
  COMPLETED: 'COMPLETED',
  SUBMITTED: 'SUBMITTED'
}


module.exports = {
  activityRelation,
  activityFrequencyType,
  activityCommsType,
  activityTrackerState
}