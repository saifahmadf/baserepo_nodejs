import { resolve } from './src/storage'

let moment = require('moment')
const cluster = require('cluster')
const os = require('os')

let environment = process.env.NODE_ENV || 'development'

const numCPU = os.cpus().length

// if(environment.indexOf('stage') >=0 || environment.indexOf('production') >=0){
//   // need to check here
// }

const app = resolve('app')

// if(cluster.isMaster){
//   for(let i=0; i<numCPU; i++){
//     cluster.fork()
//   }
//   cluster.on('exit', (worker, code, signal) => {
//     logger.info(`worker ${worker.process.id} died`)
//     cluster.fork()
//   })
// } else {
  app.start()
  .catch(err => {
    app.logger.error(err.stack)
    process.exit()
  })
// }
