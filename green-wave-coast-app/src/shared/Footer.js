import React from 'react';
import "../styles/Index.css"
import "./Footer.css"
import "../styles/mediaQueries.css"
// import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer>
      <div className="footerAllPages">
        <div className="subscription-container">
          <h2>Subscribe to our Newsletter!</h2>
          <p>Receive the latest updates and special offers directly in your inbox.</p>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="YourEmail@example.com" required />
            <input type="submit" value="Send Message" />
          </form>
        </div>
        <div className="followUs">
          <h2>Follow us</h2>
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook fa-bounce fa-lg"></i></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-x fa-bounce fa-lg"></i></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram fa-bounce fa-lg"></i></a></li>
          </ul>
        </div>
        <div className="copyFooter">
          <p>&copy; 2024 Angely Lizcano / GreenWaveCoast</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
