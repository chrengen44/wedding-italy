import React, { useState, useEffect } from 'react';
import MainMenu from '../MainMenu/MainMenu';
import './HomePage.css';
import colombara1 from '../../assets/images/colombara1.jpg';
import colombara2 from '../../assets/images/colombara2.jpg';

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [colombara1, colombara2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-page">
      <MainMenu />
      <div className="image-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Colombara ${index + 1}`}
            className={`slider-image ${index === currentImage ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="content">
        <h1>Anndrea & Christian</h1>
        <h2>21. juni 2025</h2>
        <p>Vi gifter oss i Italia!</p>
      </div>
    </div>
  );
};

export default HomePage; 