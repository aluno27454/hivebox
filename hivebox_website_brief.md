
# 🐝 Hive Box — Website Brief para Claude Code

> Este documento é um briefing completo para o desenvolvimento do website oficial da **Hive Box, Lda.** — uma startup portuguesa de colmeias inteligentes. Contém toda a informação sobre o negócio, conteúdo de cada página, especificações técnicas, estética, componentes, interações e comportamento esperado. O Claude Code deve seguir este documento como fonte única de verdade.

---

## 1. CONTEXTO DO NEGÓCIO

### O que é a Hive Box
A **Hive Box** é uma startup tecnológica portuguesa fundada em 2026 por quatro estudantes do Instituto Politécnico de Tomar. Desenvolve e comercializa **colmeias inteligentes** equipadas com sensores IoT, câmaras de deteção, arpas eletrificadas anti-vespa asiática e painéis solares, geridas através de uma aplicação móvel proprietária.

### Problema que resolve
- A **vespa asiática** (*Vespa velutina*) está a devastar colmeias em toda a Península Ibérica e Europa
- Os apicultores têm de fazer visitas físicas frequentes e dispendiosas aos apiários
- As soluções tecnológicas existentes no mercado são demasiado caras (>1.000 €) e não protegem contra a vespa asiática
- O setor apícola português está a envelhecer e necessita de modernização

### Proposta de Valor
> *"A única colmeia que defende as suas abelhas enquanto dorme."*

- Monitorização remota 24/7 via app móvel
- Proteção ativa e automática contra vespa asiática
- Alimentação 100% solar — funciona em apiários remotos sem eletricidade
- Preço acessível: a partir de **299 €** (40–60% mais barato que concorrentes europeus)
- Arquitetura modular: começa pequeno, expande gradualmente

### Missão
> *"Salvar as abelhas, pensar no ambiente e capacitar os apicultores com tecnologia acessível, contribuindo para a preservação da biodiversidade e a sustentabilidade do ecossistema apícola."*

### Visão
> *"Ser a empresa de referência europeia em soluções tecnológicas para apicultura sustentável."*

### Valores
| Valor | Descrição |
|---|---|
| Sustentabilidade | Energia solar, materiais duráveis, impacto ambiental mínimo |
| Inovação | Tecnologia de ponta adaptada às necessidades reais dos apicultores |
| Acessibilidade | Preços pensados para incluir pequenos apicultores com recursos limitados |
| Responsabilidade Ambiental | Preservação da biodiversidade e equilíbrio dos ecossistemas |
| Colaboração | Partilha de dados e conhecimento entre utilizadores |

### Equipa Fundadora
| Nome | Cargo | Área |
|---|---|---|
| André Vassalo | CEO – Diretor Geral | Gestão, estratégia, financiamento |
| Samuel Ponte | CTO – Diretor de Tecnologia | Hardware, IoT, eletrónica, produção |
| José Lopes | Dev/CFO – Software e Finanças | App móvel, backend, cloud, finanças |
| Gabriel Puga | CMO – Marketing e Vendas | Marketing digital, clientes, parcerias |

### Contactos
- **Website:** hivebox.pt
- **Email:** geral@hivebox.pt
- **Telemóvel:** +351 919 458 298
- **Morada:** Rua Sandorninho n.º 24B, Tomar, 2300-616 Santarém, Portugal
- **Instagram:** @hivebox.pt
- **LinkedIn:** linkedin.com/company/hivebox

---

## 2. PRODUTOS

### Hive Box Starter — 299 €
Monitorização essencial para quem começa ou quer testar a tecnologia.

**Inclui:**
- Sensores de temperatura interior + exterior (DHT22 + DS18B20, precisão ±0,5°C)
- Sensor de humidade relativa interior (DHT22, ±2%)
- Balança integrada — peso da colmeia (HX711 + load cells, precisão ±50 g, até 200 kg)
- Câmara de vigilância 12 MP (Raspberry Pi Camera Module 3, Sony IMX708, 1080p/50fps)
- Comunicação 4G/LTE (módulo SIM7600G-H, cartão SIM incluído 1.º ano)
- GPS / geolocalização (u-blox NEO-M8N, precisão ±2 m)
- Painel solar monocristalino 20 W + bateria LiFePO₄ 12 V/20 Ah (≈3,5 dias de autonomia sem sol)
- Caixa de proteção IP67 (200 × 150 × 80 mm, resistente a poeira e água)
- Controlador Raspberry Pi 4 + Arduino Nano ESP32
- **App móvel — 1 ano de subscrição gratuita incluído**
- Embalagem de transporte rígida com espuma recortada
- **Peso total do kit: ≈ 4,5 kg**
- Instalação em menos de 60 minutos, sem ferramentas especiais

### Hive Box Pro — 499 €
Sistema completo de monitorização e proteção para apicultores experientes.

**Tudo do Starter, mais:**
- Sensor de som / vibração (Microfone MEMS SPH0645, 20 Hz – 20 kHz) — deteção de enxameação e stress da rainha
- **Sensor de CO₂ interior** (MH-Z19B NDIR, 0–5.000 ppm, ±50 ppm) — indicador de saúde da colónia
- **Arpas eletrificadas anti-vespa asiática** (500–1.000 V DC, aço inox 304, ativação automática em <200 ms)
- **Módulo LoRaWAN** (RFM95W 868 MHz, alcance até 15 km em espaço aberto, 2–5 km em floresta) — para apiários sem cobertura 4G
- Modo de comunicação dual: 4G + LoRa com comutação automática
- **Peso total do kit: ≈ 5,2 kg**

