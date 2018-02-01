const Sequelize = require('sequelize');
//const Op = Sequelize.Op;

const DB_NAME = 'covogreen';
const USERNAME = 'root';
const PASSWORD = '';
const HOST = 'localhost';
const DIALECT = 'mysql';

const database = new Sequelize(
    DB_NAME,
    USERNAME,
    PASSWORD,
    {
        host: HOST,
        dialect: DIALECT,

        //logging: false,
        //freezeTableName: true,
        operatorsAliases: false
    }
);
module.exports = database;

/*
const Sequelize = require('sequelize');

const sequelize = new Sequelize('covogreen', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = sequelize;
*/