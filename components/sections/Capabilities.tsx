import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { CheckCircle2, GitCompare, GitCommit, Zap, HardDrive } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { usePrintMode } from '../PrintContext';

export const Capabilities: React.FC = () => {
  const { t } = useTranslation();
  const { isPrintMode } = usePrintMode();

  const capabilities = [
    {
      title: t('capabilities.cards.objectivation.title'),
      desc: t('capabilities.cards.objectivation.desc'),
      icon: <CheckCircle2 size={24} />
    },
    {
      title: t('capabilities.cards.modeling.title'),
      desc: t('capabilities.cards.modeling.desc'),
      icon: <GitCompare size={24} />
    },
    {
      title: t('capabilities.cards.transparency.title'),
      desc: t('capabilities.cards.transparency.desc'),
      icon: <GitCommit size={24} />
    },
    {
      title: t('capabilities.cards.tactics.title'),
      desc: t('capabilities.cards.tactics.desc'),
      icon: <Zap size={24} />
    },
    {
      title: t('capabilities.cards.capitalization.title'),
      desc: t('capabilities.cards.capitalization.desc'),
      icon: <HardDrive size={24} />
    }
  ];

  return (
    <section id="capacites" className={`py-16 md:py-24 relative border-t border-white/5 scroll-mt-24 md:scroll-mt-32 ${isPrintMode ? 'bg-white text-black border-none' : 'bg-[#050505]'} print:bg-white print:text-black print:border-none`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16">
          <span className={`text-accent font-medium tracking-widest text-xs uppercase block mb-3 ${isPrintMode ? 'text-accent-700' : ''} print:text-accent-700`}>
            {t('capabilities.badge')}
          </span>
          <h2 className={`text-3xl md:text-5xl font-semibold mb-6 leading-tight ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>
            {t('capabilities.title')}
          </h2>
          <p className={`text-base md:text-lg ${isPrintMode ? 'text-slate-700' : 'text-white/60'} print:text-slate-700`}>
            {t('capabilities.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {capabilities.map((cap, i) => (
            <GlassCard key={i} className={`flex flex-col h-full ${isPrintMode ? 'bg-slate-50 border-slate-200 shadow-none' : ''} print:bg-slate-50 print:border-slate-200 print:shadow-none`} hoverEffect delay={i * 0.1}>
              <div className={`mb-4 p-3 rounded-xl w-fit ${isPrintMode ? 'bg-slate-200 text-accent-700' : 'text-accent bg-accent/10'} print:bg-slate-200 print:text-accent-700`}>
                {cap.icon}
              </div>
              <h3 className={`text-lg font-medium mb-3 ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{cap.title}</h3>
              <p className={`text-sm leading-relaxed ${isPrintMode ? 'text-slate-600' : 'text-white/60'} print:text-slate-600`}>
                {cap.desc}
              </p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <p className={`font-medium text-base md:text-lg ${isPrintMode ? 'text-slate-900' : 'text-white/80'} print:text-slate-900`}>{t('capabilities.conclusion')}</p>
        </div>
      </div>
    </section>
  );
};