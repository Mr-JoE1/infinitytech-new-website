import React from 'react';

const InfinityLogo: React.FC = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <g>
        {/* Infinity Symbol */}
        <path d="M40 100 C40 80, 60 60, 80 60 C100 60, 120 80, 120 100 C120 120, 100 140, 80 140 C60 140, 40 120, 40 100 Z" stroke="#E6007E" strokeWidth="10" fill="none" />
        <path d="M80 60 C100 60, 120 80, 120 100 C120 120, 100 140, 80 140 C60 140, 40 120, 40 100" stroke="#FFDD00" strokeWidth="10" fill="none" strokeDasharray="120" strokeDashoffset="120" />
        
        <path d="M160 100 C160 80, 140 60, 120 60 C100 60, 80 80, 80 100 C80 120, 100 140, 120 140 C140 140, 160 120, 160 100 Z" stroke="#E6007E" strokeWidth="10" fill="none" />
        <path d="M120 60 C100 60, 80 80, 80 100 C80 120, 100 140, 120 140 C140 140, 160 120, 160 100" stroke="#00AEEF" strokeWidth="10" fill="none" strokeDasharray="120" strokeDashoffset="120" />
        
        {/* Sun/Star element */}
        <circle cx="40" cy="60" r="10" fill="#FFDD00" />
        <path d="M35 50 L40 45 L45 50 M30 60 L25 60 L30 60 M35 70 L40 75 L45 70 M50 60 L55 60 L50 60" stroke="#FFDD00" strokeWidth="2" />
        
        {/* Arrow element */}
        <path d="M155 60 L160 55 L165 60" stroke="#00AEEF" strokeWidth="3" />
        <path d="M160 55 L160 80" stroke="#00AEEF" strokeWidth="3" />
        <rect x="150" y="50" width="20" height="20" stroke="#E6007E" strokeWidth="3" fill="none" />
      </g>
    </svg>
  );
};

export default InfinityLogo;
