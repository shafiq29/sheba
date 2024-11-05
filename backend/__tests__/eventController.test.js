// __tests__/eventController.test.js

const request = require('supertest');
const express = require('express');
const { createEvent, getAllEvents, deleteEvent } = require('../controllers/eventController');
const Event = require('../models/Event');

jest.mock('../models/Event'); // Mock the Event model

const app = express();
app.use(express.json());

// Mock routes for testing purposes
app.post('/event', createEvent);
app.get('/events', getAllEvents);
app.delete('/event/:id', deleteEvent);

describe('Event Controller', () => {

    afterEach(() => {
        jest.clearAllMocks(); // Clear mocks after each test
    });

    describe('createEvent', () => {
        it('should create a new event and return it', async () => {
            const mockEvent = { id: 1, name: 'Test Event', totalSeats: 100, date: '2024-12-31' };
            Event.create.mockResolvedValue(mockEvent);

            const response = await request(app)
                .post('/event')
                .send({ name: 'Test Event', totalSeats: 100, date: '2024-12-31' });

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockEvent);
            expect(Event.create).toHaveBeenCalledWith({ name: 'Test Event', totalSeats: 100, date: '2024-12-31' });
        });

        it('should handle error when event creation fails', async () => {
            Event.create.mockRejectedValue(new Error('Event creation failed'));

            const response = await request(app)
                .post('/event')
                .send({ name: 'Test Event', totalSeats: 100, date: '2024-12-31' });

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ error: 'Error: Event creation failed' });
        });
    });

    describe('getAllEvents', () => {
        it('should return all events', async () => {
            const mockEvents = [
                { id: 1, name: 'Event 1', totalSeats: 50, date: '2024-12-31' },
                { id: 2, name: 'Event 2', totalSeats: 100, date: '2025-01-01' },
            ];
            Event.findAll.mockResolvedValue(mockEvents);

            const response = await request(app).get('/events');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockEvents);
            expect(Event.findAll).toHaveBeenCalledTimes(1);
        });

        it('should handle error when fetching events fails', async () => {
            Event.findAll.mockRejectedValue(new Error('Fetch failed'));

            const response = await request(app).get('/events');

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ error: 'Error: Could not fetch events' });
        });
    });

    describe('deleteEvent', () => {
        it('should delete an event by id', async () => {
            Event.destroy.mockResolvedValue(1);

            const response = await request(app).delete('/event/1');

            expect(response.status).toBe(200);
            expect(response.body).toEqual({ message: 'Event deleted successfully' });
            expect(Event.destroy).toHaveBeenCalledWith({ where: { id: '1' } });
        });

        it('should handle error when deleting an event fails', async () => {
            Event.destroy.mockRejectedValue(new Error('Delete failed'));

            const response = await request(app).delete('/event/1');

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ error: 'Error: Could not delete event' });
        });
    });
});
