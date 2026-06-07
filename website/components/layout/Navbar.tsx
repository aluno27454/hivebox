'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-dark/80 backdrop-blur-sm lg:bg-transparent'
      }`}
      style={{ transitionProperty: 'background, box-shadow, backdrop-filter' }}
    >
      <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20" aria-label="Navegação principal">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Hive Box — Página inicial">
          <HexLogo />
          <span className={`font-display font-bold text-xl transition-colors ${scrolled || menuOpen ? 'text-charcoal' : 'text-white'}`}>
            Hive Box
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href || pathname.startsWith(href + '/');
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link-underline font-body font-medium text-sm transition-colors ${
                    active ? 'text-honey' : scrolled ? 'text-charcoal hover:text-honey' : 'text-white/90 hover:text-white'
                  } ${active ? 'active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-honey text-dark hover:bg-honey-dark transition-all duration-200 hover:-translate-y-0.5"
            style={{ boxShadow: '0 4px 12px rgba(245,166,35,0.3)' }}
          >
            Encomendar
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled || menuOpen ? 'text-charcoal' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 flex flex-col px-6 pt-8 pb-16" role="dialog" aria-modal="true" aria-label="Menu de navegação">
          <ul className="flex flex-col gap-2" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block py-4 text-xl font-display font-semibold border-b border-honey-light transition-colors ${
                      active ? 'text-honey' : 'text-charcoal hover:text-honey'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-8">
            <Link
              href="/contacto"
              className="block w-full text-center py-4 rounded-full bg-honey text-dark font-semibold text-lg hover:bg-honey-dark transition-colors"
            >
              Encomendar
            </Link>
          </div>
          <div className="mt-auto text-mid text-sm text-center">
            <p>geral@hivebox.pt</p>
            <p>+351 919 458 298</p>
          </div>
        </div>
      )}
    </header>
  );
}

function HexLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <polygon points="16,2 30,9 30,23 16,30 2,23 2,9" fill="#F5A623" />
      <text x="16" y="21" textAnchor="middle" fill="#1A1A0E" fontSize="14" fontWeight="bold" fontFamily="serif">H</text>
    </svg>
  );
}