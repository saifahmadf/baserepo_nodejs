import { errorCodes } from "./errorCodes"
const enumConstants = require('./enumConstants')
const events = require('./events')
const activityConstants = require('./activityConstants')

const environment = {
  DEVELOPMENT: 'development',
  TEST: 'test',
  PRODUCTION: 'production'
}

const roles = {
  ADMIN_ROLE: 'ADMIN',
  CUSTOMER_ROLE: 'CUSTOMER',
  SELLER_ROLE: 'SELLER'
}

const COMMUNICATION_PROVIDER = {
  EMAIL_PROVIDER: {
    SENDGRID: {
      KEY: process.env.SGAPIKEY
    },
    MAILGUN: {
      KEY: process.env.MAILGUN_API_KEY,
      DOMAIN: process.env.MAILGUN_API_DOMAIN
    }
  },
  SMS_PROVIDER: {
    KARIX: {
      KEY: process.env.KARIX_KEY,
      SENDER_ID: process.env.KARIX_SENDER_ID,
      BASE_URL: process.env.KARIX_BASE_URL
    },
    TXTLOCAL: {
      KEY: process.env.TXT_LOCAL_API_KEY
    },
    TWILIO: {
      KEY: process.env.TWILLO_ACC_SID,
      TOKEN: process.env.TWILLO_AUTH_TOKEN
    }
  },
  WHATSAPP_PROVIDER: {
    KARIX: {
      KEY: process.env.KARIX_KEY,
      SENDER_ID: process.env.KARIX_SENDER_ID,
      BASE_URL: process.env.KARIX_BASE_URL
    }
  }
}

module.exports = {
  ...errorCodes,
  ...environment,
  ...roles,
  COMMUNICATION_PROVIDER,
  events: events,
  ENUM: enumConstants,
  ACTIVITY: activityConstants
}