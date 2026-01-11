import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 transition-all duration-300 ease-in-out font-medium tracking-wide uppercase text-xs sm:text-sm";
  
  const variants = {
    primary: "bg-gold-400 text-white hover:bg-gold-500 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline: "border border-brown-800 text-brown-800 hover:bg-brown-800 hover:text-white",
    white: "bg-white text-brown-800 hover:bg-beige-100 shadow-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;