const sequelize     = require('../config/database');
const Event         = require('../models/Event');
const Reservation   = require('../models/Reservation');
// const nodemailer    = require('nodemailer');

// const transporter   = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@gmail.com',
//     pass: 'yourpassword'
//   }
// });

// const mailOptions = {
//   from      : 'youremail@gmail.com',
//   to        : 'myfriend@yahoo.com',
//   subject   : 'Confirmation of Reservation',
//   text      : 'Thanks for reservation!'
// };

exports.reserveSeats = async (req, res) => {
    const { eventId, userEmail, seats } = req.body;
    console.log(req.body);

    try {
        const result = await sequelize.transaction(async (t) => {

            // Use findByPk to fetch a single event by its ID
            const event = await Event.findByPk(eventId, { transaction: t });

            if (!event) {
                throw new Error('Error: No such event id');
            }

            const availableSeats = event.totalSeats - event.reservedSeats;

            if (availableSeats < seats) {
                throw new Error('Error: Seat is not available');
            }

            // Update the event's reservedSeats
            event.reservedSeats += seats;

            // Save the updated event
            await event.save({ transaction: t });

            // Create a reservation entry
            const reservation = await Reservation.create({ eventId, userEmail, seats }, { transaction: t });

            return reservation;

        });

        // transporter.sendMail(mailOptions, function(error, info) {
        //     if (error) {
        //       console.log(error);
        //     } else {
        //       console.log('Email sent: ' + info.response);
        //     }
        // });

        res.status(201).json({ message: 'Success: completed successfully', reservation: result });

    } catch (error) {
        res.status(400).json({ Error: error.message });
    }
};


exports.listReservations = async (req,res) => { 
    try {
        const reservations = await Reservation.findAll();
        res.status(200).json(reservations);
        
        
    } catch(error) {
        res.status(500).json({error: 'Error: Could not fetch events'});

    }
};