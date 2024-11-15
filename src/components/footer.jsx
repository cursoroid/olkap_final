import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail 
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
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
          
          <div className='footer-center'>
            <div className="company-info">
              <img src="src\assets\fLOGO.svg" alt="Company Logo" className="company-logo" />
            </div>
          </div>

          <div className="footer-right">
          <div className="contactUs">
                <h3>Contact Us</h3>
                <ul>
                  <li><a href="#">+91 99999 99999</a></li>
                  <li><a href="#">info@olkap.com</a></li>
                  <li><a href="#">For Careers, Visit LinkedIn</a></li>
                  <li><a href="#">Do follow us On Instagram</a></li>
                  <li><a href="#">Store Address : Boat Club Road, City Point, Pune</a></li>            
                </ul>
              </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className='copyright'>&copy; {currentYear} OLKAP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;