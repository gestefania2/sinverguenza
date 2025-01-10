import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/buttons/GenericButton';
import useLocalStorage from '../../hooks/useLocalStorage';
import getQuestionAndAnswerByCategory from '../../api/apiGame.js';
import { categoryColors } from '../../constants/categoryColors.js';
import TransitionScreen from '../transitions/TransitionScreen';
import './Game.css';

const Game = () => {
    const INITIAL_DISPLAYED_ANSWERS = 5;
    const navigate = useNavigate();
    const [gameData, setGameData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory] = useLocalStorage('selectedCategory', null);
    const [numberOfPlayers] = useLocalStorage('numberOfPlayers', 3);
    const [displayedAnswers, setDisplayedAnswers] = useState([]);
    const [reserveAnswers, setReserveAnswers] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [showTransition, setShowTransition] = useState(false);
    const [showingResults, setShowingResults] = useState(false);

    const fetchGameData = async () => {
        try {
            setIsLoading(true);
            const data = await getQuestionAndAnswerByCategory(selectedCategory, numberOfPlayers);

            if (!data || !data.question || !data.answers) {
                throw new Error('Datos incompletos recibidos de la API');
            }

            setDisplayedAnswers(data.answers.slice(0, INITIAL_DISPLAYED_ANSWERS));
            setReserveAnswers(data.answers.slice(INITIAL_DISPLAYED_ANSWERS));
            setGameData(data);
            setCurrentPlayer(1);
            setSelectedAnswers([]);
            setShowingResults(false);
            setShowTransition(false);

        } catch (err) {
            console.error('Error al cargar los datos del juego:', err);
            setError(err.message || 'Error al cargar los datos');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (selectedCategory && numberOfPlayers) {
            fetchGameData();
        } else {
            setError('Falta categoría o número de jugadores');
        }
    }, [selectedCategory, numberOfPlayers]);

    const handleAnswerClick = (selectedAnswer, index) => {
        // Guardar la respuesta seleccionada
        setSelectedAnswers(prev => [...prev, selectedAnswer]);

        const newDisplayedAnswers = [...displayedAnswers];

        if (reserveAnswers.length > 0) {
            const [newAnswer, ...remainingReserves] = reserveAnswers;
            newDisplayedAnswers[index] = newAnswer;
            setReserveAnswers(remainingReserves);
        } else {
            newDisplayedAnswers.splice(index, 1);
        }

        setDisplayedAnswers(newDisplayedAnswers);

        // Mostrar pantalla de transición
        setShowTransition(true);
    };

    const handleContinue = () => {
        const nextPlayer = currentPlayer + 1;
        
        if (nextPlayer > numberOfPlayers) {
            // Si todos los jugadores han respondido, mostrar resultados
            setShowingResults(true);
        } else {
            // Preparar para el siguiente jugador
            setCurrentPlayer(nextPlayer);
        }
        
        setShowTransition(false);
    };

    const handlePlayAgain = () => {
        fetchGameData();
    };

    const handleChangeCategory = () => {
        navigate('/seleccion-de-categoria');
    };

    if (isLoading) return (
        <div className="game-container">
            <div className="content-wrapper">
                <div className="loading-text">Cargando juego...</div>
            </div>
        </div>
    );

    if (error) return (
        <div className="game-container">
            <div className="content-wrapper">
                <div className="error-text">Error al cargar el juego: {error}</div>
            </div>
        </div>
    );

    if (!gameData) return (
        <div className="game-container">
            <div className="content-wrapper">
                <div className="error-text">No hay datos disponibles</div>
            </div>
        </div>
    );

    return (
        <>
            {showTransition ? (
                <TransitionScreen onContinue={handleContinue} />
            ) : (
                <div
                    className="game-container"
                style={{
                    backgroundColor: categoryColors[gameData.question.Category.category_name.toLowerCase()] || '#000000',
                    color: 'white'
                }}
            >
                <div className="content-wrapper">
                    <div className="game-logo">
                        <Link to="/">
                            <img
                                src="/logo_blanco_s.png"
                                alt="Sinvergüenza"
                                className="logo-image"
                            />
                        </Link>
                    </div>
                    <div className="question">
                        <div className="question-title">
                            "{gameData.question.text || ""}"
                        </div>
                    </div>
                    <div className='response-list'>
                        <h3 className="responses-title">
                            {showingResults ? (
                                'Respuestas seleccionadas:'
                            ) : (
                                `Jugador ${currentPlayer}, escoge tu respuesta, apúntala en un papel y clíckala:`
                            )}
                        </h3>
                        <ul className="responses">
                            {showingResults ? (
                                // Mostrar las respuestas seleccionadas
                                selectedAnswers.map((answer, index) => (
                                    <li
                                        key={`selected-${answer.card_id}`}
                                        className="response-item selected"
                                    >
                                        <span>JUGADOR {index + 1}: </span>{answer.text}
                                    </li>
                                ))
                            ) : (
                                // Mostrar las opciones disponibles
                                displayedAnswers.map((answer, index) => (
                                    <li
                                        key={answer.card_id}
                                        onClick={() => handleAnswerClick(answer, index)}
                                        className="response-item"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {answer.text}
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                    {showingResults && (
                        <div className="end-game-buttons">
                            <Button
                                id="play-again"
                                onClick={handlePlayAgain}
                            >
                                Jugar otra vez
                            </Button>
                            <Button
                                id="change-category"
                                onClick={handleChangeCategory}
                            >
                                Cambiar categoría
                            </Button>
                        </div>
                    )}
                </div>
                <div className="game-footer">
                    {(gameData.question.Category.category_name || "JUEGO").toUpperCase()}
                </div>
            </div>
            )}
        </>
    );
};

export default Game;