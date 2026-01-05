import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const scrollToContact = (e) => {
        e.preventDefault();
        closeMenu();
        const footer = document.getElementById('contact');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <div className="logo-circle">
                    <img src={require('../assets/logo.png')} alt="Logo" />
                </div>
            </div>

            <div
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                id="hamburger"
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li><Link to="/service" onClick={closeMenu}>Service</Link></li>
                <li><a href="#contact" onClick={scrollToContact}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;