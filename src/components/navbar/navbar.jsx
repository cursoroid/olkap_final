import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import 'material-symbols';

const Navbar = ({ scrolling }) => {
  const shopName = "kollkap.myshopify.com"; // Replace with your shop's name
  const [megaMenuVisible, setMegaMenuVisible] = useState(null);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [collapseState, setCollapseState] = useState({
    furniture: false,
    decor: false,
  });

  // Refs for detecting click outside
  const furnitureRef = useRef(null);
  const decorRef = useRef(null);

  const handleHover = (section) => {
    setMegaMenuVisible(megaMenuVisible === section ? null : section);
  };

  const handleLeave = () => {
    setMegaMenuVisible(null);
  };

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const handleProfileClick = () => {
    const profileUrl = `https://${shopName}/account`;
    window.location.href = profileUrl; // Shopify handles login redirection if the user is not logged in
  };

  // Toggle collapse for side menu items
  const toggleCollapse = (section) => {
    setCollapseState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Handle click outside logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (furnitureRef.current && !furnitureRef.current.contains(event.target)) {
        setCollapseState((prevState) => ({
          ...prevState,
          furniture: false,
        }));
      }
      if (decorRef.current && !decorRef.current.contains(event.target)) {
        setCollapseState((prevState) => ({
          ...prevState,
          decor: false,
        }));
      }
    };

    // Add event listener for click events outside the collapse menus
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="navbar-left"></div>

      {/* Desktop Mega Menu */}
      <div className="navbar-center">
        <a href={`https://${shopName}`} className="navbar-item">Shop</a>
        <div
          className="navbar-item mega-menu-parent"
          onMouseEnter={() => handleHover('furniture')}
          onMouseLeave={handleLeave}
          ref={furnitureRef} // Added ref for click outside detection
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
          ref={decorRef} // Added ref for click outside detection
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

      {/* Profile and Cart */}
      <div className="navbar-right">
        <a href={`https://${shopName}/cart`} className="navbar-item cart">
          <span className="material-symbols-outlined">shopping_bag</span>
        </a>

        {/* Profile Button */}
        <button className="navbar-item user" onClick={handleProfileClick}>
          <span className="material-symbols-outlined">person</span>
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${sideMenuOpen ? 'open' : ''}`} onClick={toggleSideMenu}>
        <FontAwesomeIcon icon={sideMenuOpen ? faTimes : faBars} />
      </div>

      {/* Side Menu for Mobile */}
      <div className={`side-menu ${sideMenuOpen ? 'open' : ''}`}>
        <a href={`https://${shopName}`} className="side-menu-item">Shop</a>
        <div className="side-menu-item">
          <div className="side-menu-title" onClick={() => toggleCollapse('furniture')}>
            Furniture
          </div>
          {collapseState.furniture && (
            <div className="side-menu-collapse">
              <a href="/sofas" className="side-menu-subitem">Sofas</a>
              <a href="/chairs" className="side-menu-subitem">Chairs</a>
              <a href="/tables" className="side-menu-subitem">Tables</a>
            </div>
          )}
        </div>
        <div className="side-menu-item">
          <div className="side-menu-title" onClick={() => toggleCollapse('decor')}>
            Decor
          </div>
          {collapseState.decor && (
            <div className="side-menu-collapse">
              <a href="/artwork" className="side-menu-subitem">Artwork</a>
              <a href="/lighting" className="side-menu-subitem">Lighting</a>
              <a href="/vases" className="side-menu-subitem">Vases</a>
            </div>
          )}
        </div>
        <a href="/gallery" className="side-menu-item">Gallery</a>
      </div>
    </div>
  );
};

export default Navbar;
