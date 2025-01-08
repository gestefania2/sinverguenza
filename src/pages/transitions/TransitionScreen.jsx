import React from 'react';
import AnimatedLogo from './AnimatedLogo';

const TransitionScreen = ({ onContinue }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
      <div className="transition-transform hover:scale-105 duration-300">
        <AnimatedLogo 
          size="lg"
          onClick={onContinue}
          className="text-white"
        />
      </div>
      <button 
        onClick={onContinue}
        className="mt-8 text-white text-xl hover:text-gray-300 transition-colors duration-300"
      >
        Clicka para ver las respuestas
      </button>
    </div>
  );
};

export default TransitionScreen;