const {DataTypes}   = require('sequelize');
const sequelize     = require('../config/database');

const Event = sequelize.define('Event', {
    name            : {type: DataTypes.STRING, allowNull: false },
    totalSeats      : {type: DataTypes.INTEGER, allowNull: false},
    reservedSeats   : {type: DataTypes.INTEGER, defaultValue: 0},
    date            : {type: DataTypes.DATE, allowNull: false},
});

module.exports = Event;