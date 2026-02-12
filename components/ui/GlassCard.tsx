import React from 'react';
import { motion } from 'framer-motion';
import { BaseProps } from '../../types';

interface GlassCardProps extends BaseProps {
  hoverEffect?: boolean;
  delay?: number;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = false,
  delay = 0,
  onClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={hoverEffect ? { y: -5, backgroundColor: 'rgba(255, 255, 255, 0.03)' } : {}}
      onClick={onClick}
      className={`glass-panel rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden transition-colors duration-300 print:shadow-none print:transform-none ${className}`}
    >
      <div className="relative z-10">
        {children}
      </div>
      {/* Subtle shine effect on top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
    </motion.div>
  );
};