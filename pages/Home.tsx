import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { Problem } from '../components/sections/Problem';
import { Model } from '../components/sections/Model';
import { AthenaAI } from '../components/sections/AthenaAI';
import { Capabilities } from '../components/sections/Capabilities';
import { SocialProof } from '../components/sections/SocialProof';
import { V2Offer } from '../components/sections/V2Offer';
import { IPRights } from '../components/sections/IPRights';
import { Contact } from '../components/sections/Contact';
import { About } from '../components/sections/About';
import { Footer } from '../components/layout/Footer';
import { OnePagerContent } from '../components/documents/OnePagerContent';

interface HomeProps {
    onLegalClick: () => void;
}

export const Home: React.FC<HomeProps> = ({ onLegalClick }) => {

    const handleDownloadPdf = () => {
        window.print();
    };

    return (
        <div className="min-h-screen text-white selection:bg-accent/30 selection:text-white">
            <div className="no-print">
                <Navbar />
            </div>

            {/* Print Content - Visible ONLY when printing */}
            <div id="pdf-content" className="hidden print:block print:w-full print:h-auto bg-white text-black">
                <OnePagerContent isPdfMode={true} />
            </div>

            <main className="no-print">
                <Hero onDownloadPdf={handleDownloadPdf} />
                <Problem />
                <Model />
                <AthenaAI />
                <Capabilities />
                <SocialProof />
                <V2Offer />
                <IPRights />
                <About />
                <Contact />
            </main>

            <div className="no-print">
                <Footer onLegalClick={onLegalClick} />
            </div>
        </div>
    );
};