### Módulos de Expansão (Add-ons para Starter)
| Módulo | Preço |
|---|---|
| Arpas eletrificadas anti-vespa | 99 € |
| Sensor de som / vibração | 39 € |
| Módulo LoRaWAN | 59 € |
| Sensor de CO₂ | 49 € |

### Subscrições e Serviços
| Serviço | Preço |
|---|---|
| Subscrição anual da app (após 1.º ano gratuito) | 49 €/ano |
| Contrato de manutenção anual | 79 €/ano |
| Gateway LoRa próprio (cobre 5–10 km) | 149 € |

### Política de Descontos
- **Volume:** 5% (2–4 un.) / 10% (5–9 un.) / 15% (10+ un.)
- **Fidelização:** 20% na renovação da subscrição após 2 anos de conta ativa
- **Institucional:** 15% no hardware para câmaras municipais e cooperativas (mínimo 5 un.)
- **Pack add-ons:** 10% ao comprar 3 ou mais módulos
- **Lançamento:** primeiros 50 clientes — 10% no hardware + 6 meses extra de subscrição gratuita

---

## 3. APLICAÇÃO MÓVEL

A aplicação Hive Box (iOS + Android) é o interface principal entre o apicultor e a sua rede de colmeias. Disponível exclusivamente para clientes. Funcionalidades:

- **Dashboard** com semáforo de estado de todas as colmeias (verde/amarelo/vermelho)
- **Monitorização em tempo real**: temperatura, humidade, peso, CO₂, qualidade do ar
- **Alertas push** configuráveis: queda de peso súbita, temperatura anormal, deteção de vespas, bateria baixa, perda de sinal
- **Histórico e gráficos** interativos por período (dia/semana/mês/ano)
- **Mapa GPS** interativo com localização de todas as colmeias
- **Registo de intervenções**: visitas, tratamentos e observações manuais
- **Relatórios PDF** exportáveis para veterinários, cooperativas ou entidades públicas
- **Dados partilhados** anonimizados com a comunidade para benchmarking

---

## 4. PÚBLICO-ALVO

| Segmento | Perfil | Mensagem-chave |
|---|---|---|
| Apicultores individuais | 5–50 colmeias, sensíveis ao preço, zonas rurais | "Menos visitas, mais proteção, mais mel" |
| Cooperativas apícolas | Volume médio-alto, interesse em dados coletivos | "Gestão centralizada de toda a rede" |
| Câmaras municipais | Programas de biodiversidade e proteção ambiental | "Proteja as abelhas da sua cidade" |
| Apicultores profissionais | +100 colmeias, foco em produtividade e ROI | "Dados detalhados, escala ilimitada" |

---

## 5. ESTRUTURA DO WEBSITE

O website deve ter **6 páginas** principais + componentes globais:

```
/                  → Página Inicial (Landing Page)
/produto           → Produto (Hive Box Starter & Pro + App)
/tecnologia        → Tecnologia (como funciona, sensores, LoRa, CO₂, arpas)
/precos            → Preços (tabela de preços, descontos, comparação)
/sobre             → Sobre Nós (equipa, missão, história)
/contacto          → Contacto (formulário, morada, mapa)
```

---

## 6. CONTEÚDO DETALHADO DE CADA PÁGINA

---

### 6.1 Página Inicial `/`

**Objetivo:** Capturar atenção, comunicar proposta de valor, gerar leads.

#### Hero Section
- **Headline:** `Protege as tuas abelhas. Enquanto dormes.`
- **Subheadline:** `A Hive Box é a colmeia inteligente que monitoriza, protege contra a vespa asiática e maximiza a tua produção de mel — 100% solar, acessível a qualquer apicultor.`
- **CTA primário:** botão `Ver os Produtos` → link para `/produto`
- **CTA secundário:** botão `Saber Mais` → scroll para próxima secção
- **Visual de fundo:** animação subtil de hexágonos dourados ou imagem de apiário ao pôr do sol
- **Badge de urgência:** pequeno selo `🐝 Promoção de Lançamento — 10% de desconto para os primeiros 50 clientes`

#### Secção "O Problema" (3 cards horizontais)
Título: `Por que as abelhas precisam de tecnologia`

Card 1 — Ícone vespa:
- **Título:** `Vespa Asiática`
- **Texto:** `A Vespa velutina destrói colmeias inteiras em horas. Em Portugal, está a devastar apiários de norte a sul sem aviso.`

Card 2 — Ícone clock/travel:
- **Título:** `Visitas Constantes`
- **Texto:** `Os apicultores deslocam-se ao apiário sem saber se há problemas. Cada viagem perdida custa tempo e dinheiro.`

Card 3 — Ícone coin/chart-down:
- **Título:** `Tecnologia Inacessível`
- **Texto:** `As soluções existentes custam mais de 1.000 € e não protegem contra a vespa asiática. Foram feitas para grandes produtores.`

#### Secção "A Solução" (destaque do produto)
- Imagem/mockup do produto à esquerda
- À direita, lista de 4 benefícios com ícones:
  1. 🛡️ **Proteção automática** — arpas eletrificadas ativadas por câmara em menos de 200 ms
  2. 📱 **Monitorização remota** — temperatura, peso, CO₂ e alertas na palma da mão
  3. ☀️ **100% Solar** — funciona em apiários remotos sem qualquer infraestrutura
  4. 🧩 **Começa com 1, cresce sem limites** — arquitetura modular, começa no Starter e expande
