const dotenv = require('dotenv')
dotenv.config()

const fs = require('fs')
const path =require('path')
const _ = require('underscore')

const validateEnvFile = () => {
  try {
    const expectedKeys = Object.keys(dotenv.parse(fs.readFileSync('.env-sample'))).sort()
    const actualKeys = Object.keys(dotenv.parse(fs.readFileSync('.env'))).sort()

    for(let i=0; i<expectedKeys.length; i++) {
      if(_.indexOf(actualKeys, expectedKeys[i], true) === -1){
        throw new Error(`Missing Key: ${expectedKeys[i]} in .env`)
      }
    }

    for(let i=0; i<expectedKeys.length; i++) {
      if(_.indexOf(expectedKeys, actualKeys[i], true) === -1){
        throw new Error(`Extra Key: ${actualKeys[i]} in .env`)
      }
    }

  } catch(err) {
    throw err
  }
}

const ENV = process.env.NODE_ENV || 'development'

if(ENV !== 'production'){
  validateEnvFile()
}

const envConfig = require(path.join(__dirname, 'environments', ENV))

const config = Object.assign({
  env: ENV
}, envConfig)

module.exports = config

