import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';

interface LegalNoticeProps {
  onBack: () => void;
}

export const LegalNotice: React.FC<LegalNoticeProps> = ({ onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="mb-8">
            <Button variant="secondary" onClick={onBack} className="!bg-white/5 !border-white/10 hover:!bg-white/10">
                <ArrowLeft size={16} className="mr-2" /> Retour au site
            </Button>
        </div>

        <GlassCard className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-white border-b border-white/10 pb-6">
                Mentions Légales
            </h1>

            <div className="space-y-8 text-white/80 leading-relaxed font-light">
                
                <p className="text-sm md:text-base">
                    Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l’économie numérique, il est précisé aux utilisateurs du site tomorrowtheory l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
                </p>

                <section>
                    <h2 className="text-xl font-medium text-accent mb-3 uppercase tracking-wider text-sm">Édition du site</h2>
                    <p className="text-sm md:text-base">
                        Le présent site, accessible à l’URL <a href="https://www.athenaskills.com" className="underline hover:text-white transition-colors">https://www.athenaskills.com</a> (le « Site »), est édité par :
                        <br /><br />
                        <strong className="text-white">Tomorrow Theory</strong>, société au capital de 1000 euros, inscrite au R.C.S. de PARIS sous le numéro RCS 912 956 588, dont le siège social est situé au 1 rue de Stockholm, 75008 Paris, représenté(e) par Jérémy LAMRI dûment habilité(e).
                        <br />
                        Le numéro individuel TVA de l’éditeur est : FR86912956588.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-medium text-accent mb-3 uppercase tracking-wider text-sm">Hébergement</h2>
                    <p className="text-sm md:text-base">
                        Le présent site est hébergé par :
                        <br /><br />
                        <strong className="text-white">La société OVH</strong>, dont le siège social est situé au 2 rue kellermann BP 80157 59053 ROUBAIX CEDEX 1 – France.
                        <br />
                        Téléphone : 08 203 203 63.
                        <br />
                        Le numéro individuel TVA de l’hébergeur est : FR22424761419.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-medium text-accent mb-3 uppercase tracking-wider text-sm">Directeur de publication</h2>
                    <p className="text-sm md:text-base">
                        L’édition et la direction de la publication du site est assurée par <strong className="text-white">Jeremy Lamri</strong>, représentant légal de Tomorrow Theory.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-medium text-accent mb-3 uppercase tracking-wider text-sm">Nous contacter</h2>
                    <ul className="list-none space-y-1 text-sm md:text-base">
                        <li>Par téléphone : +33643042886</li>
                        <li>Par email : <a href="mailto:general@tomorrowtheory.com" className="underline hover:text-white transition-colors">general@tomorrowtheory.com</a></li>
                        <li>Par courrier : 1 rue de Stockholm PARIS</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-medium text-accent mb-3 uppercase tracking-wider text-sm">Données personnelles</h2>
                    <p className="text-sm md:text-base">
                        Le traitement de vos données à caractère personnel est régi par notre Charte du respect de la vie privée, disponible depuis la section « Charte de Protection des Données Personnelles », conformément au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).
                    </p>
                </section>

            </div>
        </GlassCard>

        <footer className="mt-8 text-center text-xs text-white/30">
            &copy; {new Date().getFullYear()} Tomorrow Theory.
        </footer>
      </div>
    </div>
  );
};