- CTA: `Descobrir o Produto` → `/produto`

#### Secção "Como Funciona" (3 passos)
Título: `Tão simples como 1, 2, 3`

Passo 1 — `Instala em 60 minutos`
> Kit completo com guia ilustrado. Dois parafusos, ligar os cabos, leitura do QR Code na app. Pronto.

Passo 2 — `A Hive Box fica de guarda`
> Sensores leem temperatura, humidade, peso e CO₂ 24 horas por dia. A câmara deteta vespas asiáticas e as arpas ativam automaticamente.

Passo 3 — `Tu recebes os alertas`
> Recebe notificações push em tempo real. Consulta gráficos históricos. Exporta relatórios. Visita o apiário só quando é necessário.

#### Secção de Estatísticas (números de impacto)
4 números animados ao entrar no viewport:
- `75%` — das culturas alimentares mundiais dependem das abelhas
- `14.000+` — apicultores registados em Portugal
- `<200ms` — tempo de reação das arpas anti-vespa
- `15km` — alcance do módulo LoRaWAN em espaço aberto

#### Secção de Comparação (tabela simplificada)
Título: `Hive Box vs. Concorrência`

| | Hive Box Pro | Concorrentes Europeus |
|---|---|---|
| Proteção anti-vespa asiática | ✅ Automática | ❌ Não disponível |
| Preço de entrada | ✅ 299 € | ❌ >1.000 € |
| Alimentação solar | ✅ Incluída | ⚠️ Opcional / extra |
| Módulos de expansão | ✅ Escalável | ❌ Sistema fechado |
| Feito para Portugal | ✅ Sim | ❌ Não |

#### Secção de Preços (resumo)
2 cards de produto lado a lado (Starter vs Pro) com destaque no Pro.
CTA: `Ver Todos os Preços e Descontos` → `/precos`

#### Secção App Móvel
- Mockup de telemóvel com screenshots da app
- Lista de funcionalidades chave (dashboard, alertas, mapa, relatórios)
- Badges App Store + Google Play (ainda não disponível — badge com "Em Breve")

#### Secção "Para Quem É"
4 cards, um por segmento de mercado, com ícone e mensagem curta.

#### Secção Sobre Nós (teaser)
- Foto ou ilustração da equipa de 4
- Breve texto: *"Somos quatro estudantes do Instituto Politécnico de Tomar apaixonados por tecnologia e pelo ambiente. Criámos a Hive Box porque acreditamos que as abelhas merecem proteção moderna — e os apicultores merecem uma ferramenta acessível."*
- CTA: `Conhecer a Equipa` → `/sobre`

#### Newsletter / Lead Capture
- Campo de email + botão `Receber Novidades`
- Texto: `Sê dos primeiros a saber quando a Hive Box estiver disponível. Sem spam, só abelhas.`

#### Footer (presente em todas as páginas)
- Logo Hive Box + tagline
- Links de navegação
- Redes sociais: Instagram, LinkedIn
- Email: geral@hivebox.pt
- Telemóvel: +351 919 458 298
- Morada: Rua Sandorninho n.º 24B, Tomar
- Copyright: © 2026 Hive Box, Lda. Todos os direitos reservados.
- Links: Política de Privacidade | Termos e Condições

---

### 6.2 Página Produto `/produto`

**Objetivo:** Detalhar o produto e converter em compra/contacto.

#### Hero
- Headline: `A colmeia inteligente que o apicultor sempre quis`
- Imagem de produto em destaque

#### Secção Modelos (tabs ou scroll)
Duas colunas: **Starter** vs **Pro** com tabela de comparação completa:

| Funcionalidade | Starter | Pro |
|---|---|---|
| Temperatura interior + exterior | ✅ DHT22 + DS18B20 | ✅ DHT22 + DS18B20 |
| Humidade relativa | ✅ ±2% | ✅ ±2% |
| Balança (peso da colmeia) | ✅ ±50 g, até 200 kg | ✅ ±50 g, até 200 kg |
| Câmara 12 MP 1080p | ✅ | ✅ |
| Sensor de som / vibração | ❌ | ✅ SPH0645 |
| Sensor de CO₂ | ❌ | ✅ 0–5.000 ppm |
| Arpas eletrificadas anti-vespa | ❌ | ✅ <200 ms |
| Comunicação 4G/LTE | ✅ | ✅ |
| Módulo LoRaWAN (até 15 km) | ❌ | ✅ |
| GPS / geolocalização | ✅ ±2 m | ✅ ±2 m |
| Painel solar 20 W | ✅ | ✅ |
| Bateria LiFePO₄ (≈3,5 dias) | ✅ | ✅ |
| Caixa IP67 | ✅ | ✅ |
| App móvel (1 ano grátis) | ✅ | ✅ |
| Peso do kit | ≈ 4,5 kg | ≈ 5,2 kg |
| **Preço** | **299 €** | **499 €** |

#### Secção Módulos de Expansão
Cards com ícone, nome, descrição curta e preço para cada add-on.

#### Secção App Móvel (detalhe)
Carousel de screenshots com descrição de cada ecrã.

#### Secção Transporte e Instalação
- Embalagem IP: caixa rígida de polipropileno expandido (450 × 350 × 200 mm, ~6,5 kg)
- Envio via CTT Expresso / DHL — entrega em 5–7 dias úteis
- Custo de envio: 8–15 € para Portugal Continental
- Instalação: ≤ 60 minutos, sem ferramentas especiais
- Guia ilustrado incluído (PT + EN) + PDF no website

