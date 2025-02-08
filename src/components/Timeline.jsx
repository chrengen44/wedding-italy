import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const schedule = [
    {
      date: 'Thursday, September 5th',
      dayTitle: 'Welcome Day',
      events: [
        {
          time: '15:00 - 17:00',
          title: 'Villa Check-in',
          description: 'Arrive at our beautiful Italian villa and settle into your accommodation. Our staff will be ready to welcome you and assist with any needs.',
          location: 'Villa Main Reception'
        },
        {
          time: '19:00 - 22:00',
          title: 'Welcome Dinner',
          description: 'Join us for a relaxed evening of authentic Italian cuisine, wine, and getting to know fellow guests. Casual attire.',
          location: 'Villa Garden Terrace'
        }
      ]
    },
    {
      date: 'Friday, September 6th',
      dayTitle: 'Wedding Day',
      events: [
        {
          time: '09:00 - 11:00',
          title: 'Breakfast',
          description: 'Start your day with a delicious breakfast buffet at your leisure.',
          location: 'Villa Restaurant'
        },
        {
          time: '14:30',
          title: 'Guest Arrival & Seating',
          description: 'Please arrive at the ceremony location to be seated. Refreshments will be served.',
          location: 'Villa Garden'
        },
        {
          time: '15:00',
          title: 'Wedding Ceremony',
          description: "Join us as we exchange vows in the villa's enchanting garden setting.",
          location: 'Villa Garden'
        },
        {
          time: '15:45 - 17:30',
          title: 'Aperitivo & Photos',
          description: 'Enjoy champagne, Italian appetizers, and mingling while we take photos. Live music will be performed.',
          location: 'Villa Upper Terrace'
        },
        {
          time: '18:00 - 21:00',
          title: 'Reception Dinner',
          description: 'A seated dinner featuring a curated menu of Italian specialties, wine pairings, and toasts.',
          location: 'Villa Courtyard'
        },
        {
          time: '21:00 - Late',
          title: 'Dancing & Celebrations',
          description: 'Dance the night away under the stars with live music and entertainment.',
          location: 'Villa Courtyard'
        }
      ]
    },
    {
      date: 'Saturday, September 7th',
      dayTitle: 'Farewell Day',
      events: [
        {
          time: '09:30 - 11:30',
          title: 'Farewell Brunch',
          description: 'Join us for a relaxed brunch to share memories from the wedding and say goodbye.',
          location: 'Villa Restaurant'
        },
        {
          time: '12:00',
          title: 'Check-out',
          description: 'Time to bid farewell to the villa. Our staff will assist with departure arrangements.',
          location: 'Villa Reception'
        }
      ]
    }
  ];

  return (
    <div className="timeline-container">
      <h1>Wedding Weekend Schedule</h1>
      <div className="timeline">
        {schedule.map((day, dayIndex) => (
          <div key={dayIndex} className="timeline-day">
            <div className="day-header">
              <h2 className="day-title">{day.dayTitle}</h2>
              <h3 className="day-date">{day.date}</h3>
            </div>
            <div className="timeline-events">
              {day.events.map((event, eventIndex) => (
                <div key={eventIndex} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-time">{event.time}</div>
                    <h3 className="timeline-title">{event.title}</h3>
                    <p className="timeline-description">{event.description}</p>
                    <div className="timeline-location">{event.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 