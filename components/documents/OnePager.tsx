import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTranslation } from 'react-i18next';

// Use direct imports of sections
import { Hero } from '../sections/Hero';
import { Problem } from '../sections/Problem';
import { Model } from '../sections/Model';
import { AthenaAI } from '../sections/AthenaAI';
import { Capabilities } from '../sections/Capabilities';
import { SocialProof } from '../sections/SocialProof';
import { V2Offer } from '../sections/V2Offer';
import { IPRights } from '../sections/IPRights';
import { About } from '../sections/About';

export const OnePager: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handlePrint = () => {
        window.print();
    };

    useEffect(() => {
        // Auto-trigger print when opened
        setTimeout(() => {
            window.print();
        }, 500);
    }, []);

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans">
            {/* Print Controls - Hidden when printing */}
            <div className="fixed top-8 right-8 flex gap-4 print:hidden z-50">
                <Button variant="secondary" className="!bg-slate-800 !text-white shadow-xl" onClick={() => navigate('/')}>
                    <ArrowLeft size={16} className="mr-2" /> {t('onepager.back_home')}
                </Button>
                <Button variant="primary" className="!bg-accent !text-white hover:!bg-accent/90 shadow-xl" onClick={handlePrint}>
                    <Download size={16} className="mr-2" /> {t('onepager.print_save')}
                </Button>
            </div>

            {/* Print Container */}
            <div className="print-container bg-white text-black">
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

                {/* Simple Footer for print */}
                <div className="hidden print:block text-center text-xs text-slate-500 py-8 border-t border-slate-200 mt-8">
                    <p>ATHENA - Tomorrow Theory</p>
                    <p>https://athena.tomorrowtheory.com</p>
                </div>
            </div>
        </div>
    );
};