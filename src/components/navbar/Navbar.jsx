import './Navbar.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Ejemplo de verificación de autenticación - ajusta según tu lógica
  const isAuthenticated = localStorage.getItem('token') !== null;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo - siempre visible */}
        <Link to="/" className="logo">Sinvergüenza</Link>
        
        <button onClick={toggleMenu} className="hamburger-button">
          <span className={`hamburger-line ${isOpen ? 'line-1-active' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'line-2-active' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'line-3-active' : ''}`}></span>
        </button>

        {/* Menú condicional */}
        {isOpen && (
          <div className="menu-overlay">
            <div className="menu-content">
              {!isAuthenticated ? (
                // Menú para usuarios no autenticados
                <>
                  <Link to="/login" className="menu-item" onClick={toggleMenu}>
                    LOGIN
                  </Link>
                  <Link to="/sinverguenza" className="menu-item" onClick={toggleMenu}>
                    JUGAR A SER "SINVERGÜENZA"
                  </Link>
                  
                </>
              ) : (
                // Menú para usuarios autenticados
                <>
                  <Link to="/miperfil" className="menu-item" onClick={toggleMenu}>
                    MI PERFIL
                  </Link>
                  <Link to="/miscartas" className="menu-item" onClick={toggleMenu}>
                    MIS CARTAS/CATEGORÍAS
                  </Link>
                  <Link to="/miscartas" className="menu-item" onClick={toggleMenu}>
                    JUGAR "MIS CARTAS"
                  </Link>
                  <Link to="/juegosinverguenza" className="menu-item" onClick={toggleMenu}>
                    JUGAR A SER "SINVERGÜENZA"
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