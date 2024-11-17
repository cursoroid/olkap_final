import React from "react";
import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="footer-row">
          {/* Logo and About Section */}
          <div className="footer-column">
            <a href="#" className="footer-logo">
              <img
                src="./src/assets/flogo.svg"
                alt="logo"
                className="logo-light"
              />
              <img
                src="/path/to/logo-white.svg"
                alt="logo-dark"
                className="logo-dark"
              />
            </a>
            <p className="footer-description">
              Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam.
            </p>
            <p className="footer-contact">
              +012 (345) 678 99
            </p>
          </div>

          {/* Company Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About TailGrids</a></li>
              <li><a href="#">Contact & Support</a></li>
              <li><a href="#">Success History</a></li>
              <li><a href="#">Setting & Privacy</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Premium Support</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Know Our Team</a></li>
              <li><a href="#">Download App</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="footer-column">
            <h4 className="footer-heading">Follow Us On</h4>
            <div className="footer-social">
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
