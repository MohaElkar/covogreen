const Sequelize = require('sequelize');

const sequelize = new Sequelize('covogreen', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = sequelize;