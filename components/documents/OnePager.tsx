import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTranslation } from 'react-i18next';
import { OnePagerContent } from './OnePagerContent';

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

            {/* Content */}
            <OnePagerContent />
        </div>
    );
};