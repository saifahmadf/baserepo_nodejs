import { resolve } from './src/storage'

let moment = require('moment')
moment.tz.setDefault('UTC')
moment.tz.link('Asia/Calcutta|Asia/Kolkata')

let environment = process.env.NODE_ENV || 'development'

if(environment.indexOf('stage') >=0 || environment.indexOf('production') >=0){
  // need to check here
}

const app = resolve('app')

app.start()
  .catch(err => {
    app.logger.error(err.stack)
    process.exit()
  })
