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
        <div className="color-block blue-block"></div>
        <div className="color-block yellow-block"></div>
        <div className="color-block red-block"></div>
        <div className="color-block cyan-block"></div>

        {/* Text content */}
        <div className="text-content"><div className="nombre-categoria-negro">
          {("Humor Negro").split(' ').map((palabra, index) => (
            <div key={index} className="palabra-categoria">{palabra}</div>
          ))}
        </div>
          <span className='descripcion-home-negro'>" LLEVA EL HUMOR NEGRO <span>
            <br /></span>Y EL SARCÁSMO AL LÍMITE "</span>

          <div className="nombre-categoria-ajena">
            {("Vergüenza Ajena").split(' ').map((palabra, index) => (
              <div key={index} className="palabra-categoria">{palabra}</div>
            ))}
          </div>
          <span className='descripcion-home-ajena'>" SITUACIONES EMBARAZOSAS <span>
            <br /></span>O RIDÍCULAS "</span>

          <div className="nombre-categoria-filtro">
            {("Sin Filtro").split(' ').map((palabra, index) => (
              <div key={index} className="palabra-categoria">{palabra}</div>
            ))}
          </div>
          <span className='descripcion-home-filtro'>" RESPUESTAS ABSURDAS <span>
            <br /></span>O PROVOCADORAS "</span>

          <div className="nombre-categoria-fiesta">
            Fiesta Y<br />
            {("Descontrol").split(' ').map((palabra, index) => (
              <div key={index} className="palabra-categoria">{palabra}</div>
            ))}
          </div>
          <span className='descripcion-home-fiesta'>" CAOS SOCIAL <span>
            <br /></span>Y HUMOR NOCTURNO "</span>

          <div className="nombre-categoria-gorrino">
            A Lo<br />
            {("Gorrino").split(' ').map((palabra, index) => (
              <div key={index} className="palabra-categoria">{palabra}</div>
            ))}
          </div>
          <span className='descripcion-home-gorrino'>" SITUACIONES <span>
            <br /></span>SUBIDITAS DE TONO "</span>

        </div>
      </div>
    </div>
  );
};

export default Home;