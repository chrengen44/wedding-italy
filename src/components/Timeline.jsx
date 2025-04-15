import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const schedule = [
    {
      date: 'Mandag 16. juni',
      dayTitle: 'Velkomstdag',
      events: [
        {
          time: '08:00 - 11:00',
          title: 'Frokost',
          description: 'Start dagen med italiensk kaffe så sterk at du kan se inn i fremtiden.',
          location: 'Colombara'
        },
        {
          time: '14:00 - 20:00',
          title: 'Innsjekking på hotellet',
          description: 'Tid for å finne ut hvem som får rommet med utsikt og hvem som får utsikt til naboens klessnor.',
          location: 'Resepsjon'
        },
        {
          time: '19:30 - 22:00',
          title: 'Velkomstmiddag',
          description: 'La oss late som vi kan uttale "bruschetta" riktig mens vi nyter det italienske kjøkkenet.',
          location: 'Colombara'
        }
      ]
    },
    {
      date: 'Tirsdag 17. juni',
      dayTitle: 'Basseng-dag',
      events: [
        {
          time: '08:00 - 11:00',
          title: 'Frokost',
          description: 'Croissanter så ferske at de fortsatt drømmer om å være hvetemel.',
          location: 'Colombara'
        },
        {
          time: '11:00 - 16:00',
          title: 'Slappe av',
          description: 'Konkurranse i hvem som kan late som de ikke sov ved bassenget lengst. Solkrem er ikke valgfritt!',
          location: 'Colombara'
        },
        {
          time: '18:00 - 20:00',
          title: 'Pasta-middag',
          description: 'Lær kunsten å spinne pasta rundt gaffelen uten å sprute saus på naboen. Ekspert-nivå: gjør det med hvit skjorte.',
          location: 'Restauranten i svingen'
        }
      ]
    },
    {
      date: 'Onsdag 18. juni',
      dayTitle: 'Vinsmaking & chill',
      events: [
        {
          time: '08:00 - 11:00',
          title: 'Frokost',
          description: 'Prøv å ikke forveksle juice-glasset med gårsdagens vinglass.',
          location: 'Colombara'
        },
        {
          time: '11:30 - 15:30',
          title: 'Basseng-dag',
          description: 'Perfekt tid for å øve på den italienske kunsten å sole seg mens du later som du ikke er solbrent.',
          location: 'Bassenget'
        },
        {
          time: '15:00 - 16:30',
          title: 'Vinparingsmiddag',
          description: 'Lær å nikke anerkjennende til vinen mens du later som du kjenner smaken av "jordlige toner og hint av lær".',
          location: 'Luretta'
        }
      ]
    },
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
          title: 'Bassengfest',
          description: 'Morgenbad for de modige, kaffe-først for de kloke. Ingen poeng for bomben i bassenget!',
          location: 'Villa Bassenget'
        },
        {
          time: '18:00 - 21:00',
          title: 'Middag',
          description: 'Velkommen til nye gjester! La oss late som vi ikke har vært her og slappet av hele uken.',
          location: 'Colombara'
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
          description: 'Nervøs for bryllupet? Spis en croissant. Fortsatt nervøs? Spis ti til.',
          location: 'Colombara'
        },
        {
          time: '16:00 - 17:30',
          title: 'Bryllupsøvelse',
          description: 'Ja vi må vel kanskje øve litt?.',
          location: 'Bryllupsstedet'
        },
        {
          time: '19:00 - 22:00',
          title: 'Øvelsesmiddag',
          description: 'Generalprøve på å spise pent. Husk: dette er den middagen der du kan søle uten at det kommer på bryllupsbildene.',
          location: 'Villa Hagen'
        }
      ]
    },
    {
      date: 'Lørdag 21. juni',
      dayTitle: 'Bryllupsdag',
      events: [
        {
          time: '08:00 - 11:00',
          title: 'Frokost',
          description: 'Den store dagen er her! Spis godt, for neste måltid er når fotografen er ferdig (cirka 2025).',
          location: 'Colombara'
        },
        {
          time: '15:00 - 16:00',
          title: 'Bryllupsseremoni',
          description: 'Det magiske øyeblikket der vi alle later som vi ikke gråter (igjen), mens vi prøver å ikke nyse under løftene.',
          location: 'Bryllupsstedet'
        },
        {
          time: '16:00 - 17:00',
          title: 'Aperitifs & Mingling',
          description: 'Tid for å ta 500 "spontane" bilder mens fotografen prøver å få alle til å se naturlige ut.',
          location: 'Colombara'
        },
        {
          time: '17:00 - Sen kveld',
          title: 'Bryllupsfest',
          description: 'La dansen begynne! Først elegant vals, senere Macarena. Du vet hvordan dette ender.',
          location: 'Villa Hagen & Ballsalen'
        },
        {
          time: '19:00 - 22:00',
          title: 'Bryllupsmiddag',
          description: 'Bryllupsmiddag for alle gjester.',
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