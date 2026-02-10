import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { CheckCircle, Loader2, Mail, MapPin, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    // -------------------------------------------------------------------------
    // IMPORTANT : Remplacez l'URL ci-dessous par votre propre endpoint Formspree
    // Créer un formulaire gratuit sur https://formspree.io/
    // Exemple : "https://formspree.io/f/xkqnwvkj"
    // -------------------------------------------------------------------------
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/VOTRE_ID_FORMSPREE";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('success');
        // Reset form data if needed here, though we show a success screen instead
      } else {
        const data = await response.json();
        setStatus('error');
        if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
          setErrorMessage(data.errors.map((error: any) => error.message).join(", "));
        } else {
          setErrorMessage("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
        }
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage("Impossible de contacter le serveur. Vérifiez votre connexion.");
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-[#050505] scroll-mt-24 md:scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <GlassCard className="max-w-2xl mx-auto p-8 md:p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="w-16 h-16 md:w-20 md:h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6"
            >
              <CheckCircle size={32} className="md:w-10 md:h-10" />
            </motion.div>
            <h3 className="text-2xl font-semibold text-white mb-4">Demande transmise avec succès.</h3>
            <p className="text-white/60 max-w-2xl mx-auto mb-8 text-sm md:text-base">
              L'équipe Tomorrow Theory a bien reçu vos informations. Nous reviendrons vers vous sous 48h ouvrées pour planifier votre échange technique.
            </p>
            <Button variant="secondary" onClick={() => {
              setStatus('idle');
              setFormState({
                name: '',
                email: '',
                organization: '',
                role: '',
                subject: '',
                message: ''
              });
            }}>
              Envoyer une autre demande
            </Button>
          </GlassCard>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-[#050505] scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Text & Context */}
          <div>
            <div className="mb-10">
              <span className="text-accent font-medium tracking-widest text-xs uppercase block mb-3">
                Contact
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white leading-tight">
                Évaluer l'opportunité.
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
                Partagez vos priorités stratégiques. Nous organiserons un dialogue technique pour qualifier la pertinence d'intégrer le consortium ATHENA au regard de vos enjeux L&D.
              </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-full text-white/80">
                        <Mail size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-1">Email direct</h4>
                        <p className="text-sm text-white/50">general@tomorrowtheory.com</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-full text-white/80">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-1">Siège</h4>
                        <p className="text-sm text-white/50">Paris, France</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <GlassCard className="p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-white/50 uppercase tracking-wider">Nom complet</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    disabled={status === 'submitting'}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all disabled:opacity-50"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-white/50 uppercase tracking-wider">Email pro</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    disabled={status === 'submitting'}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all disabled:opacity-50"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                 <div className="space-y-2">
                  <label className="text-xs font-medium text-white/50 uppercase tracking-wider">Organisation</label>
                  <input 
                    type="text" 
                    name="organization"
                    required
                    disabled={status === 'submitting'}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all disabled:opacity-50"
                    value={formState.organization}
                    onChange={e => setFormState({...formState, organization: e.target.value})}
                  />
                </div>
                 <div className="space-y-2">
                  <label className="text-xs font-medium text-white/50 uppercase tracking-wider">Fonction</label>
                  <input 
                    type="text" 
                    name="role"
                    required
                    disabled={status === 'submitting'}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all disabled:opacity-50"
                    value={formState.role}
                    onChange={e => setFormState({...formState, role: e.target.value})}
                  />
                </div>
              </div>

               <div className="space-y-2">
                  <label className="text-xs font-medium text-white/50 uppercase tracking-wider">Sujet / Enjeu</label>
                  <input 
                    type="text" 
                    name="subject"
                    disabled={status === 'submitting'}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all disabled:opacity-50"
                    value={formState.subject}
                    onChange={e => setFormState({...formState, subject: e.target.value})}
                  />
                </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-white/50 uppercase tracking-wider">Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  disabled={status === 'submitting'}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all disabled:opacity-50"
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                />
              </div>

              {/* Error Message Display */}
              {status === 'error' && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-200 text-sm">
                  <AlertCircle size={16} className="shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <div className="pt-2">
                <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin w-4 h-4" /> Envoi en cours...
                    </span>
                  ) : (
                    "Envoyer la demande"
                  )}
                </Button>
              </div>
              
              <p className="text-[10px] text-white/30 text-center leading-snug">
                En soumettant ce formulaire, vous acceptez d'être contacté par l'équipe Tomorrow Theory.
              </p>
            </form>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};