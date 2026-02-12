import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { usePrintMode } from '../PrintContext';

export const SocialProof: React.FC = () => {
  const { t } = useTranslation();
  const { isPrintMode } = usePrintMode();

  const publications = [
    {
      journal: "Journal of Intelligence",
      title: "Reconciling Hard Skills and Soft Skills in a Common Framework: The Generic Skills Component Approach",
      link: "https://www.mdpi.com/2079-3200/11/6/107",
      status: t('social_proof.publications.status_published')
    },
    {
      journal: "Behavioral Sciences",
      title: "Creative Work as Seen Through the ATHENA Competency Model",
      link: "https://www.mdpi.com/2076-328X/15/11/1469",
      status: t('social_proof.publications.status_published')
    },
    {
      journal: "Journal of Intelligence",
      title: "The ATHENA Competency Framework: An Evaluation of Its Validity According to Instructional Designers and Human Resource Development Professionals",
      link: "https://www.mdpi.com/2079-3200/14/2/23",
      status: t('social_proof.publications.status_published')
    }
  ];

  const partners = [
    { name: "Bouygues", logo: "/partners/bouygues.svg", scale: 1 },
    { name: "Decathlon", logo: "/partners/decathlon.svg", scale: 2.5 },
    { name: "Crédit Mutuel Alliance Fédérale", logo: "/partners/credit-mutuel.png", scale: 1 }
  ];

  return (
    <section id="preuves" className={`py-16 md:py-24 border-y border-white/5 scroll-mt-24 md:scroll-mt-32 ${isPrintMode ? 'bg-white text-black border-none' : 'bg-[#050505]'} print:bg-white print:text-black print:border-none`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16">
          <span className={`text-accent font-medium tracking-widest text-xs uppercase block mb-3 ${isPrintMode ? 'text-accent-700' : ''} print:text-accent-700`}>
            {t('social_proof.badge')}
          </span>
          <h2 className={`text-3xl md:text-5xl font-semibold mb-6 leading-tight ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>
            {t('social_proof.title')}
          </h2>
          <p className={`text-base md:text-lg mb-6 ${isPrintMode ? 'text-slate-700' : 'text-white/60'} print:text-slate-700`}>
            <Trans i18nKey="social_proof.desc_1" />
          </p>
          <p className={`text-base md:text-lg ${isPrintMode ? 'text-slate-700' : 'text-white/60'} print:text-slate-700`}>
            <Trans i18nKey="social_proof.desc_2" />
          </p>
        </div>

        {/* Logos Section - Changed to Grid for full width distribution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-16">
          {partners.map((partner, i) => (
            <div key={i} className={`group relative w-full h-28 md:h-[136px] flex items-center justify-center p-6 bg-white border rounded-xl transition-all duration-500 hover:border-accent/40 hover:scale-[1.02] overflow-hidden ${isPrintMode ? 'border-slate-200' : 'border-white/10'} print:bg-white print:border-slate-200`}>
              <img
                src={partner.logo}
                alt={partner.name}
                style={{ transform: `scale(${partner.scale})` }}
                className={`w-full h-full object-contain transition-all duration-500 grayscale group-hover:opacity-100 group-hover:grayscale-0 ${isPrintMode ? 'filter-none opacity-100' : 'opacity-60'} print:filter-none print:opacity-100`}
              />
            </div>
          ))}
        </div>

        <p className="text-white/60 text-base md:text-lg mb-10 print:text-slate-700">
          {t('social_proof.recognition')}
        </p>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-6xl">
          {publications.map((pub, i) => (
            <GlassCard key={i} className="group cursor-pointer flex flex-col justify-between h-full print:bg-slate-50 print:border-slate-200 print:shadow-none" hoverEffect onClick={() => window.open(pub.link, '_blank')}>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] md:text-xs font-mono px-2 py-1 rounded text-green-400 bg-green-400/10 border border-green-400/20 print:text-green-700 print:bg-green-100 print:border-green-300">{pub.status}</span>
                  <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors print:text-slate-500 print:group-hover:text-black" size={20} />
                </div>
                <h3 className="text-xs md:text-sm font-bold text-accent mb-2 uppercase tracking-wider print:text-accent-700">{pub.journal}</h3>
                <p className="text-sm md:text-base text-white font-medium leading-snug print:text-black">{pub.title}</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/5 text-[10px] md:text-xs text-white/30 uppercase tracking-widest group-hover:text-white transition-colors print:text-slate-500 print:border-slate-200 print:group-hover:text-black">
                {t('social_proof.publications.read_article')}
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};