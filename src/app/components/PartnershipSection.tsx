import React from 'react';
import Link from 'next/link';

const partners = [
  {
    title: 'Hospitals & Clinics',
    desc: 'Expand your patient reach, streamline appointments, and integrate your EMR with EPARCHA.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'bg-blue-50 text-primary border-blue-200',
    cta: 'Partner as Hospital',
  },
  {
    title: 'Doctors & Specialists',
    desc: 'Grow your digital practice with verified profile, telemedicine tools, and 1L+ patient network.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: 'bg-cyan-50 text-accent border-cyan-200',
    cta: 'Register as Doctor',
  },
  {
    title: 'Ambulance Providers',
    desc: 'Join our emergency network, increase fleet utilization, and get priority dispatch for your units.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'bg-red-50 text-emergency border-red-200',
    cta: 'Join Ambulance Network',
  },
  {
    title: 'Laboratories',
    desc: 'Get test bookings, manage sample collection, and deliver results digitally via EPARCHA.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: 'bg-purple-50 text-purple-600 border-purple-200',
    cta: 'List Your Lab',
  },
  {
    title: 'Pharmacies',
    desc: 'Reach millions of prescription customers. Integrate your inventory for seamless medicine delivery.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    cta: 'List Your Pharmacy',
  },
  {
    title: 'Investors',
    desc: 'India\'s healthcare market is ₹12L Cr. EPARCHA is building the digital infrastructure for all of it.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: 'bg-amber-50 text-amber-600 border-amber-200',
    cta: 'Investor Relations',
  },
];

export default function PartnershipSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.8s ease-out both' }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-bold tracking-widest text-primary uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Partnership
          </span>
          <h2 className="text-section-title font-extrabold text-foreground tracking-tight mt-3">
            Build the Future of Healthcare
            <span className="text-gradient-primary block">Together</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-muted-foreground">
            Whether you&apos;re a hospital, doctor, lab, or investor — there&apos;s a place for you in India&apos;s most ambitious healthcare ecosystem.
          </p>
        </div>

        {/* Partner cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners?.map((partner, i) => (
            <div
              key={partner?.title}
              className={`group rounded-2xl border ${partner?.color} bg-white p-7 hover:shadow-lg transition-all duration-400 hover:-translate-y-1 animate-on-scroll opacity-100`}
              style={{ animation: `animationIn 0.7s ease-out ${i * 0.07}s both` }}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border ${partner?.color} group-hover:scale-110 transition-transform duration-300`}>
                {partner?.icon}
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{partner?.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{partner?.desc}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-colors"
              >
                {partner?.cta}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}