import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; //custom css for styling


const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);  // State to manage collapse

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);  // Toggle between collapsed and expanded state
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-transparent">
      <div className="container">
        <Link className="navbar-brand" to="/">TRAVEL WEBSITE</Link>
        
        {/* Toggle button for collapsing */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar}  // Handle the click to toggle the collapse state
          aria-controls="navbarNav" 
          aria-expanded={!isCollapsed} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Add or remove 'show' class based on the state */}
        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/packages">Packages</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">News</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <Link className="btn btn-primary ml-auto" to="/book-now">Book Now</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
