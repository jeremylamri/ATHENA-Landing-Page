import React from 'react';
import { Microscope, Sliders, Library, Network } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const AthenaAI: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="outil" className="py-16 md:py-24 bg-black scroll-mt-24 md:scroll-mt-32">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="mb-16">
                    <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3">
                        {t('ai.badge')}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-accent leading-tight">
                        {t('ai.title')}
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <p className="text-white/60 text-base md:text-lg">
                            {t('ai.description')}
                        </p>

                        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6 text-left relative overflow-hidden">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 bg-accent/10 rounded-lg text-accent shrink-0">
                                    <Network size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-2">{t('ai.architecture.title')}</h4>
                                    <p className="text-sm text-white/60 leading-relaxed">
                                        {t('ai.architecture.desc')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Module Skills */}
                    <div className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors flex flex-col h-full">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                            <Microscope size={24} />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-4">{t('ai.modules.skills.title')}</h3>
                        <p className="text-white/60 text-sm mb-6 leading-relaxed">
                            <Trans i18nKey="ai.modules.skills.desc" />
                        </p>
                        <div className="pt-6 border-t border-white/5 mt-auto">
                            <span className="text-xs text-white/30 uppercase tracking-widest">{t('ai.modules.skills.deliverable')}</span>
                        </div>
                    </div>

                    {/* Module Profile */}
                    <div className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors flex flex-col h-full">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                            <Sliders size={24} />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-4">{t('ai.modules.profile.title')}</h3>
                        <p className="text-white/60 text-sm mb-6 leading-relaxed">
                            {t('ai.modules.profile.desc')}
                        </p>
                        <div className="pt-6 border-t border-white/5 mt-auto">
                            <span className="text-xs text-white/30 uppercase tracking-widest">{t('ai.modules.profile.deliverable')}</span>
                        </div>
                    </div>

                    {/* Module Learn */}
                    <div className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors flex flex-col h-full">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                            <Library size={24} />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-4">{t('ai.modules.learn.title')}</h3>
                        <p className="text-white/60 text-sm mb-6 leading-relaxed">
                            {t('ai.modules.learn.desc')}
                        </p>
                        <div className="pt-6 border-t border-white/5 mt-auto">
                            <span className="text-xs text-white/30 uppercase tracking-widest">{t('ai.modules.learn.deliverable')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};