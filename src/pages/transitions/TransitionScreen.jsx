import React from 'react';
import AnimatedLogo from '../../components/animations/AnimatedLogo';
import './TransitionScreen.css';

const TransitionScreen = ({ onContinue }) => {
  return (
    <div className="transition-screen">
      <div className="transition-content">
        <AnimatedLogo size="lg" className="transition-logo" />
        <button 
          onClick={onContinue}
          className="continue-button"
        >
          Clicka para ver las respuestas
        </button>
      </div>
    </div>
  );
};

export default TransitionScreen;