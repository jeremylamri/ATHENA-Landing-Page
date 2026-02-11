import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Shield, Unlock, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const IPRights: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="ip" className="py-16 md:py-24 bg-black border-t border-white/5 scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16">
          <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3">
            {t('ip.badge')}
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white leading-tight">
            {t('ip.title')}
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            {t('ip.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <GlassCard className="h-full">
            <Shield className="w-8 h-8 text-white mb-6 opacity-80" />
            <h3 className="text-lg font-medium mb-3 text-white">{t('ip.cards.transfer.title')}</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {t('ip.cards.transfer.desc')}
            </p>
          </GlassCard>

          <GlassCard className="h-full">
            <Unlock className="w-8 h-8 text-white mb-6 opacity-80" />
            <h3 className="text-lg font-medium mb-3 text-white">{t('ip.cards.free_use.title')}</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {t('ip.cards.free_use.desc')}
            </p>
          </GlassCard>

          <GlassCard className="h-full">
            <Database className="w-8 h-8 text-white mb-6 opacity-80" />
            <h3 className="text-lg font-medium mb-3 text-white">{t('ip.cards.data_privacy.title')}</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {t('ip.cards.data_privacy.desc')}
            </p>
          </GlassCard>
        </div>

        <p className="mt-8 text-sm text-white/30 italic">
          {t('ip.disclaimer')}
        </p>
      </div>
    </section>
  );
};