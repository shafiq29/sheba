const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
    try {
        const {name, totalSeats, date} = req.body;
        console.log(req.body);
        const event = await Event.create({name, totalSeats, date});
        res.status(200).json(event);
        // res.redirect('/eventList');

    } catch (error) {
        res.status(500).json({error: 'Error: Event creation failed'});
    }
};

exports.updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, totalSeats, date } = req.body;

        const event = await Event.findByPk(id);
        if (!event) {
            return res.status(404).json({ error: 'Error: Event not found' });
        }

        // Update event details
        event.name = name || event.name;
        event.totalSeats = totalSeats || event.totalSeats;
        event.date = date || event.date;

        await event.save();

        res.status(200).json({ message: 'Event updated successfully', event });
    } catch (error) {
        res.status(500).json({ error: 'Error: Could not update event' });
    }
};


exports.getEventById = async (req, res) => {
    try {
        const { id } = req.params;
        
        const event = await Event.findByPk(id);
        if (!event) {
            return res.status(404).json({ error: 'Error: Event not found' });
        }
        
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: 'Error: Could not fetch event' });
    }
};

exports.getAllEvents = async (req,res) => { 
    try {
        const events = await Event.findAll();
        res.status(200).json(events);
        
        
    } catch(error) {
        res.status(500).json({error: 'Error: Could not fetch events'});
        


    }
};

exports.deleteEvent = async (req,res) => { 
    try {
        const {id} = req.params;
        await Event.destroy({
            where: {
              id: id,
            },
          });
        res.status(200).json({message: 'Event deleted successfully'});
    } catch(error) {
        res.status(500).json({error: 'Error: Could not delete event'});

    }
};