#### CTA Final
Botão grande: `Encomendar Agora` → `/contacto` (pré-preencher formulário com "Interesse em produto")

---

### 6.3 Página Tecnologia `/tecnologia`

**Objetivo:** Criar credibilidade técnica, detalhar o hardware.

#### Hero
- Headline: `Engenharia ao serviço das abelhas`
- Subheadline: `Cada componente da Hive Box foi escolhido para maximizar fiabilidade, precisão e autonomia em condições rurais adversas.`

#### Arquitetura do Sistema (diagrama)
Diagrama visual com 3 camadas:
1. **Camada de Perceção** → sensores + câmara (recolhem dados)
2. **Camada de Processamento** → Raspberry Pi + Arduino (processam e decidem)
3. **Camada de Conectividade** → 4G + LoRa + GPS → Cloud → App

#### Secção por Componente (accordion ou cards expandíveis)

**Raspberry Pi 4 Model B — Cérebro do Sistema**
> Processador ARM Cortex-A72 64-bit a 1,8 GHz, 4 GB RAM, microSD 32 GB. Corre o algoritmo de visão computacional (OpenCV) para deteção da vespa asiática em tempo real. Dimensões: 85,6 × 56,5 mm, 46 g.

**Sensores**
Tabela com todos os sensores: tipo, modelo, parâmetros medidos, precisão/gama.
| Sensor | Modelo | Parâmetros | Precisão / Gama |
|---|---|---|---|
| Temperatura interior | DHT22 + DS18B20 | Temperatura (°C), humidade (%) | ±0,5°C / ±2% HR |
| Temperatura exterior | DS18B20 waterproof | Temperatura ambiente | ±0,5°C; –55°C a +125°C |
| Peso da colmeia | HX711 + load cells 50 kg | Variação de peso (kg) | ±50 g; 0–200 kg |
| Som / vibração | SPH0645 MEMS | Análise acústica | 20 Hz – 20 kHz |
| CO₂ interior | MH-Z19B NDIR | Concentração CO₂ (ppm) | 0–5.000 ppm; ±50 ppm |

**Sensor de CO₂ — Detalhe**
> A concentração normal numa colmeia saudável é 1.000–3.000 ppm. Acima de 4.000 ppm há risco de colapso. A Hive Box Pro alerta automaticamente quando passa o limiar de 3.500 ppm.
> Casos de uso: deteção de superpopulação, monitorização invernal sem abrir a colmeia, avaliação de ventilação, correlação com produção de mel (colónias com CO₂ < 2.500 ppm produzem 15–20% mais mel).

**Câmara de Deteção — 12 MP**
> Sony IMX708, 1080p/50fps, campo de visão 66°. Posicionada no alvado da colmeia. Algoritmo OpenCV classifica insetos em tempo real: abelha (ignorar), vespa asiática (ativar arpas), não identificado (registar).

**Arpas Eletrificadas Anti-Vespa**
> 500–1.000 V DC, intensidade < 1 mA. Distância entre fios: 6 mm (abelha passa, vespa não). Ativação em < 200 ms após confirmação pelo algoritmo. Aço inoxidável 304, resistente à corrosão.

**Módulo LoRaWAN — Para Apiários Remotos**
> RFM95W, 868 MHz (Europa), protocolo LoRaWAN 1.0.3. Alcance: até 15 km em espaço aberto; 2–5 km em floresta. Consumo em sleep: apenas 0,2 μA.
> Modo dual 4G + LoRa: comutação automática. Compatível com rede pública TTN (The Things Network) gratuita, presente em Santarém e grande parte de Portugal.

**Sistema de Energia Solar**
> Painel monocristalino 20 W (350 × 250 × 18 mm, 1,5 kg) + controlador MPPT 10 A + bateria LiFePO₄ 12 V/20 Ah (2,2 kg).
> Consumo médio do sistema: 2,8 W / 67 Wh por dia.
> Produção solar em Portugal: 80–100 Wh/dia (4–5 horas de pico).
> Autonomia sem sol: ≈ 3,5 dias.

**Caixa de Proteção IP67**
> ABS, 200 × 150 × 80 mm, passacabos herméticos roscados. Resistente a poeira total e imersão em água até 1 m durante 30 minutos.

#### Secção Processo de Fabrico (timeline)
7 fases de produção com ícone, título e descrição curta:
1. Aprovisionamento de componentes
2. Soldadura e montagem da PCB
3. Integração e calibração de sensores
4. Configuração do firmware (OTA updates)
5. Montagem na caixa IP67
6. Testes finais e controlo de qualidade
7. Embalagem e expedição

---

### 6.4 Página Preços `/precos`

**Objetivo:** Apresentar preços com clareza, gerir objeções, empurrar para a compra.

#### Hero
- Headline: `Tecnologia profissional. Preço justo.`
- Subheadline: `Começa com o Starter e expande quando quiseres. Sem contratos. Sem taxas escondidas.`

#### Toggle de Moeda (opcional): PT / ES / FR

#### Cards de Produto (3 colunas)

**Starter — 299 €**
Tudo o que precisas para começar
- Lista de funcionalidades incluídas
- Badge: `Mais Popular`
- CTA: `Encomendar Starter`

