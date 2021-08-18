const fs = require('fs')

const getConnectionObject = (config, name) => {
  const { host, port, user, password, certificate, database, poolSize, authStrategy, awsAccessKey, awsSecretKey, replicaSet } = config

  if(!host) throw new Error(`Invalid Host name for ${name}`)
  
  if(!database) throw new Error(`Invalid Database name for ${name}`)

  const url = `mongodb://${host}/${database}`

  const result = {
    url: url,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: true,
      autoIndex: false,
      dbName: database,
      // promiseLibrary: bluebird,
      user: user || null,
      pass: password || null,
      poolSize: poolSize,
      validateOptions: true
    }
  }

  if (replicaSet) {
    result.options.replicaSet = replicaSet
  }

  return result
}

module.exports = {
  getConnectionObject
}