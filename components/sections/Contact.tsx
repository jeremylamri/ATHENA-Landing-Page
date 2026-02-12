import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

import { usePrintMode } from '../PrintContext';

emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { isPrintMode } = usePrintMode();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/slack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', organization: '', role: '', subject: '', message: '' });

    } catch (error: any) {
      console.error('Error sending form:', error);
      setSubmitStatus('error');
      // Show more specific error if available
      setErrorMessage(`${t('contact.error.generic')} (${error.message})`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-16 md:py-24 relative scroll-mt-24 md:scroll-mt-32 ${isPrintMode ? 'bg-white text-black' : ''} print:bg-white print:text-black`}>
      {/* Background Elements */}
      <div className={`absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px] pointer-events-none ${isPrintMode ? 'hidden' : ''} print:hidden`} />
      <div className={`absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px] pointer-events-none ${isPrintMode ? 'hidden' : ''} print:hidden`} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 ${isPrintMode ? 'items-center text-center max-w-2xl mx-auto block' : ''} print:items-center print:text-center print:max-w-2xl print:mx-auto print:block`}>
          {/* Left Column: Contact Info */}
          <div className={isPrintMode ? 'w-full' : ''}>
            <span className={`text-accent font-medium tracking-widest text-xs uppercase block mb-3 ${isPrintMode ? 'text-accent-700' : ''} print:text-accent-700`}>
              {t('contact.badge')}
            </span>
            <h2 className={`text-3xl md:text-5xl font-semibold mb-6 leading-tight ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>
              {t('contact.title')}
            </h2>
            <p className={`text-base md:text-lg mb-10 leading-relaxed ${isPrintMode ? 'text-slate-700' : 'text-white/60'} print:text-slate-700`}>
              {t('contact.description')}
            </p>

            <div className={`space-y-6 ${isPrintMode ? 'grid grid-cols-1 md:grid-cols-2 gap-4 space-y-0 text-left' : ''} print:grid print:grid-cols-1 print:md:grid-cols-2 print:gap-4 print:space-y-0 print:text-left`}>
              <GlassCard className={`flex items-center gap-4 group p-5 transition-colors ${isPrintMode ? 'bg-slate-50 border-slate-200 shadow-none' : 'hover:bg-white/5'} print:bg-slate-50 print:border-slate-200 print:shadow-none`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform ${isPrintMode ? 'bg-slate-200 text-accent-700' : 'bg-accent/10 text-accent group-hover:scale-110'} print:bg-slate-200 print:text-accent-700`}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className={`font-medium mb-1 ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('contact.info.email')}</h4>
                  <a href="mailto:general@tomorrowtheory.com" className={`text-lg transition-colors ${isPrintMode ? 'text-slate-700 hover:text-accent-700' : 'text-white/60 hover:text-accent'} print:text-slate-700`}>
                    general@tomorrowtheory.com
                  </a>
                </div>
              </GlassCard>

              <GlassCard className={`flex items-center gap-4 group p-5 transition-colors ${isPrintMode ? 'bg-slate-50 border-slate-200 shadow-none' : 'hover:bg-white/5'} print:bg-slate-50 print:border-slate-200 print:shadow-none`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform ${isPrintMode ? 'bg-slate-200 text-accent-700' : 'bg-accent/10 text-accent group-hover:scale-110'} print:bg-slate-200 print:text-accent-700`}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className={`font-medium mb-1 ${isPrintMode ? 'text-black' : 'text-white'} print:text-black`}>{t('contact.info.hq')}</h4>
                  <p className={`text-lg ${isPrintMode ? 'text-slate-700' : 'text-white/60'} print:text-slate-700`}>
                    Paris, France
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Right Column: Form */}
          <GlassCard className={`border-white/10 p-6 md:p-8 ${isPrintMode ? 'hidden' : ''} print:hidden`}>
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{t('contact.success.title')}</h3>
                <p className="text-white/60 mb-8 max-w-sm">
                  {t('contact.success.desc')}
                </p>
                <Button variant="outline" onClick={() => setSubmitStatus('idle')}>
                  {t('contact.success.reset')}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/70 ml-1">{t('contact.form.name')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 glow-focus transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/70 ml-1">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 glow-focus transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-medium text-white/70 ml-1">{t('contact.form.org')}</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 glow-focus transition-all"
                      placeholder="Company Ltd"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="role" className="text-sm font-medium text-white/70 ml-1">{t('contact.form.role')}</label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 glow-focus transition-all"
                      placeholder="CLO / DRH..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white/70 ml-1">{t('contact.form.subject')}</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 glow-focus transition-all appearance-none"
                  >
                    <option value="" disabled className="bg-zinc-900 text-white/50">Selectionnez un sujet...</option>
                    <option value="program-v2" className="bg-zinc-900">Candidature Programme V2</option>
                    <option value="demo" className="bg-zinc-900">Demande de Démo</option>
                    <option value="partnership" className="bg-zinc-900">Partenariat Académique</option>
                    <option value="other" className="bg-zinc-900">Autre demande</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 glow-focus transition-all resize-none"
                    placeholder="Dites-nous en plus sur votre contexte..."
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg text-sm">
                    <AlertCircle size={16} />
                    {errorMessage}
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin mr-2" />
                      {t('contact.form.submitting')}
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </Button>

                <p className="text-xs text-white/30 text-center mt-4">
                  {t('contact.form.disclaimer')}
                </p>
              </form>
            )}

          </GlassCard>
        </div>
      </div>
    </section>
  );
};