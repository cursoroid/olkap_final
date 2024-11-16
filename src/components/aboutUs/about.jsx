import React from 'react';
import './About.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src="/src/assets/about.jpg" alt="About" className="about-image" />
        <div className="about-text">
          <h2>THE ART OF METALCRAFT: AN OLKAP LEGACY</h2>
          <p>
          At OLKAP, we transform metal into poetry through a masterful blend of India's rich craftsmanship and contemporary design. Our exquisite accents and lifestyle pieces, crafted with precision and innovative techniques, represent the pinnacle of luxury metalwork, adorning prestigious spaces worldwide.          </p>
          <a href='' className="about-button">About Us<FontAwesomeIcon icon={faChevronRight} /></a>
        </div>
      </div>
    </div>
  );
};

export default About;
