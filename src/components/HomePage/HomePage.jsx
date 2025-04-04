import React, { useState, useEffect } from 'react';
import MainMenu from '../MainMenu/MainMenu';
import './HomePage.css';
import colombara1 from '../../assets/images/colombara1.jpg';
import colombara2 from '../../assets/images/colombara2.jpg';
import forside1 from '../../assets/images/forside1.jpeg';
import forside2 from '../../assets/images/forside2.jpeg';
import forside3 from '../../assets/images/forside3.jpeg';
import forside4 from '../../assets/images/forside4.jpeg';
import forside5 from '../../assets/images/forside5.jpeg';

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [forside1, forside2, forside3, forside4, forside5, colombara1, colombara2];

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
            alt={`Wedding ${index + 1}`}
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