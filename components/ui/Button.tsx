import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-black";

  const variants = {
    primary: "bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.15)] relative overflow-hidden group",
    secondary: "glass-panel text-white hover:bg-white/10 hover:border-white/20 border border-white/10",
    ghost: "text-white/70 hover:text-white bg-transparent hover:bg-white/5"
  };

  const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`${baseStyle} ${variants[variant]} ${className} ${disabledStyle}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-[150%] skew-x-12 group-hover:animate-[shine_1s_ease-in-out] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10 w-full h-full" />
      )}
      <span className="relative z-20 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};