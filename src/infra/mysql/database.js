const Sequelize = require("sequelize")

module.exports = ({ logger, config }) => {
    const dbConfig = {
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
      };

    const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,
      operatorsAliases: false,
    
      pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
    });
    
    const db = {};
    
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    db.user = require("../../modules/health_check/dbmodel/user.js")(sequelize, Sequelize);
    
    return db
}    

