const {DataTypes}   = require('sequelize');
const sequelize     = require('../config/database');
const Event         = require('../models/Event');

const Reservation = sequelize.define('Reservation',{
    eventId     : {type: DataTypes.INTEGER, references: {model: Event, key: 'id'}},
    userEmail   : {type: DataTypes.STRING, allowNull: false},
    seats       : {type: DataTypes.INTEGER, allowNull: false}
});

module.exports = Reservation;