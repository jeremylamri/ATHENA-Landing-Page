import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Atom, Brain, BookOpen, Target, Heart, Activity } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const Model: React.FC = () => {
  const { t } = useTranslation();

  const dimensions = [
    { title: t('model.dimensions.cognition.title'), desc: t('model.dimensions.cognition.desc'), icon: Brain },
    { title: t('model.dimensions.knowledge.title'), desc: t('model.dimensions.knowledge.desc'), icon: BookOpen },
    { title: t('model.dimensions.conation.title'), desc: t('model.dimensions.conation.desc'), icon: Target },
    { title: t('model.dimensions.emotion.title'), desc: t('model.dimensions.emotion.desc'), icon: Heart },
    { title: t('model.dimensions.sensorimotor.title'), desc: t('model.dimensions.sensorimotor.desc'), icon: Activity }
  ];

  return (
    <section id="modele" className="py-16 md:py-24 relative overflow-hidden bg-[#050505] border-y border-white/5 scroll-mt-24 md:scroll-mt-32 print:bg-white print:text-black print:border-none">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 print:hidden" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          <div className="flex-1 w-full lg:sticky lg:top-32">
            <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3 print:text-accent-700">
              {t('model.badge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-white leading-tight print:text-black">
              {t('model.title')}
            </h2>
            <div className="prose prose-invert max-w-none text-white/70 text-base md:text-lg leading-relaxed mb-8 print:text-slate-700">
              <p className="mb-6">
                <Trans i18nKey="model.desc_1" />
              </p>
              <p>
                <Trans i18nKey="model.desc_2" />
              </p>
            </div>

            {/* Analogy Block */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden print:bg-slate-50 print:border-slate-200">
              <div className="absolute top-0 right-0 p-4 opacity-10 print:hidden">
                <Atom size={64} className="text-accent" />
              </div>
              <h3 className="text-white font-medium mb-3 relative z-10 print:text-black">{t('model.analogy.title')}</h3>
              <p className="text-sm text-white/60 leading-relaxed relative z-10 print:text-slate-600 whitespace-pre-line">
                <Trans i18nKey="model.analogy.text" />
              </p>
            </div>
          </div>

          <div className="flex-1 w-full mt-8 lg:mt-0">
            <div className="grid gap-3">
              {dimensions.map((dim, index) => (
                <GlassCard key={index} className="flex flex-col justify-center py-5 px-6 hover:bg-white/[0.02] transition-colors print:bg-white print:border print:border-slate-200 print:shadow-none print:hover:bg-none" delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20 shrink-0 print:border-slate-200 print:bg-slate-50 print:text-slate-800">
                      <dim.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1.5 print:text-black">{dim.title}</h4>
                      <p className="text-sm text-white/50 print:text-slate-600 leading-relaxed">{dim.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};