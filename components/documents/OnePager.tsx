import React from 'react';
import { Atom, Target, CheckCircle2, Calendar, Download, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';

export const OnePager: React.FC = () => {
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans p-0 md:p-8">
      {/* Print Controls - Hidden when printing */}
      <div className="fixed bottom-8 right-8 flex gap-4 print:hidden z-50">
        <Button variant="secondary" className="!bg-slate-800 !text-white shadow-xl" onClick={() => window.location.href = '/'}>
            <ArrowLeft size={16} className="mr-2" /> Retour au site
        </Button>
        <Button variant="primary" className="!bg-blue-600 !text-white hover:!bg-blue-700 shadow-xl" onClick={handlePrint}>
            <Download size={16} className="mr-2" /> Imprimer / Sauvegarder en PDF
        </Button>
      </div>

      <div className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none p-8 md:p-12 min-h-[297mm] relative">
        
        {/* Header */}
        <header className="flex justify-between items-start border-b-2 border-slate-900 pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white">
                    <span className="font-bold">A</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">ATHENA</h1>
            </div>
            <p className="text-slate-500 font-medium">Intelligence de la Compétence & Ingénierie Augmentée</p>
          </div>
          <div className="text-right text-xs text-slate-500">
            <p>Tomorrow Theory</p>
            <p>Projet de Recherche-Action</p>
            <p>V2 — 2026</p>
          </div>
        </header>

        {/* 1. Problem & Value Prop */}
        <div className="grid grid-cols-12 gap-8 mb-10">
            <div className="col-span-12 md:col-span-4 bg-slate-50 p-6 rounded-lg border border-slate-100">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Le Constat</h2>
                <p className="text-sm leading-relaxed text-slate-700 mb-4">
                    <strong>L'impasse méthodologique.</strong> Les organisations investissent en formation sans impact mesurable. Les référentiels restent trop génériques et l'IA, sans cadre, risque d'industrialiser des modèles pédagogiques faibles.
                </p>
                <div className="text-xs text-slate-500 italic">
                    "On ne peut pas concevoir une intervention précise sur une définition floue."
                </div>
            </div>
            <div className="col-span-12 md:col-span-8">
                <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-3">La Proposition ATHENA</h2>
                <p className="text-lg font-medium leading-snug text-slate-900 mb-4">
                    Un système (Modèle + Outil IA) pour décomposer la compétence en leviers contributifs précis et générer des architectures pédagogiques contextualisées.
                </p>
                <ul className="grid grid-cols-2 gap-4">
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
                        <span>Précision : 60 facettes cognitives</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
                        <span>Contexte : 17 facteurs d'environnement</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
                        <span>Tactique : 220+ modalités pédagogiques</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
                        <span>Niveaux : Taxonomie 4 paliers</span>
                    </li>
                </ul>
            </div>
        </div>

        {/* 2. The Solution */}
        <div className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">L'écosystème</h2>
            <div className="grid grid-cols-3 gap-6">
                <div className="border border-slate-200 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3 text-blue-700">
                        <Atom size={20} />
                        <h3 className="font-bold">Skills</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                        Déconstruction analytique. Transforme une intention métier (ex: "Leadership") en une cartographie précise de facettes cognitives, conatives et émotionnelles.
                    </p>
                </div>
                <div className="border border-slate-200 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3 text-blue-700">
                        <Target size={20} />
                        <h3 className="font-bold">Profile</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                        Modélisation du contexte. Intègre les contraintes réelles (temps, pression, culture) pour calibrer la faisabilité du dispositif.
                    </p>
                </div>
                <div className="border border-slate-200 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3 text-blue-700">
                        <Calendar size={20} />
                        <h3 className="font-bold">Learn</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                        Ingénierie augmentée. L'IA assemble les modalités les plus pertinentes pour chaque facette visée, créant un parcours hybride justifié.
                    </p>
                </div>
            </div>
        </div>

        {/* 3. Offer V2 */}
        <div className="bg-slate-900 text-white rounded-xl p-8 print:bg-slate-100 print:text-black print:border-2 print:border-black">
            <div className="flex justify-between items-baseline mb-6">
                <h2 className="text-xl font-bold">Programme Partenaires V2</h2>
                <span className="font-mono text-blue-400 print:text-blue-700 font-bold">AVRIL 2026</span>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 print:text-slate-600">L'Offre</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between border-b border-white/10 print:border-slate-300 pb-2">
                            <span>Contribution unique</span>
                            <span className="font-bold">30 000 € HT</span>
                        </li>
                        <li className="flex justify-between border-b border-white/10 print:border-slate-300 pb-2">
                            <span>Durée du cycle</span>
                            <span>12 Mois</span>
                        </li>
                        <li className="flex justify-between border-b border-white/10 print:border-slate-300 pb-2">
                            <span>Consortium</span>
                            <span>Max. 6 Organisations</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 print:text-slate-600">Livrables & IP</h3>
                    <p className="text-sm leading-relaxed text-slate-300 print:text-slate-800">
                        Transfert intégral de la propriété intellectuelle (PI) développée durant la V2. 
                        Droit d'usage illimité en interne ("copie complète" des modèles et outils). 
                        Aucune dépendance technologique future.
                    </p>
                </div>
            </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-12 text-center text-xs text-slate-400 print:text-slate-600">
            <p>Tomorrow Theory — Recherche & Développement en Sciences Cognitives appliquées.</p>
            <p>contact@tomorrowtheory.com</p>
        </footer>

      </div>
    </div>
  );
};