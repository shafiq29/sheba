const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Event = require('./Event');

const Reservation = sequelize.define('Reservation', {
  userEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  seats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Reservation.belongsTo(Event); // Associate Reservation with Event

module.exports = Reservation;
