export const SITE = {
  name: 'Hive Box',
  tagline: 'A única colmeia que defende as suas abelhas enquanto dorme.',
  email: 'geral@hivebox.pt',
  phone: '+351 919 458 298',
  address: 'Rua Sandorninho n.º 24B, Tomar, 2300-616 Santarém, Portugal',
  instagram: 'https://instagram.com/hivebox.pt',
  linkedin: 'https://linkedin.com/company/hivebox',
  url: 'https://hivebox.pt',
};

export const NAV_LINKS = [
  { label: 'Produto', href: '/produto' },
  { label: 'Tecnologia', href: '/tecnologia' },
  { label: 'Preços', href: '/precos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contacto', href: '/contacto' },
];

export const STARTER_FEATURES = [
  { text: 'Sensores temperatura interior + exterior (±0,5°C)', included: true },
  { text: 'Sensor de humidade relativa (±2%)', included: true },
  { text: 'Balança integrada — peso da colmeia (±50 g, até 200 kg)', included: true },
  { text: 'Câmara 12 MP 1080p (Sony IMX708)', included: true },
  { text: 'Comunicação 4G/LTE + SIM 1.º ano incluído', included: true },
  { text: 'GPS / geolocalização (±2 m)', included: true },
  { text: 'Painel solar 20 W + bateria LiFePO₄ (≈3,5 dias sem sol)', included: true },
  { text: 'Caixa de proteção IP67', included: true },
  { text: 'App móvel — 1 ano de subscrição gratuita', included: true },
  { text: 'Sensor de som / vibração', included: false },
  { text: 'Sensor de CO₂ interior', included: false },
  { text: 'Arpas eletrificadas anti-vespa asiática', included: false },
  { text: 'Módulo LoRaWAN (até 15 km)', included: false },
];

export const PRO_FEATURES = [
  { text: 'Sensores temperatura interior + exterior (±0,5°C)', included: true },
  { text: 'Sensor de humidade relativa (±2%)', included: true },
  { text: 'Balança integrada — peso da colmeia (±50 g, até 200 kg)', included: true },
  { text: 'Câmara 12 MP 1080p (Sony IMX708)', included: true },
  { text: 'Comunicação 4G/LTE + SIM 1.º ano incluído', included: true },
  { text: 'GPS / geolocalização (±2 m)', included: true },
  { text: 'Painel solar 20 W + bateria LiFePO₄ (≈3,5 dias sem sol)', included: true },
  { text: 'Caixa de proteção IP67', included: true },
  { text: 'App móvel — 1 ano de subscrição gratuita', included: true },
  { text: 'Sensor de som / vibração (SPH0645 MEMS)', included: true, highlight: true },
  { text: 'Sensor de CO₂ interior (0–5.000 ppm)', included: true, highlight: true },
  { text: 'Arpas eletrificadas anti-vespa asiática (<200 ms)', included: true, highlight: true },
  { text: 'Módulo LoRaWAN (até 15 km)', included: true, highlight: true },
];

export const ADDONS = [
  { name: 'Arpas eletrificadas anti-vespa', price: 99, description: 'Proteção automática ativada em <200 ms por câmara + algoritmo IA' },
  { name: 'Sensor de som / vibração', price: 39, description: 'Deteção de enxameação, stress da rainha e anomalias acústicas' },
  { name: 'Módulo LoRaWAN', price: 59, description: 'Cobertura até 15 km em espaço aberto para apiários sem 4G' },
  { name: 'Sensor de CO₂', price: 49, description: 'Monitorização da concentração de CO₂ (0–5.000 ppm) sem abrir a colmeia' },
];

export const SUBSCRIPTIONS = [
  { plan: '1.º Ano', price: 'Grátis', description: 'Incluído na compra de qualquer modelo' },
  { plan: 'Básico', price: '49 €/ano', description: 'App completa, alertas push, histórico e gráficos' },
  { plan: 'Pro + Manutenção', price: '128 €/ano', description: 'App + contrato de manutenção anual (49 + 79)' },
];

export const STATS = [
  { value: 75, suffix: '%', label: 'das culturas alimentares mundiais dependem das abelhas' },
  { value: 14000, suffix: '+', label: 'apicultores registados em Portugal' },
  { value: 200, suffix: 'ms', label: 'tempo de reação das arpas anti-vespa', prefix: '<' },
  { value: 15, suffix: 'km', label: 'alcance do módulo LoRaWAN em espaço aberto' },
];

export const TEAM = [
  {
    name: 'André Vassalo',
    role: 'CEO',
    roleColor: '#F5A623',
    initial: 'A',
    area: 'Gestão, estratégia, financiamento',
    education: 'Licenciatura em Engenharia Informática (em curso) – IPT',
    description: 'Coordenação geral, estratégia de negócio e relações com investidores e parceiros.',
  },
  {
    name: 'Samuel Ponte',
    role: 'CTO',
    roleColor: '#2E5E2E',
    initial: 'S',
    area: 'Hardware, IoT, eletrónica, produção',
    education: 'CET em TPSI + Licenciatura em Eng. Informática (em curso) – IPT',
    description: 'Estágio de 4 meses + 8 meses de experiência como Suporte Técnico e Programador em Lisboa.',
  },
  {
    name: 'José Lopes',
    role: 'Dev/CFO',
    roleColor: '#2D2D1A',
    initial: 'J',
    area: 'App móvel, backend, cloud, finanças',
    education: 'Licenciatura em Engenharia Informática (em curso) – IPT',
    description: 'Desenvolvimento de software, app móvel, backend e gestão financeira da empresa.',
  },
  {
    name: 'Gabriel Puga',
    role: 'CMO',
    roleColor: '#C0392B',
    initial: 'G',
    area: 'Marketing digital, clientes, parcerias',
    education: 'Licenciatura em Engenharia Informática (em curso) – IPT',
    description: 'Estratégia de marketing digital, gestão de clientes, redes sociais e parcerias estratégicas.',
  },
];

