import React, { useState } from 'react';
import './navbarglob.css';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import 'material-symbols';

const Navbarglob = () => {
  const [activeMenu, setActiveMenu] = useState(null); // Track which submenu to show
  const [sideMenuOpen, setSideMenuOpen] = useState(false); // Track side menu visibility
  const [openSubMenu, setOpenSubMenu] = useState(null); // Track which submenu is open

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen); // Toggle side menu visibility
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu); // Toggle the visibility of the submenu
  };

  const shopName = "shop.olkap.com";

  const handleProfileClick = () => {
    const profileUrl = `https://${shopName}/account`;
    const signupUrl = `https://${shopName}/account/register`;

    // Redirect to Shopify profile page
    window.location.href = profileUrl; // Shopify handles login redirection if the user is not logged in
  };

  return (
    <div className="navbarglob">
      <div className="navbarglob-main">
        {/* Hamburger Icon or Cross Icon */}
        <div className={`navbarglob-hamburger-icon ${sideMenuOpen ? 'open' : ''}`} onClick={toggleSideMenu}>
          {!sideMenuOpen ? (
            <MenuIcon style={{ fontSize: 25, fontWeight: 100 }} />  // Display hamburger icon
          ) : (
            <CloseIcon style={{ fontSize: 25 }} />  // Display close (X) icon
          )}
        </div>

        {/* Submenus */}
        <div
          className={`navbarglob-fur-sub-menu navbarglob-sub-menu ${activeMenu === 'furniture' ? 'show' : ''}`}
          onMouseEnter={() => handleMouseEnter('furniture')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="navbarglob-sub-menu-option">FOption</a>
          <a href="#" className="navbarglob-sub-menu-option">FOption</a>
          <a href="#" className="navbarglob-sub-menu-option">FOption</a>
          <a href="#" className="navbarglob-sub-menu-option">FOption</a>
          <a href="#" className="navbarglob-sub-menu-option">FOption</a>
        </div>

        <div
          className={`navbarglob-dec-sub-menu navbarglob-sub-menu ${activeMenu === 'decor' ? 'show' : ''}`}
          onMouseEnter={() => handleMouseEnter('decor')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="navbarglob-sub-menu-option">DOption</a>
          <a href="#" className="navbarglob-sub-menu-option">DOption</a>
          <a href="#" className="navbarglob-sub-menu-option">DOption</a>
          <a href="#" className="navbarglob-sub-menu-option">DOption</a>
          <a href="#" className="navbarglob-sub-menu-option">DOption</a>
        </div>

        <div className="navbarglob-container">
          {/* Centered options */}
          <div className="navbarglob-center">
            <div className="navbarglob-option">
              <a href="#">Shop</a>
            </div>
            <div
              className="navbarglob-option"
              onMouseEnter={() => handleMouseEnter('furniture')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">Furniture</a>
            </div>
            <div
              className="navbarglob-option"
              onMouseEnter={() => handleMouseEnter('decor')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">Decor</a>
            </div>
            <div className="navbarglob-option">
              <a href="/gallery">Gallery</a>
            </div>
          </div>

          {/* Right bottom options */}
          <div className="navbarglob-right">
            <div className="navbarglob-option navbarglob-cart">
              <a href={`https://${shopName}/cart`}><span class="material-symbols-outlined navbarglob-cart-icon">
                shopping_bag
              </span></a>
            </div>
            <div className="navbarglob-option">
              <a onClick={handleProfileClick}><span class="material-symbols-outlined">
                person
              </span></a>
            </div>
          </div>
        </div>
      </div>

      {/* Side Menu */}
      <div className={`navbarglob-side-menu-main ${sideMenuOpen ? 'open' : ''}`}>
        <div className="navbarglob-side-menu">
          <a className="navbarglob-side-menu-option" href="#">Shop</a>
          <a className="navbarglob-side-menu-option" onClick={() => toggleSubMenu('furniture')}>
            Furniture
            <div className={`navbarglob-sub-side-menu ${openSubMenu === 'furniture' ? 'show' : ''}`}>
              <a href="#" className="navbarglob-side-menu-option">FOption</a>
              <a href="#" className="navbarglob-side-menu-option">FOption</a>
              <a href="#" className="navbarglob-side-menu-option">FOption</a>
              <a href="#" className="navbarglob-side-menu-option">FOption</a>
              <a href="#" className="navbarglob-side-menu-option">FOption</a>
            </div>
          </a>
          <a className="navbarglob-side-menu-option" onClick={() => toggleSubMenu('decor')}>
            Decor
            <div className={`navbarglob-sub-side-menu ${openSubMenu === 'decor' ? 'show' : ''}`}>
              <a href="#" className="navbarglob-side-menu-option">DOption</a>
              <a href="#" className="navbarglob-side-menu-option">DOption</a>
              <a href="#" className="navbarglob-side-menu-option">DOption</a>
              <a href="#" className="navbarglob-side-menu-option">DOption</a>
              <a href="#" className="navbarglob-side-menu-option">DOption</a>
            </div>
          </a>
          <a className="navbarglob-side-menu-option" href="/gallery">Gallery</a>
        </div>
        <div className='navbarglob-login-container'>
          <a onClick={handleProfileClick}><span class="material-symbols-outlined navbarglob-profile">
            person
          </span>Login / Register</a>
        </div>
      </div>
    </div>
  );
};

export default Navbarglob;
