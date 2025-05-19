import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const schedule = [

    {
      date: 'Torsdag 19. juni',
      dayTitle: 'Velkommen til nye gjester',
      events: [
        {
          time: '08:00 - 11:00',
          title: 'Frokost',
          description: 'Italiensk frokost: Der cappuccino etter klokken 11 er en større synd enn ananas på pizza.',
          location: 'Colombara'
        },
        {
          time: '10:00 - 12:00',
          title: 'Bassengfest, tennis og fritid',
          description: 'Morgenbad for de modige, kaffe-først for de kloke. Ingen poeng for bomben i bassenget!',
          location: 'Villa Bassenget'
        },
        {
          time: '18:00 - 21:00',
          title: 'Middag',
          description: 'La oss se hvem som blir skjelt ut for å bestille kaffe til pasta... denne gangen',
          location: 'La famiglia'
        }
      ]
    },
    {
      date: 'Fredag 20. juni',
      dayTitle: 'Dagen før dagen!',
      events: [
        {
          time: '08:00 - 11:00',
          title: 'Frokost',
          description: 'Frokost på hotellet, og opplading til dagen før dagen',
          location: 'Colombara'
        },
        {
          time: '16:00 - 17:30',
          title: 'Vinsmaking på Pogiarello ',
          description: 'Fabio tar oss imot og tar oss gjennom viner flere av dere allerede kjenner til, sammen med ost og spekemat',
          location: 'Pogiarello vineri'
        },
      ]
    },
    {
      date: 'Lørdag 21. juni',
      dayTitle: 'Bryllupsdag',
      events: [
        {
          time: '08:00 - 11:00',
          title: 'Frokost',
          description: 'Den store dagen er her!',
          location: 'Colombara'
        },
        {
          time: '15:00 - 16:00',
          title: 'Bryllupsseremoni',
          description: 'velsignelses sermoni i kirken',
          location: 'Pogiazzano kirke'
        },
        {
          time: '16:00 - 17:00',
          title: 'Aperitifs & Mingling',
          description: 'Tid for Aperol, øl, vin og aperitivo',
          location: 'Resturanten i svingen'
        },
        {
          time: '17:00 - Sen kveld',
          title: 'Bryllupsfest',
          description: 'bryllups middag vi sent vil glemme',
          location: 'Resturanten i svingen'
        },
        {
          time: '21:00 - 23:00',
          title: 'Bassengfest',
          description: 'Vi avslutter kvelden med fest ved bassenget',
          location: 'Colombara'
        }
      ]
    },
    {
      date: 'Søndag 22. juni',
      dayTitle: 'Avreisedag',
      events: [
        {
          time: '08:00 - 11:00',
          title: 'Frokost',
          description: 'Siste sjanse til å få i seg ekte italiensk kaffe før du må returnere til Norsk filterkaffe.',
          location: 'Colombara'
        },
        {
          time: '12:00 - 15:00',
          title: 'Utsjekking',
          description: 'Siste sjanse til å stjele med seg hotellsåpen og late som bagasjen ikke er 5 kilo tyngre av all vinen.',
          location: 'Villa Resepsjon'
        }
      ]
    }
  ];

  return (
    <div className="timeline-container">
      <h1>Program for Bryllupsuka</h1>
      <div className="timeline">
        {schedule.map((day, dayIndex) => (
          <div key={dayIndex} className="timeline-day">
            {dayIndex === 5 && (
              <div className="floating-hearts-container">
                <span className="floating-heart">♥</span>
                <span className="floating-heart">♥</span>
                <span className="floating-heart">♥</span>
              </div>
            )}
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