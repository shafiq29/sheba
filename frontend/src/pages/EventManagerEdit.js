import React from 'react';
import { useParams } from 'react-router-dom';
import AdminDashboard from '../components/AdminDashboard';
import Header from '../components/Header';


const EventManagerEdit = () => {
  const { id } = useParams(); // Get `id` from URL
  const isEditMode = Boolean(id); // Check if `id` exists in the URL

  return (
    <>
    <Header></Header>
    <AdminDashboard
      isEditMode={isEditMode}
      selectedEventId={id} // Pass the ID for fetching event details
    />
    </>
    
  );
};

export default EventManagerEdit;
