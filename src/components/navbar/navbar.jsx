import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ShoppingBag, User } from 'lucide-react';
import './navbar.css';

const Navbar = ({ scrolling, menuOpen, toggleMenu }) => {

  return (
    <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="navbar-left">
      </div>

      {/* Center options */}
      <div className="navbar-center">
        <a href="/" className="navbar-item">SHOP</a>
        <a href="/" className="navbar-item">TOP PICKS</a>
        <a href="/" className="navbar-item">FURNITURE</a>
        <a href="/" className="navbar-item">DECOR</a>
        <a href="/" className="navbar-item">GALLERY</a>
      </div>

      <div className="navbar-right">
        <a href="/cart" className="navbar-item cart"><ShoppingBag /></a>
        <a href="/profile" className="navbar-item user"><User /></a>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>

      {/* Sliding Menu */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <a href="/" className="side-menu-item">SHOP</a>
        <a href="/" className="side-menu-item">TOP PICKS</a>
        <a href="/" className="side-menu-item">FURNITURE</a>
        <a href="/" className="side-menu-item">DECOR</a>
        <a href="/" className="side-menu-item">GALLERY</a>
        <div className="login-container">
          <a href="/login" className="side-menu-item">LOGIN</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
