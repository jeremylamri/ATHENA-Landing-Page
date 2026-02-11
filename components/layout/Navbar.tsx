import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { t } = useTranslation();

  const navLinks = [
    { label: t('nav.problem'), href: '#defi' },
    { label: t('nav.model'), href: '#modele' },
    { label: t('nav.ai'), href: '#outil' },
    { label: t('nav.capabilities'), href: '#capacites' },
    { label: t('nav.social_proof'), href: '#preuves' },
    { label: t('nav.offer'), href: '#v2' },
    { label: t('nav.ip'), href: '#ip' },
    { label: t('nav.about'), href: '#about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Gestion du fond transparent/glass
      setIsScrolled(window.scrollY > 50);

      // Gestion de la section active (Scroll Spy)
      const scrollPosition = window.scrollY + 150; // Offset pour la navbar

      for (const link of navLinks) {
        const sectionId = link.href.replace('#', '');
        const element = document.getElementById(sectionId);

        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.href);
            break; // On a trouvé la section active
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // navLinks est constant ici, pas besoin de dépendance

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // On laisse le scroll listener mettre à jour l'état, ou on peut forcer ici pour réactivité immédiate
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || mobileMenuOpen ? 'glass-panel border-b border-white/5 py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" onClick={scrollToTop} className="text-2xl font-semibold tracking-tight text-white flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
              <span className="text-accent text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="leading-none">ATHENA</span>
              <span className="text-[10px] font-semibold text-[#BF5AF2] tracking-wider leading-none mt-1">TOMORROW THEORY</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm transition-colors cursor-pointer ${activeSection === link.href
                    ? 'text-accent font-medium'
                    : 'text-white/70 hover:text-white'
                  }`}
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
            <Button variant="secondary" className="!py-2 !px-4 text-xs" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('hero.cta_talk')}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              className="text-white/70 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  className={`text-2xl font-light flex items-center justify-between border-b border-white/10 pb-4 cursor-pointer ${activeSection === link.href ? 'text-accent' : 'text-white/90'
                    }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                  <ChevronRight className={activeSection === link.href ? 'text-accent' : 'text-white/30'} />
                </motion.a>
              ))}
              <Button variant="primary" className="w-full mt-4" onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                {t('hero.cta_talk')}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};