import type { Metadata } from 'next';
import { SENSORS, MANUFACTURE_STEPS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Tecnologia Hive Box — Sensores IoT, LoRaWAN, Arpas Eletrificadas',
  description: 'Descobre a tecnologia por detrás da Hive Box: Raspberry Pi 4, sensores IoT, LoRaWAN 868 MHz, câmara Sony IMX708, arpas eletrificadas e energia solar.',
};

export default function TecnologiaPage() {
  return (
    <>
      <HeroSection />
      <ArchitectureSection />
      <ComponentsSection />
      <ManufactureSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 hex-bg" style={{ background: 'linear-gradient(135deg, #1A1A0E 0%, #2E5E2E 100%)' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Tecnologia</p>
        <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6" style={{ color: 'white' }}>
          Engenharia ao serviço das abelhas
        </h1>
        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          Cada componente da Hive Box foi escolhido para maximizar fiabilidade, precisão e autonomia em condições rurais adversas.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #F9F6EE)' }} />
    </section>
  );
}

function ArchitectureSection() {
  const layers = [
    {
      num: '01',
      title: 'Camada de Perceção',
      color: 'bg-honey-light border-honey',
      textColor: 'text-honey',
      items: ['Sensor DHT22 — Temperatura + Humidade', 'DS18B20 — Temperatura exterior', 'HX711 + Load Cells — Balança', 'SPH0645 MEMS — Som / Vibração', 'MH-Z19B NDIR — CO₂', 'Câmara Sony IMX708 — 12 MP 1080p'],
    },
    {
      num: '02',
      title: 'Camada de Processamento',
      color: 'bg-dark border-charcoal',
      textColor: 'text-honey',
      items: ['Raspberry Pi 4 Model B — ARM Cortex-A72 1.8 GHz, 4 GB RAM', 'Arduino Nano ESP32 — Controlo periférico', 'OpenCV — Algoritmo de visão computacional', 'Ativação de arpas em < 200 ms'],
      dark: true,
    },
    {
      num: '03',
      title: 'Camada de Conectividade',
      color: 'bg-forest-light border-forest',
      textColor: 'text-forest',
      items: ['Módulo SIM7600G-H — 4G/LTE global', 'RFM95W 868 MHz — LoRaWAN até 15 km', 'u-blox NEO-M8N — GPS ±2 m', 'Cloud → App iOS + Android'],
    },
  ];

  return (
    <section className="py-24 bg-light">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Arquitetura do Sistema</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">3 camadas. Uma solução integrada.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {layers.map(layer => (
            <div key={layer.num} className={`rounded-2xl p-8 border-2 ${layer.color}`} style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className={`font-code font-bold text-4xl mb-2 ${layer.textColor} opacity-30`}>{layer.num}</div>
              <h3 className={`font-display text-xl mb-6 ${layer.dark ? 'text-white' : 'text-charcoal'}`}>{layer.title}</h3>
              <ul className="space-y-2">
                {layer.items.map((item, i) => (
                  <li key={i} className={`text-xs font-code leading-relaxed ${layer.dark ? 'text-white/70' : 'text-mid'}`}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Arrow connectors */}
        <div className="flex justify-center items-center gap-4 mt-8 text-honey/60 text-sm">
          <span className="font-code">Sensores</span>
          <span className="text-2xl">→</span>
          <span className="font-code">Processador</span>
          <span className="text-2xl">→</span>
          <span className="font-code">Cloud</span>
          <span className="text-2xl">→</span>
          <span className="font-code">App</span>
        </div>
      </div>
    </section>
  );
}

function ComponentsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Componentes</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Hardware de precisão</h2>
        </div>

        {/* Raspberry Pi */}
        <div className="rounded-2xl bg-dark text-white p-8 lg:p-12 mb-8 border border-charcoal" style={{ boxShadow: 'var(--shadow-lg)' }}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-honey text-dark text-xs font-bold px-3 py-1 rounded-full mb-4 font-code">Controlador Principal</div>
              <h3 className="font-display text-2xl text-white mb-4">Raspberry Pi 4 Model B</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                O cérebro do sistema. Processa o feed da câmara em tempo real com OpenCV para detetar a vespa asiática. Quando confirmada, ativa as arpas eletrificadas em menos de 200 ms.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ['CPU', 'ARM Cortex-A72 64-bit'],
                  ['Clock', '1,8 GHz'],
                  ['RAM', '4 GB LPDDR4'],
                  ['Armazenamento', 'microSD 32 GB'],
                  ['Dimensões', '85,6 × 56,5 mm'],
                  ['Peso', '46 g'],
                ].map(([key, val]) => (
                  <div key={key} className="bg-charcoal rounded-lg p-3">
                    <div className="text-xs text-white/40 mb-0.5 font-code">{key}</div>
                    <div className="text-sm text-white font-semibold font-code">{val}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-64 h-40 bg-charcoal rounded-xl flex items-center justify-center border border-honey/20">
                <div className="text-center">
                  <div className="text-6xl mb-2" role="img" aria-label="processador">🔬</div>
                  <div className="font-code text-honey text-xs">OpenCV + LoRaWAN + GPS</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sensors table */}
        <div className="rounded-2xl overflow-hidden border border-honey-light mb-8" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="bg-honey-light px-6 py-4">
            <h3 className="font-display text-xl text-charcoal">Tabela de Sensores</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" role="table">
              <thead className="bg-light">
                <tr>
                  <th className="text-left px-6 py-3 font-semibold text-charcoal" scope="col">Sensor</th>
                  <th className="text-left px-6 py-3 font-semibold text-charcoal" scope="col">Modelo</th>
                  <th className="text-left px-6 py-3 font-semibold text-charcoal" scope="col">Parâmetros</th>
                  <th className="text-left px-6 py-3 font-semibold text-charcoal" scope="col">Precisão / Gama</th>
                </tr>
              </thead>
              <tbody>
                {SENSORS.map((s, i) => (
                  <tr key={i} className="border-t border-honey-light">
                    <td className="px-6 py-4 font-semibold text-charcoal">{s.name}</td>
                    <td className="px-6 py-4 font-code text-xs text-honey">{s.model}</td>
                    <td className="px-6 py-4 text-mid">{s.params}</td>
                    <td className="px-6 py-4 font-code text-xs text-charcoal">{s.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <TechCard
            title="Sensor de CO₂ — MH-Z19B NDIR"
            badge="Hive Box Pro"
            badgeColor="bg-dark text-honey"
            content={[
              'Gama: 0–5.000 ppm com precisão ±50 ppm',
              'Colmeia saudável: 1.000–3.000 ppm',
              'Alerta automático acima de 3.500 ppm',
              'Colônias com CO₂ < 2.500 ppm produzem 15–20% mais mel',
            ]}
          />
          <TechCard
            title="Câmara Sony IMX708 — 12 MP"
            badge="Starter + Pro"
            badgeColor="bg-honey-light text-honey"
            content={[
              '1080p/50fps, campo de visão 66°',
              'Posicionada no alvado da colmeia',
              'Algoritmo OpenCV classifica: abelha / vespa asiática / outro',
              'Ativação das arpas em < 200 ms após confirmação',
            ]}
          />
          <TechCard
            title="Arpas Eletrificadas Anti-Vespa"
            badge="Hive Box Pro"
            badgeColor="bg-danger/10 text-danger"
            content={[
              '500–1.000 V DC, intensidade < 1 mA (seguro para abelhas)',
              'Distância entre fios: 6 mm (abelha passa, vespa não)',
              'Aço inoxidável 304, resistente à corrosão',
              'Ativação automática em < 200 ms após confirmação pelo algoritmo',
            ]}
          />
          <TechCard
            title="Módulo LoRaWAN — RFM95W 868 MHz"
            badge="Hive Box Pro"
            badgeColor="bg-forest-light text-forest"
            content={[
              'Protocolo LoRaWAN 1.0.3, 868 MHz (Europa)',
              'Alcance: até 15 km em espaço aberto; 2–5 km em floresta',
              'Consumo em sleep: apenas 0,2 μA',
              'Modo dual 4G + LoRa com comutação automática',
              'Compatível com rede pública TTN (The Things Network)',
            ]}
          />
          <TechCard
            title="Sistema de Energia Solar"
            badge="Starter + Pro"
            badgeColor="bg-honey-light text-honey"
            content={[
              'Painel monocristalino 20 W (350×250×18 mm, 1,5 kg)',
              'Controlador MPPT 10 A + bateria LiFePO₄ 12 V/20 Ah',
              'Consumo médio: 2,8 W / 67 Wh por dia',
              'Produção solar em Portugal: 80–100 Wh/dia',
              'Autonomia sem sol: ≈ 3,5 dias',
            ]}
          />
          <TechCard
            title="Caixa de Proteção IP67"
            badge="Starter + Pro"
            badgeColor="bg-honey-light text-honey"
            content={[
              'Material: ABS, 200×150×80 mm',
              'Passacabos herméticos roscados',
              'Resistente a poeira total',
              'Resistente a imersão em água até 1 m durante 30 minutos',
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function TechCard({ title, badge, badgeColor, content }: {
  title: string;
  badge: string;
  badgeColor: string;
  content: string[];
}) {
  return (
    <div className="rounded-2xl bg-light p-6 border border-honey-light" style={{ boxShadow: 'var(--shadow-card)' }}>
      <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${badgeColor}`}>{badge}</div>
      <h3 className="font-display text-lg text-charcoal mb-4">{title}</h3>
      <ul className="space-y-2">
        {content.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-mid">
            <span className="text-honey mt-0.5 flex-shrink-0">›</span>
            <span className="font-code text-xs leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ManufactureSection() {
  return (
    <section className="py-24 bg-light hex-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-sm uppercase tracking-wider mb-3">Processo de Fabrico</p>
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal">Da bancada ao apiário</h2>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-honey-light" />

          <div className="space-y-8">
            {MANUFACTURE_STEPS.map((step, i) => (
              <div key={i} className={`relative flex gap-6 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className={`ml-16 lg:ml-0 bg-white rounded-2xl p-6 border border-honey-light hover:-translate-y-0.5 transition-all ${i % 2 !== 0 ? 'lg:text-right' : ''}`} style={{ boxShadow: 'var(--shadow-card)' }}>
                    <div className="text-2xl mb-2" role="img" aria-label={step.title}>{step.icon}</div>
                    <h3 className="font-display text-lg text-charcoal mb-1">{step.title}</h3>
                    <p className="text-mid text-sm">{step.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-honey border-4 border-light z-10" />

                {/* Empty side for alternating */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}