'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <AppLogo size={36} />
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-extrabold text-xl tracking-tight text-primary">
                  EPARCHA
                </span>
                <span className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase">
                  Est. 2026
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks?.map((link) => (
                <Link
                  key={link?.label}
                  href={link?.href}
                  className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link?.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/#emergency"
                className="text-sm font-bold text-emergency border border-emergency/30 bg-emergency/5 hover:bg-emergency hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                Emergency
              </Link>
              <Link
                href="/#book"
                className="text-sm font-bold text-primary-foreground bg-primary hover:bg-primary/90 px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg shadow-primary/20"
              >
                Book a Doctor
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${
                    menuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${
                    menuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col pt-20"
          onClick={handleLinkClick}
        >
          <nav className="flex flex-col px-8 gap-2 mt-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                onClick={handleLinkClick}
                className="text-2xl font-bold text-foreground hover:text-primary py-3 border-b border-border transition-colors"
              >
                {link?.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/#emergency"
                onClick={handleLinkClick}
                className="text-center text-base font-bold text-emergency border-2 border-emergency/30 bg-emergency/5 hover:bg-emergency hover:text-white px-6 py-3.5 rounded-xl transition-all"
              >
                Emergency Ambulance
              </Link>
              <Link
                href="/#book"
                onClick={handleLinkClick}
                className="text-center text-base font-bold text-primary-foreground bg-primary hover:bg-primary/90 px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-primary/25"
              >
                Book a Doctor
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}