**Pro — 499 €**
O sistema mais completo do mercado
- Lista de funcionalidades incluídas (todas do Starter + extras a negrito)
- Badge: `Proteção Completa`
- CTA: `Encomendar Pro`

**Institucional — Preço sob consulta**
Para câmaras municipais e cooperativas
- Descontos de 15% + instalação incluída + relatórios personalizados
- CTA: `Solicitar Proposta`

#### Tabela de Add-ons

#### Tabela de Subscrições
| Plano | Preço | O que inclui |
|---|---|---|
| 1.º ano | Grátis | Incluído na compra de qualquer modelo |
| Básico | 49 €/ano | App completa, alertas, histórico |
| Pro (com manutenção) | 128 €/ano (49+79) | App + contrato de manutenção anual |

#### Secção de Descontos (expandível / FAQ)
Detalhe de cada desconto disponível (volume, fidelização, institucional, lançamento).

#### Calculadora de ROI (componente interativo)
Inputs:
- Número de colmeias
- Produção média de mel por colmeia (kg/ano)
- Preço de venda do mel (€/kg)
- Estimativa de perdas atuais por vespa asiática (%)

Output:
- Valor estimado de perdas evitadas por ano
- Custo da Hive Box (por modelo selecionado)
- **Payback em meses**
- "Com a Hive Box, o teu investimento retorna em X meses"

#### FAQ de Preços
- É necessário assinar contrato? → Não. Compra única de hardware. Subscrição anual da app opcional a partir do 2.º ano.
- Posso começar com o Starter e fazer upgrade depois? → Sim. Podes adicionar qualquer add-on individualmente.
- Há garantia? → Sim, 2 anos de garantia no hardware.
- O cartão SIM está incluído? → Sim, 1 ano de dados incluído.
- Fazem instalação? → Sim, na região de Tomar. Para outras regiões, parceiros locais.

---

### 6.5 Página Sobre `/sobre`

**Objetivo:** Criar confiança, humanizar a marca, apresentar a equipa.

#### Hero
- Headline: `Quatro estudantes. Uma missão. Salvar as abelhas.`
- Foto/ilustração da equipa (placeholder: avatares estilizados com ícones dos cargos)

#### A Nossa História (linha temporal)
- **Fevereiro 2026** — A ideia nasce no IPT durante a cadeira de Tópicos de Gestão de Empresas
- **12 de Março 2026** — Os 4 sócios formalizam o compromisso e dividem funções
- **Abril 2026** — Início do desenvolvimento do protótipo
- **Maio 2026** — Primeiros testes de campo com apicultores da região de Tomar
- **2026–2027** — Lançamento comercial em Portugal (objetivo)
- **2027–2028** — Expansão para Espanha e França

#### A Nossa Missão (destaque visual)
> *"Salvar as abelhas, pensar no ambiente e capacitar os apicultores com tecnologia acessível."*

#### Valores (4 cards com ícone e texto)

#### A Equipa (4 cards de perfil)
Para cada membro:
- Avatar / foto (placeholder com inicial e cor de cargo)
- Nome
- Cargo com cor distintiva
- Habilitações académicas
- Experiência / responsabilidades na Hive Box
- Ícone de LinkedIn (link futuro)

**André Vassalo — CEO**
Licenciatura em Engenharia Informática (em curso) – IPT
Trabalhador-estudante; coordenação geral, estratégia e financiamento

**Samuel Ponte — CTO**
CET em Tecnologias e Programação de Sistemas de Informação + Licenciatura em Eng. Informática (em curso) – IPT
Estágio de 4 meses + 8 meses de experiência profissional como Suporte Técnico e Programador em Lisboa; hardware, IoT e produção

**José Lopes — Dev/CFO**
Licenciatura em Engenharia Informática (em curso) – IPT
Desenvolvimento de software, app móvel, backend e finanças

**Gabriel Puga — CMO**
Licenciatura em Engenharia Informática (em curso) – IPT
Marketing digital, clientes, redes sociais e parcerias

#### Parceiros e Apoios
- Instituto Politécnico de Tomar (incubação e suporte académico)
- Associação dos Apicultores do Vale do Tejo (validação e distribuição)
- Câmaras Municipais da região de Tomar (parceiros piloto)

#### Setor e Impacto
- Código CAE: 01491 – Apicultura
- Forma jurídica: Sociedade por Quotas (Lda.)
- Capital social: 1.000 €
- Sede: Tomar, Santarém, Portugal

---

### 6.6 Página Contacto `/contacto`

**Objetivo:** Facilitar o contacto, capturar leads qualificados.

#### Formulário de Contacto
Campos:
- Nome completo *
- Email *
- Telemóvel (opcional)
- Assunto (dropdown):
  - Interesse em comprar — Starter
  - Interesse em comprar — Pro
  - Interesse em comprar — Institucional / Câmara Municipal / Cooperativa
  - Suporte técnico
  - Parceria
  - Outro
- Mensagem (textarea) *
- Checkbox: "Aceito a Política de Privacidade" *
- Botão: `Enviar Mensagem`

**Feedback após envio:** mensagem de sucesso animada com ícone de abelha.

#### Informação de Contacto Direto
- 📧 geral@hivebox.pt
- 📞 +351 919 458 298
- 📍 Rua Sandorninho n.º 24B, 2300-616 Tomar, Santarém
- 🕐 Segunda a Sexta: 9h00–18h00

#### Mapa (Google Maps embed)
Localização da sede em Tomar, Santarém.

