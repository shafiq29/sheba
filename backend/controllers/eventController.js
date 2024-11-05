const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
    try {
        const {name, totalSeats, date} = req.body;
        console.log(req.body);
        const event = await Event.create({name, totalSeats, date});
        res.status(200).json(event);

    } catch (error) {
        res.status(500).json({error: 'Error: Event creation failed'});
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
        await Event.destroy({where: {id}});
        res.status(200).json({message: 'Event deleted successfully'});
    } catch(error) {
        res.status(500).json({error: 'Error: Could not delete event'});
        


    }
};
