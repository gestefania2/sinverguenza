import Navbar from '../../components/navbar/Navbar';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/selecciondejugadores');
  };

  return (
    <div 
      className="home-page"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {/* El Navbar no debería activar la navegación cuando se hace clic en él */}
      <div onClick={e => e.stopPropagation()}>
        <Navbar/>
      </div>

      {/* Main content with tilted blocks */}
      <div className="main-content">
        {/* Colored blocks */}
        <div className="color-block pink-block"></div>
        <span>22:00</span>
        <div className="color-block purple-block"></div>
        <div className="color-block green-block"></div>
        <div className="color-block orange-block"></div>

        {/* Text content */}
        <div className="text-content">
          <div className="artist-name rotate-neg-3">Humor Negro</div>
          <div className="artist-name rotate-pos-2">Verguenza Ajena</div>
          <div className="artist-name rotate-neg-1">Sin Filtro</div>
          <div className="artist-name rotate-pos-3">Fiesta y Descontrol</div>
          <div className="artist-name rotate-neg-2">A lo Gorrino</div>
        </div>
      </div>
    </div>
  );
};

export default Home;