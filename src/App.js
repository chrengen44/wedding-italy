import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TimelinePage from './components/TimelinePage';
import './App.css';
import TravelInfoPage from './components/TravelInfoPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path='/travel' element={<TravelInfoPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
