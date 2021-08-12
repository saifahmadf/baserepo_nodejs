const baseProperties = require('./base')

module.exports = {
  ...baseProperties,
  HTTP_PROTOCOL: 'http',
  BASE_URL: 'http://localhost',
  dbConfig: {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "testDB",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}