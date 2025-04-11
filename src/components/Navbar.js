import { useState } from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-container">
      <nav>
        <div className="nav-logo">
          <NavLink to="/" end>
            <img src="../../Papillon_Cafe_Logo.png" alt="Papillon Cafe Logo" className="logo"/>
          </NavLink>
        </div>

        {/* small screen */}
        <button 
          className="hamburger-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>

        {/* big scrren */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" end onClick={() => setIsOpen(false)}><h4>Home</h4></NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}><h4>About</h4></NavLink>
          <NavLink to="/coffee" onClick={() => setIsOpen(false)}><h4>Our Coffee</h4></NavLink>
          <NavLink to="/menu" onClick={() => setIsOpen(false)}><h4>Menu</h4></NavLink>
          <NavLink to="/findus" onClick={() => setIsOpen(false)}><h4>Find us</h4></NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}><h4>Contact</h4></NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;