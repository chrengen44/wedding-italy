import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';
import lemonImage from '../../assets/lemon-italy.jpg';

const MainMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="main-menu">
      <div className="menu-container">
        <div className="menu-image menu-image-left">
          <img src={lemonImage} alt="Italian Lemons" />
        </div>
        <div className="menu-content">
          <Link to="/" className="menu-logo">
            Anndrea & Christian
          </Link>
          <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`menu-items ${isMenuOpen ? 'menu-open' : ''}`}>
            <Link to="/guest-arrivals" className="menu-item" onClick={() => setIsMenuOpen(false)}>
              Ankomst og Avreise
            </Link>
            <Link to="/timeline" className="menu-item" onClick={() => setIsMenuOpen(false)}>Program</Link>
            <Link to="/travel" className="menu-item" onClick={() => setIsMenuOpen(false)}>Lokalinformasjon</Link>
          </div>
        </div>
        <div className="menu-image menu-image-right">
          <img src={lemonImage} alt="Italian Lemons" />
        </div>
      </div>
      <div className={`menu-overlay ${isMenuOpen ? 'overlay-visible' : ''}`} onClick={toggleMenu}></div>
    </nav>
  );
};

export default MainMenu; 