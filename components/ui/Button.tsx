import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick,
  type = 'button'
}) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-black";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    secondary: "glass-panel text-white hover:bg-white/10 hover:border-white/20 border border-white/10",
    ghost: "text-white/70 hover:text-white bg-transparent hover:bg-white/5"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
};