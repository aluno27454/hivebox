import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ChevronRight } from 'lucide-react';
import ROICalculator from '@/components/sections/ROICalculator';
import Accordion from '@/components/ui/Accordion';
import { STARTER_FEATURES, PRO_FEATURES, ADDONS, SUBSCRIPTIONS, FAQ_PRICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Preços Hive Box — A partir de 299€ | Descontos Disponíveis',
  description: 'Preços transparentes sem contratos. Starter a 299 €, Pro a 499 €, módulos de expansão a partir de 39 €. Calculadora de ROI para apicultores.',
};

export default function PrecosPage() {
  return (
    <>
      <HeroSection />
      <PlansSection />
      <AddonsTableSection />
      <SubscriptionsSection />
      <DiscountsSection />
      <ROISection />
      <FAQSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 hex-bg" style={{ background: 'linear-gradient(135deg, #1A1A0E 0%, #2E5E2E 100%)' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Preços</p>
        <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6" style={{ color: 'white' }}>
          Tecnologia profissional.<br />Preço justo.
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Começa com o Starter e expande quando quiseres. Sem contratos. Sem taxas escondidas.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #F9F6EE)' }} />
    </section>
  );
}

function PlansSection() {
  const plans = [
    {
      name: 'Starter',
      price: '299 €',
      subtitle: 'Tudo o que precisas para começar',
      badge: 'Mais Popular',
      features: STARTER_FEATURES,
      highlighted: false,
      cta: 'Encomendar Starter',
      href: '/contacto',
    },
    {
      name: 'Pro',
      price: '499 €',
      subtitle: 'O sistema mais completo do mercado',
      badge: 'Proteção Completa',
      features: PRO_FEATURES,
      highlighted: true,
      cta: 'Encomendar Pro',
      href: '/contacto',
    },
    {
      name: 'Institucional',
      price: 'Sob consulta',
      subtitle: 'Para câmaras municipais e cooperativas',
      badge: 'Personalizado',
      features: [
        { text: '15% de desconto no hardware', included: true },
        { text: 'Instalação incluída', included: true },
        { text: 'Relatórios personalizados', included: true },
        { text: 'Suporte prioritário', included: true },
        { text: 'Formação incluída', included: true },
        { text: 'Mínimo 5 unidades', included: true },
      ],
      highlighted: false,
      cta: 'Solicitar Proposta',
      href: '/contacto',
    },
  ];

  return (
    <section className="py-24 bg-light">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Escolhe o teu plano</h2>
          <p className="text-mid mt-3">App móvel incluída gratuitamente no primeiro ano.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border-2 flex flex-col bg-white transition-all hover:-translate-y-1 ${
                plan.highlighted ? 'border-honey' : 'border-honey-light'
              }`}
              style={{ boxShadow: plan.highlighted ? 'var(--shadow-honey)' : 'var(--shadow-card)' }}
            >
              <div className="inline-block bg-honey-light text-honey text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">{plan.badge}</div>
              <h3 className="font-display text-2xl text-charcoal mb-1">{plan.name}</h3>
              <p className="text-mid text-sm mb-4">{plan.subtitle}</p>
              <div className="font-display font-bold text-4xl text-honey mb-6">{plan.price}</div>
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    {f.included
                      ? <CheckCircle size={16} className={`flex-shrink-0 mt-0.5 ${(f as { highlight?: boolean }).highlight ? 'text-honey' : 'text-safe'}`} />
                      : <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-mid/30 text-base leading-none">—</span>
                    }
                    <span className={`${!f.included ? 'text-mid/40' : (f as { highlight?: boolean }).highlight ? 'text-charcoal font-semibold' : 'text-mid'}`}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`block text-center py-3.5 rounded-xl font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-honey text-dark hover:bg-honey-dark'
                    : 'border-2 border-honey text-honey hover:bg-honey hover:text-dark'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AddonsTableSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Módulos de Expansão</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Adiciona o que precisas</h2>
          <p className="text-mid mt-3">10% de desconto ao comprar 3 ou mais módulos.</p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-honey-light" style={{ boxShadow: 'var(--shadow-card)' }}>
          <table className="w-full text-sm" role="table">
            <thead className="bg-honey-light">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-charcoal" scope="col">Módulo</th>
                <th className="text-left px-6 py-4 font-semibold text-charcoal hidden md:table-cell" scope="col">Descrição</th>
                <th className="text-right px-6 py-4 font-semibold text-charcoal" scope="col">Preço</th>
              </tr>
            </thead>
            <tbody>
              {ADDONS.map((addon, i) => (
                <tr key={i} className="border-t border-honey-light">
                  <td className="px-6 py-4 font-semibold text-charcoal">{addon.name}</td>
                  <td className="px-6 py-4 text-mid hidden md:table-cell">{addon.description}</td>
                  <td className="px-6 py-4 text-right font-display font-bold text-honey">{addon.price} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function SubscriptionsSection() {
  return (
    <section className="py-24 bg-light hex-bg">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Subscrições</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">App móvel e manutenção</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {SUBSCRIPTIONS.map(sub => (
            <div key={sub.plan} className="bg-white rounded-2xl p-6 border border-honey-light text-center" style={{ boxShadow: 'var(--shadow-card)' }}>
              <h3 className="font-display text-xl text-charcoal mb-2">{sub.plan}</h3>
              <div className="font-display font-bold text-3xl text-honey mb-3">{sub.price}</div>
              <p className="text-mid text-sm leading-relaxed">{sub.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-mid text-sm mt-6">
          Gateway LoRa próprio (cobre 5–10 km): <span className="font-bold text-charcoal">149 €</span>
        </p>
      </div>
    </section>
  );
}

function DiscountsSection() {
  const discounts = [
    { label: 'Volume — 2 a 4 unidades', value: '5%', icon: '📦' },
    { label: 'Volume — 5 a 9 unidades', value: '10%', icon: '📦📦' },
    { label: 'Volume — 10+ unidades', value: '15%', icon: '🏭' },
    { label: 'Fidelização (renovação após 2 anos)', value: '20%', icon: '❤️' },
    { label: 'Institucional (câmaras, cooperativas, mín. 5 un.)', value: '15%', icon: '🏛️' },
    { label: 'Pack add-ons (3 ou mais módulos)', value: '10%', icon: '🧩' },
    { label: 'Lançamento (primeiros 50 clientes) — hardware', value: '10% + 6 meses extra de app', icon: '🚀' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Descontos</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Poupes mais, proteges mais</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {discounts.map(d => (
            <div key={d.label} className="flex items-center gap-4 bg-light rounded-xl p-4 border border-honey-light">
              <div className="text-2xl flex-shrink-0" role="img" aria-label={d.label}>{d.icon}</div>
              <div className="flex-1">
                <p className="text-sm text-mid">{d.label}</p>
              </div>
              <div className="font-display font-bold text-honey text-lg flex-shrink-0">{d.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ROISection() {
  return (
    <section className="py-24 bg-light hex-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Calculadora de ROI</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Quanto vale a Hive Box para ti?</h2>
          <p className="text-mid mt-3">Descobre em quantos meses o investimento se paga.</p>
        </div>
        <ROICalculator />
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
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Perguntas frequentes</h2>
        </div>
        <Accordion items={FAQ_PRICES} />
        <div className="mt-10 text-center">
          <p className="text-mid text-sm mb-4">Tens mais perguntas?</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 text-honey font-semibold hover:underline">
            Fala connosco <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}