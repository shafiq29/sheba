// import React from 'react';
import './App.css';
import AdminDashboard from './components/AdminDashboard';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';


function App() {
  return (
    <div className="App">
      <h1>Event Reservation System</h1>
      <AdminDashboard/>
      <ReservationList/>
      <ReservationForm/>
    </div>
  );
}

export default App;
