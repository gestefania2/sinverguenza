/* pages/PlayerSelection.css */
import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
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
      <h1 className="title">sinvergüenza</h1>
      
      <div className="content">
        <h2 className="subtitle">
          <span className="purple">n</span>
          <span className="blue">ú</span>
          <span className="yellow">m</span>
          <span className="red">e</span>
          <span className="green">r</span>
          <span className="purple">o</span>
          {" "}
          <span className="blue">d</span>
          <span className="yellow">e</span>
          <br />
          <span className="red">j</span>
          <span className="green">u</span>
          <span className="purple">g</span>
          <span className="blue">a</span>
          <span className="yellow">d</span>
          <span className="red">o</span>
          <span className="green">r</span>
          <span className="purple">e</span>
          <span className="blue">s</span>
        </h2>

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
      </div>
    </div>
  );
};

export default PlayerSelection;