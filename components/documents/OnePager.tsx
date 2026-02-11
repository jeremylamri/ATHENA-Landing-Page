import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Atom, Target, CheckCircle2, Calendar, Download, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTranslation, Trans } from 'react-i18next';

export const OnePager: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handlePrint = () => {
        window.print();
    };

    React.useEffect(() => {
        // Auto-trigger print when the component mounts (implying a download intention)
        setTimeout(() => {
            window.print();
        }, 1000);
    }, []);

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans p-0 md:p-8">
            {/* Print Controls - Hidden when printing */}
            <div className="fixed bottom-8 right-8 flex gap-4 print:hidden z-50">
                <Button variant="secondary" className="!bg-slate-800 !text-white shadow-xl" onClick={() => navigate('/')}>
                    <ArrowLeft size={16} className="mr-2" /> {t('onepager.back_home')}
                </Button>
                <Button variant="primary" className="!bg-accent-600 !text-white hover:!bg-accent-700 shadow-xl" onClick={handlePrint}>
                    <Download size={16} className="mr-2" /> {t('onepager.print_save')}
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
                        <p className="text-slate-500 font-medium">{t('onepager.header.subtitle')}</p>
                    </div>
                    <div className="text-right text-xs text-slate-500">
                        <p>{t('onepager.header.company')}</p>
                        <p>{t('onepager.header.project')}</p>
                        <p>{t('onepager.header.version')}</p>
                    </div>
                </header>

                {/* 1. Problem & Value Prop */}
                <div className="grid grid-cols-12 gap-8 mb-10">
                    <div className="col-span-12 md:col-span-4 bg-slate-50 p-6 rounded-lg border border-slate-100">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">{t('onepager.problem.title')}</h2>
                        <p className="text-sm leading-relaxed text-slate-700 mb-4">
                            <Trans i18nKey="onepager.problem.text" />
                        </p>
                        <div className="text-xs text-slate-500 italic">
                            {t('onepager.problem.quote')}
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-accent-600 mb-3">{t('onepager.prop.title')}</h2>
                        <p className="text-lg font-medium leading-snug text-slate-900 mb-4">
                            {t('onepager.prop.text')}
                        </p>
                        <ul className="grid grid-cols-2 gap-4">
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 size={16} className="text-accent-600 mt-0.5 shrink-0" />
                                <span>{t('onepager.prop.list.precision')}</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 size={16} className="text-accent-600 mt-0.5 shrink-0" />
                                <span>{t('onepager.prop.list.context')}</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 size={16} className="text-accent-600 mt-0.5 shrink-0" />
                                <span>{t('onepager.prop.list.tactic')}</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 size={16} className="text-accent-600 mt-0.5 shrink-0" />
                                <span>{t('onepager.prop.list.levels')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 2. The Solution */}
                <div className="mb-10">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">{t('onepager.ecosystem.title')}</h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="border border-slate-200 rounded-lg p-5">
                            <div className="flex items-center gap-2 mb-3 text-accent-700">
                                <Atom size={20} />
                                <h3 className="font-bold">{t('onepager.ecosystem.skills.title')}</h3>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                {t('onepager.ecosystem.skills.desc')}
                            </p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-5">
                            <div className="flex items-center gap-2 mb-3 text-accent-700">
                                <Target size={20} />
                                <h3 className="font-bold">{t('onepager.ecosystem.profile.title')}</h3>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                {t('onepager.ecosystem.profile.desc')}
                            </p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-5">
                            <div className="flex items-center gap-2 mb-3 text-accent-700">
                                <Calendar size={20} />
                                <h3 className="font-bold">{t('onepager.ecosystem.learn.title')}</h3>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                {t('onepager.ecosystem.learn.desc')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. Offer V2 */}
                <div className="bg-slate-900 text-white rounded-xl p-8 print:bg-slate-100 print:text-black print:border-2 print:border-black">
                    <div className="flex justify-between items-baseline mb-6">
                        <h2 className="text-xl font-bold">{t('onepager.offer.title')}</h2>
                        <span className="font-mono text-accent-400 print:text-accent-700 font-bold">{t('onepager.offer.date')}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 print:text-slate-600">{t('onepager.offer.offer_col.title')}</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex justify-between border-b border-white/10 print:border-slate-300 pb-2">
                                    <span>{t('onepager.offer.offer_col.contribution')}</span>
                                    <span className="font-bold">30 000 € HT</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 print:border-slate-300 pb-2">
                                    <span>{t('onepager.offer.offer_col.duration')}</span>
                                    <span>{t('onepager.offer.offer_col.duration_val')}</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 print:border-slate-300 pb-2">
                                    <span>{t('onepager.offer.offer_col.consortium')}</span>
                                    <span>{t('onepager.offer.offer_col.consortium_val')}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 print:text-slate-600">{t('onepager.offer.deliverables_col.title')}</h3>
                            <p className="text-sm leading-relaxed text-slate-300 print:text-slate-800">
                                {t('onepager.offer.deliverables_col.text')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-auto pt-12 text-center text-xs text-slate-400 print:text-slate-600">
                    <p>{t('onepager.footer.desc')}</p>
                    <p>contact@tomorrowtheory.com</p>
                </footer>

            </div>
        </div>
    );
};