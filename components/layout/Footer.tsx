import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white/50">
          &copy; {new Date().getFullYear()} Tomorrow Theory. Tous droits réservés.
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-right">
          <a href="https://www.tomorrowtheory.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
            Découvrez Tomorrow Theory, le studio de l'innovation RH
          </a>
          <a href="mailto:general@tomorrowtheory.com" className="text-white/50 hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};