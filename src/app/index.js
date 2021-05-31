/**
 * Entry point of our application inorder to manage
 *  database
 *  servers
 *  cache 
 *  infra
 */

module.exports = ({ server, logger }) => {
  return {
    start: () => {
      let p  = Promise.resolve()
        .then(result => server.start())
      return p
    },
    logger
  }
}  