import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import 'material-symbols';

const Navbar = ({ scrolling, menuOpen, toggleMenu }) => {
  const shopName = "kollkap.myshopify.com"; // Replace with your shop's name
  const [megaMenuVisible, setMegaMenuVisible] = useState(null);

  const handleHover = (section) => {
    setMegaMenuVisible(section);
  };

  const handleLeave = () => {
    setMegaMenuVisible(null);
  };

  const handleProfileClick = () => {
    const profileUrl = `https://${shopName}/account`;
    const signupUrl = `https://${shopName}/account/register`;
    window.location.href = profileUrl; // Shopify handles login redirection if the user is not logged in
  };

  return (
    <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="navbar-left"></div>

      {/* Center options */}
      <div className="navbar-center">
        <a href={`https://${shopName}`} className="navbar-item">Shop</a>
        <div
          className="navbar-item mega-menu-parent"
          onMouseEnter={() => handleHover('furniture')}
          onMouseLeave={handleLeave}
        >
          Furniture
          {megaMenuVisible === 'furniture' && (
            <div className="mega-menu">
              <a href="/sofas" className="mega-menu-item">Sofas</a>
              <a href="/chairs" className="mega-menu-item">Chairs</a>
              <a href="/tables" className="mega-menu-item">Tables</a>
            </div>
          )}
        </div>
        <div
          className="navbar-item mega-menu-parent"
          onMouseEnter={() => handleHover('decor')}
          onMouseLeave={handleLeave}
        >
          Decor
          {megaMenuVisible === 'decor' && (
            <div className="mega-menu">
              <a href="/artwork" className="mega-menu-item">Artwork</a>
              <a href="/lighting" className="mega-menu-item">Lighting</a>
              <a href="/vases" className="mega-menu-item">Vases</a>
            </div>
          )}
        </div>
        <a href="/gallery" className="navbar-item">Gallery</a>
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

      {/* Side Menu */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <a href={`https://${shopName}`} className="side-menu-item">Shop</a>
        <a href="/" className="side-menu-item">Furniture</a>
        <a href="/" className="side-menu-item">Decor</a>
        <a href="/" className="side-menu-item">Gallery</a>
        <div className="login-container">
          <button onClick={handleProfileClick} className="side-menu-item">
            <span className="material-symbols-outlined">person</span> Log In / Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
