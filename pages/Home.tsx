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

import { useRef } from 'react';
// @ts-ignore
import html2pdf from 'html2pdf.js';
import { OnePagerContent } from '../components/documents/OnePagerContent';

interface HomeProps {
    onLegalClick: () => void;
}

export const Home: React.FC<HomeProps> = ({ onLegalClick }) => {
    const handleDownloadPdf = () => {
        const element = document.getElementById('pdf-content');
        const opt = {
            margin: 0,
            filename: 'Athena_Presentation.pdf',
            image: { type: 'jpeg' as const, quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, logging: false },
            jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const }
        };

        // Make element visible for capture
        if (element) {
            element.style.display = 'block';
            html2pdf().set(opt).from(element).save().then(() => {
                element.style.display = 'none';
            });
        }
    };

    return (
        <div className="min-h-screen text-white selection:bg-accent/30 selection:text-white">
            <Navbar />

            <div id="pdf-content" className="fixed top-0 left-[-9999px] w-[210mm] bg-white text-black">
                <OnePagerContent isPdfMode={true} />
            </div>

            <main>
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

            <Footer onLegalClick={onLegalClick} />
        </div>
    );
};
