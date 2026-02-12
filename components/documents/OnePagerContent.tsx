import React from 'react';
import { Hero } from '../sections/Hero';
import { Problem } from '../sections/Problem';
import { Model } from '../sections/Model';
import { AthenaAI } from '../sections/AthenaAI';
import { Capabilities } from '../sections/Capabilities';
import { SocialProof } from '../sections/SocialProof';
import { V2Offer } from '../sections/V2Offer';
import { IPRights } from '../sections/IPRights';
import { About } from '../sections/About';
import { Contact } from '../sections/Contact';

import { PrintProvider } from '../PrintContext';

interface OnePagerContentProps {
    isPdfMode?: boolean;
}

export const OnePagerContent: React.FC<OnePagerContentProps> = ({ isPdfMode = false }) => {
    return (
        <PrintProvider isPrintMode={isPdfMode}>
            <div className={`print-container ${isPdfMode ? 'bg-white text-black' : 'bg-white text-black'}`}>
                {/* 
                   We render the sections. 
                   NOTE: Each section must have 'print:bg-white print:text-black' 
                   and override internal dark styles for print.
                */}

                <div className="print:break-after-page">
                    <Hero />
                </div>

                <div className="print:break-after-page">
                    <Problem />
                </div>

                <div className="print:break-after-page">
                    <Model />
                </div>

                <div className="print:break-after-page">
                    <AthenaAI />
                </div>

                <div className="print:break-after-page">
                    <Capabilities />
                </div>

                <div className="print:break-after-page">
                    <SocialProof />
                </div>

                <div className="print:break-after-page">
                    <V2Offer />
                </div>

                <div className="print:break-inside-avoid">
                    <IPRights />
                </div>

                <div className="print:break-inside-avoid">
                    <About />
                </div>

                <div className="print:break-inside-avoid">
                    <Contact />
                </div>

                {/* Simple Footer for print */}
                <div className="hidden print:block text-center text-xs text-slate-500 py-8 border-t border-slate-200 mt-8">
                    <p>ATHENA - Tomorrow Theory</p>
                    <p>https://athena.tomorrowtheory.com</p>
                </div>
            </div>
        </PrintProvider>
    );
};
