const Sequelize = require("sequelize")

module.exports = ({ logger, config }) => {
    const sequelize = new Sequelize(config.dbConfig.DB, config.dbConfig.USER, config.dbConfig.PASSWORD, {
      host: config.dbConfig.HOST,
      dialect: config.dbConfig.dialect,
      operatorsAliases: false,
      pool: {
        max: config.dbConfig.pool.max,
        min: config.dbConfig.pool.min,
        acquire: config.dbConfig.pool.acquire,
        idle: config.dbConfig.pool.idle
      },
      define: {
        timestamps: false
      }
    });
    
    sequelize.sync();
    const db = {};
    
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    let tableColln = require("../sequelize/db_exposed_models")
    Object.keys(tableColln).forEach(module => {
      tableColln[module].forEach(table => {
        db[table] = require(`../../modules/${module}/dbmodel/${table}`)(sequelize, Sequelize)
      })  
    })
    
    return db
}    

