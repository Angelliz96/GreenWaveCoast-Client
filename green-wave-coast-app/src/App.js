import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom";
import Header from './shared/Header';
import Footer from './shared/Footer';
import Admin from './components/Admin';
import About from './components/About';
import Contact from './components/Contact';
import Create from './components/Create';
import Education from './components/Education';
import Energy from './components/Energy';
import Food from './components/Food';
import Forum from './components/Forum';
import Government from './components/Government';
import Home from './components/Home';
import Local from './components/Local';
import Login from './components/Login';
import Reset from './components/Reset';
import Transportation from './components/Transportation';
import Update from './components/Update';
import User from './components/User';
import Waste from './components/Waste';
import WaterPage from './components/Water';
import "../src/styles/Index.css";


function App() {
  
  const [user, setUser] = useState(localStorage.getItem("user") || {});

  return (
    
      <div className="App">
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create" element={<Create />} />
          <Route path="/education" element={<Education />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/food" element={<Food />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/government" element={<Government />} />
          <Route path="/local" element={<Local />} />
          <Route path="/login" element={<Login setUser={setUser} />} /> 
          <Route path="/reset" element={<Reset />} />
          {/* <Route path="/resources" element={<Resources />} /> */}
          {/* <Route path="/sustainability" element={<Sustainability />} /> */}
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/update" element={<Update />} />

          <Route path="/user" element={<User user={user} />} /> 
          <Route path="/waste" element={<Waste />} />
          <Route path="/water" element={<WaterPage />} />
          </Routes>      
     
        <Footer />     
    
    </div>
  );
}


export default App;
