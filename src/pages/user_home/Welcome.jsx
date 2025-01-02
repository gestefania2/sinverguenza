import React, { useState } from 'react';
import HelloPlayer from '../../components/player_profile/HelloPlayer';
import { useNavigate } from 'react-router-dom';
import AnimatedArrows from '../../components/animations/AnimatedArrows';
import './Welcome.css';



const Welcome = () => {
    const navigate = useNavigate();
    const [textColor, setTextColor] = useState('#5e17eb'); // Default purple color

    const colorOptions = [

        { name: 'Yellow', value: '#dbb736' },
        { name: 'Blue', value: '#5e17eb' },
        { name: 'Green', value: '#21a41d' },
        { name: 'Pink', value: '#dc429e' }
    ];

    const handleUsuarioClick = () => {
        navigate('/perfildeusuario');
      };

    return (
        <div className="welcome-container">
            <div className="header">
                <HelloPlayer />
                <button className="menu-button">
                    <div className="menu-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
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
    );
};

export default Welcome;