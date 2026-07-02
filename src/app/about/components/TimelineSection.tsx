import React from 'react';

const milestones = [
  {
    year: '2026',
    quarter: 'Q1',
    title: 'EPARCHA Founded',
    desc: 'Incorporated in India with a vision to build the country\'s most comprehensive healthcare ecosystem.',
  },
  {
    year: '2026',
    quarter: 'Q2',
    title: 'Platform Development Begins',
    desc: 'Core team assembled. Doctor appointment, telemedicine, and digital records modules under development.',
  },
  {
    year: '2026',
    quarter: 'Q3',
    title: 'Ambulance Network Launch',
    desc: 'First 50 ambulance units onboarded across 5 cities. Emergency dispatch system goes live.',
  },
  {
    year: '2026',
    quarter: 'Q4',
    title: 'Home Healthcare Rollout',
    desc: 'Nurse-at-home, elderly care, and post-surgical care services launched in Mumbai, Delhi, Bengaluru.',
  },
  {
    year: '2027',
    quarter: 'Q1',
    title: 'Mobile Unit Program',
    desc: '50 mobile healthcare vans deployed across rural Maharashtra, UP, and Bihar.',
  },
  {
    year: '2027',
    quarter: 'Q2',
    title: 'Lab & Pharmacy Integration',
    desc: '300+ labs and 1500+ pharmacies integrated. Home sample collection available in 30 cities.',
  },
  {
    year: '2027',
    quarter: 'Q3',
    title: 'AI Health Intelligence Layer',
    desc: 'AI-powered symptom checker, risk scoring, and predictive health analytics launched for 1L+ users.',
  },
  {
    year: '2027',
    quarter: 'Q4',
    title: 'National Expansion',
    desc: 'Platform live in 50+ cities. 10,000+ verified doctors, 500+ ambulances, and growing.',
  },
];

export default function TimelineSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.8s ease-out both' }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-bold tracking-widest text-primary uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Our Journey
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-3">
            From Vision to
            <span className="text-gradient-primary"> National Platform</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-10">
            {milestones?.map((milestone, i) => (
              <div
                key={`${milestone?.year}-${milestone?.quarter}`}
                className={`relative flex items-start gap-6 md:gap-0 animate-on-scroll opacity-100 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animation: `animationIn 0.7s ease-out ${i * 0.08}s both` }}
              >
                {/* Content */}
                <div className={`flex-1 pl-14 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-xs font-bold text-primary bg-primary/8 px-2.5 py-1 rounded-full">
                        {milestone?.year} {milestone?.quarter}
                      </span>
                    </div>
                    <h3 className="text-sm font-extrabold text-foreground mb-1.5">{milestone?.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{milestone?.desc}</p>
                  </div>
                </div>

                {/* Dot — desktop center, mobile left */}
                <div className="absolute left-4 md:left-1/2 top-5 w-4 h-4 rounded-full bg-primary border-2 border-white shadow-md md:-translate-x-2 z-10" />

                {/* Spacer for opposite side on desktop */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}