import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/LOGO.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <button
        className={`nav-toggle ${menuOpen ? 'nav-toggle-open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={menuOpen ? 'nav-menu nav-menu-open' : 'nav-menu'}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/board" onClick={() => setMenuOpen(false)}>Board</Link></li>
        <li><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
        <li><Link to="/resources" onClick={() => setMenuOpen(false)}>Resources</Link></li>
        <li><Link to="/newsletter" onClick={() => setMenuOpen(false)}>Newsletter</Link></li>
        <li>
          <a href="https://hackforhumanity.io/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>H4H</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
