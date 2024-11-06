import React from 'react';
import AdminDashboard from './components/AdminDashboard';
import Reservation from './pages/Reservation';
import EventList from './components/EventList';



import Home from './pages/Home';
import Contact from './pages/Reservation';
import EventManager from './pages/EventManager';
import EventManagerEdit from './pages/EventManagerEdit';

import Layout from './components/Layout';
import { Routes,Route,useParams } from 'react-router-dom';
import NoPage from './pages/NoPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const {id} = useParams();
  return (
     <div>
      <BrowserRouter>
      <Routes index element={<Home/>}>
        <Route exact path="/events" element={<EventManager/>} />
        <Route path="/events/:id" element={<EventManagerEdit />}/>

        <Route exact path="/eventList" element={<EventList/>} />
        <Route path="/reservations" element={<Reservation/>} />
        {/* <Route path="/register" element={<About/>} /> */}
        <Route path="*" element={<NoPage/>} />

      </Routes>
      </BrowserRouter>
      
      
     </div>
  );
}

export default App;
