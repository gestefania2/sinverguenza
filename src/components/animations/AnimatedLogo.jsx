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
      className={`relative ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      <div className="isotipo-container">
        {/* Logo normal siempre visible */}
        <img 
          src="/logonormal.png"
          alt="isotipo normal"
          className="isotipo normal"
        />
        {/* Logo guiño aparece y desaparece */}
        <img 
          src="/logoguino.png"
          alt="isotipo guiño"
          className="isotipo wink"
        />
      </div>
    </div>
  );
};

export default AnimatedLogo;