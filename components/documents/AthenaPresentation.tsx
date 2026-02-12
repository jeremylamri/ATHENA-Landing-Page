import React from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, Target, BookOpen, Heart, Activity, Atom, Layers, FileWarning, MapPinOff, CheckCircle2 } from 'lucide-react';

export const AthenaPresentation: React.FC = () => {
    const { t } = useTranslation();

    const dimensions = [
        { title: t('model.dimensions.cognition.title'), desc: t('model.dimensions.cognition.desc'), icon: Brain },
        { title: t('model.dimensions.knowledge.title'), desc: t('model.dimensions.knowledge.desc'), icon: BookOpen },
        { title: t('model.dimensions.conation.title'), desc: t('model.dimensions.conation.desc'), icon: Target },
        { title: t('model.dimensions.emotion.title'), desc: t('model.dimensions.emotion.desc'), icon: Heart },
        { title: t('model.dimensions.sensorimotor.title'), desc: t('model.dimensions.sensorimotor.desc'), icon: Activity }
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900 overflow-visible print:overflow-visible">
            <style>{`
                @page {
                    size: A4;
                    margin: 0;
                }
                @media print {
                    body {
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .page-break {
                        break-after: page;
                        page-break-after: always;
                    }
                }
                .a4-page {
                    width: 210mm;
                    height: 297mm;
                    padding: 15mm;
                    margin: 0 auto;
                    background: white;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                @media screen {
                    .a4-page {
                        margin-bottom: 2rem;
                        box-shadow: 0 0 20px rgba(0,0,0,0.1);
                    }
                    body {
                        background: #f0f0f0;
                        padding-top: 2rem;
                        padding-bottom: 2rem;
                    }
                }
            `}</style>

            {/* PAGE 1: VISION, PROBLEM, MODEL */}
            <div className="a4-page page-break">
                {/* Header - Compact */}
                <header className="flex justify-between items-end border-b-2 border-slate-900 pb-2 mb-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 leading-none">ATHENA</h1>
                        <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest mt-0.5">Tomorrow Theory</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[9px] font-semibold text-slate-400 uppercase">Projet de Recherche-Action</p>
                        <p className="text-base font-bold text-accent leading-none">V2.4</p>
                    </div>
                </header>

                {/* Hero / Vision - Compact */}
                <section className="mb-6">
                    <h2 className="text-2xl font-extrabold text-slate-900 leading-tight mb-2">
                        {t('hero.title')}
                    </h2>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-4xl">
                        {t('hero.subtitle_strong')} <span className="font-normal text-slate-500">{t('hero.subtitle')}</span>
                    </p>
                </section>

                <div className="grid grid-cols-12 gap-6 grow">
                    {/* Left Column: Problem - Compact */}
                    <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 h-full">
                            <h3 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1.5">{t('problem.badge')}</h3>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">{t('problem.title')}</h4>
                            <p className="text-[11px] text-slate-600 mb-4 leading-relaxed text-justify">{t('problem.description')}</p>

                            <div className="space-y-3">
                                <div className="flex gap-2 items-start">
                                    <FileWarning className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold text-xs text-slate-900">{t('problem.cards.granularity.title')}</p>
                                        <p className="text-[10px] text-slate-500 leading-tight">{t('problem.cards.granularity.desc')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <Layers className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold text-xs text-slate-900">{t('problem.cards.content_first.title')}</p>
                                        <p className="text-[10px] text-slate-500 leading-tight">{t('problem.cards.content_first.desc')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <MapPinOff className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold text-xs text-slate-900">{t('problem.cards.context.title')}</p>
                                        <p className="text-[10px] text-slate-500 leading-tight">{t('problem.cards.context.desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Model - Highly Compacted */}
                    <div className="col-span-12 md:col-span-7 flex flex-col">
                        <h3 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1.5">{t('model.badge')}</h3>
                        <h4 className="text-lg font-bold text-slate-900 mb-3">{t('model.title')}</h4>

                        {/* Reduced Analogy Box */}
                        <div className="bg-slate-900 text-white p-4 rounded-xl mb-4 shadow-sm">
                            <div className="flex items-start gap-3">
                                <Atom className="w-6 h-6 text-accent shrink-0 mt-1" />
                                <div>
                                    <h5 className="font-bold text-sm mb-1 text-white">{t('model.analogy.title')}</h5>
                                    <p className="text-[10px] text-slate-300 leading-relaxed whitespace-pre-line">{t('model.analogy.text')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Ultra-Compact Grid for Dimensions */}
                        <div className="grid grid-cols-1 gap-2">
                            {dimensions.map((dim, i) => (
                                <div key={i} className="flex items-center gap-3 p-1.5 border border-slate-100 rounded-lg bg-white">
                                    <div className="p-1.5 bg-slate-50 rounded-md text-slate-700 shrink-0">
                                        <dim.icon size={12} />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-bold text-xs text-slate-900 uppercase">{dim.title}</span>
                                        </div>
                                        <p className="text-[10px] text-slate-500 truncate">{dim.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <footer className="mt-auto pt-6 border-t border-slate-200 flex justify-between items-center text-xs text-slate-400">
                    <span>© 2026 Tomorrow Theory</span>
                    <span>Page 1/3</span>
                    <span>athena.tomorrowtheory.com</span>
                </footer>
            </div>

            {/* PAGE 2: AI, CAPABILITIES, PROOF */}
            <div className="a4-page page-break">
                <header className="flex justify-between items-end border-b pb-4 mb-8">
                    <h1 className="text-xl font-bold text-slate-300">ATHENA</h1>
                    <span className="text-xs font-bold text-accent uppercase">Architecture & Impact</span>
                </header>

                <div className="grid grid-cols-1 gap-10">
                    {/* AI Section */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px bg-slate-200 grow"></div>
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest border border-accent px-3 py-1 rounded-full">{t('ai.badge')}</h2>
                            <div className="h-px bg-slate-200 grow"></div>
                        </div>

                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('ai.title')}</h3>
                            <p className="text-sm text-slate-500 max-w-2xl mx-auto">{t('ai.description')}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2">{t('ai.modules.skills.title')}</h4>
                                <p className="text-xs text-slate-500 mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('ai.modules.skills.desc') }}></p>
                                <div className="text-[10px] font-semibold text-accent bg-accent/5 py-1 px-2 rounded w-fit">{t('ai.modules.skills.deliverable')}</div>
                            </div>
                            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2">{t('ai.modules.profile.title')}</h4>
                                <p className="text-xs text-slate-500 mb-3 leading-relaxed">{t('ai.modules.profile.desc')}</p>
                                <div className="text-[10px] font-semibold text-accent bg-accent/5 py-1 px-2 rounded w-fit">{t('ai.modules.profile.deliverable')}</div>
                            </div>
                            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2">{t('ai.modules.learn.title')}</h4>
                                <p className="text-xs text-slate-500 mb-3 leading-relaxed">{t('ai.modules.learn.desc')}</p>
                                <div className="text-[10px] font-semibold text-accent bg-accent/5 py-1 px-2 rounded w-fit">{t('ai.modules.learn.deliverable')}</div>
                            </div>
                        </div>
                    </section>

                    {/* Capabilities */}
                    <section>
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">{t('capabilities.title')}</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                <div className="flex gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-sm text-slate-900">{t('capabilities.cards.objectivation.title')}</h5>
                                        <p className="text-xs text-slate-500">{t('capabilities.cards.objectivation.desc')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-sm text-slate-900">{t('capabilities.cards.modeling.title')}</h5>
                                        <p className="text-xs text-slate-500">{t('capabilities.cards.modeling.desc')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-sm text-slate-900">{t('capabilities.cards.transparency.title')}</h5>
                                        <p className="text-xs text-slate-500">{t('capabilities.cards.transparency.desc')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-sm text-slate-900">{t('capabilities.cards.tactics.title')}</h5>
                                        <p className="text-xs text-slate-500">{t('capabilities.cards.tactics.desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Proof */}
                    <section className="mt-auto">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t('social_proof.badge')}</h3>
                        <p className="text-sm text-slate-600 italic border-l-4 border-accent pl-4 py-1" dangerouslySetInnerHTML={{ __html: t('social_proof.desc_1') }}></p>
                    </section>
                </div>

                <footer className="mt-auto pt-6 border-t border-slate-200 flex justify-between items-center text-xs text-slate-400">
                    <span>© 2026 Tomorrow Theory</span>
                    <span>Page 2/3</span>
                    <span>athena.tomorrowtheory.com</span>
                </footer>
            </div>

            {/* PAGE 3: OFFER, IP, CONTACT */}
            <div className="a4-page page-break">
                <header className="flex justify-between items-end border-b pb-4 mb-8">
                    <h1 className="text-xl font-bold text-slate-300">ATHENA</h1>
                    <span className="text-xs font-bold text-accent uppercase">Consortium V2</span>
                </header>

                <div className="grow flex flex-col gap-8">
                    {/* Offer Highlight */}
                    <section className="bg-slate-900 text-white rounded-2xl p-8 shadow-lg print:bg-slate-900 print:text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-1">{t('v2.title')}</h2>
                                    <p className="text-accent text-sm font-medium">{t('v2.intro')}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-bold text-white">{t('v2.card.start_value')}</div>
                                    <div className="text-xs text-white/50 uppercase tracking-widest">Kick-off</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                                <div>
                                    <span className="block text-xs text-white/50 uppercase mb-1">{t('v2.card.duration_label')}</span>
                                    <span className="block text-lg font-bold">{t('v2.card.duration_value')}</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-white/50 uppercase mb-1">{t('v2.card.consortium_label')}</span>
                                    <span className="block text-lg font-bold">{t('v2.card.consortium_value')}</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-white/50 uppercase mb-1">{t('v2.card.governance_label')}</span>
                                    <span className="block text-sm font-medium leading-tight">{t('v2.card.governance_value')}</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* IP & Philosophy */}
                    <section className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-slate-900 mb-3">{t('ip.title')}</h3>
                            <p className="text-sm text-slate-600 mb-4">{t('ip.description')}</p>
                            <ul className="space-y-2">
                                <li className="text-xs text-slate-500 flex gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5"></div>
                                    {t('ip.cards.transfer.desc')}
                                </li>
                                <li className="text-xs text-slate-500 flex gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5"></div>
                                    {t('ip.cards.free_use.desc')}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-3">{t('about.badge')}</h3>
                            <p className="text-sm text-slate-600 mb-4">{t('about.desc_1')}</p>
                            <p className="text-sm text-slate-500 italic">"{t('about.desc_3')}"</p>
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="mt-auto bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
                        <h2 className="text-xl font-bold text-slate-900 mb-2">{t('contact.title')}</h2>
                        <p className="text-sm text-slate-500 mb-6 max-w-lg mx-auto">{t('contact.description')}</p>

                        <div className="inline-flex flex-col items-center">
                            <span className="text-lg font-bold text-accent">general@tomorrowtheory.com</span>
                            <span className="text-xs text-slate-400 mt-1">Ref: ATHENA CONTO-V2</span>
                        </div>
                    </section>
                </div>

                <footer className="mt-auto pt-6 border-t border-slate-200 flex justify-between items-center text-xs text-slate-400">
                    <span>© 2026 Tomorrow Theory</span>
                    <span>Page 3/3</span>
                    <span>athena.tomorrowtheory.com</span>
                </footer>
            </div>
        </div>
    );
};
