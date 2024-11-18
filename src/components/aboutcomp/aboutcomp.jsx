import React from 'react';
import './aboutcomp.css';
import { motion } from "framer-motion";

const AboutSection = ({ title, description, imageSrc, reverseLayout }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1,
        ease: [0.25, 0.8, 0.25, 1],
      }}
    >
      <div className={`section-container ${reverseLayout ? "reverse" : ""}`}>
        <div className="section-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <img src={imageSrc} alt="Section" className="section-image" />
      </div>
    </motion.div>
  );
};

const Aboutcomp = () => {
  return (
    <div className="about-page">
      {/* Page heading */}
      <motion.h1
        className="page-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
      >
        About Us
      </motion.h1>
      
      {/* About sections */}
      <AboutSection
        title="CRAFTSMANSHIP THAT MEETS POETRY"
        description="OLKAP fuses heritage with modern luxury to create artful metalwork that transcends time.
        Each creation is a testament to the mastery of metalwork, where every contour, texture, and finish reflects a narrative of luxury, precision, and refinement."
        imageSrc="/src/assets/1c.jpg"
        reverseLayout={false}
      />
      <AboutSection
        title="THE ART OF METALCRAFT"
        description="At OLKAP, we transform metal into poetry through a masterful blend of India's rich craftsmanship and contemporary design. Our exquisite accents and lifestyle pieces, crafted with precision and innovative techniques, represent the pinnacle of luxury metalwork, adorning prestigious spaces worldwide."
        imageSrc="/src/assets/2c.jpg"
        reverseLayout={true}
      />
      <AboutSection
        title="A VISION OF EXCELLENCE"
        description="Our vision is to redefine luxury by crafting timeless metalwork that speaks to the connoisseurs of art and design. Every OLKAP piece tells a story of innovation and meticulous craftsmanship."
        imageSrc="/src/assets/1c.jpg"
        reverseLayout={false}
      />
      <AboutSection
        title="DESIGNED FOR ELEGANCE"
        description="Blending contemporary aesthetics with traditional techniques, our designs elevate spaces into sanctuaries of sophistication. Discover the world of OLKAP and immerse yourself in elegance."
        imageSrc="/src/assets/2c.jpg"
        reverseLayout={true}
      />
    </div>
  );
};

export default Aboutcomp;
