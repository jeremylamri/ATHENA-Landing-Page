import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    return (
        <div className="flex items-center p-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
            {['fr', 'en'].map((lang) => {
                const isActive = i18n.language === lang;
                return (
                    <button
                        key={lang}
                        onClick={() => i18n.changeLanguage(lang)}
                        className={`relative px-4 py-1.5 text-xs font-bold transition-colors rounded-full z-10 ${isActive ? 'text-white' : 'text-white/40 hover:text-white/70'
                            }`}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="active-lang"
                                className="absolute inset-0 bg-white/10 rounded-full border border-white/5 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10 tracking-widest">{lang.toUpperCase()}</span>
                    </button>
                );
            })}
        </div>
    );
};
