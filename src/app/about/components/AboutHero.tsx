import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 bg-gradient-hero grid-lines-overlay overflow-hidden">
      {/* Atmospheric blobs */}
      <div
        className="absolute top-1/3 -right-40 w-96 h-96 rounded-full opacity-15 animate-pulse-slow pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00C2D1 0%, transparent 70%)' }} />
      
      <div
        className="absolute bottom-0 -left-20 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0A3D91 0%, transparent 70%)' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.9s ease-out both' }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-bold tracking-widest text-primary uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              About EPARCHA
            </span>
            <h1 className="text-hero-xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
              We Are Building
              <span className="text-gradient-primary block">Healthcare&apos;s Future</span>
              for 1.4 Billion Indians
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
              EPARCHA Pvt. Ltd. was founded with a singular mission: to eliminate the barriers between Indians and quality healthcare. We are a healthcare technology company, but more than that — we are a movement to democratize health.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
              { value: 'Est. 2026', label: 'Founded' },
              { value: 'India', label: 'Headquartered' },
              { value: '50+ Cities', label: 'Presence' },
              { value: '₹12L Cr', label: 'Market Opportunity' }]?.
              map((item) =>
              <div key={item?.label} className="px-5 py-3 rounded-xl bg-white border border-border shadow-sm text-center min-w-[100px]">
                  <div className="text-base font-extrabold text-primary">{item?.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{item?.label}</div>
                </div>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="relative animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.9s ease-out 0.2s both' }}>
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 image-zoom border border-border">
              <AppImage
                src="/assets/Image/about-team.png"
                alt="Diverse Indian healthcare team — doctors and nurses in modern hospital corridor, bright natural light"
                width={600}
                height={400}
                className="w-full h-72 md:h-96 object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}