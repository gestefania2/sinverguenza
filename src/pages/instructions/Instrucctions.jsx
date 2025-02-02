import React from 'react';
import './Instructions.css';
import Button from '../../components/buttons/GenericButton';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AnimatedArrows from '../../components/animations/AnimatedArrows';
import Navbar from '../../components/navbar/Navbar';


const Instructions = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/seleccion-de-jugadores');
    };

    return (
        <>
            <Navbar />
        <div className="container">
            <div className="card">

                {/* Main content */}
                <div>
                    <h2 className="title-instrucctions">
                        INSTRUCCIONES DE JUEGO
                    </h2>

                    <div>
                        <h3 className="subtitle1">
                            Dinámica del juego
                        </h3>
                        <ul className="instructions-list1">
                            <li className="instruction-item">
                                El juego se basa en preguntas y respuestas. A los jugadores se os plantea
                                una carta pregunta aleatoria a la que cada uno tendréis que contestar con una carta respuesta. Se podrá elegir una sola carta respuesta entre 5
                                opciones que te da el juego.
                            </li>
                            <li className="instruction-item">
                                La respuesta escogida se tendrá que apuntar en un papel y después clickarla en el
                                móvil. Acto seguido, pasaréis el móvil al siguiente jugador,
                                así hasta que todos los jugadores hayais respondido. 
                            </li>
                            <li className="instruction-item">
                                Una vez hayais respondido todos, tendréis que votar la respuesta ganadora. Podréis valorar en función de cual os ha parecido la más loca, graciosa u original.
                            </li>
                        </ul>
                        <h3 className="subtitle2">
                            Determinación de Turnos
                        </h3>
                        <ul className="instructions-list1">
                            <li className="instruction-item">
                                Antes de empezar, tendréis que establecer el turno de juego. Para ello, 
                                podéis coger dos dados, la suma de la tirada os dará el orden de turno, y sino pues al tun-tún.
                            </li>
                            <li className="instruction-item">
                                El primer jugador será el primero en escoger una carta respuesta de entre las 5 posibles.
                            </li>
                            <li className="instruction-item">
                                Los turnos posteriores, se establecerán en base al ganador.
                                El ganador de cada partida será el primero en escoger carta en el siguiente juego y el turno continuará en el sentido de las agujas del reloj.
                            </li>
                            <li className="instruction-item">
                                Si quieres crear tu propio juego tendrás que logearte o registrarte <Link className='link-aqui' to="/login">aquí.</Link>
                                
                            </li>
                        </ul>
                    </div>
                    <div className='button-jugamos'>
                        <Button
                            id="start-game-button"
                            onClick={handleClick}
                        >
                            ¿sinvergüenceamos?

                        </Button>
                        <div className="arrows-container-instructions">
                        <AnimatedArrows /> 
                        </div>
                    </div>


                </div>
            </div>

        </div>
        </>
    );
};


export default Instructions;