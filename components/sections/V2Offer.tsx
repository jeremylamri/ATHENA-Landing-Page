import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Calendar, Users, Rocket, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export const V2Offer: React.FC = () => {
  return (
    <section id="v2" className="py-16 md:py-24 relative scroll-mt-24 md:scroll-mt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a1a20] to-black -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <div>
            <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3">
              Le Programme
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-white leading-tight">
              Programme ATHENA V2.
            </h2>
            <div className="prose prose-invert max-w-none text-white/70 text-base md:text-lg leading-relaxed mb-10">
                <p className="mb-4">
                Dès avril 2026, la phase 2 du programme réunira un consortium restreint de partenaires. L'objectif est la consolidation des standards méthodologiques et l'optimisation des algorithmes d'aide à la conception.
                </p>
                <p className="text-base">
                Pour l'organisation partenaire, l'intégration au programme apporte :
                </p>
                <ul className="list-none space-y-3 mt-4 text-base">
                    <li className="flex items-start gap-3"><CheckCircle size={18} className="text-accent mt-1 shrink-0" /> Une grille de lecture haute définition des compétences stratégiques.</li>
                    <li className="flex items-start gap-3"><CheckCircle size={18} className="text-accent mt-1 shrink-0" /> Une rupture avec les automatismes de conception pédagogique.</li>
                    <li className="flex items-start gap-3"><CheckCircle size={18} className="text-accent mt-1 shrink-0" /> Une rationalisation des investissements basée sur la preuve.</li>
                    <li className="flex items-start gap-3"><CheckCircle size={18} className="text-accent mt-1 shrink-0" /> Une pertinence accrue des dispositifs perçue par le terrain.</li>
                </ul>
            </div>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-accent/50"></div>
                <h4 className="text-white font-medium mb-1">Cadrage & Alignement</h4>
                <p className="text-sm text-white/50">Définition des périmètres d'expérimentation et constitution de la task-force.</p>
              </div>
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-accent/50"></div>
                <h4 className="text-white font-medium mb-1">Modélisation & Test</h4>
                <p className="text-sm text-white/50">Épreuve du modèle sur des cas d'usage réels et critiques.</p>
              </div>
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-accent/50"></div>
                <h4 className="text-white font-medium mb-1">Ancrage méthodologique</h4>
                <p className="text-sm text-white/50">Transfert de compétences et appropriation de l'outil par les concepteurs.</p>
              </div>
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-accent/50"></div>
                <h4 className="text-white font-medium mb-1">Bilan & Projection</h4>
                <p className="text-sm text-white/50">Consolidation des résultats et livraison des actifs finaux.</p>
              </div>
            </div>
          </div>

          <GlassCard className="border-accent/20 bg-accent/5 lg:sticky lg:top-32 mt-8 lg:mt-0">
            <div className="flex justify-between items-baseline mb-8">
              <h3 className="text-xl font-semibold text-white">Modalités d'adhésion</h3>
            </div>

            <div className="space-y-6 mb-8">
               <div className="flex items-center justify-between py-3 border-b border-white/10">
                <div className="flex items-center gap-3 text-white/80">
                  <Calendar size={18} className="text-accent" />
                  <span>Démarrage</span>
                </div>
                <span className="font-mono text-white">Avril 2026</span>
              </div>

               <div className="flex items-center justify-between py-3 border-b border-white/10">
                <div className="flex items-center gap-3 text-white/80">
                  <Rocket size={18} className="text-accent" />
                  <span>Durée du cycle</span>
                </div>
                <span className="font-mono text-white">12 mois</span>
              </div>

               <div className="flex items-center justify-between py-3 border-b border-white/10">
                <div className="flex items-center gap-3 text-white/80">
                  <Users size={18} className="text-accent" />
                  <span>Consortium</span>
                </div>
                <span className="font-mono text-white">6 partenaires max.</span>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg text-center mt-4">
                 <span className="text-sm text-white/50 block mb-1">Contribution financière</span>
                 <span className="text-2xl font-bold text-white">30 000 € HT</span>
              </div>
            </div>

            <Button className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Candidater au programme
            </Button>
            
            <div className="mt-6 text-xs text-white/40 leading-snug">
              <strong className="text-white/60 block mb-1">Gouvernance requise :</strong>
              Sponsor exécutif + Chef de projet + Experts métier.
            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};