export const TIMELINE = [
  { date: 'Fevereiro 2026', event: 'A ideia nasce no IPT durante a cadeira de Tópicos de Gestão de Empresas' },
  { date: '12 de Março 2026', event: 'Os 4 sócios formalizam o compromisso e dividem funções' },
  { date: 'Abril 2026', event: 'Início do desenvolvimento do protótipo de hardware e software' },
  { date: 'Maio 2026', event: 'Primeiros testes de campo com apicultores da região de Tomar' },
  { date: '2026–2027', event: 'Lançamento comercial em Portugal (objetivo)' },
  { date: '2027–2028', event: 'Expansão para Espanha e França' },
];

export const SENSORS = [
  { name: 'Temperatura interior', model: 'DHT22 + DS18B20', params: 'Temperatura (°C), humidade (%)', spec: '±0,5°C / ±2% HR' },
  { name: 'Temperatura exterior', model: 'DS18B20 waterproof', params: 'Temperatura ambiente', spec: '±0,5°C; –55°C a +125°C' },
  { name: 'Peso da colmeia', model: 'HX711 + load cells', params: 'Variação de peso (kg)', spec: '±50 g; 0–200 kg' },
  { name: 'Som / vibração', model: 'SPH0645 MEMS', params: 'Análise acústica', spec: '20 Hz – 20 kHz' },
  { name: 'CO₂ interior', model: 'MH-Z19B NDIR', params: 'Concentração CO₂ (ppm)', spec: '0–5.000 ppm; ±50 ppm' },
];

export const MANUFACTURE_STEPS = [
  { icon: '📦', title: 'Aprovisionamento', desc: 'Seleção e aquisição de componentes certificados de fornecedores verificados' },
  { icon: '⚡', title: 'Soldadura da PCB', desc: 'Montagem e soldadura de componentes eletrónicos na placa de circuito impresso' },
  { icon: '🔬', title: 'Calibração de Sensores', desc: 'Integração e calibração individual de todos os sensores com referências rastreáveis' },
  { icon: '💻', title: 'Configuração de Firmware', desc: 'Flash do firmware com suporte a OTA updates para atualizações remotas futuras' },
  { icon: '🔒', title: 'Montagem IP67', desc: 'Instalação na caixa estanque com passacabos herméticos e teste de vedação' },
  { icon: '✅', title: 'Controlo de Qualidade', desc: 'Testes finais elétricos, funcionais e ambientais antes da embalagem' },
  { icon: '🚚', title: 'Embalagem e Expedição', desc: 'Embalagem em caixa rígida com espuma recortada e envio via CTT Expresso / DHL' },
];

export const FAQ_PRICES = [
  {
    q: 'É necessário assinar contrato?',
    a: 'Não. Compra única de hardware. A subscrição anual da app é opcional a partir do 2.º ano (49 €/ano).',
  },
  {
    q: 'Posso começar com o Starter e fazer upgrade depois?',
    a: 'Sim. Podes adicionar qualquer módulo de expansão individualmente em qualquer momento.',
  },
  {
    q: 'Há garantia no hardware?',
    a: 'Sim. 2 anos de garantia no hardware em condições normais de utilização.',
  },
  {
    q: 'O cartão SIM está incluído?',
    a: 'Sim. O 1.º ano de dados 4G está incluído em qualquer modelo.',
  },
  {
    q: 'Fazem instalação no local?',
    a: 'Sim, na região de Tomar. Para outras regiões, contacte-nos para avaliar parceiros locais.',
  },
];

export const FAQ_CONTACT = [
  {
    q: 'Qual o prazo de entrega?',
    a: '5–7 dias úteis em Portugal Continental (CTT Expresso / DHL). Custo de envio: 8–15 €.',
  },
  {
    q: 'Fazem instalação?',
    a: 'Sim, na região de Tomar e arredores. Para outras regiões, contacte-nos para avaliar.',
  },
  {
    q: 'É possível uma demonstração?',
    a: 'Sim, mediante marcação prévia na nossa sede em Tomar.',
  },
  {
    q: 'Aceitam encomendas institucionais?',
    a: 'Sim. Temos preços especiais (15% de desconto) para câmaras municipais e cooperativas apícolas.',
  },
];

export const VALUES = [
  { icon: '🌱', title: 'Sustentabilidade', desc: 'Energia solar, materiais duráveis, impacto ambiental mínimo em toda a cadeia de valor.' },
  { icon: '💡', title: 'Inovação', desc: 'Tecnologia de ponta adaptada às necessidades reais dos apicultores portugueses.' },
  { icon: '🤝', title: 'Acessibilidade', desc: 'Preços pensados para incluir pequenos apicultores com recursos limitados.' },
  { icon: '🌍', title: 'Responsabilidade', desc: 'Preservação da biodiversidade e equilíbrio dos ecossistemas apícolas.' },
];

export const COMPARISON_ROWS = [
  { feature: 'Proteção anti-vespa asiática', hive: '✅ Automática', comp: '❌ Não disponível', hivePosGood: true },
  { feature: 'Preço de entrada', hive: '✅ 299 €', comp: '❌ >1.000 €', hivePosGood: true },
  { feature: 'Alimentação solar', hive: '✅ Incluída', comp: '⚠️ Opcional / extra', hivePosGood: true },
  { feature: 'Módulos de expansão', hive: '✅ Escalável', comp: '❌ Sistema fechado', hivePosGood: true },
  { feature: 'Feito para Portugal', hive: '✅ Sim', comp: '❌ Não', hivePosGood: true },
];