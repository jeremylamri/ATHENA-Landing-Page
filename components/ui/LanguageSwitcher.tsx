import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    return (
        <div className="flex items-center p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            {['fr', 'en'].map((lang) => {
                const isActive = i18n.language === lang;
                return (
                    <button
                        key={lang}
                        onClick={() => i18n.changeLanguage(lang)}
                        className={`relative px-3 py-1.5 text-xs font-medium transition-colors rounded-full ${isActive ? 'text-accent' : 'text-white/50 hover:text-white/80'
                            }`}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="active-lang"
                                className="absolute inset-0 bg-white/10 rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{lang.toUpperCase()}</span>
                    </button>
                );
            })}
        </div>
    );
};
