import AdminDashboard from "../components/AdminDashboard";
import EventForm from "../components/EventForm";
import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import React from "react";
export default function EventManager(){

    const { id } = useParams(); // Retrieve the event ID from the URL

  // Check if id exists to determine if we are in edit mode
  const isEditMode = Boolean(id);

  // Use the id to fetch or edit the specific event if in edit mode
  React.useEffect(() => {
    if (isEditMode) {
      // Fetch event details based on id or initiate edit logic
      console.log(true);
    }
  }, [id]);
    
    return(
        <>
        <Header></Header>
        <AdminDashboard/>
        </>
    )
}