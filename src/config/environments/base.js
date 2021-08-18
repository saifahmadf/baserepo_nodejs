module.exports = {
  version: 'V1',
  port: process.env.port || 8085,
  timezone: process.env.TIMEZONE,
  logging: {
    maxsize: 100 * 1024, //100mb
    maxFiles: 2,
    colorize: false
  },
  logMongoDB: {
    host: process.env.LOG_MONGO_DB_HOST || '127.0.0.1',
    port: process.env.LOG_MONGO_DB_PORT || 27017,
    user: process.env.LOG_MONGO_DB_USER || null,
    password: process.env.LOG_MONGO_DB_PASSWORD || null,
    certificate: process.env.LOG_MONGO_DB_CERTIFICATE || null,
    database: process.env.LOG_MONGO_DB_DATABASE || 'testDB',
    poolSize: process.env.LOG_MONGO_DB_POOL_SIZE ? parseInt(process.env.LOG_MONGO_DB_POOL_SIZE, 10) : 25,
    authStrategy: process.env.LOG_MONGO_DB_AUTH_STRATEGY || 'LOCAL',
    awsAccessKey: process.env.LOG_MONGO_DB_AWS_ACCESS_KEY || null,
    awsSecretKey: process.env.LOG_MONGO_DB_AWS_SECRET_KEY || null,
    replicaSet: process.env.LOG_MONGO_DB_REPLICA_SET || null
  }
}