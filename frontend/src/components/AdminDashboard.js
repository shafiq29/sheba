import React, { useState, useEffect } from 'react';
import api from '../services/api';
import EventForm from './EventForm';
import EventList from './EventList';

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await api.get('/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Failed to fetch events', error);
    }
  };

  const handleCreateEvent = async (eventData) => {
    try {
      await api.post('/event', eventData);
      fetchEvents();
    } catch (error) {
      console.error('Failed to create event', error);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      await api.delete(`/events/${id}`);
      fetchEvents();
    } catch (error) {
      console.error('Failed to delete event', error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <EventForm onCreate={handleCreateEvent} />
      <EventList events={events} onDelete={handleDeleteEvent} />
    </div>
  );
};

export default AdminDashboard;
