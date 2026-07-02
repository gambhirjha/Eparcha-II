'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Metric {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  color: string;
}

const metrics: Metric[] = [
  { value: 100000, suffix: '+', label: 'Patients Served', sublabel: 'Across India', color: 'text-primary' },
  { value: 10000, suffix: '+', label: 'Doctors Connected', sublabel: 'MCI Verified', color: 'text-accent' },
  { value: 500, suffix: '+', label: 'Ambulances Available', sublabel: 'ALS & BLS Units', color: 'text-emergency' },
  { value: 50, suffix: '+', label: 'Cities Covered', sublabel: 'Expanding Monthly', color: 'text-primary' },
  { value: 300, suffix: '+', label: 'Lab Partners', sublabel: 'NABL Accredited', color: 'text-accent' },
  { value: 1500, suffix: '+', label: 'Pharmacy Partners', sublabel: 'Genuine Medicines', color: 'text-emerald-500' },
];

function formatNumber(n: number): string {
  if (n >= 100000) return (n / 100000).toFixed(0) + 'L';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return n.toString();
}

function CounterItem({ metric, active }: { metric: Metric; active: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const end = metric.value;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setCurrent(start);
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [active, metric.value]);

  return (
    <div className="text-center p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
      <div className={`text-3xl md:text-4xl font-extrabold ${metric.color} mb-1`}>
        {formatNumber(current)}{metric.suffix}
      </div>
      <div className="text-sm font-bold text-foreground mb-1">{metric.label}</div>
      <div className="text-xs text-muted-foreground">{metric.sublabel}</div>
    </div>
  );
}

export default function ImpactMetricsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.8s ease-out both' }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-bold tracking-widest text-primary uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Our Impact
          </span>
          <h2 className="text-section-title font-extrabold text-foreground tracking-tight mt-3">
            Numbers That Define
            <span className="text-gradient-primary block">India&apos;s Healthcare Future</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-muted-foreground">
            Every metric represents a life touched, a barrier broken, and a step toward universal healthcare access.
          </p>
        </div>

        {/* Metrics grid — 6 cards, 3×2 */}
        {/* Row 1: Patients, Doctors, Ambulances */}
        {/* Row 2: Cities, Labs, Pharmacies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((metric) => (
            <CounterItem key={metric.label} metric={metric} active={active} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary to-accent/80 shadow-xl shadow-primary/20">
            <div className="text-white text-left">
              <div className="font-extrabold text-lg">Join the Healthcare Revolution</div>
              <div className="text-white/70 text-sm">Partner with EPARCHA — for hospitals, doctors, labs, and investors.</div>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-primary font-bold text-sm hover:bg-muted transition-colors"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}