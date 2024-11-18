import React from "react";
import "./final_section.css"; // Assuming the styling is in final_section.css
import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


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
    <div className="final-container">
        <div className="final-content">
            <div className="final-text">
                <h2>THE ART OF METALCRAFT: AN OLKAP LEGACY</h2>
                <p>
                    At OLKAP, we transform metal into poetry through a masterful blend of India's rich craftsmanship and contemporary design. Our exquisite accents and lifestyle pieces, crafted with precision and innovative techniques, represent the pinnacle of luxury metalwork, adorning prestigious spaces worldwide.
                </p>
                <a href='' className="final-button">About Us<FontAwesomeIcon icon={faChevronRight} /></a>
            </div>
            <img src="/src/assets/final_section.png" alt="Final" className="final-image" />

        </div>
    </div>
</motion.div>


    );
};

export default FinalSection;
