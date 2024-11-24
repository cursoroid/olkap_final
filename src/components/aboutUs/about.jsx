import React from 'react';
import './about.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


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
        <img src="https://ik.imagekit.io/iquid/OLKAP-Catalog/assets/about.png?updatedAt=1732295584120" alt="About" className="about-image" />
        <div className="about-text">
          <h2>THE ART OF METALCRAFT: AN OLKAP LEGACY</h2>
          <p>
          At OLKAP, we transform metal into poetry through a masterful blend of India's rich craftsmanship and contemporary design. Our exquisite accents and lifestyle pieces, crafted with precision and innovative techniques, represent the pinnacle of luxury metalwork, adorning prestigious spaces worldwide.          </p>
          <br /><br />
          <Link to='/about' className="about-button">About Us<span class="material-symbols-outlined abt-nxt">
              arrow_forward_ios
            </span>
          </Link>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default About;
