import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const schedule = [
    {
      date: 'Søndag 15. juni',
      dayTitle: 'Velkomstdag',
      events: [
        {
          time: '14:00 - 18:00',
          title: 'Innsjekking i villaen',
          description: 'Tidlig ankomne gjester kan sjekke inn i villaen og gjøre seg komfortable.',
          location: 'Villa Resepsjon'
        },
        {
          time: '19:30 - 22:00',
          title: 'Velkomstmiddag',
          description: 'Uformell middag for tidlig ankomne gjester med lokale italienske spesialiteter.',
          location: 'Villa Hagen'
        }
      ]
    },
    {
      date: 'Mandag 16. juni',
      dayTitle: 'Utforskningsdag',
      events: [
        {
          time: '10:00 - 14:00',
          title: 'Byutforskning',
          description: 'Guidet tur i den lokale byen og dens historiske steder.',
          location: 'Møt ved Villa Inngangen'
        },
        {
          time: '19:00 - 21:00',
          title: 'Gruppemiddag',
          description: 'Middag på en tradisjonell italiensk restaurant i byen.',
          location: 'Restaurant (bekreftes senere)'
        }
      ]
    },
    {
      date: 'Tirsdag 17. juni',
      dayTitle: 'Stranddag',
      events: [
        {
          time: '11:00 - 16:00',
          title: 'Strandtur',
          description: 'Dagstur til den vakre lokale stranden med lunsj inkludert.',
          location: 'Møt ved Villa Parkeringen'
        },
        {
          time: '20:00 - 23:00',
          title: 'Pizzakveld',
          description: 'Lær å lage autentisk italiensk pizza med vår lokale kokk.',
          location: 'Villa Kjøkkenet'
        }
      ]
    },
    {
      date: 'Onsdag 18. juni',
      dayTitle: 'Vinsmaking',
      events: [
        {
          time: '11:30 - 15:30',
          title: 'Vingårdstur',
          description: 'Besøk til lokale vingårder med vinsmaking og lunsj.',
          location: 'Møt ved Villa Inngangen'
        },
        {
          time: '19:00 - 22:00',
          title: 'Vinparingsmiddag',
          description: 'Spesiell middag med viner fra dagens tur.',
          location: 'Villa Spisesalen'
        }
      ]
    },
    {
      date: 'Torsdag 19. juni',
      dayTitle: 'Avslappingsdag',
      events: [
        {
          time: '10:00 - 12:00',
          title: 'Bassengfest',
          description: 'Avslappet morgen ved bassenget med forfriskninger.',
          location: 'Villa Bassenget'
        },
        {
          time: '18:00 - 21:00',
          title: 'Solnedgangsmiddag',
          description: 'Uformell grillmiddag med musikk og dans.',
          location: 'Villa Terrassen'
        }
      ]
    },
    {
      date: 'Fredag 20. juni',
      dayTitle: 'Bryllupsaften',
      events: [
        {
          time: '16:00 - 17:30',
          title: 'Bryllupsøvelse',
          description: 'Kort øvelse for bryllupsseremonien.',
          location: 'Bryllupsstedet'
        },
        {
          time: '19:00 - 22:00',
          title: 'Øvelsesmiddag',
          description: 'Elegant middag for alle gjester med taler og feiring.',
          location: 'Villa Hagen'
        }
      ]
    },
    {
      date: 'Lørdag 21. juni',
      dayTitle: 'Bryllupsdag',
      events: [
        {
          time: '15:00 - 16:00',
          title: 'Bryllupsseremoni',
          description: 'Den vakre bryllupsseremonien til Anndrea og Christian.',
          location: 'Bryllupsstedet'
        },
        {
          time: '17:00 - Sen kveld',
          title: 'Bryllupsmottagelse',
          description: 'Middag, dans og feiring utover natten.',
          location: 'Villa Hagen & Ballsalen'
        }
      ]
    },
    {
      date: 'Søndag 22. juni',
      dayTitle: 'Avreisedag',
      events: [
        {
          time: '10:00 - 12:00',
          title: 'Avskjedslunsj',
          description: 'Avslappet lunsj for å si farvel til alle gjester.',
          location: 'Villa Restauranten'
        },
        {
          time: '12:00 - 15:00',
          title: 'Utsjekking',
          description: 'Avreisehjelp og transportordninger.',
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