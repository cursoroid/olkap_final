import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
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
        <a href="/cart" className="navbar-item"><ShoppingBag /></a>
        <a href="/profile" className="navbar-item"><User /></a>
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
