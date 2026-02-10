import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { FileWarning, Layers, MapPinOff } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="defi" className="py-16 md:py-24 bg-black relative scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16">
          <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3">
            Le Problème
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white leading-tight">
            Les limites des approches conventionnelles.
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            L'enjeu n'est ni budgétaire, ni technologique, mais méthodologique. L'ingénierie de formation souffre d'un déficit de précision dans la définition même de ses cibles. Cette approximation initiale génère une inefficacité structurelle difficile à mesurer a posteriori.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <GlassCard delay={0.1} hoverEffect>
            <FileWarning className="w-8 h-8 text-accent mb-6" />
            <h3 className="text-lg font-medium mb-3 text-white">Référentiels sans granularité</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              L'absence de décomposition fine des compétences empêche toute prescription pédagogique rigoureuse. On ne peut concevoir une intervention précise sur une définition générique.
            </p>
          </GlassCard>

          <GlassCard delay={0.2} hoverEffect>
            <Layers className="w-8 h-8 text-accent mb-6" />
            <h3 className="text-lg font-medium mb-3 text-white">Ingénierie "Content-First"</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              L'industrialisation des contenus précède trop souvent le diagnostic cognitif. L'IA générative risque d'amplifier cette production de volume au détriment de la pertinence pédagogique.
            </p>
          </GlassCard>

          <GlassCard delay={0.3} hoverEffect>
            <MapPinOff className="w-8 h-8 text-accent mb-6" />
            <h3 className="text-lg font-medium mb-3 text-white">Déficit de contextualisation</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              La performance est inséparable de ses conditions d'exercice (temporalité, pression, autonomie). Ignorer ces variables contextuelles compromet l'opérabilité des formations sur le terrain.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};