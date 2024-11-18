import React from "react";
import "./final_section.css"; // Assuming the styling is in final_section.css
import { motion } from "framer-motion";


const FinalSection = () => {
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
        <section className="final-section">
            <div className="final-section-content">
                <div className="final-section-image">
                    <img src="./src/assets/final_section.png" alt="Description of image" />
                </div>
                <div className="final-section-text">
                    <h2>THE BEAUTY
                        OF HERITAGE</h2>
                    <h3>Where Tradition Shapes Our Approach to Sophistication</h3>
                    <p> Inspired by the profound traditions of Indian craftsmanship, OLKAP merges the
                        rich cultural heritage of India with contemporary design and innovation. Rooted in
                        an age old legacy of artisanal excellence, OLKAP moves beyond tradition to
                        redefine it, preserving the essence of handcrafted mastery while infusing each
                        piece with a modern, progressive spirit.</p>
                </div>
            </div>
        </section>
        </motion.div>

    );
};

export default FinalSection;
