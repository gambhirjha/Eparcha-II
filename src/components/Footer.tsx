'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const footerLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Doctor Registration', href: '/contact#doctors' },
  { label: 'Partner With Us', href: '/contact#partners' },
  { label: 'Privacy Policy', href: '/contact#privacy' },
  { label: 'Terms', href: '/contact#terms' },
];

export default function Footer() {
  const [year, setYear] = useState('2026');

  useEffect(() => {
    setYear(new Date()?.getFullYear()?.toString());
  }, []);

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <AppLogo size={32} />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-primary tracking-tight leading-none">
                  EPARCHA
                </span>
                <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase border border-border rounded px-1 py-0.5">
                  Est. 2026
                </span>
              </div>
              <span className="text-xs text-muted-foreground">Your Health, Our Priority.</span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {footerLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { label: 'Twitter/X', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
              { label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
            ]?.map((social) => (
              <a
                key={social?.label}
                href="#"
                aria-label={social?.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d={social?.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} EPARCHA Pvt. Ltd. All rights reserved. Made with care in India.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
            <span className="text-xs font-medium text-accent">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}