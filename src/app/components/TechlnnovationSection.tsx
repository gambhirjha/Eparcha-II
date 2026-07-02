import React from 'react';

const techFeatures = [
  {
    id: '01',
    title: 'AI-Enabled Healthcare',
    desc: 'Machine learning models for symptom analysis, risk prediction, and personalized treatment recommendations.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Smart Appointment System',
    desc: 'AI-optimized scheduling that reduces wait times by 60% and matches patients to the right specialist.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Secure Health Records',
    desc: 'Blockchain-backed digital health locker. Your data is encrypted, portable, and always under your control.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Emergency Response Tech',
    desc: 'Predictive dispatch algorithms and IoT-connected ambulances ensure optimal routing and response times.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: '05',
    title: 'Healthcare Analytics',
    desc: 'Population health insights for hospitals and government bodies to identify trends and allocate resources.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: '06',
    title: 'Interoperability Layer',
    desc: 'ABDM-compliant APIs connecting EPARCHA with government health systems, insurance, and private hospitals.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function TechInnovationSection() {
  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,194,209,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,209,0.03) 1px, transparent 1px)',
          backgroundSize: '6rem 6rem',
        }}
      />
      {/* Beam lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-8 md:px-24 overflow-hidden">
        {[0, 1, 2]?.map((i) => (
          <div key={i} className="relative w-px h-full" style={{ background: 'rgba(0,194,209,0.04)' }}>
            <div className="animate-beam" style={{ animationDelay: `${i * 2.5}s` }} />
          </div>
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.8s ease-out both' }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-xs font-bold tracking-widest text-accent uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Technology & Innovation
          </span>
          <h2 className="text-section-title font-extrabold text-white tracking-tight mt-3">
            Built on Next-Generation
            <span className="block text-gradient-cyan">Healthcare Infrastructure</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-white/50">
            EPARCHA is not just a platform — it&apos;s the operating system for India&apos;s healthcare future.
          </p>
        </div>

        {/* Grid — 6 cards 3×2 */}
        {/* Row 1: AI, Smart Appt, Secure Records */}
        {/* Row 2: Emergency Tech, Analytics, Interop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techFeatures?.map((feature, i) => (
            <div
              key={feature?.id}
              className="spotlight-card card-glass-dark rounded-2xl p-7 group hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1 animate-on-scroll opacity-100"
              style={{ animation: `animationIn 0.7s ease-out ${i * 0.07}s both` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-400">
                  {feature?.icon}
                </div>
                <span className="text-[10px] font-mono text-white/20 tracking-widest">{feature?.id}</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2.5">{feature?.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{feature?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}