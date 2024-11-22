import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
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

  return (
    <div className="navbar">
      <div className="navbar-main">
        {/* Hamburger Icon or Cross Icon */}
        <div className={`hamburger-icon ${sideMenuOpen ? 'open' : ''}`} onClick={toggleSideMenu}>
          {!sideMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          )}
        </div>

        {/* Submenus */}
        <div
          className={`fur-sub-menu sub-menu ${activeMenu === 'furniture' ? 'show' : ''}`}
          onMouseEnter={() => handleMouseEnter('furniture')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="sub-menu-option">FOption</a>
          <a href="#" className="sub-menu-option">FOption</a>
          <a href="#" className="sub-menu-option">FOption</a>
          <a href="#" className="sub-menu-option">FOption</a>
          <a href="#" className="sub-menu-option">FOption</a>
        </div>
        <div
          className={`dec-sub-menu sub-menu ${activeMenu === 'decor' ? 'show' : ''}`}
          onMouseEnter={() => handleMouseEnter('decor')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="sub-menu-option">DOption</a>
          <a href="#" className="sub-menu-option">DOption</a>
          <a href="#" className="sub-menu-option">DOption</a>
          <a href="#" className="sub-menu-option">DOption</a>
          <a href="#" className="sub-menu-option">DOption</a>
        </div>

        <div className="navbar-container">
          {/* Centered options */}
          <div className="navbar-center">
            <div className="navbar-option">
              <a href="#">Shop</a>
            </div>
            <div
              className="navbar-option"
              onMouseEnter={() => handleMouseEnter('furniture')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">Furniture</a>
            </div>
            <div
              className="navbar-option"
              onMouseEnter={() => handleMouseEnter('decor')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">Decor</a>
            </div>
            <div className="navbar-option">
              <a href="#">Gallery</a>
            </div>
          </div>

          {/* Right bottom options */}
          <div className="navbar-right">
            <div className="navbar-option cart">
              <a href="#">Cart</a>
            </div>
            <div className="navbar-option">
              <a href="#">Login</a>
            </div>
          </div>
        </div>
      </div>

      {/* Side Menu */}
      <div className={`side-menu-main ${sideMenuOpen ? 'open' : ''}`}>
        <div className="side-menu">
          <a className="side-menu-option" href="#">Shop</a>
          <a className="side-menu-option" href="#" onClick={() => toggleSubMenu('furniture')}>
            Furniture
            <div className={`sub-side-menu ${openSubMenu === 'furniture' ? 'show' : ''}`}>
              <a href="#" className="side-menu-option">FOption</a>
              <a href="#" className="side-menu-option">FOption</a>
              <a href="#" className="side-menu-option">FOption</a>
              <a href="#" className="side-menu-option">FOption</a>
              <a href="#" className="side-menu-option">FOption</a>
            </div>
          </a>
          <a className="side-menu-option" href="#" onClick={() => toggleSubMenu('decor')}>
            Decor
            <div className={`sub-side-menu ${openSubMenu === 'decor' ? 'show' : ''}`}>
              <a href="#" className="side-menu-option">DOption</a>
              <a href="#" className="side-menu-option">DOption</a>
              <a href="#" className="side-menu-option">DOption</a>
              <a href="#" className="side-menu-option">DOption</a>
              <a href="#" className="side-menu-option">DOption</a>
            </div>
          </a>
          <a className="side-menu-option" href="#">Gallery</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
