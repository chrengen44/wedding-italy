import React from 'react';
import './HomePage.css';
import MainMenu from './MainMenu/MainMenu';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import forside1 from '../assets/images/forside1.jpeg';

// Import your images here
// Example:
// import image1 from '../assets/images/wedding1.jpg';
// import image2 from '../assets/images/wedding2.jpg';
// import image3 from '../assets/images/wedding3.jpg';

const HomePage = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  // Replace this array with your imported images
  const images = [forside1];

  return (
    <>
      <MainMenu />
      <div className="home-container">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="names">Anndrea & Christian</h1>
            <p className="wedding-date">Bli med oss på vår spesielle dag</p>
            <p className="location">Italia, juni 2024</p>
          </div>
        </div>

        <div className="photo-carousel-section">
          <Slider {...carouselSettings}>
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`Wedding preview ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="content-section">
          <div className="info-card welcome-message">
            <h2>Vårt Bryllup</h2>
            <p>Vi gifter oss i vakre Italia!</p>
            <p className="welcome-text">
              Kjære familie og venner,<br/><br/>
              Vi er begeistret for å dele vår spesielle dag med dere i det vakre Italia. 
              Vårt bryllup vil være en intim feiring med våre nærmeste, omgitt av 
              pittoreske italienske landskap, deilig mat og vin, og selvfølgelig - masse kjærlighet og glede.<br/><br/>
              På denne nettsiden vil dere finne all informasjon dere trenger om bryllupet, 
              inkludert program, reiseinformasjon og praktiske detaljer.
            </p>
          </div>

          <div className="info-cards-grid">
            <div className="info-card">
              <h3>Seremonien</h3>
              <p>6. september 2024<br/>15:00<br/>Villa Garden</p>
            </div>
            <div className="info-card">
              <h3>Mottagelsen</h3>
              <p>6. september 2024<br/>18:00<br/>Villa Courtyard</p>
            </div>
            <div className="info-card">
              <h3>Dress Code</h3>
              <p>Formelt<br/>Garden Party Attire</p>
            </div>
            <div className="info-card">
              <h3>Overnatting</h3>
              <p>Villa innkvartering<br/>Mer informasjon kommer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
