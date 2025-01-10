import React, { useState, useEffect, useContext } from 'react';
import { getPlayer } from '../../api/apiPlayer';
import AnimatedArrows from '../../components/animations/AnimatedArrows';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
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
                        Bienvenido/a a Sinvergüenza, un juego que no te dejará indiferente... <br />
                        <span>"APTO SOLO PARA PERSONAS CON MUCHO ATREVIMIENTO"</span>
                    </p>
                </div>
            </div>
            <Link
                to="/seleccion-de-jugadores"
                className="no-underline hover:no-underline text-inherit"
                style={{ textDecoration: 'none' }}
            >
                <div className="content cursor-pointer hover:opacity-90 transition-opacity" style={{ color: textColor }}>
                    <div className="game-text">
                        <p>¿JUGAMOS</p>
                        <p>A SER UN POCO</p>
                        <p>SINVERGÜENZAS?</p>
                    </div>
                </div>
            </Link>
            <div className="arrows-container">
                <AnimatedArrows />
            </div>
        </div>
    );
};

export default Welcome;