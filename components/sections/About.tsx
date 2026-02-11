import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Award, Globe, Zap } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-16 md:py-24 border-t border-white/5 scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3">
              {t('about.badge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-accent leading-tight">
              {t('about.title')}
            </h2>
            <div className="prose prose-invert max-w-none text-white/70 text-base md:text-lg leading-relaxed">
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
            <GlassCard className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg text-accent shrink-0">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{t('about.cards.sovereignty.title')}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {t('about.cards.sovereignty.desc')}
                </p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg text-accent shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{t('about.cards.leadership.title')}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  <Trans i18nKey="about.cards.leadership.desc" />
                </p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg text-accent shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{t('about.cards.innovation.title')}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {t('about.cards.innovation.desc')}
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};