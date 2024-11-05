import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await api.get('/reservations');
      setReservations(response.data);
    } catch (error) {
      console.error('Failed to fetch reservations', error);
    }
  };

  return (
    <ul>
      {reservations.map((reservation) => (
        <li key={reservation.id}>
          Event ID: {reservation.eventId} - Email: {reservation.userEmail} - Seats: {reservation.seats}
        </li>
      ))}
    </ul>
  );
};

export default ReservationList;
