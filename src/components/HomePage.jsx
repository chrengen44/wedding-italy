import React from 'react';
import './HomePage.css';
import TravelInfo from './TravelInfo';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="names">Anndrea & Christian</h1>
        <p className="wedding-date">Join Us On Our Special Day</p>
        <p className="location">Italy, 2024</p>
      </div>
      
      <div className="content-section">
        <div className="info-card">
          <h2>Our Wedding Celebration</h2>
          <p>We're getting married in beautiful Italy!</p>
          <button className="rsvp-button">RSVP</button>
        </div>

        <TravelInfo/>
        
        <div className="navigation-grid">
          <div className="nav-item">
            <h3>Our Story</h3>
          </div>
          <div className="nav-item">
            <h3>Event Details</h3>
          </div>
          <div className="nav-item">
            <h3>Travel Info</h3>
          </div>
          <div className="nav-item">
            <h3>Registry</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
