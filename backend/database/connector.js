const config = require('../config/config')
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:', {
    host: config.db.host,
    port: config.db.port,

    dialect: 'sqlite',
    storage: './database/smart-house.sqlite3',
});

module.exports.sequelize = sequelize;