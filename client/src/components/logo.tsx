import React from 'react';
import InfinityLogo from './InfinityLogo';

interface LogoProps {
  showText?: boolean;
  textColor?: string;
  secondaryTextColor?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  showText = true,
  textColor = 'text-gray-900',
  secondaryTextColor = 'text-secondary',
  size = 'md',
  animated = true,
  className = '',
}) => {
  const logoSizes = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-16 w-auto',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const secondaryTextSizes = {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm',
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${animated ? 'infinity-logo-animate' : ''} ${logoSizes[size]}`}>
        <InfinityLogo />
      </div>
      
      {showText && (
        <div>
          <h1 className={`${textSizes[size]} font-bold tracking-tight ${textColor}`}>
            Infinity Technologies
          </h1>
          <p className={`${secondaryTextSizes[size]} ${secondaryTextColor}`}>
            Develop, Supply & Integrate
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
