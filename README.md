# 🐝 Hive Box

> *A única colmeia que defende as suas abelhas enquanto dorme.*

Website oficial da **Hive Box, Lda.** — startup portuguesa de colmeias inteligentes fundada em 2026 por estudantes do Instituto Politécnico de Tomar.

---

## Sobre o Projeto

A Hive Box desenvolve e comercializa **colmeias inteligentes** equipadas com sensores IoT, câmaras de deteção, arpas eletrificadas anti-vespa asiática e painéis solares, geridas através de uma aplicação móvel proprietária.

### Problema que resolve
- A **vespa asiática** (*Vespa velutina*) está a devastar apiários em toda a Península Ibérica
- Apicultores fazem visitas físicas frequentes sem saber se há problemas
- Soluções existentes custam >1.000 € e não protegem contra a vespa asiática

### Proposta de Valor
- Monitorização remota 24/7 via app móvel
- Proteção ativa e automática contra vespa asiática (<200 ms)
- 100% solar — funciona em apiários remotos
- A partir de **299 €** (40–60% mais barato que concorrentes europeus)

---

## Estrutura do Repositório

```
Hivebox/
├── website/               # Website Next.js (front-end público)
│   ├── app/               # Páginas (App Router)
│   │   ├── page.tsx           → Landing page
│   │   ├── produto/           → Produtos Starter & Pro
│   │   ├── tecnologia/        → Hardware e arquitetura
│   │   ├── precos/            → Preços + calculadora ROI
│   │   ├── sobre/             → Equipa e história
│   │   ├── contacto/          → Formulário de contacto
│   │   ├── privacidade/       → Política de Privacidade
│   │   └── termos/            → Termos e Condições
│   ├── components/        # Componentes React
│   │   ├── layout/            → Navbar, Footer
│   │   ├── sections/          → ROICalculator, ContactForm
│   │   └── ui/                → StatsCounter, Accordion, NewsletterForm
│   └── lib/
│       └── constants.ts       → Dados do produto, equipa, FAQ
├── Controllers/           # ASP.NET Core MVC (API futura)
├── Views/                 # Razor Views
└── Hivebox.csproj
```

---

## Website

### Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| Next.js | 16.2 | Framework (App Router, SSG) |
| Tailwind CSS | v4 | Estilização |
| TypeScript | 5 | Linguagem |
| React Hook Form + Zod | latest | Formulários e validação |
| Lucide React | latest | Ícones |

### Páginas

| Rota | Descrição |
|---|---|
| `/` | Landing page completa com hero, comparação, app móvel e newsletter |
| `/produto` | Tabela comparativa Starter vs Pro, módulos de expansão |
| `/tecnologia` | Arquitetura do sistema, sensores, LoRaWAN, energia solar |
| `/precos` | Planos, add-ons, subscrições, descontos e calculadora de ROI |
| `/sobre` | Timeline, equipa fundadora, valores e parceiros |
| `/contacto` | Formulário validado, morada e FAQ |

### Instalação e Desenvolvimento

```bash
cd website
npm install
npm run dev
```

O servidor inicia em [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de produção
npm run start   # servidor de produção
```

### Design System

- **Cores:** honey `#F5A623` · dark `#1A1A0E` · forest `#2E5E2E`
- **Fontes:** Playfair Display (headings) · DM Sans (corpo) · JetBrains Mono (código)
- **Motivo:** padrão hexagonal recorrente (backgrounds, ícones, divisores)

---

## Produtos

### Hive Box Starter — 299 €
Monitorização essencial: temperatura, humidade, balança, câmara 12 MP, 4G/LTE, GPS, painel solar 20 W, caixa IP67, app 1 ano grátis.

### Hive Box Pro — 499 €
Tudo do Starter, mais: arpas eletrificadas anti-vespa (<200 ms), sensor CO₂, sensor de som/vibração, módulo LoRaWAN (até 15 km).

### Módulos de Expansão
| Módulo | Preço |
|---|---|
| Arpas eletrificadas anti-vespa | 99 € |
| Sensor de som / vibração | 39 € |
| Módulo LoRaWAN | 59 € |
| Sensor de CO₂ | 49 € |

---

## Equipa

| Nome | Cargo | Área |
|---|---|---|
| André Vassalo | CEO | Gestão, estratégia, financiamento |
| Samuel Ponte | CTO | Hardware, IoT, eletrónica, produção |
| José Lopes | Dev/CFO | App móvel, backend, cloud, finanças |
| Gabriel Puga | CMO | Marketing digital, clientes, parcerias |

---

## Contacto

- 🌐 [hivebox.pt](https://hivebox.pt)
- 📧 [geral@hivebox.pt](mailto:geral@hivebox.pt)
- 📞 +351 919 458 298
- 📍 Rua Sandorninho n.º 24B, 2300-616 Tomar, Santarém, Portugal
- Instagram: [@hivebox.pt](https://instagram.com/hivebox.pt)
- LinkedIn: [linkedin.com/company/hivebox](https://linkedin.com/company/hivebox)

---

© 2026 Hive Box, Lda. Todos os direitos reservados.