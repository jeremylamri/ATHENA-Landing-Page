import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { CheckCircle2, GitCompare, GitCommit, Zap, HardDrive } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Capabilities: React.FC = () => {
  const { t } = useTranslation();

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
    <section id="capacites" className="py-16 md:py-24 bg-[#050505] relative border-t border-white/5 scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16">
          <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3">
            {t('capabilities.badge')}
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-accent leading-tight">
            {t('capabilities.title')}
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            {t('capabilities.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {capabilities.map((cap, i) => (
            <GlassCard key={i} className="flex flex-col h-full" hoverEffect delay={i * 0.1}>
              <div className="text-accent mb-4 p-3 bg-accent/10 rounded-xl w-fit">
                {cap.icon}
              </div>
              <h3 className="text-lg font-medium text-white mb-3">{cap.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {cap.desc}
              </p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <p className="text-white/80 font-medium text-base md:text-lg">{t('capabilities.conclusion')}</p>
        </div>
      </div>
    </section>
  );
};