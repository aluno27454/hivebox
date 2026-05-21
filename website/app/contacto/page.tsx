import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/sections/ContactForm';
import Accordion from '@/components/ui/Accordion';
import { SITE, FAQ_CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contacto Hive Box — Tomar, Portugal | geral@hivebox.pt',
  description: 'Contacta a Hive Box para encomendar, obter suporte ou solicitar uma proposta institucional. Respondemos em 24 horas.',
};

export default function ContactoPage() {
  return (
    <>
      <HeroSection />
      <ContactSection />
      <FAQSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 hex-bg" style={{ background: 'linear-gradient(135deg, #1A1A0E 0%, #2E5E2E 100%)' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Contacto</p>
        <h1 className="font-display font-bold text-4xl lg:text-5xl mb-6" style={{ color: 'white' }}>
          Fala connosco
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto">
          Tens dúvidas, queres encomendar ou propor uma parceria? Estamos à distância de uma mensagem.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #F9F6EE)' }} />
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-honey-light" style={{ boxShadow: 'var(--shadow-lg)' }}>
            <h2 className="font-display text-2xl text-charcoal mb-6">Envia uma mensagem</h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-honey-light" style={{ boxShadow: 'var(--shadow-card)' }}>
              <h2 className="font-display text-xl text-charcoal mb-5">Contacto Direto</h2>
              <div className="space-y-4">
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-mid hover:text-honey transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-honey-light flex items-center justify-center text-honey group-hover:bg-honey group-hover:text-dark transition-all flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-mid/60 mb-0.5">Email</div>
                    <div className="text-sm font-semibold text-charcoal">{SITE.email}</div>
                  </div>
                </a>
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-mid hover:text-honey transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-honey-light flex items-center justify-center text-honey group-hover:bg-honey group-hover:text-dark transition-all flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-mid/60 mb-0.5">Telemóvel</div>
                    <div className="text-sm font-semibold text-charcoal">{SITE.phone}</div>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-honey-light flex items-center justify-center text-honey flex-shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-mid/60 mb-0.5">Morada</div>
                    <div className="text-sm font-semibold text-charcoal leading-relaxed">
                      Rua Sandorninho n.º 24B<br />2300-616 Tomar, Santarém
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-honey-light flex items-center justify-center text-honey flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-mid/60 mb-0.5">Horário</div>
                    <div className="text-sm font-semibold text-charcoal">Segunda a Sexta: 9h00–18h00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden border border-honey-light" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="aspect-video bg-honey-light/50 flex flex-col items-center justify-center text-center p-6">
                <div className="text-5xl mb-3" role="img" aria-label="localização">📍</div>
                <h3 className="font-display text-lg text-charcoal mb-1">Tomar, Portugal</h3>
                <p className="text-mid text-sm mb-4">Rua Sandorninho n.º 24B</p>
                <a
                  href="https://maps.google.com/?q=Tomar,+Portugal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-honey font-semibold hover:underline"
                >
                  Abrir no Google Maps →
                </a>
              </div>
            </div>

            {/* Response time */}
            <div className="bg-forest-light rounded-2xl p-5 border border-forest/20">
              <div className="flex items-center gap-3">
                <span className="text-2xl" role="img" aria-label="tempo">⚡</span>
                <div>
                  <p className="font-semibold text-forest text-sm">Resposta rápida</p>
                  <p className="text-mid text-xs">Respondemos a todas as mensagens em menos de 24 horas úteis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Respostas rápidas</h2>
        </div>
        <Accordion items={FAQ_CONTACT} />
      </div>
    </section>
  );
}