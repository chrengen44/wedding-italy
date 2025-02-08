import React from 'react';
import './HomePage.css';
import MainMenu from './MainMenu/MainMenu';

const HomePage = () => {
  return (
    <>
      <MainMenu />
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
          </div>

        </div>
      </div>
    </>
  );
};

export default HomePage;
