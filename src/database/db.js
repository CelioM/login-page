const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);
const createUsers = require('../models/createUsers')

createUsers.init(connection);
module.exports = connection;



