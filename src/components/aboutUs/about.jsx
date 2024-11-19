import React from 'react';
import './about.css';
import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (

    <motion.div
    initial={{ opacity: 0, y: 100 }} // Start completely invisible and below
    whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
    viewport={{ once: true, amount: 0.3 }} // Trigger only once when 30% of the component is visible
    transition={{
      duration: 1, // Smooth transition over 1 second
      ease: [0.25, 0.8, 0.25, 1] // Custom cubic-bezier easing for smoothness
    }}
  >
    <div className="about-container">
      <div className="about-content">
        <img src="/src/assets/about.png" alt="About" className="about-image" />
        <div className="about-text">
          <h2>THE ART OF METALCRAFT: AN OLKAP LEGACY</h2>
          <p>
          At OLKAP, we transform metal into poetry through a masterful blend of India's rich craftsmanship and contemporary design. Our exquisite accents and lifestyle pieces, crafted with precision and innovative techniques, represent the pinnacle of luxury metalwork, adorning prestigious spaces worldwide.          </p>
          <a href='/about' className="about-button">About Us<FontAwesomeIcon className='go-to' icon={faChevronRight} /></a>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default About;
