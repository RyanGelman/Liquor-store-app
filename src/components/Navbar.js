import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importing the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-title">M & A Liquor and Wine</a>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

