import React from 'react';

const EventList = ({ events, onDelete }) => {
  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          {event.name} - {event.date} - {event.totalSeats} seats
          <button onClick={() => onDelete(event.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default EventList;
