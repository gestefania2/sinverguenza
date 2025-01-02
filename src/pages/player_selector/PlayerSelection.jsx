import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './PlayerSelection.css';

const PlayerSelection = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useLocalStorage('numberOfPlayers', 3);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/game');
  };

  return (
    <div className="player-selection-container">

      <div className="content">
        <h1 className="title">
          <span style={{ color: '#000000' }}>n</span>
          <span style={{ color: '#dbb736' }}>ú</span>
          <span style={{ color: '#000000' }}>m</span>
          <span style={{ color: '#dc429e' }}>e</span>
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
          <span style={{ color: '#dc429e' }}>o</span>
          <span style={{ color: '#000000' }}>r</span>
          <span style={{ color: '#dbb736' }}>e</span>
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
      </div>
    </div>
  );
};

export default PlayerSelection;