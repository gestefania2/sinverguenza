import React, { useState, useEffect, useContext } from 'react';
import { getPlayer } from '../../api/apiPlayer';
import AnimatedArrows from '../../components/animations/AnimatedArrows';
import Navbar from '../../components/navbar/Navbar';
import { ColorContext } from '../../components/navbar/Navbar';
import './Welcome.css';

const Welcome = () => {
    const [playerData, setPlayerData] = useState({ player_name: '' });
    const { textColor } = useContext(ColorContext);

    useEffect(() => {
        async function getPlayerData() {
            try {
                const token = localStorage.getItem("authToken");
                const tokenParts = token.split('.');
                const payload = JSON.parse(atob(tokenParts[1]));
                const playerId = payload.player_id;
                
                const player = await getPlayer(playerId);
                setPlayerData(player);
            } catch (error) {
                console.error("Error:", error);
            }
        }
        getPlayerData();
    }, []);

    return (
        <div className="welcome-container">
            <Navbar />
            <div className="header">
                <div className="hello-player">
                    <h1 className='hello-player-name'>hola, {playerData.player_name}</h1>
                    <p style={{ color: textColor }}>
                        Bienvenido/a a Sinvergüenza un juego que no te dejará indiferente
                    </p>
                </div>
                <button className="menu-button">
                    <div className="menu-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>

            <div className="content" style={{ color: textColor }}>
                <div className="game-text">
                    <p>¿JUGAMOS</p>
                    <p>A SER UN POCO</p>
                    <p>SINVERGÜENZAS?</p>
                </div>
            </div>

            <div>
                <AnimatedArrows />
            </div>
        </div>
    );
};

export default Welcome;