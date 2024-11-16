import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      {/* Header Section */}
      <div className="about-header">
        <h1>About Us</h1>
      </div>

      {/* Mission Section with Image */}
      <div className="mission-section">
        <img 
          src="src\assets\AB1.jpg" className="mission-image"/>
        <h2>THE BRAND</h2>
        <p>
        At OLKAP, luxury is not just an aspiration - it is a philosophy that permeates every creation, an ethos that speaks to those who understand and appreciate the
        subtleties of true artistry. Our aesthetic is a testament to refined taste, merging the finest design with impeccable craftsmanship, positioning OLKAP alongside the world's most revered luxury houses.
        </p>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <p><span>Email:</span> contact@example.com</p>
        <p><span>Address:</span> 123 Business Street, Tech City, TC 12345</p>
        <p><span>Phone:</span> (555) 123-4567</p>
      </div>
      
    </>
  );
};

export default About;