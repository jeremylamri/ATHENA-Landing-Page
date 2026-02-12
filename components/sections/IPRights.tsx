import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Shield, Unlock, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { usePrintMode } from '../PrintContext';

export const IPRights: React.FC = () => {
  const { t } = useTranslation();
  const { isPrintMode } = usePrintMode();

  return (
    <section id="ip" className={`py-16 md:py-24 border-t border-white/5 scroll-mt-24 md:scroll-mt-32 ${isPrintMode ? 'bg-white text-black border-none' : 'bg-black'} print:bg-white print:text-black print:border-none`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16">
          <span className={`text-accent font-medium tracking-widest text-xs uppercase block mb-3 ${isPrintMode ? 'text-accent-700' : ''} print:text-accent-700`}>
            {t('ip.badge')}
          </span>
          <h2 className={`text-3xl md:text-5xl font-semibold mb-6 leading-tight ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>
            {t('ip.title')}
          </h2>
          <p className={`text-base md:text-lg ${isPrintMode ? 'text-slate-700' : 'text-white/60'} print:text-slate-700`}>
            {t('ip.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <GlassCard className={`h-full ${isPrintMode ? 'bg-slate-50 border-slate-200 shadow-none' : ''} print:bg-slate-50 print:border-slate-200 print:shadow-none`}>
            <Shield className={`w-8 h-8 mb-6 ${isPrintMode ? 'text-slate-800' : 'text-white opacity-80'} print:text-slate-800`} />
            <h3 className={`text-lg font-medium mb-3 ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('ip.cards.transfer.title')}</h3>
            <p className={`text-sm leading-relaxed ${isPrintMode ? 'text-slate-600' : 'text-white/60'} print:text-slate-600`}>
              {t('ip.cards.transfer.desc')}
            </p>
          </GlassCard>

          <GlassCard className={`h-full ${isPrintMode ? 'bg-slate-50 border-slate-200 shadow-none' : ''} print:bg-slate-50 print:border-slate-200 print:shadow-none`}>
            <Unlock className={`w-8 h-8 mb-6 ${isPrintMode ? 'text-slate-800' : 'text-white opacity-80'} print:text-slate-800`} />
            <h3 className={`text-lg font-medium mb-3 ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('ip.cards.free_use.title')}</h3>
            <p className={`text-sm leading-relaxed ${isPrintMode ? 'text-slate-600' : 'text-white/60'} print:text-slate-600`}>
              {t('ip.cards.free_use.desc')}
            </p>
          </GlassCard>

          <GlassCard className={`h-full ${isPrintMode ? 'bg-slate-50 border-slate-200 shadow-none' : ''} print:bg-slate-50 print:border-slate-200 print:shadow-none`}>
            <Database className={`w-8 h-8 mb-6 ${isPrintMode ? 'text-slate-800' : 'text-white opacity-80'} print:text-slate-800`} />
            <h3 className={`text-lg font-medium mb-3 ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('ip.cards.data_privacy.title')}</h3>
            <p className={`text-sm leading-relaxed ${isPrintMode ? 'text-slate-600' : 'text-white/60'} print:text-slate-600`}>
              {t('ip.cards.data_privacy.desc')}
            </p>
          </GlassCard>
        </div>

        <p className="mt-8 text-sm text-white/30 italic print:text-slate-400">
          {t('ip.disclaimer')}
        </p>
      </div>
    </section>
  );
};