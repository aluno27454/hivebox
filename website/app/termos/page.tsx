import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Termos e Condições — Hive Box',
  description: 'Termos e Condições de utilização dos produtos e serviços Hive Box, Lda.',
};

export default function TermosPage() {
  return (
    <section className="pt-32 pb-24 bg-light">
      <div className="max-w-[768px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl text-charcoal mb-2">Termos e Condições</h1>
        <p className="text-mid text-sm mb-10">Última atualização: maio de 2026</p>

        <div className="space-y-8 text-mid leading-relaxed">
          <Section title="1. Identificação da Empresa">
            <p>
              <strong className="text-charcoal">Hive Box, Lda.</strong><br />
              Rua Sandorninho n.º 24B, 2300-616 Tomar, Santarém, Portugal<br />
              CAE: 01491 — Apicultura | Capital social: 1.000 €<br />
              Email: {SITE.email}
            </p>
          </Section>

          <Section title="2. Objeto">
            <p>Os presentes Termos e Condições regem a utilização do website hivebox.pt e a aquisição dos produtos e serviços da Hive Box, Lda.</p>
          </Section>

          <Section title="3. Produtos e Preços">
            <p>Os preços indicados no website incluem IVA à taxa legal em vigor. A Hive Box reserva-se o direito de alterar preços sem aviso prévio. Os preços confirmados na encomenda são os aplicáveis.</p>
          </Section>

          <Section title="4. Encomendas">
            <p>As encomendas são aceites por email ou formulário de contacto. A encomenda é confirmada após receção do pagamento. O prazo de entrega é de 5–7 dias úteis em Portugal Continental.</p>
          </Section>

          <Section title="5. Garantia">
            <p>O hardware Hive Box tem 2 anos de garantia legal de conformidade. A garantia cobre defeitos de fabrico em condições normais de utilização. Não cobre danos causados por uso indevido, acidentes ou modificações.</p>
          </Section>

          <Section title="6. Subscrição da App">
            <p>O primeiro ano de subscrição da aplicação móvel é gratuito e incluído na compra de qualquer modelo. A partir do 2.º ano, a subscrição é renovada anualmente ao preço de 49 €/ano, salvo cancelamento prévio.</p>
          </Section>

          <Section title="7. Direito de Arrependimento">
            <p>O consumidor tem o direito de resolver o contrato no prazo de 14 dias úteis a contar da receção do produto, sem necessidade de indicar o motivo, nos termos do Decreto-Lei n.º 24/2014.</p>
          </Section>

          <Section title="8. Limitação de Responsabilidade">
            <p>A Hive Box não é responsável por danos indiretos resultantes da utilização dos seus produtos. A responsabilidade máxima limita-se ao valor do produto adquirido.</p>
          </Section>

          <Section title="9. Lei Aplicável">
            <p>Os presentes Termos regem-se pela lei portuguesa. Qualquer litígio será submetido aos tribunais competentes da comarca de Santarém.</p>
          </Section>

          <Section title="10. Contacto">
            <p>Para esclarecimentos: <a href={`mailto:${SITE.email}`} className="text-honey hover:underline">{SITE.email}</a> | {SITE.phone}</p>
          </Section>
        </div>

        <div className="mt-12 pt-8 border-t border-honey-light">
          <Link href="/" className="text-honey font-semibold hover:underline text-sm">← Voltar ao início</Link>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl text-charcoal mb-3">{title}</h2>
      {children}
    </div>
  );
}