#### FAQ Rápido
- Qual o prazo de entrega? → 5–7 dias úteis em Portugal Continental.
- Fazem instalação? → Sim, na região de Tomar e arredores. Para outras regiões, contacte-nos para avaliar.
- Há demonstração? → Sim, mediante marcação na nossa sede em Tomar.
- Aceitam encomendas institucionais? → Sim. Temos preços especiais para câmaras municipais e cooperativas.

---

## 7. ESPECIFICAÇÕES TÉCNICAS DO WEBSITE

### Stack Tecnológico Recomendado
- **Framework:** Next.js 14+ (App Router) com TypeScript
- **Estilização:** Tailwind CSS + CSS Modules para componentes complexos
- **Animações:** Framer Motion (scroll-triggered, page transitions, counter animations)
- **Formulários:** React Hook Form + Zod para validação
- **Mapas:** Google Maps API ou Leaflet.js
- **Ícones:** Lucide React ou Heroicons
- **Fontes:** Google Fonts (ver secção 8 — Estética)
- **Deploy:** Vercel (recomendado para Next.js)

### Estrutura de Ficheiros Sugerida
```
/app
  /page.tsx                    → Landing page
  /produto/page.tsx            → Página produto
  /tecnologia/page.tsx         → Página tecnologia
  /precos/page.tsx             → Página preços
  /sobre/page.tsx              → Página sobre
  /contacto/page.tsx           → Página contacto
  /layout.tsx                  → Layout global (Navbar + Footer)
  /globals.css                 → CSS global + variáveis de design
/components
  /ui/                         → Componentes base (Button, Card, Badge, etc.)
  /sections/                   → Secções reutilizáveis (Hero, Stats, FAQ, etc.)
  /layout/                     → Navbar, Footer
  /product/                    → Componentes específicos do produto
  /calculator/                 → Calculadora de ROI
/lib
  /constants.ts                → Dados do produto, preços, equipa, FAQ
  /utils.ts                    → Funções utilitárias
/public
  /images/                     → Assets visuais
  /icons/                      → SVG icons customizados
```

### Performance
- Lighthouse score alvo: **>90** em todas as métricas
- Imagens: formato WebP, lazy loading, srcset responsivo
- Fonts: preload das fontes críticas, font-display: swap
- Core Web Vitals: LCP < 2,5 s, FID < 100 ms, CLS < 0,1
- SEO: meta tags completas, Open Graph, sitemap.xml, robots.txt

### SEO — Meta Tags por Página
```
/ → "Hive Box — Colmeia Inteligente Anti-Vespa Asiática | Portugal"
/produto → "Produtos Hive Box — Starter 299€ e Pro 499€ | Colmeia IoT"
/tecnologia → "Tecnologia Hive Box — Sensores IoT, LoRaWAN, Arpas Eletrificadas"
/precos → "Preços Hive Box — A partir de 299€ | Descontos Disponíveis"
/sobre → "Sobre a Hive Box — Startup Portuguesa de Apicultura Inteligente"
/contacto → "Contacto Hive Box — Tomar, Portugal | geral@hivebox.pt"
```

### Internacionalização
- Idioma principal: **Português (PT)**
- Preparar estrutura para futura adição de ES e FR (i18n com next-intl)

### Acessibilidade
- WCAG 2.1 AA
- Todos os elementos interativos com `aria-label`
- Focus visible em todos os elementos de formulário
- Skip navigation link
- Contraste de cor mínimo 4,5:1

---

## 8. ESTÉTICA E DESIGN SYSTEM

### Direção Visual
**"Natural-Tech"** — a intersecção entre a natureza orgânica das abelhas e a precisão da tecnologia IoT. Quente, confiável, moderno. Não corporativo. Não clínico.

Inspiração: painéis de mel hexagonais + circuitos eletrónicos. A estrutura hexagonal deve ser um motivo visual recorrente (backgrounds, divisores, ícones).

### Paleta de Cores

```css
:root {
  /* Primárias */
  --color-honey:        #F5A623;   /* Âmbar dourado — CTA principal */
  --color-honey-dark:   #D4891A;   /* Hover do CTA */
  --color-honey-light:  #FDE8B5;   /* Backgrounds suaves */

  /* Neutras */
  --color-dark:         #1A1A0E;   /* Quase-preto esverdeado — texto principal */
  --color-charcoal:     #2D2D1A;   /* Headings */
  --color-mid:          #6B6B4A;   /* Texto secundário */
  --color-light:        #F9F6EE;   /* Background geral — branco quente */
  --color-white:        #FFFFFF;

  /* Acento */
  --color-forest:       #2E5E2E;   /* Verde floresta — elementos de natureza */
  --color-forest-light: #E8F5E8;   /* Background verde suave */
  --color-danger:       #C0392B;   /* Vermelho — alerta vespa */
  --color-safe:         #27AE60;   /* Verde — estado saudável */
  --color-warn:         #F39C12;   /* Laranja — atenção */

  /* Gradientes */
  --gradient-hero:      linear-gradient(135deg, #1A1A0E 0%, #2E5E2E 100%);
  --gradient-honey:     linear-gradient(135deg, #F5A623 0%, #D4891A 100%);
  --gradient-card:      linear-gradient(180deg, rgba(245,166,35,0.05) 0%, rgba(245,166,35,0) 100%);
}
```

### Tipografia

