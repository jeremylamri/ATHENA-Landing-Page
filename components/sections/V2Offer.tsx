import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Calendar, Users, Rocket, CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTranslation, Trans } from 'react-i18next';

export const V2Offer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="v2" className="py-16 md:py-24 relative scroll-mt-24 md:scroll-mt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a1a20] to-black -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div>
            <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3">
              {t('v2.badge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-accent leading-tight">
              {t('v2.title')}
            </h2>
            <div className="prose prose-invert max-w-none text-white/70 text-base md:text-lg leading-relaxed mb-10">
              <p className="mb-4">
                {t('v2.intro')}
              </p>
              <p className="text-base">
                {t('v2.benefits.title')}
              </p>
              <ul className="list-none space-y-3 mt-4 text-base">
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-accent mt-1 shrink-0" /> {t('v2.benefits.list.grid')}</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-accent mt-1 shrink-0" /> {t('v2.benefits.list.break')}</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-accent mt-1 shrink-0" /> {t('v2.benefits.list.rationalization')}</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-accent mt-1 shrink-0" /> {t('v2.benefits.list.relevance')}</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-accent mt-1 shrink-0" /> {t('v2.benefits.list.sharing')}</li>
              </ul>
            </div>

            <div className="space-y-8 mb-10">
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-accent/50"></div>
                <h4 className="text-white font-medium mb-1">{t('v2.phases.framing.title')}</h4>
                <p className="text-sm text-white/50">{t('v2.phases.framing.desc')}</p>
              </div>
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-accent/50"></div>
                <h4 className="text-white font-medium mb-1">{t('v2.phases.modeling.title')}</h4>
                <p className="text-sm text-white/50">{t('v2.phases.modeling.desc')}</p>
              </div>
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-accent/50"></div>
                <h4 className="text-white font-medium mb-1">{t('v2.phases.anchoring.title')}</h4>
                <p className="text-sm text-white/50">{t('v2.phases.anchoring.desc')}</p>
              </div>
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-accent/50"></div>
                <h4 className="text-white font-medium mb-1">{t('v2.phases.projection.title')}</h4>
                <p className="text-sm text-white/50">{t('v2.phases.projection.desc')}</p>
              </div>
            </div>

            {/* Community Feature Block */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-accent/20 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Users size={80} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <MessageCircle size={20} />
                </div>
                {t('v2.community.title')}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed relative z-10">
                <Trans i18nKey="v2.community.desc" />
              </p>
            </div>
          </div>

          <GlassCard className="border-accent/20 bg-accent/5 lg:sticky lg:top-32 mt-8 lg:mt-0">
            <div className="flex justify-between items-baseline mb-8">
              <h3 className="text-xl font-semibold text-white">{t('v2.card.title')}</h3>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <div className="flex items-center gap-3 text-white/80">
                  <Calendar size={18} className="text-accent" />
                  <span>{t('v2.card.start_label')}</span>
                </div>
                <span className="font-mono text-white">{t('v2.card.start_value')}</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <div className="flex items-center gap-3 text-white/80">
                  <Rocket size={18} className="text-accent" />
                  <span>{t('v2.card.duration_label')}</span>
                </div>
                <span className="font-mono text-white">{t('v2.card.duration_value')}</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <div className="flex items-center gap-3 text-white/80">
                  <Users size={18} className="text-accent" />
                  <span>{t('v2.card.consortium_label')}</span>
                </div>
                <span className="font-mono text-white">{t('v2.card.consortium_value')}</span>
              </div>

              <div className="bg-white/5 p-4 rounded-lg text-center mt-4">
                <span className="text-sm text-white/50 block mb-1">{t('v2.card.contribution_label')}</span>
                <span className="text-2xl font-bold text-white">30 000 € HT</span>
              </div>
            </div>

            <Button className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('v2.card.cta')}
            </Button>

            <div className="mt-6 text-xs text-white/40 leading-snug">
              <strong className="text-white/60 block mb-1">{t('v2.card.governance_label')}</strong>
              {t('v2.card.governance_value')}
            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};