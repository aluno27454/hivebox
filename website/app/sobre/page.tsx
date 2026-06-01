import type { Metadata } from 'next';
function LinkedinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import { TEAM, TIMELINE, VALUES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sobre a Hive Box — Startup Portuguesa de Apicultura Inteligente',
  description: 'Conhece a equipa da Hive Box: André Vassalo, Samuel Ponte, José Lopes e Gabriel Puga. Quatro estudantes do IPT com a missão de salvar as abelhas.',
};

export default function SobrePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <TimelineSection />
      <ValuesSection />
      <TeamSection />
      <PartnersSection />
    </>
  );
}

function HeroSection() {
  const initials = ['A','S','J','G'];
  const colors = ['#F5A623','#2E5E2E','#2D2D1A','#C0392B'];
  return (
    <section className="relative pt-32 pb-20 hex-bg" style={{ background: 'linear-gradient(135deg, #1A1A0E 0%, #2E5E2E 100%)' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="flex justify-center gap-4 mb-8">
          {initials.map((initial, i) => (
            <div
              key={initial}
              className="w-20 h-20 rounded-full flex items-center justify-center text-white font-display font-bold text-2xl flex-shrink-0 border-4 border-white/20"
              style={{ backgroundColor: colors[i] }}
            >
              {initial}
            </div>
          ))}
        </div>
        <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Sobre Nós</p>
        <h1 className="font-display font-bold text-4xl lg:text-5xl mb-6" style={{ color: 'white' }}>
          Quatro estudantes.<br />Uma missão. Salvar as abelhas.
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Nascemos no Instituto Politécnico de Tomar em 2026 com uma visão simples: tornar a tecnologia apícola acessível a todos.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #F9F6EE)' }} />
    </section>
  );
}

function MissionSection() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 border-l-4 border-honey" style={{ boxShadow: 'var(--shadow-card)' }}>
            <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Missão</p>
            <blockquote className="font-display text-xl text-charcoal leading-relaxed italic">
              "Salvar as abelhas, pensar no ambiente e capacitar os apicultores com tecnologia acessível, contribuindo para a preservação da biodiversidade e a sustentabilidade do ecossistema apícola."
            </blockquote>
          </div>
          <div className="bg-white rounded-2xl p-8 border-l-4 border-forest" style={{ boxShadow: 'var(--shadow-card)' }}>
            <p className="text-forest font-semibold text-sm uppercase tracking-wider mb-3">Visão</p>
            <blockquote className="font-display text-xl text-charcoal leading-relaxed italic">
              "Ser a empresa de referência europeia em soluções tecnológicas para apicultura sustentável."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">A Nossa História</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Da ideia ao mercado</h2>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-honey-light" />
          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative flex gap-8">
                <div className="absolute left-4 top-5 w-4 h-4 rounded-full bg-honey border-4 border-white z-10" />
                <div className="ml-16 bg-light rounded-2xl p-6 border border-honey-light flex-1" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <div className="font-code text-xs text-honey mb-1">{item.date}</div>
                  <p className="text-charcoal font-medium">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="py-24 bg-light hex-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Os Nossos Valores</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">O que nos move</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map(v => (
            <div key={v.title} className="bg-white rounded-2xl p-6 text-center border border-honey-light" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="text-4xl mb-4" role="img" aria-label={v.title}>{v.icon}</div>
              <h3 className="font-display text-lg text-charcoal mb-2">{v.title}</h3>
              <p className="text-mid text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TEAM_PHOTOS: Record<string, string> = {
  'André Vassalo':  '/equipa/andre.jpg',
  'Samuel Ponte':   '/equipa/samuel.jpg',
  'José Lopes':     '/equipa/jose.jpg',
  'Gabriel Puga':   '/equipa/gabriel.jpg',
};

function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">A Equipa</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Os fundadores</h2>
          <p className="text-mid mt-3">Estudantes de Engenharia Informática no Instituto Politécnico de Tomar</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map(member => (
            <div key={member.name} className="bg-light rounded-2xl overflow-hidden border border-honey-light hover:-translate-y-1 transition-all" style={{ boxShadow: 'var(--shadow-card)' }}>
              {/* Avatar */}
              <div className="h-40 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${member.roleColor}20, ${member.roleColor}40)` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={TEAM_PHOTOS[member.name]}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover object-center"
                  style={{ backgroundColor: member.roleColor }}
                />
              </div>

              <div className="p-6">
                <div className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 text-white" style={{ backgroundColor: member.roleColor }}>
                  {member.role}
                </div>
                <h3 className="font-display text-lg text-charcoal mb-1">{member.name}</h3>
                <p className="text-honey text-xs font-semibold mb-3">{member.area}</p>
                <p className="text-mid text-xs leading-relaxed mb-3">{member.education}</p>
                <p className="text-mid text-xs leading-relaxed border-t border-honey-light pt-3">{member.description}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1 text-mid/40 text-xs" title="LinkedIn em breve">
                    <LinkedinIcon />
                    Em breve
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const partners = [
    { name: 'Instituto Politécnico de Tomar', role: 'Incubação e suporte académico', icon: '🎓' },
    { name: 'Assoc. Apicultores do Vale do Tejo', role: 'Validação e distribuição', icon: '🐝' },
    { name: 'Câmaras Municipais — Região de Tomar', role: 'Parceiros piloto', icon: '🏛️' },
  ];

  return (
    <section className="py-24 hex-bg" style={{ background: 'linear-gradient(135deg, #1A1A0E 0%, #2E5E2E 100%)' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl text-white">Os Nossos Parceiros</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {partners.map(p => (
            <div key={p.name} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-4xl mb-3" role="img" aria-label={p.name}>{p.icon}</div>
              <h3 className="font-display text-lg text-white mb-1">{p.name}</h3>
              <p className="text-white/60 text-sm">{p.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { label: 'CAE', value: '01491 — Apicultura' },
            { label: 'Forma Jurídica', value: 'Sociedade por Quotas' },
            { label: 'Capital Social', value: '1.000 €' },
            { label: 'Sede', value: 'Tomar, Santarém' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <div className="text-white/40 text-xs font-code mb-1">{item.label}</div>
              <div className="text-white text-sm font-semibold">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}