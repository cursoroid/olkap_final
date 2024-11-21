import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './navbar_glob.css';
import 'material-symbols';
import logo from '../assets/global_logo.svg'; // Import the logo

const NavbarGlob = () => {
  const [menuOpen, setMenuOpen] = useState(false);  // Track the state of the side menu
  const shopName = "kollkap.myshopify.com"; // Replace with your shop's name
  const [megaMenuVisible, setMegaMenuVisible] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);  // Toggle the state when hamburger is clicked
  };

  const handleHover = (section) => {
    setMegaMenuVisible(section);
  };

  const handleLeave = () => {
    setMegaMenuVisible(null);
  };

  const handleProfileClick = () => {
    const profileUrl = `https://${shopName}/account`;
    const signupUrl = `https://${shopName}/account/register`;

    // Redirect to Shopify profile page
    window.location.href = profileUrl; // Shopify handles login redirection if the user is not logged in
  };

  return (
    <div className="navbar-glob">
      <div className="navbar-glob-left"></div>

      {/* Logo */}
      <div className="navbar-glob-logo">
        <a href='/'><img src={logo} alt="Shop Logo" /></a>
      </div>

      {/* Center options */}
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
              <a href="/sofas" className="mega-menu-item">Sofas</a>
              <a href="/chairs" className="mega-menu-item">Chairs</a>
              <a href="/tables" className="mega-menu-item">Tables</a>
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

      <div className="navbar-glob-right">
        {/* Cart */}
        <a href={`https://${shopName}/cart`} className="navbar-glob-item cart">
          <span className="material-symbols-outlined">shopping_bag</span>
        </a>

        {/* Profile */}
        <button className="navbar-glob-item user" onClick={handleProfileClick}>
          <span className="material-symbols-outlined">person</span>
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger-glob ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>

      {/* Sliding Menu */}
      <div className={`side-menu-glob ${menuOpen ? 'open' : ''}`}>
        <a href={`https://${shopName}`} className="side-menu-glob-item">Shop</a>
        <a href="/" className="side-menu-glob-item">Furniture</a>
        <a href="/" className="side-menu-glob-item">Decor</a>
        <a href="/" className="side-menu-glob-item">Gallery</a>
        <div className="login-container-glob">
          <button onClick={handleProfileClick} className="side-menu-glob-item">
            <span className="material-symbols-outlined">person</span>
            Log In / Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarGlob;
