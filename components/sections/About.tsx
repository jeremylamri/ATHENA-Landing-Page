import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Award, Globe, Zap } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-16 md:py-24 border-t border-white/5 bg-[#050505] scroll-mt-24 md:scroll-mt-32 print:bg-white print:text-black print:border-none">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3 print:text-accent-700">
              {t('about.badge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white leading-tight print:text-black">
              {t('about.title')}
            </h2>
            <div className="prose prose-invert max-w-none text-white/70 text-base md:text-lg leading-relaxed print:text-slate-700">
              <p className="mb-4">
                {t('about.desc_1')}
              </p>
              <p className="mb-4">
                {t('about.desc_2')}
              </p>
              <p>
                {t('about.desc_3')}
              </p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <GlassCard className="flex flex-col gap-3 print:bg-slate-50 print:border-slate-200 print:shadow-none">
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-3 rounded-lg text-accent shrink-0 print:bg-slate-200 print:text-accent-700">
                  <Globe size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white print:text-black">{t('about.cards.sovereignty.title')}</h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed print:text-slate-600">
                {t('about.cards.sovereignty.desc')}
              </p>
            </GlassCard>

            <GlassCard className="flex flex-col gap-3 print:bg-slate-50 print:border-slate-200 print:shadow-none">
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-3 rounded-lg text-accent shrink-0 print:bg-slate-200 print:text-accent-700">
                  <Award size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white print:text-black">{t('about.cards.leadership.title')}</h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed print:text-slate-600">
                <Trans i18nKey="about.cards.leadership.desc" />
              </p>
            </GlassCard>

            <GlassCard className="flex flex-col gap-3 print:bg-slate-50 print:border-slate-200 print:shadow-none">
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-3 rounded-lg text-accent shrink-0 print:bg-slate-200 print:text-accent-700">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white print:text-black">{t('about.cards.innovation.title')}</h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed print:text-slate-600">
                {t('about.cards.innovation.desc')}
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};