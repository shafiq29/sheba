import React from 'react';

const EventList = ({ events, onDelete }) => {
  const handleEditClick = (id) => {
    window.location.href = `/events/${id}`; // Navigates and reloads the page
  };

  return (
    <ul>
  {Array.isArray(events) && events.length > 0 ? (
    events.map((event) => (
      <li key={event.id}>
        {event.name} - {new Date(event.date).toLocaleString()} - {event.totalSeats} seats
        <button onClick={() => handleEditClick(event.id)} style={{ marginLeft: '10px' }}>
          Edit
        </button>
        <button onClick={() => onDelete(event.id)} style={{ marginLeft: '10px' }}>
          Delete
        </button>
      </li>
    ))
  ) : (
    <p>No events available</p>
  )}
</ul>
  );
};

export default EventList;
