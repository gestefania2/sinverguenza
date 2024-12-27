import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#" className="logo">Sinvergüenza</a>

        {/* Hamburger button */}
        <button onClick={toggleMenu} className="hamburger-button">
          <span className={`hamburger-line ${isOpen ? 'line-1-active' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'line-2-active' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'line-3-active' : ''}`}></span>
        </button>

        {/* Overlay Menu */}
        {isOpen && (
          <div className="menu-overlay">
            <div className="menu-content">
              <a href="#" className="menu-item">LOGIN</a>
              <a href="#" className="menu-item">MIS CARTAS</a>
              <a href="#" className="menu-item">JUGAR CON MIS CARTAS</a>
              <a href="#" className="menu-item">JUGAR A SINVERGÜENZA</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;