```css
/* Display / Headings grandes */
font-family: 'Playfair Display', serif;
/* Corpo e UI */
font-family: 'DM Sans', sans-serif;
/* Código / specs técnicas */
font-family: 'JetBrains Mono', monospace;
```

Escala tipográfica:
```css
--text-xs:   0.75rem;    /* 12px — labels, badges */
--text-sm:   0.875rem;   /* 14px — captions */
--text-base: 1rem;       /* 16px — body */
--text-lg:   1.125rem;   /* 18px — body large */
--text-xl:   1.25rem;    /* 20px — subtítulos */
--text-2xl:  1.5rem;     /* 24px — h3 */
--text-3xl:  1.875rem;   /* 30px — h2 */
--text-4xl:  2.25rem;    /* 36px — h1 mobile */
--text-5xl:  3rem;       /* 48px — h1 desktop */
--text-6xl:  3.75rem;    /* 60px — hero headline */
--text-7xl:  4.5rem;     /* 72px — hero grande */
```

### Espaçamento e Layout

```css
--spacing-xs:   4px
--spacing-sm:   8px
--spacing-md:   16px
--spacing-lg:   24px
--spacing-xl:   32px
--spacing-2xl:  48px
--spacing-3xl:  64px
--spacing-4xl:  96px
--spacing-5xl:  128px

--border-radius-sm:   4px
--border-radius-md:   8px
--border-radius-lg:   16px
--border-radius-xl:   24px
--border-radius-full: 9999px

--max-width:    1280px
--content-width: 768px
```

### Sombras

```css
--shadow-sm:  0 1px 3px rgba(26,26,14,0.08);
--shadow-md:  0 4px 16px rgba(26,26,14,0.12);
--shadow-lg:  0 8px 32px rgba(26,26,14,0.16);
--shadow-xl:  0 16px 48px rgba(26,26,14,0.20);
--shadow-honey: 0 8px 32px rgba(245,166,35,0.25);
```

### Motivo Hexagonal
O hexágono deve aparecer como:
- Background pattern subtil em secções (SVG hexagrid com opacidade 0,03)
- Divisores de secção
- Ícones de funcionalidades
- Decoração nos cards de produto
- Elemento de marca na navbar (logo pode ser um hexágono)

Exemplo de CSS para grid hexagonal de fundo:
```css
.hex-bg {
  background-image: url("data:image/svg+xml,..."); /* hexgrid SVG */
  background-size: 60px 60px;
  opacity: 0.04;
}
```

---

## 9. COMPONENTES DE UI

### Navbar
- Logo Hive Box (hexágono dourado + texto)
- Links: Produto | Tecnologia | Preços | Sobre | Contacto
- CTA button: `Encomendar` com cor honey
- Mobile: hamburger menu com drawer animado
- Comportamento: sticky no topo, fundo transparente no hero → branco sólido após scroll (com `backdrop-filter: blur`)
- Indicador de página ativa (underline animado)

### Hero Component
Props: headline, subheadline, ctaPrimary, ctaSecondary, badge
- Texto animado com entrada staggered (Framer Motion)
- Background com padrão hexagonal subtil + gradiente

### ProductCard Component
Props: name, price, badge, features[], cta, highlighted
- Borda de destaque em honey para o plano recomendado
- Animação hover: elevação com shadow-honey
- Check/cross icons para features

### FeatureCard Component
Props: icon, title, description
- Ícone num hexágono com fundo honey-light
- Hover: ícone anima ligeiramente

### StatsCounter Component
- Números animados de 0 até valor final quando entram no viewport
- Intersection Observer para trigger
- Fonte: Playfair Display, grande, em honey

### ComparisonTable Component
- Coluna da Hive Box destacada visualmente
- Checkmarks verdes / X vermelhos / Warnings âmbar

### Timeline Component (página Sobre)
- Linha vertical em honey
- Pontos hexagonais
- Texto alterna esquerda/direita em desktop

### ROICalculator Component
- Sliders ou inputs numerados
- Output em destaque com animação de contagem
- Cor verde para payback rápido, âmbar para médio

### Accordion/FAQ Component
- Animação smooth de expand/collapse com Framer Motion
- Ícone + / – em honey

### SensorCard Component (página Tecnologia)
- Fundo dark com borda honey
- Dados técnicos em monospace
- Pequena animação de "pulsação" para simular leitura em tempo real

### Button Component
Variantes:
- `primary` — fundo honey, texto dark, hover honey-dark
- `secondary` — borda honey, texto honey, fundo transparente
- `ghost` — sem borda, texto mid, hover fundo light
- `danger` — para alertas e CTAs urgentes
- Tamanhos: `sm`, `md`, `lg`
- Loading state com spinner
- Ícone opcional à esquerda ou direita

### Badge Component
Variantes: `new`, `popular`, `sale`, `eco`
- `eco` verde para funcionalidades de sustentabilidade

### Toast/Notification (formulário de contacto)
- Aparece após submissão com ícone de abelha
- Auto-dismiss em 5 segundos
- Variantes: success, error

---

## 10. ANIMAÇÕES E INTERAÇÕES

