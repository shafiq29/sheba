const express = require('express');
const eventController = require('../controllers/eventController');
const reservationController = require('../controllers/reservationController');


const router = express.Router();

/**
 * @swagger
 * /api/event:
 *   post:
 *     summary: Get an example message
 *     description: Returns a simple JSON object with a message
 *     responses:
 *       200:
 *         description: A simple message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "This is an example API endpoint"
 */

router.post('/event', eventController.createEvent);

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Get an example message
 *     description: Returns a simple JSON object with a message
 *     responses:
 *       200:
 *         description: A simple message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "This is an example API endpoint"
 */
router.get('/events', eventController.getAllEvents);

/**
 * @swagger
 * /api/event/{id}:
 *   delete:
 *     summary: Get an example message
 *     description: Returns a simple JSON object with a message
 *     responses:
 *       200:
 *         description: A simple message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "This is an example API endpoint"
 */
router.delete('/events/:id', eventController.deleteEvent);


router.post('/reservations', reservationController.reserveSeats);
router.get('/reservations', reservationController.listReservations);


module.exports = router;
