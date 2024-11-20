import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import 'material-symbols';

const Navbar = ({ scrolling, menuOpen, toggleMenu }) => {
  const shopName = "kollkap.myshopify.com"; // Replace with your shop's name

  const handleProfileClick = () => {
    const profileUrl = `https://${shopName}/account`;
    const signupUrl = `https://${shopName}/account/register`;

    // Redirect to Shopify profile page
    window.location.href = profileUrl; // Shopify handles login redirection if the user is not logged in
  };

  return (
    <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="navbar-left"></div>

      {/* Center options */}
      <div className="navbar-center">
        <a href={`https://${shopName}`} className="navbar-item">SHOP</a>
        <a href="/" className="navbar-item">FURNITURE</a>
        <a href="/" className="navbar-item">DECOR</a>
        <a href="/" className="navbar-item">GALLERY</a>
      </div>

      <div className="navbar-right">
        {/* Cart */}
        <a href={`https://${shopName}/cart`} className="navbar-item cart">
          <span className="material-symbols-outlined">shopping_bag</span>
        </a>

        {/* Profile */}
        <button className="navbar-item user" onClick={handleProfileClick}>
          <span className="material-symbols-outlined">person</span>
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>

      {/* Sliding Menu */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <a href={`https://${shopName}`} className="side-menu-item">SHOP</a>
        <a href="/" className="side-menu-item">FURNITURE</a>
        <a href="/" className="side-menu-item">DECOR</a>
        <a href="/" className="side-menu-item">GALLERY</a>
        <div className="login-container">
          <button onClick={handleProfileClick} className="side-menu-item">          <span className="material-symbols-outlined">person</span>
            PROFILE</button>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
