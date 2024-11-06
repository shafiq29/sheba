import React, { useState, useEffect } from 'react';

const EventForm = ({ initialData, onCreate, onEdit, isEditMode }) => {
  const [name, setName] = useState('');
  const [totalSeats, setTotalSeats] = useState('');
  const [date, setDate] = useState('');

  // Populate fields if editing an existing event
  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setTotalSeats(initialData.totalSeats.toString());
      setDate(initialData.date);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = { name, totalSeats: parseInt(totalSeats), date };
    
    if (isEditMode) {
      onEdit(eventData); // Call onEdit if in edit mode
    } else {
      onCreate(eventData); // Call onCreate if in create mode
    }

    setName('');
    setTotalSeats('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Total Seats"
        value={totalSeats}
        onChange={(e) => setTotalSeats(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">{isEditMode ? 'Update' : 'Create Event'}</button>
    </form>
  );
};

export default EventForm;
