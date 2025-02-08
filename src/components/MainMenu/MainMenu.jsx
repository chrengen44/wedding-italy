import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';
import lemonImage from '../../assets/lemon-italy.jpg';

const MainMenu = () => {
  return (
    <nav className="main-menu">
      <div className="menu-container">
        <div className="menu-image menu-image-left">
          <img src={lemonImage} alt="Italian Lemons" />
        </div>
        <div className="menu-content">
          <Link to="/" className="menu-logo">
            A&C
          </Link>
          <div className="menu-items">
            <Link to="/our-story" className="menu-item">Forside</Link>
            <Link to="/timeline" className="menu-item">Program</Link>
            <Link to="/travel" className="menu-item">Reiseinformasjon</Link>
          </div>
        </div>
        <div className="menu-image menu-image-right">
          <img src={lemonImage} alt="Italian Lemons" />
        </div>
      </div>
    </nav>
  );
};

export default MainMenu; 