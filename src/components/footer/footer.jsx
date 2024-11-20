import React, { useState } from "react";
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
import "./footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Newsletter subscription for:", email);
    setEmail("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1,
        ease: [0.25, 0.8, 0.25, 1]
      }}
    >
      <footer className="footer bg">
        <div className="container mx-auto">
          <div className="footer-row">
            {/* Logo Section */}
            <div className="footer-column">
              <a href="#" className="footer-logo">
                <img
                  src="./src/assets/flogod.svg"
                  alt="logo"
                  className="logo-light"
                />
                <img
                  src="./src/assets/flogow.svg"
                  alt="logo-dark"
                  className="logo-dark"
                />
              </a>
            </div>

            {/* Company Links */}
            <div className="footer-column">
              <h4 className="footer-heading">Quick Access</h4>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
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
                  <a href="#" className="social-link address-icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span className="social-text address-icon">Tower 1, City Point, Boat Club Rd, Pune - 411001</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
            
            <div className="newsletter-content">
              <h4 className="footer-heading">Subscribe to Our Newsletter</h4>
              <p className="newsletter-description">Stay updated with our latest news and offers!</p>
              <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>
            
          </div>
            </div>
          </div>

          {/* Newsletter Section */}
          
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;