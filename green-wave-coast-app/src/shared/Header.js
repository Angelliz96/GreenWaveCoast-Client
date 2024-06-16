// Header.js
import React from 'react';
import { Link } from 'react-router-dom';  
import SearchBar from './SearchBar'; 
import "./Header.css";

const Header = ({ onSearch }) => {
  return (
    <header>
      <div className="headerbar">
        <Link to="/">
          <img className="LogoGreenWaveCoast" src="IMAGES/2024.png" alt="Logo GreenWaveCoast" />
        </Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/create">Sign up</Link></li> 
            <li><Link to="/login">Sign in</Link></li>
            <SearchBar onSearch={onSearch} />
            <div className="contactUsNav">
              <li><Link to="/contact">Contact us</Link></li>
            </div>
          </ul>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
