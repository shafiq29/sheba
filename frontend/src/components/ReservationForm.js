import React, { useState } from 'react';
import api from '../services/api';

const ReservationForm = () => {
  const [eventId, setEventId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [seats, setSeats] = useState('');

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      await api.post('/reservations', { eventId, userEmail, seats: parseInt(seats) });
      alert('Reservation successful!');
      setEventId('');
      setUserEmail('');
      setSeats('');
    } catch (error) {
      console.error('Failed to reserve seats', error);
      alert('Failed to reserve seats. Please try again.');
    }
  };

  return (
    <form onSubmit={handleReservation}>
      <input
        type="text"
        placeholder="Event ID"
        value={eventId}
        onChange={(e) => setEventId(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Number of Seats"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
        required
      />
      <button type="submit">Reserve Seats</button>
    </form>
  );
};

export default ReservationForm;
