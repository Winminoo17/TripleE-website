import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p><i className="fas fa-phone"></i><p>+959 536 412 12</p></p>
          <p><i className="fas fa-envelope"></i><p>tripleeprojectteam230@gmail.com</p></p>
          <div className="socials">
            <a href="https://www.facebook.com/share/1BRtH3bq4p/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook"></i><p>Triple E Myanmar</p></a>
          </div>
        </div>
        <div className="footer-col">
          <h3>Locations</h3>
          <p>Yangon, Myanmar</p>
        </div>
        <div className="footer-col">
          <h3>Open Hours</h3>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p>Saturday & Sunday: Closed</p>
          <p></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
