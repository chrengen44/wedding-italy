import React from 'react';
import Timeline from './Timeline';
import MainMenu from './MainMenu/MainMenu';
import './TimelinePage.css';

const TimelinePage = () => {
  return (
    <>
      <MainMenu />
      <div className="timeline-page">
        <div className="timeline-page-content">
          <Timeline />
        </div>
      </div>
    </>
  );
};

export default TimelinePage; 