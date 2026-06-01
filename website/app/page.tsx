import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Smartphone, Sun, Puzzle, ChevronRight, CheckCircle } from 'lucide-react';
import StatsCounter from '@/components/ui/StatsCounter';
import NewsletterForm from '@/components/ui/NewsletterForm';
import { STATS, COMPARISON_ROWS, STARTER_FEATURES, PRO_FEATURES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Hive Box — Colmeia Inteligente Anti-Vespa Asiática | Portugal',
  description: 'A única colmeia que defende as suas abelhas enquanto dorme. Monitorização remota 24/7, proteção automática contra vespa asiática, 100% solar. A partir de 299 €.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <StatsSection />
      <ComparisonSection />
      <PricingPreviewSection />
      <AppSection />
      <AudienceSection />
      <TeamTeaser />
      <NewsletterSection />
    </>
  );
}

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden hex-bg"
      style={{ background: 'linear-gradient(135deg, #1A1A0E 0%, #2E5E2E 100%)' }}
      aria-label="Secção principal"
    >
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 w-max">
        <div className="inline-flex items-center gap-2 bg-honey/10 border border-honey/30 text-honey text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-sm whitespace-nowrap">
          🐝 Promoção de Lançamento — 10% de desconto para os primeiros 50 clientes
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-24 relative z-10">
        <h1 className="font-display font-bold leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'white' }}>
          Protege as tuas abelhas.<br />
          <span className="text-gradient-honey">Enquanto dormes.</span>
        </h1>
        <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          A Hive Box é a colmeia inteligente que monitoriza, protege contra a vespa asiática e maximiza a tua produção de mel — 100% solar, acessível a qualquer apicultor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/produto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-honey text-dark font-bold text-base hover:bg-honey-dark transition-all animate-pulse-honey"
          >
            Ver os Produtos <ChevronRight size={18} />
          </Link>
          <a
            href="#problema"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all"
          >
            Saber Mais
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto border-t border-white/10 pt-10">
          {[
            { value: '299 €', label: 'a partir de' },
            { value: '<200ms', label: 'tempo de resposta' },
            { value: '100%', label: 'energia solar' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <div className="font-display font-bold text-2xl text-honey">{item.value}</div>
              <div className="text-white/50 text-xs mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #F9F6EE)' }} />
    </section>
  );
}

function ProblemSection() {
  const cards = [
    { icon: null, title: 'Vespa Asiática', text: 'A Vespa velutina destrói colmeias inteiras em horas. Em Portugal, está a devastar apiários de norte a sul sem aviso.', color: 'text-danger' },
    { icon: '⏰', title: 'Visitas Constantes', text: 'Os apicultores deslocam-se ao apiário sem saber se há problemas. Cada viagem perdida custa tempo e dinheiro.', color: 'text-warn' },
    { icon: '💰', title: 'Tecnologia Inacessível', text: 'As soluções existentes custam mais de 1.000 € e não protegem contra a vespa asiática. Foram feitas para grandes produtores.', color: 'text-mid' },
  ];

  return (
    <section id="problema" className="py-24 bg-light">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">O Problema</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Por que as abelhas precisam de tecnologia</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(card => (
            <div key={card.title} className="bg-white rounded-2xl p-8 border border-honey-light hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="mb-4 h-16 flex items-center justify-center" role="img" aria-label={card.title}>
                {card.icon === null
                  ? <Image src="/vespa-velutina.svg" alt="Vespa velutina" width={64} height={64} />
                  : <span className="text-4xl">{card.icon}</span>
                }
              </div>
              <h3 className={`font-display text-xl mb-3 ${card.color}`}>{card.title}</h3>
              <p className="text-mid text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const benefits = [
    { icon: <Shield size={22} />, title: 'Proteção automática', text: 'Arpas eletrificadas ativadas por câmara em menos de 200 ms' },
    { icon: <Smartphone size={22} />, title: 'Monitorização remota', text: 'Temperatura, peso, CO₂ e alertas na palma da mão' },
    { icon: <Sun size={22} />, title: '100% Solar', text: 'Funciona em apiários remotos sem qualquer infraestrutura' },
    { icon: <Puzzle size={22} />, title: 'Modular e escalável', text: 'Começa com o Starter e expande com os módulos que precisas' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">A Solução</p>
            <h2 className="font-display text-3xl lg:text-4xl text-charcoal mb-6">A única colmeia que defende as suas abelhas enquanto dorme</h2>
            <p className="text-mid leading-relaxed mb-10">
              Desenvolvida por engenheiros portugueses e testada em apiários reais, a Hive Box combina sensores IoT, visão computacional e energia solar numa solução completa e acessível.
            </p>
            <div className="space-y-5">
              {benefits.map(b => (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-honey-light flex items-center justify-center flex-shrink-0 text-honey">{b.icon}</div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-base">{b.title}</h3>
                    <p className="text-mid text-sm">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/produto" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-honey text-dark font-semibold hover:bg-honey-dark transition-all">
              Descobrir o Produto <ChevronRight size={16} />
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-honey-light to-forest-light flex items-center justify-center border border-honey-light" style={{ boxShadow: 'var(--shadow-honey)' }}>
              <div className="text-center p-8">
                <div className="text-8xl mb-6" role="img" aria-label="Colmeia inteligente">🍯</div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {['🌡 35.2°C', '⚖ 28.4 kg', '💨 1850 ppm', '🔋 92%'].map(s => (
                    <div key={s} className="bg-white/80 rounded-lg px-3 py-2 font-code text-charcoal text-center">{s}</div>
                  ))}
                </div>
                <div className="mt-3 bg-safe/20 text-safe text-xs font-semibold rounded-lg px-3 py-2">● Colmeia saudável</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { num: '1', title: 'Instala em 60 minutos', text: 'Kit completo com guia ilustrado e dois parafusos. Liga os cabos, lê o QR Code na app e está pronto a funcionar.' },
    { num: '2', title: 'A Hive Box fica de guarda', text: 'Sensores leem temperatura, peso e CO₂ 24 horas por dia. A câmara deteta vespas asiáticas e as arpas ativam automaticamente.' },
    { num: '3', title: 'Tu recebes os alertas', text: 'Notificações push em tempo real com gráficos e relatórios PDF. Visita o apiário só quando é mesmo necessário.' },
  ];

  return (
    <section className="py-24 bg-light hex-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Como Funciona</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Tão simples como 1, 2, 3</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-honey text-dark font-display font-bold text-3xl flex items-center justify-center mb-6 flex-shrink-0" style={{ boxShadow: 'var(--shadow-honey)' }}>
                {step.num}
              </div>
              <h3 className="font-display text-xl text-charcoal mb-3">{step.title}</h3>
              <p className="text-mid text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-24 hex-bg" style={{ background: 'linear-gradient(135deg, #1A1A0E 0%, #2E5E2E 100%)' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl lg:text-4xl" style={{ color: 'white' }}>Impacto em números</h2>
        </div>
        <StatsCounter stats={STATS} />
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Comparação</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Hive Box vs. Concorrência</h2>
        </div>
        <div className="rounded-2xl overflow-hidden border border-honey-light" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" role="table">
              <thead>
                <tr className="bg-dark text-white">
                  <th className="text-left px-6 py-4 font-semibold" scope="col">Funcionalidade</th>
                  <th className="text-center px-6 py-4 font-semibold text-honey" scope="col">Hive Box Pro</th>
                  <th className="text-center px-6 py-4 font-semibold text-white/60" scope="col">Concorrentes Europeus</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i} className={`border-t border-honey-light ${i % 2 === 0 ? 'bg-light' : 'bg-white'}`}>
                    <td className="px-6 py-4 text-charcoal font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center font-semibold text-safe">{row.hive}</td>
                    <td className="px-6 py-4 text-center text-mid">{row.comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingPreviewSection() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Preços</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Escolhe o teu modelo</h2>
          <p className="text-mid mt-3">App móvel incluída gratuitamente no primeiro ano.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            { name: 'Hive Box Starter', price: '299 €', badge: 'Mais Popular', features: STARTER_FEATURES.filter(f => f.included).slice(0, 5), highlighted: false },
            { name: 'Hive Box Pro', price: '499 €', badge: 'Proteção Completa', features: PRO_FEATURES.filter(f => f.included).slice(0, 5), highlighted: true },
          ].map(plan => (
            <div key={plan.name} className={`rounded-2xl p-8 border-2 transition-all hover:-translate-y-1 bg-white ${plan.highlighted ? 'border-honey' : 'border-honey-light'}`} style={{ boxShadow: plan.highlighted ? 'var(--shadow-honey)' : 'var(--shadow-card)' }}>
              <div className="inline-block bg-honey-light text-honey text-xs font-bold px-3 py-1 rounded-full mb-4">{plan.badge}</div>
              <h3 className="font-display text-xl text-charcoal mb-1">{plan.name}</h3>
              <div className="font-display font-bold text-4xl text-honey mb-6">{plan.price}</div>
              <ul className="space-y-2.5 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-mid">
                    <CheckCircle size={16} className="text-safe flex-shrink-0" />
                    {f.text}
                  </li>
                ))}
                <li className="text-xs text-honey/60 italic">+ muito mais...</li>
              </ul>
              <Link href="/precos" className={`block text-center py-3 rounded-xl font-semibold transition-all ${plan.highlighted ? 'bg-honey text-dark hover:bg-honey-dark' : 'border-2 border-honey text-honey hover:bg-honey hover:text-dark'}`}>
                Ver Detalhes
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/precos" className="inline-flex items-center gap-2 text-honey font-semibold hover:underline">
            Ver Todos os Preços e Descontos <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AppSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup — mirrors the real app UI */}
          <div className="flex justify-center order-last lg:order-first">
            <div className="w-64 rounded-[2.5rem] border-4 border-charcoal flex flex-col overflow-hidden shadow-2xl" style={{ backgroundColor: '#1A1A0E' }}>
              {/* Status bar */}
              <div className="px-6 pt-4 pb-2 flex justify-between text-white/40 text-xs" style={{ backgroundColor: '#1A1A0E' }}>
                <span>9:41</span><span>●●●</span>
              </div>
              {/* App header — matches headerStyle */}
              <div className="px-4 py-3" style={{ backgroundColor: '#1A1A0E' }}>
                <span className="font-bold text-sm" style={{ color: '#F5A623' }}>Dashboard</span>
              </div>
              {/* Screen content — light bg */}
              <div className="p-2.5 space-y-1.5" style={{ backgroundColor: '#F9F6EE' }}>
                {/* Greeting */}
                <div className="mb-1">
                  <p className="text-[10px] font-extrabold" style={{ color: '#2D2D1A' }}>Bom dia, Apicultor 🐝</p>
                  <p className="text-[8px]" style={{ color: '#6B6B4A' }}>Aqui está o estado do teu apiário</p>
                </div>
                {/* Stats row */}
                <div className="grid grid-cols-4 gap-1 mb-1">
                  {[
                    { label: 'Total',      value: '4', color: '#2D2D1A' },
                    { label: 'Saudáveis', value: '2', color: '#27AE60' },
                    { label: 'Atenção',   value: '1', color: '#F39C12' },
                    { label: 'Perigo',    value: '1', color: '#C0392B' },
                  ].map(s => (
                    <div key={s.label} className="rounded-xl p-1.5 text-center" style={{ backgroundColor: '#FFFFFF' }}>
                      <p className="text-xs font-extrabold leading-none" style={{ color: s.color }}>{s.value}</p>
                      <p className="text-[6px] mt-0.5 font-semibold leading-none" style={{ color: '#6B6B4A' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[9px] font-bold mb-0.5" style={{ color: '#2D2D1A' }}>Colmeias</p>
                {/* Hive card — Apiário do Olival (healthy) */}
                <div className="rounded-xl p-2 border-l-[3px]" style={{ backgroundColor: '#FFFFFF', borderLeftColor: '#27AE60' }}>
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center gap-1 flex-1 min-w-0">
                      <span className="text-[8px] font-bold truncate" style={{ color: '#2D2D1A' }}>Apiário do Olival</span>
                      <span className="text-[6px] px-1 rounded shrink-0 font-bold" style={{ backgroundColor: '#FDE8B5', color: '#D4891A' }}>PRO</span>
                    </div>
                    <span className="text-[6px] px-1.5 py-0.5 rounded-full border shrink-0" style={{ color: '#27AE60', borderColor: '#27AE60', backgroundColor: '#27AE6015' }}>● Saudável</span>
                  </div>
                  <div className="flex flex-wrap gap-0.5 mb-1">
                    {['🌡 35.2°C','⚖ 28.4kg','🔋 92%'].map(s => (
                      <span key={s} className="text-[6px] px-1 py-0.5 rounded font-semibold" style={{ backgroundColor: '#F9F6EE', color: '#2D2D1A' }}>{s}</span>
                    ))}
                  </div>
                  <p className="text-[6px]" style={{ color: '#6B6B4A' }}>Olival do Outeiro, Tomar</p>
                </div>
                {/* Hive card — Quinta da Serração (healthy) */}
                <div className="rounded-xl p-2 border-l-[3px]" style={{ backgroundColor: '#FFFFFF', borderLeftColor: '#27AE60' }}>
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-[8px] font-bold" style={{ color: '#2D2D1A' }}>Quinta da Serração</span>
                    <span className="text-[6px] px-1.5 py-0.5 rounded-full border shrink-0" style={{ color: '#27AE60', borderColor: '#27AE60', backgroundColor: '#27AE6015' }}>● Saudável</span>
                  </div>
                  <div className="flex flex-wrap gap-0.5 mb-1">
                    {['🌡 34.8°C','⚖ 31.1kg','🔋 78%'].map(s => (
                      <span key={s} className="text-[6px] px-1 py-0.5 rounded font-semibold" style={{ backgroundColor: '#F9F6EE', color: '#2D2D1A' }}>{s}</span>
                    ))}
                  </div>
                  <p className="text-[6px]" style={{ color: '#6B6B4A' }}>Serra, Tomar</p>
                </div>
                {/* Hive card — Herdade dos Pinheiros (danger) */}
                <div className="rounded-xl p-2 border-l-[3px]" style={{ backgroundColor: '#FFFFFF', borderLeftColor: '#C0392B' }}>
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center gap-1 flex-1 min-w-0">
                      <span className="text-[8px] font-bold truncate" style={{ color: '#2D2D1A' }}>Herdade dos Pinheiros</span>
                      <span className="text-[6px] px-1 rounded shrink-0 font-bold" style={{ backgroundColor: '#FDE8B5', color: '#D4891A' }}>PRO</span>
                    </div>
                    <span className="text-[6px] px-1.5 py-0.5 rounded-full border shrink-0" style={{ color: '#C0392B', borderColor: '#C0392B', backgroundColor: '#C0392B15' }}>● Perigo</span>
                  </div>
                  <div className="flex flex-wrap gap-0.5 mb-1">
                    {['🌡 38.1°C','⚖ 22.0kg','🔋 45%'].map(s => (
                      <span key={s} className="text-[6px] px-1 py-0.5 rounded font-semibold" style={{ backgroundColor: '#F9F6EE', color: '#2D2D1A' }}>{s}</span>
                    ))}
                    <span className="text-[6px] px-1 py-0.5 rounded font-semibold" style={{ backgroundColor: '#FDECEA', color: '#C0392B' }}>🚨 Vespa!</span>
                  </div>
                  <p className="text-[6px]" style={{ color: '#6B6B4A' }}>Pinheiros, Tomar</p>
                </div>
              </div>
              {/* Tab bar — matches actual app (white bg, honey active) */}
              <div className="px-2 py-2 flex justify-around border-t" style={{ backgroundColor: '#FFFFFF', borderTopColor: '#E8DFC8' }}>
                {[
                  { icon: '▦', label: 'Dashboard', active: true  },
                  { icon: '🗺', label: 'Mapa',      active: false },
                  { icon: '📊', label: 'Gráficos',  active: false },
                  { icon: '🔔', label: 'Alertas',   active: false },
                ].map(t => (
                  <div key={t.label} className="flex flex-col items-center gap-0.5">
                    <span className="text-xs leading-none">{t.icon}</span>
                    <span className="text-[6px] font-semibold" style={{ color: t.active ? '#F5A623' : '#6B6B4A' }}>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">App Móvel</p>
            <h2 className="font-display text-3xl lg:text-4xl text-charcoal mb-6">O teu apiário no bolso</h2>
            <p className="text-mid leading-relaxed mb-8">A app Hive Box (iOS + Android) é o interface entre ti e a tua rede de colmeias. Disponível exclusivamente para clientes.</p>
            <ul className="space-y-3 mb-8">
              {['Dashboard com semáforo de estado das colmeias','Alertas push configuráveis em tempo real','Histórico e gráficos por dia/semana/mês/ano','Mapa GPS interativo com todas as colmeias','Relatórios PDF exportáveis para cooperativas e veterinários'].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-mid">
                  <CheckCircle size={16} className="text-honey flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 bg-dark text-white text-xs px-4 py-2.5 rounded-xl opacity-60 cursor-not-allowed">🍎 App Store — Em Breve</div>
              <div className="flex items-center gap-2 bg-dark text-white text-xs px-4 py-2.5 rounded-xl opacity-60 cursor-not-allowed">🤖 Google Play — Em Breve</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  const segments = [
    { icon: '🧑‍🌾', title: 'Apicultor Individual', desc: '5–50 colmeias. Menos visitas, mais proteção, mais mel.' },
    { icon: '🏢', title: 'Cooperativas Apícolas', desc: 'Gestão centralizada de toda a rede de colmeias.' },
    { icon: '🏛️', title: 'Câmaras Municipais', desc: 'Programas de biodiversidade e proteção ambiental.' },
    { icon: '📊', title: 'Apicultores Profissionais', desc: '+100 colmeias. Dados detalhados, escala ilimitada.' },
  ];

  return (
    <section className="py-24 bg-light hex-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Para Quem É</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Uma solução para cada apicultor</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map(s => (
            <div key={s.title} className="bg-white rounded-2xl p-6 text-center border border-honey-light hover:-translate-y-1 transition-all" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="text-4xl mb-4" role="img" aria-label={s.title}>{s.icon}</div>
              <h3 className="font-display text-lg text-charcoal mb-2">{s.title}</h3>
              <p className="text-mid text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamTeaser() {
  const initials = ['A','S','J','G'];
  const colors = ['#F5A623','#2E5E2E','#2D2D1A','#C0392B'];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-4 mb-8">
          {initials.map((initial, i) => (
            <div key={initial} className="w-16 h-16 rounded-full flex items-center justify-center text-white font-display font-bold text-xl flex-shrink-0" style={{ backgroundColor: colors[i] }}>
              {initial}
            </div>
          ))}
        </div>
        <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">A Nossa Equipa</p>
        <h2 className="font-display text-3xl lg:text-4xl text-charcoal mb-6">Quatro estudantes. Uma missão.</h2>
        <p className="text-mid leading-relaxed max-w-2xl mx-auto mb-8">
          Somos quatro estudantes do Instituto Politécnico de Tomar apaixonados por tecnologia e pelo ambiente. Criámos a Hive Box porque acreditamos que as abelhas merecem proteção moderna — e os apicultores merecem uma ferramenta acessível.
        </p>
        <Link href="/sobre" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-honey text-honey font-semibold hover:bg-honey hover:text-dark transition-all">
          Conhecer a Equipa <ChevronRight size={16} />
        </Link>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="py-24 hex-bg" style={{ background: 'linear-gradient(135deg, #2E5E2E 0%, #1A1A0E 100%)' }}>
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="text-5xl mb-4" role="img" aria-label="abelha">🐝</div>
        <h2 className="font-display text-3xl lg:text-4xl mb-4" style={{ color: 'white' }}>Fica a par das novidades</h2>
        <p className="text-white/70 mb-8">Sê dos primeiros a saber quando a Hive Box estiver disponível. Sem spam, só abelhas.</p>
        <NewsletterForm />
      </div>
    </section>
  );
}