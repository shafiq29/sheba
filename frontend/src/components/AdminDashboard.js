import React, { useState, useEffect } from 'react';
import api from '../services/api';
import EventForm from './EventForm';
import EventList from './EventList';

const AdminDashboard = ({ selectedEventId }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); // State to hold data for the event being edited
  const [isEditMode, setIsEditMode] = useState(Boolean(selectedEventId));

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    // Fetch data for the specific event if in edit mode and an ID is provided
    if (isEditMode && selectedEventId) {
      fetchEventById(selectedEventId);
    }
  }, [isEditMode, selectedEventId]);

  const fetchEvents = async () => {
    try {
      const response = await api.get('/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Failed to fetch events', error);
    }
  };

  const fetchEventById = async (eventId) => {
    try {
      const response = await api.get(`/events/${eventId}`);
      setSelectedEvent(response.data); // Set selected event data for editing
    } catch (error) {
      console.error('Failed to fetch event by ID', error);
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

  const handleEditEvent = async (eventId, eventData) => {
    try {
      await api.put(`/event/${eventId}`, eventData); // Send the updated data
      fetchEvents(); // Refresh the event list
      setSelectedEvent(null); // Reset selected event after editing
      setIsEditMode(false);
    } catch (error) {
      console.error('Failed to edit event', error);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      await api.delete(`/events/${id}`);
      // fetchEvents();
      window.location.href = `/events`;
    } catch (error) {
      console.error('Failed to delete event', error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <EventForm
        onCreate={handleCreateEvent}
        onEdit={(data) => handleEditEvent(selectedEventId, data)}
        initialData={isEditMode ? selectedEvent : null} // Pass selected event data if in edit mode
        isEditMode={isEditMode}
      />
      <EventList events={events} onDelete={handleDeleteEvent} />
    </div>
  );
};

export default AdminDashboard;
