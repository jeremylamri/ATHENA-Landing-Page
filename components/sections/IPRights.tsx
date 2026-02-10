import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Shield, Unlock, Database } from 'lucide-react';

export const IPRights: React.FC = () => {
  return (
    <section id="ip" className="py-16 md:py-24 bg-black border-t border-white/5 scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16">
          <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3">
            Propriété Intellectuelle
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white leading-tight">
            Indépendance technologique.
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            La philosophie du programme est de renforcer l'autonomie des organisations, et non de créer une dépendance logicielle supplémentaire.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <GlassCard className="h-full">
            <Shield className="w-8 h-8 text-white mb-6 opacity-80" />
            <h3 className="text-lg font-medium mb-3 text-white">Transfert intégral</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Chaque partenaire bénéficie d'un transfert complet des actifs produits durant la V2 (modèles, algorithmes, codes sources), assurant la maîtrise de la chaîne de valeur.
            </p>
          </GlassCard>

          <GlassCard className="h-full">
            <Unlock className="w-8 h-8 text-white mb-6 opacity-80" />
            <h3 className="text-lg font-medium mb-3 text-white">Exploitation libre</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Droit d'usage et de modification illimité en interne, garantissant l'absence totale de "lock-in" technologique ou de redevance future.
            </p>
          </GlassCard>

          <GlassCard className="h-full">
            <Database className="w-8 h-8 text-white mb-6 opacity-80" />
            <h3 className="text-lg font-medium mb-3 text-white">Cloisonnement des données</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Stricte confidentialité des données et des cas d'usage spécifiques à chaque organisation. Pas de mutualisation des données sensibles au sein du consortium.
            </p>
          </GlassCard>
        </div>
        
        <p className="mt-8 text-sm text-white/30 italic">
          Tomorrow Theory conserve la propriété intellectuelle originale et le droit de développement ultérieur. Les partenaires demeurent libres de pérenniser ou non l'usage des actifs transférés à l'issue du programme.
        </p>
      </div>
    </section>
  );
};