import { useState } from 'react';
import './navbar.css';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import 'material-symbols';

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

  

  const shopName = "shop.olkap.com";

  const handleProfileClick = () => {
    const profileUrl = `https://${shopName}/account`;
    const signupUrl = `https://${shopName}/account/register`;

    // Redirect to Shopify profile page
    window.location.href = profileUrl; // Shopify handles login redirection if the user is not logged in
  };

  return (
    <div className="navbar">
      <div className="navbar-main">
        {/* Hamburger Icon or Cross Icon */}
        <div className={`hamburger-icon ${sideMenuOpen ? 'open' : ''}`} onClick={toggleSideMenu}>
          {!sideMenuOpen ? (
            <MenuIcon style={{ fontSize: 25, fontWeight: 100 }} />  // Display hamburger icon
          ) : (
            <CloseIcon style={{ fontSize: 25 }} />  // Display close (X) icon
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
              <a href="/gallery">Gallery</a>
            </div>
          </div>

          {/* Right bottom options */}
          <div className="navbar-right">
            <div className="navbar-option cart">
              <a href={`https://${shopName}/cart`}><span class="material-symbols-outlined cart-icon">
                shopping_bag
              </span></a>
            </div>
            <div className="navbar-option">
              <a onClick={handleProfileClick}><span class="material-symbols-outlined">
                person
              </span></a>
            </div>
          </div>
        </div>
      </div>

      {/* Side Menu */}
      <div className={`side-menu-main ${sideMenuOpen ? 'open' : ''}`}>
        <div className="side-menu">
          <a className="side-menu-option" href="#">Shop</a>
          <a className="side-menu-option" onClick={() => toggleSubMenu('furniture')}>
            Furniture
            <div className={`sub-side-menu ${openSubMenu === 'furniture' ? 'show' : ''}`}>
              <a href="#" className="side-menu-option">FOption</a>
              <a href="#" className="side-menu-option">FOption</a>
              <a href="#" className="side-menu-option">FOption</a>
              <a href="#" className="side-menu-option">FOption</a>
              <a href="#" className="side-menu-option">FOption</a>
            </div>
          </a>
          <a className="side-menu-option" onClick={() => toggleSubMenu('decor')}>
            Decor
            <div className={`sub-side-menu ${openSubMenu === 'decor' ? 'show' : ''}`}>
              <a href="#" className="side-menu-option">DOption</a>
              <a href="#" className="side-menu-option">DOption</a>
              <a href="#" className="side-menu-option">DOption</a>
              <a href="#" className="side-menu-option">DOption</a>
              <a href="#" className="side-menu-option">DOption</a>
            </div>
          </a>
          <a className="side-menu-option" href="/gallery">Gallery</a>
        </div>
        <div className='login-container'>
          <a onClick={handleProfileClick}><span class="material-symbols-outlined profile">
            person
          </span>Login / Register</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
