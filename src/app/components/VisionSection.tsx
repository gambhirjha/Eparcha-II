'use client';

import React, { useEffect, useRef } from 'react';

const words = [
  { text: 'Healthcare', italic: false },
  { text: 'without', italic: false },
  { text: 'barriers', italic: true, color: true },
  { text: '—', italic: false },
  { text: 'reaching', italic: false },
  { text: 'every', italic: false },
  { text: 'patient', italic: true, color: true },
  { text: 'in', italic: false },
  { text: 'urban', italic: false },
  { text: 'Mumbai', italic: false },
  { text: 'and', italic: false },
  { text: 'rural', italic: false },
  { text: 'Bihar,', italic: false },
  { text: 'through', italic: false },
  { text: 'one', italic: false },
  { text: 'connected', italic: true, color: true },
  { text: 'ecosystem.', italic: false },
];

export default function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;
      const startReveal = winH * 0.9;
      const endReveal = winH * 0.2;
      const progress = Math.max(0, Math.min(1, (startReveal - rect.top) / (startReveal - endReveal)));
      const activeCount = Math.floor(progress * words.length);
      wordRefs.current.forEach((w, i) => {
        if (!w) return;
        if (i < activeCount) w.classList.add('active');
        else w.classList.remove('active');
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white border-y border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-lines-overlay opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-accent uppercase mb-3">
            Our Vision
          </span>
          <div className="w-12 h-0.5 bg-accent mx-auto" />
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center text-foreground">
          {words.map((word, i) => (
            <React.Fragment key={i}>
              <span
                ref={(el) => { wordRefs.current[i] = el; }}
                className={`reveal-word inline-block mx-1 ${
                  word.italic ? 'italic' : ''
                } ${word.color ? 'text-gradient-primary' : ''}`}
              >
                {word.text}
              </span>
              {' '}
            </React.Fragment>
          ))}
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: '1.4B',
              label: 'Indians Deserve Access',
              desc: 'Quality healthcare for every citizen, regardless of geography or income.',
            },
            {
              number: '70%',
              label: 'Live in Rural India',
              desc: 'Our mobile units and telehealth bridge the urban-rural healthcare divide.',
            },
            {
              number: '∞',
              label: 'Potential for Impact',
              desc: 'Building the infrastructure layer for India\'s healthcare for the next 50 years.',
            },
          ].map((item) => (
            <div key={item.label} className="text-center p-6 rounded-2xl bg-muted/50 border border-border">
              <div className="text-4xl font-extrabold text-gradient-primary mb-2">{item.number}</div>
              <div className="text-sm font-bold text-foreground mb-2">{item.label}</div>
              <div className="text-sm text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}