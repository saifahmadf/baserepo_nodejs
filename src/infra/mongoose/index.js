const mongoose = require('mongoose')
const helper = require('./mongodbHelper')

module.exports = ({config, logger}) => {
  try{
    const { logMongoDB } = config
    if(!logMongoDB || !logMongoDB.host){
      throw new Error('Log MongoDB config not found!!!')
    }
    const connObj = helper.getConnectionObject(logMongoDB, 'logMongoDB')
    
    const conn = mongoose.createConnection(connObj.url, connObj.options)
    conn.then(res => {
      logger.info('Connected to Log MongoDB')
    }).catch(ex => {
      logger.error('Exception while connecting to Log MongoDB: ', ex)
      process.exit(0)
    })
    return conn
  } catch(e){
    logger.error('Unable to connect to Log MongoDB: ', e)
    process.exit(0)
  }
}