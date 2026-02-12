import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Calendar, Users, Rocket, CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTranslation, Trans } from 'react-i18next';

import { usePrintMode } from '../PrintContext';

export const V2Offer: React.FC = () => {
  const { t } = useTranslation();
  const { isPrintMode } = usePrintMode();

  return (
    <section id="v2" className={`py-16 md:py-24 relative scroll-mt-24 md:scroll-mt-32 ${isPrintMode ? 'bg-white text-black' : ''} print:bg-white print:text-black`}>
      <div className={`absolute inset-0 bg-gradient-to-b from-black via-[#0a1a20] to-black -z-10 ${isPrintMode ? 'hidden' : ''} print:hidden`} />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div>
            <span className={`text-accent font-medium tracking-widest text-xs uppercase block mb-3 ${isPrintMode ? 'text-accent-700' : ''} print:text-accent-700`}>
              {t('v2.badge')}
            </span>
            <h2 className={`text-3xl md:text-5xl font-semibold mb-8 leading-tight ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>
              {t('v2.title')}
            </h2>
            <div className={`prose prose-invert max-w-none text-base md:text-lg leading-relaxed mb-10 ${isPrintMode ? 'text-slate-700' : 'text-white/70'} print:text-slate-700`}>
              <p className="mb-4">
                {t('v2.intro')}
              </p>
              <p className="text-base">
                {t('v2.benefits.title')}
              </p>
              <ul className="list-none space-y-3 mt-4 text-base">
                <li className="flex items-start gap-3"><CheckCircle size={18} className={`mt-1 shrink-0 ${isPrintMode ? 'text-accent-700' : 'text-accent'} print:text-accent-700`} /> {t('v2.benefits.list.grid')}</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className={`mt-1 shrink-0 ${isPrintMode ? 'text-accent-700' : 'text-accent'} print:text-accent-700`} /> {t('v2.benefits.list.break')}</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className={`mt-1 shrink-0 ${isPrintMode ? 'text-accent-700' : 'text-accent'} print:text-accent-700`} /> {t('v2.benefits.list.rationalization')}</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className={`mt-1 shrink-0 ${isPrintMode ? 'text-accent-700' : 'text-accent'} print:text-accent-700`} /> {t('v2.benefits.list.relevance')}</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className={`mt-1 shrink-0 ${isPrintMode ? 'text-accent-700' : 'text-accent'} print:text-accent-700`} /> {t('v2.benefits.list.sharing')}</li>
              </ul>
            </div>

            <div className="space-y-8 mb-10">
              <div className={`relative pl-8 border-l ${isPrintMode ? 'border-slate-300' : 'border-white/10'} print:border-slate-300`}>
                <div className={`absolute -left-1.5 top-0 w-3 h-3 rounded-full ${isPrintMode ? 'bg-accent/30' : 'bg-accent/50'} print:bg-accent/30`}></div>
                <h4 className={`font-medium mb-1 ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('v2.phases.framing.title')}</h4>
                <p className={`text-sm ${isPrintMode ? 'text-slate-500' : 'text-white/50'} print:text-slate-500`}>{t('v2.phases.framing.desc')}</p>
              </div>
              <div className="relative pl-8 border-l border-white/10 print:border-slate-300">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-accent/50 print:bg-accent/30"></div>
                <h4 className="text-white font-medium mb-1 print:text-black">{t('v2.phases.modeling.title')}</h4>
                <p className="text-sm text-white/50 print:text-slate-500">{t('v2.phases.modeling.desc')}</p>
              </div>
              <div className="relative pl-8 border-l border-white/10 print:border-slate-300">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-accent/50 print:bg-accent/30"></div>
                <h4 className="text-white font-medium mb-1 print:text-black">{t('v2.phases.anchoring.title')}</h4>
                <p className="text-sm text-white/50 print:text-slate-500">{t('v2.phases.anchoring.desc')}</p>
              </div>
              <div className="relative pl-8 border-l border-white/10 print:border-slate-300">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-accent/50 print:bg-accent/30"></div>
                <h4 className="text-white font-medium mb-1 print:text-black">{t('v2.phases.projection.title')}</h4>
                <p className="text-sm text-white/50 print:text-slate-500">{t('v2.phases.projection.desc')}</p>
              </div>
            </div>

            {/* Community Feature Block */}
            <div className={`border rounded-2xl p-6 relative overflow-hidden group transition-colors ${isPrintMode ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.03] border-white/10 hover:border-accent/20'} print:bg-slate-50 print:border-slate-200`}>
              <div className={`absolute top-0 right-0 p-4 transition-opacity print:hidden ${isPrintMode ? 'hidden' : 'opacity-5 group-hover:opacity-10'}`}>
                <Users size={80} className="text-white" />
              </div>
              <h3 className={`text-lg font-semibold mb-3 flex items-center gap-3 ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>
                <div className={`p-2 rounded-lg ${isPrintMode ? 'bg-slate-200 text-accent-700' : 'bg-accent/10 text-accent'} print:bg-slate-200 print:text-accent-700`}>
                  <MessageCircle size={20} />
                </div>
                {t('v2.community.title')}
              </h3>
              <p className={`text-sm leading-relaxed relative z-10 ${isPrintMode ? 'text-slate-600' : 'text-white/70'} print:text-slate-600`}>
                <Trans i18nKey="v2.community.desc" />
              </p>
            </div>
          </div>

          <GlassCard className={`lg:sticky lg:top-32 mt-8 lg:mt-0 ${isPrintMode ? 'bg-slate-50 border-slate-200 shadow-none' : 'border-accent/20 bg-accent/5'} print:bg-slate-50 print:border-slate-200 print:shadow-none`}>
            <div className="flex justify-between items-baseline mb-8">
              <h3 className={`text-xl font-semibold ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('v2.card.title')}</h3>
            </div>

            <div className="space-y-6 mb-8">
              <div className={`flex items-center justify-between py-3 border-b ${isPrintMode ? 'border-slate-300' : 'border-white/10'} print:border-slate-300`}>
                <div className={`flex items-center gap-3 ${isPrintMode ? 'text-slate-600' : 'text-white/80'} print:text-slate-600`}>
                  <Calendar size={18} className={`${isPrintMode ? 'text-accent-700' : 'text-accent'} print:text-accent-700`} />
                  <span>{t('v2.card.start_label')}</span>
                </div>
                <span className={`font-mono ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('v2.card.start_value')}</span>
              </div>

              <div className={`flex items-center justify-between py-3 border-b ${isPrintMode ? 'border-slate-300' : 'border-white/10'} print:border-slate-300`}>
                <div className={`flex items-center gap-3 ${isPrintMode ? 'text-slate-600' : 'text-white/80'} print:text-slate-600`}>
                  <Rocket size={18} className={`${isPrintMode ? 'text-accent-700' : 'text-accent'} print:text-accent-700`} />
                  <span>{t('v2.card.duration_label')}</span>
                </div>
                <span className={`font-mono ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('v2.card.duration_value')}</span>
              </div>

              <div className={`flex items-center justify-between py-3 border-b ${isPrintMode ? 'border-slate-300' : 'border-white/10'} print:border-slate-300`}>
                <div className={`flex items-center gap-3 ${isPrintMode ? 'text-slate-600' : 'text-white/80'} print:text-slate-600`}>
                  <Users size={18} className={`${isPrintMode ? 'text-accent-700' : 'text-accent'} print:text-accent-700`} />
                  <span>{t('v2.card.consortium_label')}</span>
                </div>
                <span className={`font-mono ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('v2.card.consortium_value')}</span>
              </div>

              <div className={`p-4 rounded-lg text-center mt-4 ${isPrintMode ? 'bg-slate-100' : 'bg-white/5'} print:bg-slate-100`}>
                <span className={`text-sm block mb-1 ${isPrintMode ? 'text-slate-500' : 'text-white/50'} print:text-slate-500`}>{t('v2.card.contribution_label')}</span>
                <span className={`text-2xl font-bold ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>30 000 € HT</span>
              </div>
            </div>

            <Button className="w-full print:hidden" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('v2.card.cta')}
            </Button>

            <div className={`mt-6 text-xs leading-snug ${isPrintMode ? 'text-slate-400' : 'text-white/40'} print:text-slate-400`}>
              <strong className={`block mb-1 ${isPrintMode ? 'text-slate-600' : 'text-white/60'} print:text-slate-600`}>{t('v2.card.governance_label')}</strong>
              {t('v2.card.governance_value')}
            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};