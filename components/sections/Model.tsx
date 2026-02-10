import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Atom } from 'lucide-react';

export const Model: React.FC = () => {
  const dimensions = [
    { title: "Cognition", desc: "Capacités d'analyse, de raisonnement, de décision et d'anticipation." },
    { title: "Connaissances", desc: "Savoirs déclaratifs, procéduraux et contextuels mobilisables." },
    { title: "Conation", desc: "Facteurs de motivation, d'effort, de persévérance et de régulation." },
    { title: "Émotion", desc: "Traitement de l'information émotionnelle, stress et confiance." },
    { title: "Sensorimotrice", desc: "Perception sensorielle fine, coordination et précision gestuelle." }
  ];

  return (
    <section id="modele" className="py-16 md:py-24 relative overflow-hidden bg-[#050505] border-y border-white/5 scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          <div className="flex-1 w-full lg:sticky lg:top-32">
            <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3">
              Le Modèle
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-white leading-tight">
              Une modélisation systémique de la compétence.
            </h2>
            <div className="prose prose-invert max-w-none text-white/70 text-base md:text-lg leading-relaxed mb-8">
              <p className="mb-6">
                La compétence n'est pas un stock de savoirs stable. C'est une dynamique de <strong className="text-white font-medium">mobilisation, de coordination et de régulation</strong> de ressources internes face à une situation donnée.
              </p>
              <p>
                L'opérationnalisation via <strong className="text-white font-medium">60 facettes</strong> et <strong className="text-white font-medium">4 niveaux de maîtrise</strong> permet de passer d'une intention de formation généraliste à une stratégie d'ingénierie de précision.
              </p>
            </div>

            {/* Analogy Block */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Atom size={64} className="text-accent" />
                </div>
                <h3 className="text-white font-medium mb-3 relative z-10">La Chimie de la Compétence</h3>
                <p className="text-sm text-white/60 leading-relaxed relative z-10">
                    Une compétence métier (ex: "Leadership") n'est pas un bloc monolithique. C'est un assemblage complexe, comparable à une <strong className="text-white/80">molécule</strong>.
                    <br/><br/>
                    ATHENA agit comme la <strong className="text-white/80">Table Périodique des RH</strong> : nous avons isolé les 60 <strong className="text-white/80">atomes fondamentaux</strong> (les facettes) qui composent toute intelligence humaine.
                    <br/><br/>
                    Au lieu de gérer des "étiquettes" floues, vous manipulez désormais la formule chimique exacte de vos métiers. Vous ne devinez plus : vous recomposez la performance atome par atome.
                </p>
            </div>
          </div>

          <div className="flex-1 w-full mt-8 lg:mt-0">
            <div className="grid gap-3">
              {dimensions.map((dim, index) => (
                <GlassCard key={index} className="flex flex-col justify-center py-6 px-6 md:px-8 hover:bg-white/[0.02] transition-colors" delay={index * 0.1}>
                  <h4 className="text-lg font-medium text-white mb-1">{dim.title}</h4>
                  <p className="text-sm text-white/50">{dim.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};