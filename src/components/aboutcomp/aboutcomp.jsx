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
<<<<<<< HEAD
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
        title="THE ART OF METALCRAFT: AN OLKAP LEGACY"
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
=======
    <div className="aboutcomp-container">
      <section className="aboutcomp-hero">
        <h1>Craftsmanship Meets Poetry</h1>
        <p>OLKAP fuses heritage with modern luxury to create artful metalwork that transcends time.</p>
      </section>

      <div className="aboutcomp-section-container">
        <div className="aboutcomp-section-image" style={{backgroundImage: 'url("https://res.cloudinary.com/dfrpcqahh/image/upload/v1731954495/Olkap/Screenshot_2024-11-01_002351-ai-brush-removebg-9kds623jf_1_nlzrla.png")'}}></div>
        <div className="aboutcomp-section-content aboutcomp-section">
          <h2>Our Story</h2>
          <p>
            Inspired by India's legacy of exquisite craftsmanship, OLKAP started as a vision to elevate metal objects into luxury art forms. Today, it stands as a name synonymous with refinement, quality, and timeless appeal.
          </p>
        </div>
      </div>

      <div className="aboutcomp-section-container">
        <div className="aboutcomp-section-image" style={{backgroundImage: 'url("https://res.cloudinary.com/dfrpcqahh/image/upload/v1731952345/Olkap/Screenshot_18-Nov_23-15-32_32495_ydhfbu.png")'}}></div>
        <div className="aboutcomp-section-content aboutcomp-section aboutcomp-alt">
          <h2>The Beauty of Heritage</h2>
          <p>
            Drawing on India's rich artisanal traditions, OLKAP merges cultural heritage with modern innovation. Each creation embodies an intricate blend of tradition and progress, celebrating India's evolving artistry.
          </p>
        </div>
      </div>

      <div className="aboutcomp-section-container">
        <div className="aboutcomp-section-image" style={{backgroundImage: 'url("https://res.cloudinary.com/dfrpcqahh/image/upload/v1731954276/Olkap/49S4YN4C_output_0-removebg-preview_1_k7hhyt.png")'}}></div>
        <div className="aboutcomp-section-content aboutcomp-section">
          <h2>The Heart of Our Craft</h2>
          <p>
            OLKAP integrates high-tech precision with skilled craftsmanship to produce objects of unparalleled detail and luxury. Our pieces are not just items—they are statements of excellence and passion.
          </p>
        </div>
      </div>

      <section className="aboutcomp-contact">
        <h2>Connect with Us</h2>
        <p>Explore the artistry of OLKAP. Contact us for more details or visit our exclusive collections.</p>
        <p><strong>Email:</strong> info@olkap.com</p>
        <p><strong>Phone:</strong> +91 960 7979 979</p>
        <p><strong>Address:</strong> Tower 1, City Point, Boat Club Rd, Pune, Maharashtra 411001</p>
      </section>
>>>>>>> 163f2f57d1140f173f3d3188be2208240846d459
    </div>
  );
};

export default Aboutcomp;
