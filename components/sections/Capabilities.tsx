import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { CheckCircle2, GitCompare, GitCommit, Zap, HardDrive } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const capabilities = [
    {
      title: "Objectivation des choix pédagogiques",
      desc: "Substituer à l'intuition une argumentation technique traçable. ATHENA relie chaque modalité retenue à une intention pédagogique explicite, corrélée aux facettes contributives de la compétence.",
      icon: <CheckCircle2 size={24} />
    },
    {
      title: "Modélisation comparative",
      desc: "Évaluer ex-ante différentes architectures de formation. Le système permet de mettre en regard plusieurs scénarios d'investissement pédagogique selon les contraintes de ressources et de temps.",
      icon: <GitCompare size={24} />
    },
    {
      title: "Transparence décisionnelle",
      desc: "Expliciter les renoncements nécessaires. En rendant visibles les arbitrages (profondeur vs couverture), ATHENA qualifie le dialogue entre L&D et commanditaires métier.",
      icon: <GitCommit size={24} />
    },
    {
      title: "Diversification tactique",
      desc: "Rompre avec les automatismes de conception. L'indexation de plus de 220 modalités permet de mobiliser l'intégralité du spectre pédagogique pour répondre à la complexité des besoins.",
      icon: <Zap size={24} />
    },
    {
      title: "Constitution d'un patrimoine technique",
      desc: "Transformer chaque projet en actif pour l'organisation. Les analyses et architectures sont capitalisées dans une base de connaissances structurée, favorisant l'amélioration continue des pratiques.",
      icon: <HardDrive size={24} />
    }
  ];

  return (
    <section id="capacites" className="py-16 md:py-24 bg-[#050505] relative border-t border-white/5 scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16">
          <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3">
            Capacités Stratégiques
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white leading-tight">
            Nouvelles capacités pour la direction L&D.
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            Au-delà de l'outillage, ATHENA modifie la gouvernance de la formation. Le système instaure une pratique de décision fondée sur la donnée probante et la traçabilité des choix.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {capabilities.map((cap, i) => (
            <GlassCard key={i} className="flex flex-col h-full" hoverEffect delay={i * 0.1}>
              <div className="text-accent mb-4 p-3 bg-accent/10 rounded-xl w-fit">
                {cap.icon}
              </div>
              <h3 className="text-lg font-medium text-white mb-3">{cap.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {cap.desc}
              </p>
            </GlassCard>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16">
            <p className="text-white/80 font-medium text-base md:text-lg">Vers une ingénierie de formation plus explicite, cumulative et stratégique.</p>
        </div>
      </div>
    </section>
  );
};