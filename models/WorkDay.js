const {DataTypes} = require("sequelize");
const db = require("../config/DBConfig")
const {Sequelize} = require("sequelize");

const WorkDay = db.define("WorkDay", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endTime: {
        type: DataTypes.DATE
    },
    note: {
        type: DataTypes.STRING
    }
});

module.exports = WorkDay;