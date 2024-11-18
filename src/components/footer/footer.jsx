import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";


const Footer = () => {
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
    <footer className="footer bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="footer-row">
          {/* Logo and About Section */}
          <div className="footer-column">
            <a href="#" className="footer-logo">
              <img
                src="./src/assets/flogow.svg"
                alt="logo"
                className="logo-light"
              />
              <img
                src="./src/assets/flogod.svg"
                alt="logo-dark"
                className="logo-dark"
              />
            </a>
          </div>

          {/* Company Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Access</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Store</a></li>
              <li><a href="#">Collection</a></li> 
              <li><a href="#">Features Products</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-social">
              <li>
                <a href="mailto:info@olkap.com" className="social-link">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="social-text">info@olkap.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <FontAwesomeIcon icon={faInstagram} />
                  <span className="social-text">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <FontAwesomeIcon icon={faFacebookF} />
                  <span className="social-text">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                  <span className="social-text">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span className="social-text">Tower 1, City Point, Boat Club Rd, Pune - 411001</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </motion.div>
  );
};

export default Footer;