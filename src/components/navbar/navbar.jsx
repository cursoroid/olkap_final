// src/components/Navbar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ scrolling, menuOpen, toggleMenu }) => {
  return (
    <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <a href="/collection" className="navbar-item">Collection</a>
        <a href="/store" className="navbar-item">Store</a>
      </div>
      <div className="navbar-right">
        <a href="/contact" className="navbar-item">Contact</a>
        <a href="/about" className="navbar-item">About</a>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>

      {/* Sliding Menu */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <a href="/collection" className="side-menu-item">Collection</a>
        <a href="/store" className="side-menu-item">Store</a>
        <a href="/contact" className="side-menu-item">Contact</a>
        <a href="/about" className="side-menu-item">About</a>
      </div>
    </div>
  );
};

export default Navbar;
