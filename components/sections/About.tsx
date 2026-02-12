import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Award, Globe, Zap } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { usePrintMode } from '../PrintContext';

export const About: React.FC = () => {
  const { t } = useTranslation();
  const { isPrintMode } = usePrintMode();

  return (
    <section id="about" className={`py-16 md:py-24 border-t border-white/5 scroll-mt-24 md:scroll-mt-32 ${isPrintMode ? 'bg-white text-black border-none' : 'bg-[#050505]'} print:bg-white print:text-black print:border-none`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className={`text-accent font-medium tracking-widest text-xs uppercase block mb-3 ${isPrintMode ? 'text-accent-700' : ''} print:text-accent-700`}>
              {t('about.badge')}
            </span>
            <h2 className={`text-3xl md:text-5xl font-semibold mb-6 leading-tight ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>
              {t('about.title')}
            </h2>
            <div className={`prose prose-invert max-w-none text-base md:text-lg leading-relaxed ${isPrintMode ? 'text-slate-700' : 'text-white/70'} print:text-slate-700`}>
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
            <GlassCard className={`flex flex-col gap-3 ${isPrintMode ? 'bg-slate-50 border-slate-200 shadow-none' : ''} print:bg-slate-50 print:border-slate-200 print:shadow-none`}>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg shrink-0 ${isPrintMode ? 'bg-slate-200 text-accent-700' : 'bg-accent/10 text-accent'} print:bg-slate-200 print:text-accent-700`}>
                  <Globe size={24} />
                </div>
                <h3 className={`text-lg font-semibold ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('about.cards.sovereignty.title')}</h3>
              </div>
              <p className={`text-sm leading-relaxed ${isPrintMode ? 'text-slate-600' : 'text-white/60'} print:text-slate-600`}>
                {t('about.cards.sovereignty.desc')}
              </p>
            </GlassCard>

            <GlassCard className={`flex flex-col gap-3 ${isPrintMode ? 'bg-slate-50 border-slate-200 shadow-none' : ''} print:bg-slate-50 print:border-slate-200 print:shadow-none`}>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg shrink-0 ${isPrintMode ? 'bg-slate-200 text-accent-700' : 'bg-accent/10 text-accent'} print:bg-slate-200 print:text-accent-700`}>
                  <Award size={24} />
                </div>
                <h3 className={`text-lg font-semibold ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('about.cards.leadership.title')}</h3>
              </div>
              <p className={`text-sm leading-relaxed ${isPrintMode ? 'text-slate-600' : 'text-white/60'} print:text-slate-600`}>
                <Trans i18nKey="about.cards.leadership.desc" />
              </p>
            </GlassCard>

            <GlassCard className={`flex flex-col gap-3 ${isPrintMode ? 'bg-slate-50 border-slate-200 shadow-none' : ''} print:bg-slate-50 print:border-slate-200 print:shadow-none`}>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg shrink-0 ${isPrintMode ? 'bg-slate-200 text-accent-700' : 'bg-accent/10 text-accent'} print:bg-slate-200 print:text-accent-700`}>
                  <Zap size={24} />
                </div>
                <h3 className={`text-lg font-semibold ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('about.cards.innovation.title')}</h3>
              </div>
              <p className={`text-sm leading-relaxed ${isPrintMode ? 'text-slate-600' : 'text-white/60'} print:text-slate-600`}>
                {t('about.cards.innovation.desc')}
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};