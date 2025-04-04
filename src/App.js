import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TimelinePage from './components/TimelinePage';
import TravelInfoPage from './components/TravelInfoPage';
import GuestArrivalsPage from './components/GuestArrivalsPage';
import './App.css';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/program" element={<TimelinePage />} />
          <Route path="/travel" element={<TravelInfoPage/>} />
          <Route path="/ankomst-og-avreise" element={<GuestArrivalsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