### Princípios
- **Subtileza:** animações devem melhorar a experiência, não distrair
- **Performance:** preferir CSS transforms e opacity (GPU-accelerated)
- **Acessibilidade:** respeitar `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Animações Específicas

**Page Load — Hero (Framer Motion, stagger 0.1s):**
1. Badge desliza de cima (y: -20 → 0, opacity 0→1, delay 0)
2. Headline anima palavra a palavra (delay 0.1)
3. Subheadline fade in (delay 0.4)
4. Botões surgem (delay 0.6)
5. Visual de produto escala de 0.9 → 1 (delay 0.3)

**Scroll Triggered (Intersection Observer threshold 0.2):**
- Cards de features: slide up + fade in com stagger de 0.1s
- Stats counter: contagem animada de 0 até valor
- Timeline items: aparecem sequencialmente

**Hover States:**
- Cards de produto: elevação (translateY -4px) + shadow-honey
- Botão CTA: honey pulse glow `box-shadow: 0 0 20px rgba(245,166,35,0.4)`
- Links de navbar: underline desliza da esquerda para a direita
- Ícones de features: rotate 5° + scale 1.1

**Navbar scroll:**
```css
/* Transparente → branco com blur */
transition: background 0.3s ease, backdrop-filter 0.3s ease;
```

**Micro-interações no formulário:**
- Campo ativo: borda anima para honey
- Erro: shake animation + borda vermelha
- Sucesso: checkmark draw animation

---

## 11. RESPONSIVIDADE

### Breakpoints
```css
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop */
xl:  1280px  /* Desktop large */
2xl: 1536px  /* Desktop XL */
```

### Comportamento Mobile
- Navbar: hamburger → drawer full-screen com links grandes (touch-friendly)
- Hero: headline centralizada, botões em coluna
- Cards de produto: coluna única com scroll horizontal opcional para comparação
- Tabela de comparação: scroll horizontal ou versão simplificada em cards
- Calculadora ROI: layout vertical
- Mapa de contacto: altura reduzida

### Touch interactions
- Swipe para carousel da app (Framer Motion drag)
- Tap areas mínimas de 44 × 44 px
- Sem hover-only interactions

---

## 12. DADOS ESTRUTURADOS (PARA SEO)

### Schema.org para a página inicial
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hive Box",
  "legalName": "Hive Box, Lda.",
  "url": "https://hivebox.pt",
  "logo": "https://hivebox.pt/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+351919458298",
    "email": "geral@hivebox.pt",
    "contactType": "customer service"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Sandorninho n.º 24B",
    "addressLocality": "Tomar",
    "postalCode": "2300-616",
    "addressCountry": "PT"
  },
  "foundingDate": "2026",
  "founders": ["André Vassalo", "Samuel Ponte", "José Lopes", "Gabriel Puga"]
}
```

### Schema.org para produtos
```json
{
  "@type": "Product",
  "name": "Hive Box Starter",
  "description": "Colmeia inteligente com monitorização IoT e energia solar",
  "offers": {
    "@type": "Offer",
    "price": "299",
    "priceCurrency": "EUR"
  }
}
```

---

## 13. CONTEÚDO ADICIONAL E NOTAS

### Textos de Placeholder para Imagens
Como ainda não há fotografias reais do produto, usar:
- **Hero:** ilustração vetorial estilizada de colmeia com LEDs e painéis solares
- **Produto:** render 3D isométrico da caixa IP67 com sensores
- **App:** mockup de telemóvel com screenshot do dashboard (criar UI da app no mockup)
- **Equipa:** avatares com iniciais e cor de cargo (A, S, J, G)
- **Tecnologia:** diagrama técnico ilustrado dos componentes
- Usar `https://placehold.co` ou SVG illustrations como placeholder durante desenvolvimento

### Textos de Prova Social (a adicionar futuramente)
- Testemunhos de apicultores de teste (secção na landing page, placeholder por agora)
- Logos de parceiros (IPT, associações apícolas)
- Badges de reconhecimento (prémios, programas de aceleração)

### Cookies e RGPD
- Banner de cookies obrigatório (conformidade RGPD)
- Política de Privacidade página: `/privacidade`
- Termos e Condições página: `/termos`
- Conteúdo mínimo: identificação da empresa, dados recolhidos, finalidade, direitos do utilizador

### Analytics
- Google Analytics 4 (gtag) com consentimento RGPD
- Eventos a trackear: clique em CTAs, submissão de formulário, scroll depth por página, tempo na página de preços

### Newsletter
- Integrar com Mailchimp ou similar (campo de email + botão na landing page)
- Double opt-in obrigatório (RGPD)
- Email de confirmação: assunto "🐝 Bem-vindo à família Hive Box!"

---

## 14. CHECKLIST DE ENTREGÁVEIS

- [ ] Navbar com logo, links e CTA, responsivo
- [ ] Footer completo com links, contactos e redes sociais
- [ ] Página Inicial com todas as secções descritas
- [ ] Página Produto com tabela comparativa completa
- [ ] Página Tecnologia com detalhe de todos os componentes
- [ ] Página Preços com calculadora de ROI interativa
- [ ] Página Sobre com timeline e cards de equipa
- [ ] Página Contacto com formulário validado e mapa
- [ ] Design System: tokens de cor, tipografia, espaçamento documentados
- [ ] Componentes base: Button, Card, Badge, Accordion, Toast
- [ ] Animações: page load, scroll-triggered, hover states
- [ ] Responsividade completa mobile/tablet/desktop
- [ ] SEO: meta tags, Open Graph, Schema.org, sitemap
- [ ] Acessibilidade WCAG 2.1 AA
- [ ] Banner de cookies RGPD
- [ ] Performance: imagens WebP, lazy loading, code splitting

---

*Documento elaborado para uso interno da Hive Box, Lda. — Tomar, 2026*
*Versão 1.0 — Briefing para desenvolvimento web*
