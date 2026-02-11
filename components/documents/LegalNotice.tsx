import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';
import { useTranslation, Trans } from 'react-i18next';

interface LegalNoticeProps {
    onBack: () => void;
}

export const LegalNotice: React.FC<LegalNoticeProps> = ({ onBack }) => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8 relative">
            <div className="max-w-4xl mx-auto relative z-10">

                <div className="mb-8">
                    <Button variant="secondary" onClick={onBack} className="!bg-white/5 !border-white/10 hover:!bg-white/10">
                        <ArrowLeft size={16} className="mr-2" /> {t('legal.back_home')}
                    </Button>
                </div>

                <GlassCard className="p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-white border-b border-white/10 pb-6">
                        {t('legal.title')}
                    </h1>

                    <div className="space-y-8 text-white/80 leading-relaxed font-light">

                        <p className="text-sm md:text-base">
                            {t('legal.intro')}
                        </p>

                        <section>
                            <h2 className="text-xl font-medium text-accent mb-3 uppercase tracking-wider text-sm">{t('legal.sections.edition.title')}</h2>
                            <p className="text-sm md:text-base">
                                <Trans i18nKey="legal.sections.edition.text" />
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-accent mb-3 uppercase tracking-wider text-sm">{t('legal.sections.hosting.title')}</h2>
                            <p className="text-sm md:text-base">
                                <Trans i18nKey="legal.sections.hosting.text" />
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-accent mb-3 uppercase tracking-wider text-sm">{t('legal.sections.director.title')}</h2>
                            <p className="text-sm md:text-base">
                                <Trans i18nKey="legal.sections.director.text" />
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-accent mb-3 uppercase tracking-wider text-sm">{t('legal.sections.contact.title')}</h2>
                            <ul className="list-none space-y-1 text-sm md:text-base">
                                <li>{t('legal.sections.contact.phone')}</li>
                                <li><Trans i18nKey="legal.sections.contact.email" /></li>
                                <li>{t('legal.sections.contact.mail')}</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-accent mb-3 uppercase tracking-wider text-sm">{t('legal.sections.privacy.title')}</h2>
                            <p className="text-sm md:text-base">
                                {t('legal.sections.privacy.text')}
                            </p>
                        </section>

                    </div>
                </GlassCard>

                <footer className="mt-8 text-center text-xs text-white/30">
                    &copy; {new Date().getFullYear()} {t('legal.footer')}
                </footer>
            </div>
        </div>
    );
};