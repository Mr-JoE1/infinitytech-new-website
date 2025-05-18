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
  textColor = 'text-white',
  secondaryTextColor = 'text-gray-200',
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
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
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
        <span className={`${textSizes[size]} font-bold tracking-tight ${textColor}`}>
          Infinity <span className={secondaryTextColor}>Technologies</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
