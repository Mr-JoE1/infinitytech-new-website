import React from 'react';
import infinityLogoPath from '../assets/infinity-logo.png';

interface InfinityLogoProps {
  className?: string;
}

const InfinityLogo: React.FC<InfinityLogoProps> = ({ className = '' }) => {
  return (
    <img 
      src={infinityLogoPath} 
      alt="Infinity Technologies Logo" 
      className={`w-full h-full object-contain ${className}`}
    />
  );
};

export default InfinityLogo;
