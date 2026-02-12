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

const [isGeneratingPdf, setIsGeneratingPdf] = React.useState(false);

const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);

    // Wait for state update and loader render
    setTimeout(async () => {
        try {
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
                await html2pdf().set(opt).from(element).save();
                element.style.display = 'none';
            }
        } catch (error) {
            console.error("PDF Generation Error:", error);
        } finally {
            setIsGeneratingPdf(false);
        }
    }, 100);
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

        {/* Print Loader Overlay */}
        {isGeneratingPdf && (
            <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex flex-col items-center justify-center text-white">
                <div className="w-16 h-16 border-4 border-white/10 border-t-accent rounded-full animate-spin mb-4"></div>
                <p className="text-lg font-medium animate-pulse">Génération du PDF en cours...</p>
                <p className="text-sm text-white/50 mt-2">Cela peut prendre quelques secondes</p>
            </div>
        )}
    </div>
);
};
