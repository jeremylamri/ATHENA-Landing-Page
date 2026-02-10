import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Flag, Users, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-black border-t border-white/5 scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Alignement items-start pour coller le bloc de gauche en haut */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <div>
            <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3">
              A propos de Tomorrow Theory
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white leading-tight">
              Préparez le futur du travail.
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
              Notre métier est de vous accompagner dans l’anticipation et l’intégration des grands enjeux du futur du travail et des RH, pour vous permettre de mieux attirer, développer et fidéliser vos talents.
            </p>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
              Nos approches combinent la maîtrise des sciences, des technologies et des techniques d’influence pour accompagner efficacement tous les stades de votre transformation.
            </p>
             <p className="text-white/60 text-base md:text-lg leading-relaxed">
              Le projet ATHENA incarne cette vision : une technologie sobre, transparente et au service d'une pédagogie de précision.
            </p>
          </div>

          <div className="grid gap-4">
            {/* Cartes plus compactes (!p-6) et titre aligné avec l'icône */}
            <GlassCard className="!p-6" hoverEffect>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-900/20 rounded-lg text-blue-400 shrink-0">
                  <Flag size={20} />
                </div>
                <h3 className="text-base md:text-lg font-medium text-white">Souveraineté & Indépendance</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed pl-1">
                Acteur aux capitaux 100% français, Tomorrow Theory joue pleinement le jeu d'une Europe souveraine.
              </p>
            </GlassCard>

            <GlassCard className="!p-6" hoverEffect>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-900/20 rounded-lg text-purple-400 shrink-0">
                  <Users size={20} />
                </div>
                <h3 className="text-base md:text-lg font-medium text-white">Leadership de l'Écosystème</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed pl-1">
                Fondé par des passionnés du futur du travail, co-fondateurs historiques du <strong className="text-white/90">Lab RH</strong> et du <strong className="text-white/90">Hub France IA</strong>.
              </p>
            </GlassCard>
            
             <GlassCard className="!p-6" hoverEffect>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-yellow-900/20 rounded-lg text-yellow-400 shrink-0">
                  <Lightbulb size={20} />
                </div>
                <h3 className="text-base md:text-lg font-medium text-white">Innovation de Rupture</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed pl-1">
                Une approche radicale qui privilégie la recherche-action et la preuve scientifique au marketing de la promesse.
              </p>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};