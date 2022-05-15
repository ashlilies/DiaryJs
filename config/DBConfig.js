const {Sequelize} = require('sequelize');
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        timezone: "+08:00",
        define: {
            freezeTableName: true
        }
    }
);

module.exports = sequelize;