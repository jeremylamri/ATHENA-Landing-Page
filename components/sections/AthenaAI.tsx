import React from 'react';
import { Microscope, Sliders, Library, Network } from 'lucide-react';

export const AthenaAI: React.FC = () => {
  return (
    <section id="outil" className="py-16 md:py-24 bg-black scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-16">
          <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3">
            L'Intelligence Artificielle
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white leading-tight">
            Ingénierie Augmentée.
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
             <p className="text-white/60 text-base md:text-lg">
                ATHENA AI opérationnalise le modèle théorique sans en réduire la richesse. L'IA agit comme un amplificateur de raisonnement pour structurer l'architecture pédagogique, sans jamais masquer la complexité sous-jacente.
            </p>
            
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6 text-left relative overflow-hidden">
                 <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-accent/10 rounded-lg text-accent shrink-0">
                        <Network size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-2">Architecture Cognitive Composite</h4>
                        <p className="text-sm text-white/60 leading-relaxed">
                            ATHENA ne repose pas sur un modèle unique, mais sur une orchestration de plusieurs LLMs spécialisés. Cette chaîne d'agents collabore séquentiellement pour disséquer le besoin, vérifier la cohérence pédagogique et sécuriser les livrables.
                        </p>
                    </div>
                 </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Module Skills */}
            <div className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                    <Microscope size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">ATHENA Skills</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    Déconstruction analytique de toute compétence en <strong className="text-white/80">60 facettes</strong>, chacune évaluée sur <strong className="text-white/80">4 niveaux distincts</strong>, pour identifier les prérequis cognitifs et comportementaux.
                </p>
                <div className="pt-6 border-t border-white/5 mt-auto">
                    <span className="text-xs text-white/30 uppercase tracking-widest">Livrable : Cartographie des facettes</span>
                </div>
            </div>

            {/* Module Profile */}
             <div className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                    <Sliders size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">ATHENA Profile</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    Caractérisation multidimensionnelle du contexte d'apprentissage (17 facteurs) pour assurer l'alignement entre le dispositif pédagogique et la réalité opérationnelle des apprenants.
                </p>
                <div className="pt-6 border-t border-white/5 mt-auto">
                    <span className="text-xs text-white/30 uppercase tracking-widest">Livrable : Paramétrage contextuel</span>
                </div>
            </div>

            {/* Module Learn */}
             <div className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                    <Library size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">ATHENA Learn</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    Assemblage raisonné de modalités pédagogiques, sélectionnées parmi 220+ formats indexés, justifié par l'adéquation entre objectifs cognitifs et leviers d'apprentissage.
                </p>
                <div className="pt-6 border-t border-white/5 mt-auto">
                    <span className="text-xs text-white/30 uppercase tracking-widest">Livrable : Scénario d'architecture</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};