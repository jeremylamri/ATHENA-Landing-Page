import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-12 lg:pt-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Text Content */}
                <div className="relative z-10 order-1 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="inline-block px-3 py-1 text-[10px] md:text-xs font-medium tracking-wide text-accent bg-accent/10 rounded-full border border-accent/20">
                                {t('hero.badge')}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
                            {t('hero.title')}
                        </h1>
                        <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
                            <strong className="text-white font-medium block mb-2">{t('hero.subtitle_strong')}</strong>
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="group w-full sm:w-auto">
                                {t('hero.cta_talk')}
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="secondary" onClick={() => window.open('/one-pager', '_blank')} className="w-full sm:w-auto">
                                <Download className="mr-2 w-4 h-4" />
                                {t('hero.cta_download')}
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Dynamic Atom Visualization */}
                <div className="relative h-[320px] lg:h-[600px] flex items-center justify-center perspective-[1000px] order-2 lg:order-2">
                    {/* Background Atmosphere */}
                    <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full transform scale-150 pointer-events-none" />

                    {/* ATOM CONTAINER - Scaled down for mobile to fit screen width including satellites */}
                    <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center transform-style-3d scale-[0.55] sm:scale-75 lg:scale-90 transition-transform duration-500">

                        {/* 1. NUCLEUS (Core) */}
                        <motion.div
                            animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full shadow-[0_0_50px_rgba(100,210,255,0.8)] z-20 flex items-center justify-center"
                        >
                            <div className="absolute inset-0 bg-accent blur-md rounded-full opacity-50" />
                            <div className="relative w-full h-full bg-gradient-to-br from-white via-blue-100 to-accent rounded-full" />
                        </motion.div>

                        {/* 2. ELECTRON ORBITS (6 distinct orbits) */}

                        {/* Orbit 1: Standard Diagonal */}
                        <div className="absolute w-[220px] h-[220px] lg:w-[300px] lg:h-[300px]" style={{ transform: 'rotateX(60deg) rotateY(20deg)' }}>
                            <div className="absolute inset-0 border border-white/10 rounded-full" />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <div className="absolute top-0 left-1/2 w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_#64D2FF] -translate-x-1/2 -translate-y-1/2" />
                            </motion.div>
                        </div>

                        {/* Orbit 2: Opposing Diagonal */}
                        <div className="absolute w-[220px] h-[220px] lg:w-[300px] lg:h-[300px]" style={{ transform: 'rotateX(60deg) rotateY(135deg)' }}>
                            <div className="absolute inset-0 border border-white/10 rounded-full" />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <div className="absolute bottom-0 left-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_white] -translate-x-1/2 translate-y-1/2" />
                            </motion.div>
                        </div>

                        {/* Orbit 3: Wide Flat */}
                        <div className="absolute w-[260px] h-[260px] lg:w-[340px] lg:h-[340px]" style={{ transform: 'rotateX(75deg) rotateY(-45deg)' }}>
                            <div className="absolute inset-0 border border-white/5 rounded-full" />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <div className="absolute top-1/2 right-0 w-2 h-2 bg-accent/80 rounded-full shadow-[0_0_10px_currentColor] translate-x-1/2 -translate-y-1/2" />
                            </motion.div>
                        </div>

                        {/* Orbit 4: Tight Vertical */}
                        <div className="absolute w-[200px] h-[200px] lg:w-[260px] lg:h-[260px]" style={{ transform: 'rotateX(45deg) rotateY(90deg)' }}>
                            <div className="absolute inset-0 border border-white/5 rounded-full" />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] -translate-x-1/2 translate-y-1/2" />
                            </motion.div>
                        </div>

                        {/* Orbit 5: Large Slow Outer */}
                        <div className="absolute w-[280px] h-[280px] lg:w-[380px] lg:h-[380px]" style={{ transform: 'rotateX(55deg) rotateY(-10deg)' }}>
                            <div className="absolute inset-0 border border-white/5 rounded-full" />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <div className="absolute top-0 left-1/2 w-2 h-2 bg-accent/60 rounded-full shadow-[0_0_10px_currentColor] -translate-x-1/2 -translate-y-1/2" />
                            </motion.div>
                        </div>

                        {/* Orbit 6: Cross Cut */}
                        <div className="absolute w-[240px] h-[240px] lg:w-[310px] lg:h-[310px]" style={{ transform: 'rotateX(80deg) rotateY(180deg)' }}>
                            <div className="absolute inset-0 border border-white/5 rounded-full" />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <div className="absolute top-1/2 left-0 w-2 h-2 bg-white/80 rounded-full shadow-[0_0_10px_currentColor] -translate-x-1/2 -translate-y-1/2" />
                            </motion.div>
                        </div>

                        {/* 3. SATELLITE STATS (Floating Cards) */}

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -top-10 -left-20 glass-panel px-5 py-3 rounded-xl border-l-2 border-accent backdrop-blur-md z-30"
                        >
                            <div className="text-2xl font-bold text-white leading-none">60</div>
                            <div className="text-[10px] uppercase tracking-widest text-white/50 mt-1">Facettes</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="absolute top-10 -right-24 glass-panel px-5 py-3 rounded-xl border-r-2 border-accent backdrop-blur-md z-30"
                        >
                            <div className="text-2xl font-bold text-white leading-none text-right">17</div>
                            <div className="text-[10px] uppercase tracking-widest text-white/50 mt-1 text-right">Facteurs</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="absolute bottom-0 -left-12 glass-panel px-5 py-3 rounded-xl border-b-2 border-accent backdrop-blur-md z-30"
                        >
                            <div className="text-2xl font-bold text-white leading-none">220+</div>
                            <div className="text-[10px] uppercase tracking-widest text-white/50 mt-1">Modalités</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                            className="absolute -bottom-12 right-0 glass-panel px-5 py-3 rounded-xl border-b-2 border-accent backdrop-blur-md z-30"
                        >
                            <div className="text-2xl font-bold text-white leading-none text-right">4</div>
                            <div className="text-[10px] uppercase tracking-widest text-white/50 mt-1 text-right">Niveaux</div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};