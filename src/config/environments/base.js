module.exports = {
  version: 'V1',
  port: process.env.port || 8085,
  timezone: process.env.TIMEZONE,
  logging: {
    maxsize: 100 * 1024, //100mb
    maxFiles: 2,
    colorize: false
  }
}