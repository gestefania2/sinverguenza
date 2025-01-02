import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import HelloPlayer from '../../components/player_profile/HelloPlayer';
import '../../pages/user_home/Welcome.css';
const Welcome = () => {
  const [textColor, setTextColor] = useState('#5e17eb'); // Default purple color
  
  const colorOptions = [
    { name: 'Yellow', value: '#dbb736' },
    { name: 'Blue', value: '#5e17eb' },
    { name: 'Green', value: '#21a41d' },
    { name: 'Pink', value: '#dc429e' }
  ];

  return (
    <div className="welcome-container">
      <Navbar />
      <div className="welcome-content">
        <div className="header">
          <HelloPlayer />
        </div>

        <div className="content" style={{ color: textColor }}>
          <div className="color-picker">
            <p>Selecciona un color:</p>
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

          <div className="game-text">
            <p>¿JUGAMOS</p>
            <p>A SER UN POCO</p>
            <p>SINVERGÜENZAS?</p>
          </div>

          <AnimatedArrows />

          <p className="brand">sinvergüenza</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
