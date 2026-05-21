import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/constants';

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80 pt-16 pb-8 hex-bg" aria-label="Rodapé">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <polygon points="16,2 30,9 30,23 16,30 2,23 2,9" fill="#F5A623" />
                <text x="16" y="21" textAnchor="middle" fill="#1A1A0E" fontSize="14" fontWeight="bold" fontFamily="serif">H</text>
              </svg>
              <span className="font-display font-bold text-xl text-white">Hive Box</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              A única colmeia que defende as suas abelhas enquanto dorme.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-honey hover:text-dark flex items-center justify-center transition-all"
                aria-label="Instagram da Hive Box"
              >
                <InstagramIcon />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-honey hover:text-dark flex items-center justify-center transition-all"
                aria-label="LinkedIn da Hive Box"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navegação</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-honey transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2.5">
              <li><Link href="/privacidade" className="text-sm text-white/60 hover:text-honey transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/termos" className="text-sm text-white/60 hover:text-honey transition-colors">Termos e Condições</Link></li>
              <li><span className="text-sm text-white/40">CAE: 01491 — Apicultura</span></li>
              <li><span className="text-sm text-white/40">Capital social: 1.000 €</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-honey transition-colors">
                  <Mail size={14} className="flex-shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-honey transition-colors">
                  <Phone size={14} className="flex-shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                <span>Rua Sandorninho n.º 24B,<br />Tomar, 2300-616 Santarém</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 Hive Box, Lda. Todos os direitos reservados.</p>
          <p>Feito com 🐝 em Tomar, Portugal</p>
        </div>
      </div>
    </footer>
  );
}