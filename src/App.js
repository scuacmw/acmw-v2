import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Board from './pages/Board';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Newsletter from './pages/Newsletter';
import H4H from './pages/H4H';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="app-main">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/h4h" element={<H4H/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
