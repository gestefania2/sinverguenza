import './Navbar.css';
import React, { useState, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Create a context for the color
export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [textColor, setTextColor] = useState('#5e17eb');
  return (
    <ColorContext.Provider value={{ textColor, setTextColor }}>
      {children}
    </ColorContext.Provider>
  );
};

const Navbar = ({ showLogo = true }) => {  // Añadida la prop showLogo con valor por defecto true
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = localStorage.getItem('authToken') !== null;
  const { textColor, setTextColor } = useContext(ColorContext);

  const colorOptions = [
    { name: 'Yellow', value: '#FBBF24' },
    { name: 'Blue', value: '#5e17eb' },
    { name: 'Green', value: '#21a41d' },
    { name: 'Pink', value: '#e6007e' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authPlayerId');
  };

  return (
    <nav className="navbar">
  <div className={`navbar-container ${!showLogo ? 'navbar-container--no-logo' : ''}`}>
        {showLogo && (  // por defecto, muestra el logo si showLogo es verdadero
          <Link to="/" >
            <img
              className='logo'
              src="/logo_negro_s.png"
              alt="Sinvergüenza"
            />
          </Link>
        )}

        <button onClick={toggleMenu} className="hamburger-button">
          <span className={`hamburger-line ${isOpen ? 'line-1-active' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'line-2-active' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'line-3-active' : ''}`}></span>
        </button>

        {isOpen && (
          <div className="menu-overlay">
            <div className="menu-content">
              {!isAuthenticated ? (
                <>
                  <Link to="/login" className="menu-item" onClick={toggleMenu}>
                    LOGIN
                  </Link>
                  <Link to="/selecciondejugadores" className="menu-item" onClick={toggleMenu}>
                    JUGAR A SER "SINVERGÜENZA"
                  </Link>
                  <Link to="/instrucciones" className="menu-item" onClick={toggleMenu}>
                    INSTRUCCIONES
                  </Link>
                </>
              ) : (
                <>
                  <div className="color-picker menu-section">
                    <div className="color-options">
                      {colorOptions.map((color) => (
                        <button
                          key={color.name}
                          className="color-button"
                          style={{ backgroundColor: color.value }}
                          onClick={() => setTextColor(color.value)}
                          aria-label={`Select ${color.name}`}
                        />
                      ))}
                    </div>
                  </div>
                  <Link to="/miperfil" className="menu-item" onClick={toggleMenu}>
                    MI PERFIL
                  </Link>
                  <Link to="/miscartas" className="menu-item" onClick={toggleMenu}>
                    MIS CARTAS/CATEGORÍAS
                  </Link>
                  <Link to="/juegomiscartas" className="menu-item" onClick={toggleMenu}>
                    JUGAR "MIS CARTAS"
                  </Link>
                  <Link to="/selecciondejugadores" className="menu-item" onClick={toggleMenu}>
                    JUGAR A SER "SINVERGÜENZA"
                  </Link>
                  <Link to="/instrucciones" className="menu-item" onClick={toggleMenu}>
                    INSTRUCCIONES
                  </Link>
                  <Link to="/" className="menu-item" onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}>
                    CERRAR SESIÓN
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;