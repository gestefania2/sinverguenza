import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './PlayerSelection.css';

const PlayerSelection = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useLocalStorage('numberOfPlayers', 3);


  return (
    <>
      <Navbar showLogo={false} />
      <div className="player-selection-container">

        <div className="content">
          <h1 className="title">
            <span style={{ color: '#000000' }}>n</span>
            <span style={{ color: '#FBBF24' }}>ú</span>
            <span style={{ color: '#000000' }}>m</span>
            <span style={{ color: '#e6007e' }}>e</span>
            <span style={{ color: '#000000' }}>r</span>
            <span style={{ color: '#5e17eb' }}>o</span>
            {" "}
            <span style={{ color: '#000000' }}>d</span>
            <span style={{ color: '#21a41d' }}>e</span>
            <br />
            <span style={{ color: '#000000' }}>j</span>
            <span style={{ color: '#21a41d' }}>u</span>
            <span style={{ color: '#000000' }}>g</span>
            <span style={{ color: '#5e17eb' }}>a</span>
            <span style={{ color: '#000000' }}>d</span>
            <span style={{ color: '#e6007e' }}>o</span>
            <span style={{ color: '#000000' }}>r</span>
            <span style={{ color: '#FBBF24' }}>e</span>
            <span style={{ color: '#000000' }}>s</span>


          </h1>

          <div className="select-container">
            <select
              value={numberOfPlayers}
              onChange={(e) => setNumberOfPlayers(Number(e.target.value))}
              className="player-select"
            >
              {[3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className='button-siguiente'>
            <Link to="/selecciondecategoria" className="next-link" >
              siguiente
            </Link>
          </div>
          <div className="footer-logo-jugadores">
            <Link to="/" >
              <img
                className='login-logo-jugadores'
                src="/logo_negro_s.png"
                alt="Sinvergüenza"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerSelection;