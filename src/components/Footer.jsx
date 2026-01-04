import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p><i className="fas fa-phone"></i> +66 123 456 789</p>
          <p><i className="fas fa-envelope"></i> contact@recyglo.com</p>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="footer-col">
          <h3>Locations</h3>
          <p>Bangkok, Thailand</p>
          <p>Ho Chi Minh, Vietnam</p>
          <p>Yangon, Myanmar</p>
        </div>
        <div className="footer-col">
          <h3>Open Hours</h3>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 2:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
