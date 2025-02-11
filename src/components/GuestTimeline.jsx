import React from 'react';
import './GuestTimeline.css';
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa';

const GuestTimeline = () => {
  const guests = [
    {
      names: "Anndrea & Christian",
      arrival: "2024-06-16",
      departure: "2024-06-22"
    },
    {
      names: "Ann-Iren & Espen",
      arrival: "2024-06-16",
      departure: "2024-06-22"
    },
    {
      names: "Alisa & Eirik",
      arrival: "2024-06-16",
      departure: "2024-06-22"
    },
    {
      names: "Catharina",
      arrival: "2024-06-19",
      departure: "2024-06-22"
    },
    {
      names: "Mar & Stian",
      arrival: "2024-06-16",
      departure: "2024-06-22"
    },
    {
      names: "Gunnar & Ellen",
      arrival: "2024-06-19",
      departure: "2024-06-22"
    },
    {
      names: "Lasse & Jonas",
      arrival: "2024-06-19",
      departure: "2024-06-22"
    },
    {
      names: "Gro Hilde & Trond",
      arrival: "2024-06-19",
      departure: "2024-06-22"
    },
    {
      names: "Ida & André",
      arrival: "2024-06-19",
      departure: "2024-06-22"
    },
    {
      names: "Jaran",
      arrival: "2024-06-16",
      departure: "2024-06-22"
    },
    {
      names: "Johan",
      arrival: "2024-06-19",
      departure: "2024-06-22"
    },
  ];

  const startDate = new Date('2024-06-16');
  const endDate = new Date('2024-06-22');
  const days = ['Mon 16', 'Tue 17', 'Wed 18', 'Thu 19', 'Fri 20', 'Sat 21', 'Sun 22'];

  const calculatePosition = (date) => {
    const currentDate = new Date(date);
    const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
    const daysDiff = (currentDate - startDate) / (1000 * 60 * 60 * 24);
    return (daysDiff / totalDays) * 100;
  };

  return (
    <div className="guest-timeline-container">
      <h2>Oversikt over alle gjester</h2>
      
      <div className="timeline-header">
        {days.map((day, index) => (
          <div key={index} className="day-marker">{day}</div>
        ))}
      </div>

      <div className="guest-timelines">
        {guests.map((guest, index) => (
          <div key={index} className="guest-row">
            <div className="guest-name">{guest.names}</div>
            <div className="guest-timeline">
              <div 
                className="stay-line"
                style={{
                  left: `${calculatePosition(guest.arrival)}%`,
                  width: `${calculatePosition(guest.departure) - calculatePosition(guest.arrival)}%`
                }}
              />
              <div 
                className="arrival-icon"
                style={{ left: `${calculatePosition(guest.arrival)}%` }}
              >
                <FaPlaneArrival />
              </div>
              <div 
                className="departure-icon"
                style={{ left: `${calculatePosition(guest.departure)}%` }}
              >
                <FaPlaneDeparture />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestTimeline; 