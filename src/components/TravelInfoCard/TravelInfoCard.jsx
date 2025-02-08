import React from 'react';
import './TravelInfoCard.css'


const TravelInfoCard = ({icon, description, mapslink}) => {
    return (
    <div className="travel-card-info">
        <div className="card-content">
            <div className="icon">{icon}</div>
            <div className="description">{description}</div>
            <div>
            <a href={mapslink}  type="button" className="mapslink">Open in maps</a>
            </div>
        </div> 
    </div>);
};

export default TravelInfoCard;