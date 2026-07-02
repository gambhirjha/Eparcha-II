import React from 'react';

const values = [
  {
    title: 'Accessibility',
    desc: 'Healthcare is a right, not a privilege. We build for every Indian — urban and rural, rich and poor.',
    icon: '🌍',
  },
  {
    title: 'Trust',
    desc: 'Every doctor is verified, every medicine is genuine, every data point is secured. Trust is non-negotiable.',
    icon: '🛡️',
  },
  {
    title: 'Speed',
    desc: 'In healthcare, seconds matter. Our systems are built for instant response, especially in emergencies.',
    icon: '⚡',
  },
  {
    title: 'Innovation',
    desc: 'We use AI, IoT, and data science not for show — but to solve real healthcare problems at scale.',
    icon: '🔬',
  },
  {
    title: 'Compassion',
    desc: 'Technology is our tool, but compassion is our core. We build with empathy for patients and caregivers.',
    icon: '❤️',
  },
  {
    title: 'Impact',
    desc: 'Every feature we build, every partner we add, every ambulance we dispatch — is measured by lives improved.',
    icon: '📈',
  },
];

export default function MissionValues() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="p-8 rounded-2xl bg-primary text-white animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.8s ease-out both' }}>
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-xs font-bold text-white/60 uppercase tracking-widest mb-3">Our Mission</div>
            <h3 className="text-xl font-extrabold mb-3">Quality healthcare for every Indian</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              To make quality healthcare accessible, connected, and affordable for every individual — regardless of geography, income, or circumstance.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-accent/10 border border-accent/20 animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Our Vision</div>
            <h3 className="text-xl font-extrabold text-foreground mb-3">India&apos;s most trusted healthcare ecosystem</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To become India&apos;s most trusted integrated healthcare ecosystem — the single platform every Indian turns to for all their health needs.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-10 animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.8s ease-out both' }}>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {values?.map((value, i) => (
            <div
              key={value?.title}
              className="p-6 rounded-2xl bg-muted/50 border border-border hover:border-primary/20 hover:bg-secondary transition-all duration-300 animate-on-scroll opacity-100"
              style={{ animation: `animationIn 0.7s ease-out ${i * 0.07}s both` }}
            >
              <div className="text-2xl mb-3">{value?.icon}</div>
              <h3 className="text-sm font-bold text-foreground mb-2">{value?.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{value?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}