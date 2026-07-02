import React from 'react';

export default function ContactHero() {
  return (
    <section className="relative pt-28 pb-14 bg-gradient-hero grid-lines-overlay overflow-hidden">
      <div
        className="absolute top-1/2 right-0 w-72 h-72 rounded-full opacity-15 pointer-events-none animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, #00C2D1 0%, transparent 70%)', transform: 'translate(30%, -50%)' }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className="animate-on-scroll opacity-100"
          style={{ animation: 'animationIn 0.9s ease-out both' }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-bold tracking-widest text-primary uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Get in Touch
          </span>
          <h1 className="text-hero-xl font-extrabold text-foreground tracking-tight mb-5">
            Connect with
            <span className="text-gradient-primary block">EPARCHA</span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re a patient, doctor, hospital, investor, or partner — we&apos;d love to hear from you. Choose the right channel below.
          </p>
        </div>
      </div>
    </section>
  );
}