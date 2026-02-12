import React from 'react';
import { Microscope, Sliders, Library, Network } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

import { usePrintMode } from '../PrintContext';

export const AthenaAI: React.FC = () => {
    const { t } = useTranslation();
    const { isPrintMode } = usePrintMode();

    return (
        <section id="outil" className={`py-16 md:py-24 scroll-mt-24 md:scroll-mt-32 ${isPrintMode ? 'bg-white text-black' : 'bg-black'} print:bg-white print:text-black`}>
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="mb-16">
                    <span className={`text-accent font-medium tracking-widest text-xs uppercase block mb-3 ${isPrintMode ? 'text-accent-700' : ''} print:text-accent-700`}>
                        {t('ai.badge')}
                    </span>
                    <h2 className={`text-3xl md:text-5xl font-semibold mb-6 leading-tight ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>
                        {t('ai.title')}
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <p className={`text-base md:text-lg ${isPrintMode ? 'text-slate-700' : 'text-white/60'} print:text-slate-700`}>
                            {t('ai.description')}
                        </p>

                        <div className={`border rounded-xl p-6 text-left relative overflow-hidden ${isPrintMode ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.03] border-white/5'} print:bg-slate-50 print:border-slate-200`}>
                            <div className="flex items-start gap-4">
                                <div className={`mt-1 p-2 rounded-lg shrink-0 ${isPrintMode ? 'bg-slate-200 text-accent-700' : 'bg-accent/10 text-accent'} print:bg-slate-200 print:text-accent-700`}>
                                    <Network size={20} />
                                </div>
                                <div>
                                    <h4 className={`font-medium mb-2 ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('ai.architecture.title')}</h4>
                                    <p className={`text-sm leading-relaxed ${isPrintMode ? 'text-slate-600' : 'text-white/60'} print:text-slate-600`}>
                                        {t('ai.architecture.desc')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Module Skills */}
                    <div className={`group p-6 md:p-8 rounded-3xl border transition-colors flex flex-col h-full ${isPrintMode ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]'} print:bg-slate-50 print:border-slate-200`}>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${isPrintMode ? 'bg-slate-200 text-accent-700 group-hover:scale-100' : 'bg-accent/10 text-accent'} print:bg-slate-200 print:text-accent-700 print:group-hover:scale-100`}>
                            <Microscope size={24} />
                        </div>
                        <h3 className={`text-xl font-medium mb-4 ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('ai.modules.skills.title')}</h3>
                        <p className={`text-sm mb-6 leading-relaxed ${isPrintMode ? 'text-slate-600' : 'text-white/60'} print:text-slate-600`}>
                            <Trans i18nKey="ai.modules.skills.desc" />
                        </p>
                        <div className={`pt-6 border-t mt-auto ${isPrintMode ? 'border-slate-200' : 'border-white/5'} print:border-slate-200`}>
                            <span className={`text-xs uppercase tracking-widest ${isPrintMode ? 'text-slate-400' : 'text-white/30'} print:text-slate-400`}>{t('ai.modules.skills.deliverable')}</span>
                        </div>
                    </div>

                    {/* Module Profile */}
                    <div className={`group p-6 md:p-8 rounded-3xl border transition-colors flex flex-col h-full ${isPrintMode ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]'} print:bg-slate-50 print:border-slate-200`}>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${isPrintMode ? 'bg-slate-200 text-accent-700 group-hover:scale-100' : 'bg-accent/10 text-accent'} print:bg-slate-200 print:text-accent-700 print:group-hover:scale-100`}>
                            <Sliders size={24} />
                        </div>
                        <h3 className={`text-xl font-medium mb-4 ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('ai.modules.profile.title')}</h3>
                        <p className={`text-sm mb-6 leading-relaxed ${isPrintMode ? 'text-slate-600' : 'text-white/60'} print:text-slate-600`}>
                            {t('ai.modules.profile.desc')}
                        </p>
                        <div className={`pt-6 border-t mt-auto ${isPrintMode ? 'border-slate-200' : 'border-white/5'} print:border-slate-200`}>
                            <span className={`text-xs uppercase tracking-widest ${isPrintMode ? 'text-slate-400' : 'text-white/30'} print:text-slate-400`}>{t('ai.modules.profile.deliverable')}</span>
                        </div>
                    </div>

                    {/* Module Learn */}
                    <div className={`group p-6 md:p-8 rounded-3xl border transition-colors flex flex-col h-full ${isPrintMode ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]'} print:bg-slate-50 print:border-slate-200`}>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${isPrintMode ? 'bg-slate-200 text-accent-700 group-hover:scale-100' : 'bg-accent/10 text-accent'} print:bg-slate-200 print:text-accent-700 print:group-hover:scale-100`}>
                            <Library size={24} />
                        </div>
                        <h3 className={`text-xl font-medium mb-4 ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('ai.modules.learn.title')}</h3>
                        <p className={`text-sm mb-6 leading-relaxed ${isPrintMode ? 'text-slate-600' : 'text-white/60'} print:text-slate-600`}>
                            {t('ai.modules.learn.desc')}
                        </p>
                        <div className={`pt-6 border-t mt-auto ${isPrintMode ? 'border-slate-200' : 'border-white/5'} print:border-slate-200`}>
                            <span className={`text-xs uppercase tracking-widest ${isPrintMode ? 'text-slate-400' : 'text-white/30'} print:text-slate-400`}>{t('ai.modules.learn.deliverable')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};