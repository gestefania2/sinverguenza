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
        <Navbar />
      </div>

      {/* Main content with tilted blocks */}
      <div className="main-content">
        {/* Colored blocks */}
        <div className="color-block pink-block"></div>
        <div className="color-block purple-block"></div>
        <div className="color-block green-block"></div>
        <div className="color-block orange-block"></div>

        {/* Text content */}
        <div className="text-content"><div className="nombre-categoria">
          {("Humor Negro").split(' ').map((palabra, index) => (
            <div key={index} className="palabra-categoria">{palabra}</div>
          ))}
        </div>

          <div className="nombre-categoria">
            {("Vergüenza Ajena").split(' ').map((palabra, index) => (
              <div key={index} className="palabra-categoria">{palabra}</div>
            ))}
          </div>

          <div className="nombre-categoria">
            {("Sin Filtro").split(' ').map((palabra, index) => (
              <div key={index} className="palabra-categoria">{palabra}</div>
            ))}
          </div>
          <div className="nombre-categoria">
            {("Fiesta y Descontrol").split(' ').map((palabra, index) => (
              <div key={index} className="palabra-categoria">{palabra}</div>
            ))}
          </div>
          <div className="nombre-categoria">
            {("A Lo Gorrino").split(' ').map((palabra, index) => (
              <div key={index} className="palabra-categoria">{palabra}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;