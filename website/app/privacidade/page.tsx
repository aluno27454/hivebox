import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Política de Privacidade — Hive Box',
  description: 'Política de Privacidade da Hive Box, Lda. Saiba como tratamos os seus dados pessoais.',
};

export default function PrivacidadePage() {
  return (
    <section className="pt-32 pb-24 bg-light">
      <div className="max-w-[768px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl text-charcoal mb-2">Política de Privacidade</h1>
        <p className="text-mid text-sm mb-10">Última atualização: maio de 2026</p>

        <div className="space-y-8 text-mid leading-relaxed">
          <Section title="1. Identificação do Responsável">
            <p>
              <strong className="text-charcoal">Hive Box, Lda.</strong><br />
              Rua Sandorninho n.º 24B, 2300-616 Tomar, Santarém, Portugal<br />
              Email: {SITE.email}<br />
              Telefone: {SITE.phone}
            </p>
          </Section>

          <Section title="2. Dados Recolhidos">
            <p>Recolhemos os seguintes dados pessoais:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Nome e apelido</li>
              <li>Endereço de email</li>
              <li>Número de telefone (opcional)</li>
              <li>Informações de utilização do website (cookies de analytics)</li>
              <li>Dados de localização GPS das colmeias (utilizadores da app)</li>
            </ul>
          </Section>

          <Section title="3. Finalidade do Tratamento">
            <ul className="list-disc pl-5 space-y-1">
              <li>Resposta a pedidos de contacto e encomendas</li>
              <li>Envio de newsletter (com consentimento expresso)</li>
              <li>Prestação dos serviços da plataforma Hive Box</li>
              <li>Melhoria do website e da experiência do utilizador</li>
              <li>Cumprimento de obrigações legais</li>
            </ul>
          </Section>

          <Section title="4. Base Legal">
            <p>O tratamento baseia-se no consentimento do titular, na execução de contrato e no cumprimento de obrigações legais, nos termos do Regulamento (UE) 2016/679 (RGPD).</p>
          </Section>

          <Section title="5. Conservação dos Dados">
            <p>Os dados pessoais são conservados pelo período necessário à finalidade para que foram recolhidos, ou pelo período legalmente exigido, findo o qual serão eliminados ou anonimizados.</p>
          </Section>

          <Section title="6. Direitos do Titular">
            <p>O titular tem direito de acesso, retificação, apagamento, portabilidade, oposição e limitação do tratamento dos seus dados. Para exercer estes direitos, contacte: <a href={`mailto:${SITE.email}`} className="text-honey hover:underline">{SITE.email}</a></p>
          </Section>

          <Section title="7. Cookies">
            <p>Utilizamos cookies técnicos (necessários para o funcionamento do website) e cookies de analytics (Google Analytics 4) para melhorar a experiência do utilizador. Pode gerir as suas preferências no banner de cookies.</p>
          </Section>

          <Section title="8. Contacto">
            <p>Para qualquer questão relativa à proteção de dados, contacte: <a href={`mailto:${SITE.email}`} className="text-honey hover:underline">{SITE.email}</a></p>
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
