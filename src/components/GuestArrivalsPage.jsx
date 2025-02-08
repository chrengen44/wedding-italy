import React from 'react';
import MainMenu from './MainMenu/MainMenu';
import GuestTimeline from './GuestTimeline';
import './GuestArrivalsPage.css';

const GuestArrivalsPage = () => {
  return (
    <>
      <MainMenu />
      <div className="guest-arrivals-page">
        <div className="guest-arrivals-content">
          <GuestTimeline />
        </div>
      </div>
    </>
  );
};

export default GuestArrivalsPage; 