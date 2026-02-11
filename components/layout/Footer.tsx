import React from 'react';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  onLegalClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  const { t } = useTranslation();
  return (
    <footer className="py-12 border-t border-white/10 bg-black text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white/50 flex flex-col md:flex-row gap-4 items-center">
          <span>&copy; {new Date().getFullYear()} Tomorrow Theory. {t('footer.rights')}</span>
          {onLegalClick && (
            <>
              <span className="hidden md:inline text-white/20">|</span>
              <button
                onClick={onLegalClick}
                className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4"
              >
                {t('footer.legal')}
              </button>
            </>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-right">
          <a href="https://www.tomorrowtheory.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
            {t('footer.studio')}
          </a>
          <a href="mailto:general@tomorrowtheory.com" className="text-white/50 hover:text-white transition-colors">
            {t('footer.contact')}
          </a>
        </div>
      </div>
    </footer>
  );
};