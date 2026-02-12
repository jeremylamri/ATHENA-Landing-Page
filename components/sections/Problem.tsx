import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '../ui/GlassCard';
import { FileWarning, Layers, MapPinOff } from 'lucide-react';


import { usePrintMode } from '../PrintContext';

export const Problem: React.FC = () => {
  const { t } = useTranslation();
  const { isPrintMode } = usePrintMode();

  return (
    <section id="defi" className={`py-16 md:py-24 relative scroll-mt-24 md:scroll-mt-32 overflow-hidden ${isPrintMode ? 'bg-white text-black' : 'bg-black'} print:bg-white print:text-black`}>
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3 print:hidden" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 md:mb-16">
          <span className={`text-accent font-medium tracking-widest text-xs uppercase block mb-3 ${isPrintMode ? 'text-accent-700' : ''} print:text-accent-700`}>
            {t('problem.badge')}
          </span>
          <h2 className={`text-3xl md:text-5xl font-semibold mb-6 leading-tight ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>
            {t('problem.title')}
          </h2>
          <p className={`text-base md:text-lg ${isPrintMode ? 'text-slate-700' : 'text-white/60'} print:text-slate-700`}>
            {t('problem.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <GlassCard delay={0.1} hoverEffect className={`print:bg-slate-50 print:border-slate-200 print:shadow-none ${isPrintMode ? 'bg-slate-50 border-slate-200 shadow-none' : ''}`}>
            <FileWarning className={`w-8 h-8 mb-6 ${isPrintMode ? 'text-accent-700' : 'text-accent'} print:text-accent-700`} />
            <h3 className={`text-lg font-medium mb-3 ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('problem.cards.granularity.title')}</h3>
            <p className={`text-sm leading-relaxed ${isPrintMode ? 'text-slate-600' : 'text-white/60'} print:text-slate-600`}>
              {t('problem.cards.granularity.desc')}
            </p>
          </GlassCard>

          <GlassCard delay={0.2} hoverEffect className={`print:bg-slate-50 print:border-slate-200 print:shadow-none ${isPrintMode ? 'bg-slate-50 border-slate-200 shadow-none' : ''}`}>
            <Layers className={`w-8 h-8 mb-6 ${isPrintMode ? 'text-accent-700' : 'text-accent'} print:text-accent-700`} />
            <h3 className={`text-lg font-medium mb-3 ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('problem.cards.content_first.title')}</h3>
            <p className={`text-sm leading-relaxed ${isPrintMode ? 'text-slate-600' : 'text-white/60'} print:text-slate-600`}>
              {t('problem.cards.content_first.desc')}
            </p>
          </GlassCard>

          <GlassCard delay={0.3} hoverEffect className={`print:bg-slate-50 print:border-slate-200 print:shadow-none ${isPrintMode ? 'bg-slate-50 border-slate-200 shadow-none' : ''}`}>
            <MapPinOff className={`w-8 h-8 mb-6 ${isPrintMode ? 'text-accent-700' : 'text-accent'} print:text-accent-700`} />
            <h3 className={`text-lg font-medium mb-3 ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('problem.cards.context.title')}</h3>
            <p className={`text-sm leading-relaxed ${isPrintMode ? 'text-slate-600' : 'text-white/60'} print:text-slate-600`}>
              {t('problem.cards.context.desc')}
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};