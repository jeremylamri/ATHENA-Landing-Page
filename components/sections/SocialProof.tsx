import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { ArrowUpRight } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const publications = [
    { 
      journal: "Journal of Intelligence", 
      title: "Reconciling Hard Skills and Soft Skills in a Common Framework: The Generic Skills Component Approach", 
      link: "https://www.mdpi.com/2079-3200/11/6/107",
      status: "Publié" 
    },
    { 
      journal: "Behavioral Sciences", 
      title: "Creative Work as Seen Through the ATHENA Competency Model", 
      link: "https://www.mdpi.com/2076-328X/15/11/1469",
      status: "Publié" 
    },
    { 
      journal: "Journal of Intelligence", 
      title: "The ATHENA Competency Framework: An Evaluation of Its Validity According to Instructional Designers and Human Resource Development Professionals", 
      link: "https://www.mdpi.com/2079-3200/14/2/23",
      status: "Publié" 
    }
  ];

  const partners = [
    { name: "Bouygues", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Bouygues_logo.svg/1200px-Bouygues_logo.svg.png" },
    { name: "Decathlon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Decathlon_Logo_2024.svg/1200px-Decathlon_Logo_2024.svg.png" },
    { name: "Crédit Mutuel Alliance Fédérale", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/22/Cr%C3%A9dit_Mutuel_Alliance_F%C3%A9d%C3%A9rale.svg/1200px-Cr%C3%A9dit_Mutuel_Alliance_F%C3%A9d%C3%A9rale.svg.png" }
  ];

  return (
    <section id="preuves" className="py-16 md:py-24 border-y border-white/5 bg-[#050505] scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16">
          <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3">
            Preuves & Validation
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white leading-tight">
            Un aboutissement scientifique.
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-6">
            ATHENA n'est pas une expérimentation isolée, mais le point de rupture d'une lignée de recherche. Le système cristallise <strong className="text-white/80">plus de 10 ans de R&D continue</strong> sur la modélisation de la performance humaine.
          </p>
          <p className="text-white/60 text-base md:text-lg">
            Pour démontrer l'application sur le terrain du projet ATHENA, Tomorrow Theory a constitué début 2025 un consortium, aux côtés de <strong className="text-white/80">Decathlon</strong>, <strong className="text-white/80">Crédit Mutuel Alliance Fédérale</strong>, et <strong className="text-white/80">Bouygues</strong>. Ce consortium a permis d'accélérer fortement les travaux en lien avec ATHENA.
          </p>
        </div>

        {/* Logos Section - Changed to Grid for full width distribution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-16">
            {partners.map((partner, i) => (
                <div key={i} className="group relative w-full h-24 md:h-32 flex items-center justify-center p-6 bg-white/[0.03] border border-white/5 rounded-xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]">
                     <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain transition-all duration-500 filter brightness-0 invert opacity-60 group-hover:filter-none group-hover:opacity-100"
                    />
                </div>
            ))}
        </div>

        <p className="text-white/60 text-base md:text-lg mb-10">
          ATHENA bénéficie déjà d'une reconnaissance académique, avec 3 articles de recherche publiés dans des revues académiques internationales prestigieuses. Ces articles totalisent déjà près de 50 000 vues dans le monde de la recherche, démontrant l'intérêt fort pour la démarche ATHENA.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-6xl">
          {publications.map((pub, i) => (
            <GlassCard key={i} className="group cursor-pointer flex flex-col justify-between h-full" hoverEffect onClick={() => window.open(pub.link, '_blank')}>
              <div>
                <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] md:text-xs font-mono px-2 py-1 rounded text-green-400 bg-green-400/10 border border-green-400/20">{pub.status}</span>
                    <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" size={20} />
                </div>
                <h3 className="text-xs md:text-sm font-bold text-accent mb-2 uppercase tracking-wider">{pub.journal}</h3>
                <p className="text-sm md:text-base text-white font-medium leading-snug">{pub.title}</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/5 text-[10px] md:text-xs text-white/30 uppercase tracking-widest group-hover:text-white transition-colors">
                Lire l'article complet
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};