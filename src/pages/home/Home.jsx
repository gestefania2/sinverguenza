import Navbar from '../../components/navbar/Navbar';
import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <div className="home-page">
    <Navbar/>
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