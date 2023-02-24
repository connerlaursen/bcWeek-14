const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  "dish_db",
  "root",
  "uwbootcamp1",
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;
