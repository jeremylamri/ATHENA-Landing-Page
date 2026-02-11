import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Atom } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const Model: React.FC = () => {
  const { t } = useTranslation();

  const dimensions = [
    { title: t('model.dimensions.cognition.title'), desc: t('model.dimensions.cognition.desc') },
    { title: t('model.dimensions.knowledge.title'), desc: t('model.dimensions.knowledge.desc') },
    { title: t('model.dimensions.conation.title'), desc: t('model.dimensions.conation.desc') },
    { title: t('model.dimensions.emotion.title'), desc: t('model.dimensions.emotion.desc') },
    { title: t('model.dimensions.sensorimotor.title'), desc: t('model.dimensions.sensorimotor.desc') }
  ];

  return (
    <section id="modele" className="py-16 md:py-24 relative overflow-hidden bg-[#050505] border-y border-white/5 scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          <div className="flex-1 w-full lg:sticky lg:top-32">
            <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3">
              {t('model.badge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-white leading-tight">
              {t('model.title')}
            </h2>
            <div className="prose prose-invert max-w-none text-white/70 text-base md:text-lg leading-relaxed mb-8">
              <p className="mb-6">
                <Trans i18nKey="model.desc_1" />
              </p>
              <p>
                <Trans i18nKey="model.desc_2" />
              </p>
            </div>

            {/* Analogy Block */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Atom size={64} className="text-accent" />
              </div>
              <h3 className="text-white font-medium mb-3 relative z-10">{t('model.analogy.title')}</h3>
              <p className="text-sm text-white/60 leading-relaxed relative z-10">
                <Trans i18nKey="model.analogy.text" />
              </p>
            </div>
          </div>

          <div className="flex-1 w-full mt-8 lg:mt-0">
            <div className="grid gap-3">
              {dimensions.map((dim, index) => (
                <GlassCard key={index} className="flex flex-col justify-center py-6 px-6 md:px-8 hover:bg-white/[0.02] transition-colors" delay={index * 0.1}>
                  <h4 className="text-lg font-medium text-white mb-1">{dim.title}</h4>
                  <p className="text-sm text-white/50">{dim.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};