import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  text: string;
  to: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  to,
  variant = 'primary',
  className = '',
}) => {
  const baseStyles = 'btn';
  const variantStyles = {
    primary: 'btn-primary rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg',
    secondary: 'btn-secondary rounded-full',
    outline: 'btn-outline rounded-full',
  };

  // Check if the link is external
  const isExternal = to.startsWith('http');

  if (isExternal) {
    return (
      <a
        href={to}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  return (
    <Link to={to} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {text}
    </Link>
  );
};

export default CTAButton;