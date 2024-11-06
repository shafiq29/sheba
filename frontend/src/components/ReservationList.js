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
          Event: {reservation.event?.name || 'N/A'} - Email: {reservation.userEmail} - Seats: {reservation.seats} - Total Seats: {reservation.event?.totalSeats || 'N/A'} - Reserved Seats: {reservation.event?.reservedSeats || 'N/A'}
        </li>
      ))}
    </ul>
  );
};

export default ReservationList;
