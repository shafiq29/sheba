import React, { useState } from 'react';

const EventForm = ({ onCreate }) => {
  const [name, setName] = useState('');
  const [totalSeats, setTotalSeats] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name, totalSeats: parseInt(totalSeats), date });
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
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
