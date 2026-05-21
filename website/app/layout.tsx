import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE } from '@/lib/constants';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Hive Box — Colmeia Inteligente Anti-Vespa Asiática | Portugal',
    template: '%s | Hive Box',
  },
  description: 'A Hive Box é a colmeia inteligente que monitoriza, protege contra a vespa asiática e maximiza a tua produção de mel — 100% solar, a partir de 299 €.',
  keywords: ['colmeia inteligente', 'apicultura', 'vespa asiática', 'IoT', 'monitorização', 'Portugal', 'sensores'],
  authors: [{ name: 'Hive Box, Lda.', url: SITE.url }],
  creator: 'Hive Box',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: SITE.url,
    siteName: 'Hive Box',
    title: 'Hive Box — Colmeia Inteligente Anti-Vespa Asiática | Portugal',
    description: 'Monitorização remota 24/7. Proteção automática contra vespa asiática. 100% solar. A partir de 299 €.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hive Box — Colmeia Inteligente',
    description: 'Protege as tuas abelhas. Enquanto dormes.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      style={{
        fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
      }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Hive Box',
              legalName: 'Hive Box, Lda.',
              url: 'https://hivebox.pt',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+351919458298',
                email: 'geral@hivebox.pt',
                contactType: 'customer service',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rua Sandorninho n.º 24B',
                addressLocality: 'Tomar',
                postalCode: '2300-616',
                addressCountry: 'PT',
              },
              foundingDate: '2026',
              founders: ['André Vassalo', 'Samuel Ponte', 'José Lopes', 'Gabriel Puga'],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <a href="#main-content" className="skip-nav">Saltar para o conteúdo</a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}