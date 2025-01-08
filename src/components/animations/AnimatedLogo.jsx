import React from 'react';
import './AnimatedLogo.css';

const AnimatedLogo = ({ size = 'md', onClick, className = '' }) => {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  };

  return (
    <div 
      className={`relative cursor-pointer ${className}`}
      onClick={onClick}
    >
      <img 
        src="/open-eyes.png"
        alt="Logo"
        className={`${sizes[size]} transition-opacity duration-300 absolute top-0 left-0 wink-animation`}
      />
      <img 
        src="/winking.png"
        alt="Logo winking"
        className={`${sizes[size]} transition-opacity duration-300 absolute top-0 left-0 wink-animation-reverse`}
      />
    </div>
  );
};

export default AnimatedLogo;