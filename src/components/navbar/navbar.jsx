import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ShoppingBag, User } from 'lucide-react';
import './navbar.css';

import 'material-icons/iconfont/material-icons.css';
import 'material-symbols';



const Navbar = ({ scrolling, menuOpen, toggleMenu }) => {

  return (
    <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="navbar-left">
      </div>

      {/* Center options */}
      <div className="navbar-center">
        <a href="https://kollkap.myshopify.com" className="navbar-item">SHOP</a>
        <a href="/" className="navbar-item">FURNITURE</a>
        <a href="/" className="navbar-item">DECOR</a>
        <a href="/" className="navbar-item">GALLERY</a>
      </div>

      <div className="navbar-right">
        <a href="https://kollkap.myshopify.com/cart" className="navbar-item cart"><span class="material-symbols-outlined">
          shopping_bag
        </span></a>
        <a href="https://shopify.com/authentication/90379125023/login?client_id=a7029368-365e-4c0b-9e83-60f57089bbfa&locale=en&redirect_uri=https%3A%2F%2Fshopify.com%2Fauthentication%2F90379125023%2Foauth%2Fauthorize%3Fclient_id%3Da7029368-365e-4c0b-9e83-60f57089bbfa%26locale%3Den%26nonce%3D8046d1ab-a5e1-4a96-88a1-dbfb9249f7b9%26redirect_uri%3Dhttps%253A%252F%252Fshopify.com%252F90379125023%252Faccount%252Fcallback%253Fsource%253Dcore%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bcustomer-account-api%253Afull%26state%3D01JD1JD43DR76AN26QD5VEFHXV" className="navbar-item user"><span class="material-symbols-outlined">
person
</span></a>

      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>

      {/* Sliding Menu */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <a href="https://kollkap.myshopify.com" className="side-menu-item">SHOP</a>
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
