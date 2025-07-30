
import React from 'react';

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const PixelButton: React.FC<PixelButtonProps> = ({ children, onClick, disabled, variant = 'primary', className = '' }) => {
  const baseClasses = 'px-4 py-3 text-sm sm:text-base text-white font-bold uppercase tracking-wider transition-all duration-150 ease-in-out transform disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-[4px_4px_0px_0px_#2563eb] hover:shadow-[2px_2px_0px_0px_#2563eb] active:translate-x-1 active:translate-y-1 active:shadow-none',
    secondary: 'bg-green-600 hover:bg-green-500 active:bg-green-700 shadow-[4px_4px_0px_0px_#16a34a] hover:shadow-[2px_2px_0px_0px_#16a34a] active:translate-x-1 active:translate-y-1 active:shadow-none',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default PixelButton;
