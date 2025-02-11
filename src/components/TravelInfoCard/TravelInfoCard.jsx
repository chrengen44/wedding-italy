import React from 'react';
import './TravelInfoCard.css'

const TravelInfoCard = ({icon, description, mapslink, title}) => {
    return (
        <div className="travel-card-info">
            <div className="card-content">
                <div className="icon">{icon}</div>
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
                <a href={mapslink} target="_blank" rel="noopener noreferrer" className="mapslink">
                    Åpne i kart
                </a>
            </div>
        </div>
    );
};

export default TravelInfoCard;