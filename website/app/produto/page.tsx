import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, XCircle, ChevronRight, Package, Truck } from 'lucide-react';
import { STARTER_FEATURES, PRO_FEATURES, ADDONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Produtos Hive Box — Starter 299€ e Pro 499€ | Colmeia IoT',
  description: 'Conhece os produtos Hive Box. Starter a 299 € e Pro a 499 €. Monitorização IoT, proteção anti-vespa asiática, energia solar e app móvel incluída.',
};

export default function ProdutoPage() {
  return (
    <>
      <HeroSection />
      <ModelsSection />
      <AddonsSection />
      <AppDetailSection />
      <ShippingSection />
      <CTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 hex-bg" style={{ background: 'linear-gradient(135deg, #1A1A0E 0%, #2E5E2E 100%)' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Os Nossos Produtos</p>
        <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6" style={{ color: 'white' }}>
          A colmeia inteligente<br />que o apicultor sempre quis
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Dois modelos desenhados para diferentes necessidades. A mesma qualidade, fiabilidade e suporte.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #F9F6EE)' }} />
    </section>
  );
}

function ModelsSection() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Escolhe o teu modelo</h2>
          <p className="text-mid mt-3">1.º ano de app móvel gratuito em ambos os modelos.</p>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl overflow-hidden border border-honey-light bg-white" style={{ boxShadow: 'var(--shadow-lg)' }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" role="table">
              <thead>
                <tr>
                  <th className="text-left px-6 py-5 bg-light font-semibold text-charcoal" scope="col">Funcionalidade</th>
                  <th className="text-center px-6 py-5 bg-honey-light font-display text-lg font-bold text-charcoal" scope="col">
                    Starter<br /><span className="font-display text-2xl text-honey">299 €</span>
                  </th>
                  <th className="text-center px-6 py-5 bg-dark font-display text-lg font-bold text-white" scope="col">
                    Pro<br /><span className="font-display text-2xl text-honey">499 €</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {STARTER_FEATURES.map((feat, i) => {
                  const proFeat = PRO_FEATURES[i];
                  return (
                    <tr key={i} className={`border-t border-honey-light ${i % 2 === 0 ? 'bg-white' : 'bg-light/50'}`}>
                      <td className="px-6 py-4 text-charcoal">{feat.text}</td>
                      <td className="px-6 py-4 text-center">
                        {feat.included ? <CheckCircle size={20} className="text-safe mx-auto" /> : <XCircle size={20} className="text-mid/40 mx-auto" />}
                      </td>
                      <td className="px-6 py-4 text-center bg-dark/5">
                        {proFeat?.included ? (
                          <CheckCircle size={20} className={`mx-auto ${proFeat.highlight ? 'text-honey' : 'text-safe'}`} />
                        ) : (
                          <XCircle size={20} className="text-mid/40 mx-auto" />
                        )}
                      </td>
                    </tr>
                  );
                })}
                <tr className="border-t-2 border-honey bg-honey-light/30">
                  <td className="px-6 py-5 font-bold text-charcoal">Peso do kit</td>
                  <td className="px-6 py-5 text-center font-semibold text-charcoal">≈ 4,5 kg</td>
                  <td className="px-6 py-5 text-center font-semibold text-charcoal">≈ 5,2 kg</td>
                </tr>
                <tr className="border-t border-honey">
                  <td className="px-6 py-6 font-display text-xl font-bold text-charcoal">Preço</td>
                  <td className="px-6 py-6 text-center font-display text-2xl font-bold text-honey">299 €</td>
                  <td className="px-6 py-6 text-center font-display text-2xl font-bold text-honey">499 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contacto?assunto=Starter" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-honey text-honey font-semibold hover:bg-honey hover:text-dark transition-all">
            Encomendar Starter
          </Link>
          <Link href="/contacto?assunto=Pro" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-honey text-dark font-bold hover:bg-honey-dark transition-all" style={{ boxShadow: 'var(--shadow-honey)' }}>
            Encomendar Pro <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AddonsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Módulos de Expansão</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Expande o teu Starter</h2>
          <p className="text-mid mt-3 max-w-xl mx-auto">Adiciona funcionalidades ao Starter à medida que as tuas necessidades crescem. 10% de desconto ao comprar 3 ou mais módulos.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADDONS.map(addon => (
            <div key={addon.name} className="bg-light rounded-2xl p-6 border border-honey-light hover:-translate-y-1 transition-all" style={{ boxShadow: 'var(--shadow-card)' }}>
              <Package size={32} className="text-honey mb-4" />
              <h3 className="font-display text-lg text-charcoal mb-2">{addon.name}</h3>
              <p className="text-mid text-sm leading-relaxed mb-4">{addon.description}</p>
              <div className="font-display font-bold text-2xl text-honey">{addon.price} €</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppDetailSection() {
  const screens = [
    { title: 'Dashboard', desc: 'Semáforo de estado de todas as colmeias numa vista única.' },
    { title: 'Monitorização', desc: 'Temperatura, humidade, peso e CO₂ em tempo real com gráficos históricos.' },
    { title: 'Alertas', desc: 'Notificações push configuráveis para cada tipo de evento.' },
    { title: 'Mapa GPS', desc: 'Localização interativa de todas as colmeias no mapa.' },
    { title: 'Relatórios', desc: 'Exporta relatórios PDF para veterinários, cooperativas ou entidades públicas.' },
  ];

  return (
    <section className="py-24 bg-light hex-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Aplicação Móvel</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Tudo o que precisas no telemóvel</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {screens.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-honey-light text-center" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="w-10 h-10 rounded-xl bg-honey-light flex items-center justify-center text-honey font-display font-bold text-lg mx-auto mb-4">
                {i + 1}
              </div>
              <h3 className="font-display text-base text-charcoal mb-2">{s.title}</h3>
              <p className="text-mid text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShippingSection() {
  const details = [
    { icon: <Package size={24} />, title: 'Embalagem Rígida', desc: 'Caixa de polipropileno expandido (450×350×200 mm, ~6,5 kg) com espuma recortada para máxima proteção.' },
    { icon: <Truck size={24} />, title: 'Entrega Rápida', desc: 'CTT Expresso ou DHL. Prazo: 5–7 dias úteis em Portugal Continental. Custo: 8–15 €.' },
    { icon: <CheckCircle size={24} />, title: 'Instalação Simples', desc: 'Menos de 60 minutos, sem ferramentas especiais. Guia ilustrado incluído (PT + EN) e PDF no website.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Logística</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Transporte e Instalação</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {details.map(d => (
            <div key={d.title} className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-honey-light flex items-center justify-center text-honey mb-4 flex-shrink-0">{d.icon}</div>
              <h3 className="font-display text-xl text-charcoal mb-2">{d.title}</h3>
              <p className="text-mid text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 hex-bg" style={{ background: 'linear-gradient(135deg, #1A1A0E 0%, #2E5E2E 100%)' }}>
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="font-display text-3xl lg:text-4xl mb-6" style={{ color: 'white' }}>Pronto para proteger as tuas abelhas?</h2>
        <p className="text-white/70 mb-8">Entra em contacto e recebe uma proposta personalizada para o teu apiário.</p>
        <Link href="/contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-honey text-dark font-bold hover:bg-honey-dark transition-all animate-pulse-honey">
          Encomendar Agora <ChevronRight size={18} />
        </Link>
      </div>
    </section>
  );
}