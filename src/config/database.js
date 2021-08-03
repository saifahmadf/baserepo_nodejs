import { resolve } from 'path'
const dotEnvPath = resolve('.env')
const path = require('path')
const join = path.join
require('dotenv').config({ path: dotEnvPath })

const baseProperties = {
  username: process.env.CORE_SLAVE_DATABASE_USERNAME,
  password: process.env.CORE_SLAVE_DATABASE_PASSWORD,
  database: process.env.CORE_SLAVE_DATABASE_NAME,
  host: process.env.CORE_SLAVE_DATABASE_HOST,
  port: process.env.CORE_SLAVE_DATABASE_PORT,
  basePath: __dirname,
  modulesPath: join(__dirname, '/../modules/'),
  dbModelPath: join(__dirname, '/../infra/sequelize/db_exposed_models'),
  dialect: 'mysql',
  define: {
    freezeTableName: true,
    underscored: true
  },
  dialectOptions: {
    useUTC: true // -->Add this line. for reading from database
  },
  logging: false,
  benchmark: true
}

module.exports = {
  development: {
    ...baseProperties,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    sync: true
  }
}
