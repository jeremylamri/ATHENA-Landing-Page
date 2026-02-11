import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '../ui/GlassCard';
import { FileWarning, Layers, MapPinOff } from 'lucide-react';


export const Problem: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="defi" className="py-16 md:py-24 bg-black relative scroll-mt-24 md:scroll-mt-32 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 md:mb-16">
          <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3">
            {t('problem.badge')}
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white leading-tight">
            {t('problem.title')}
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            {t('problem.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <GlassCard delay={0.1} hoverEffect>
            <FileWarning className="w-8 h-8 text-accent mb-6" />
            <h3 className="text-lg font-medium mb-3 text-white">{t('problem.cards.granularity.title')}</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {t('problem.cards.granularity.desc')}
            </p>
          </GlassCard>

          <GlassCard delay={0.2} hoverEffect>
            <Layers className="w-8 h-8 text-accent mb-6" />
            <h3 className="text-lg font-medium mb-3 text-white">{t('problem.cards.content_first.title')}</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {t('problem.cards.content_first.desc')}
            </p>
          </GlassCard>

          <GlassCard delay={0.3} hoverEffect>
            <MapPinOff className="w-8 h-8 text-accent mb-6" />
            <h3 className="text-lg font-medium mb-3 text-white">{t('problem.cards.context.title')}</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {t('problem.cards.context.desc')}
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};