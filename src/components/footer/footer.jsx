import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Left Section */}
          <div className="footer-left">
            <div className="footer-links">
              <div className="links-section">
                <h3>Quick Action</h3>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Store</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Center Section */}
          <div className="footer-center">
            <div className="company-info">
              <img src="src/assets/fLOGO.svg" alt="OLKAP Company Logo" className="company-logo" />
            </div>
          </div>

          {/* Right Section */}
          <div className="footer-right">
            <div className="contactUs">
              <h3>Contact Us</h3>
              <address>
                <ul>
                  <li>
                    <Phone size={16} />{' '}
                    <a href="tel:+919999999999">+91 99999 99999</a>
                  </li>
                  <li>
                    <Mail size={16} />{' '}
                    <a href="mailto:info@olkap.com">info@olkap.com</a>
                  </li>
                  <li>
                    <Linkedin size={16} />{' '}
                    <a href="#">For Careers, Visit LinkedIn</a>
                  </li>
                  <li>
                    <Instagram size={16} />{' '}
                    <a href="#">Do follow us On Instagram</a>
                  </li>
                  <li>
                    <MapPin size={16} /> Store Address: Boat Club Road, City Point, Pune
                  </li>
                </ul>
              </address>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">&copy; {currentYear} OLKAP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
