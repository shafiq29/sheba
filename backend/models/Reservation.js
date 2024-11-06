const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Event = require('./Event');

const Reservation = sequelize.define('Reservation', {
  eventId: {
    type: DataTypes.INTEGER,
    references: {
        model: 'Events', // Make sure this matches your actual Event model table name
        key: 'id'
    }
},
  userEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  seats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Define the relationship
Reservation.belongsTo(Event, { foreignKey: 'eventId', as: 'event' });
Event.hasMany(Reservation, { foreignKey: 'eventId' });

module.exports = Reservation;
