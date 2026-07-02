import React from 'react';

const channels = [
  {
    title: 'Emergency Helpline',
    value: '1800-EPARCHA',
    sublabel: '24/7 Ambulance & Emergency',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: 'bg-red-50 text-emergency border-red-200',
    urgent: true,
  },
  {
    title: 'General Support',
    value: 'support@eparcha.in',
    sublabel: 'Mon–Sat, 8AM–8PM IST',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-blue-50 text-primary border-blue-200',
    urgent: false,
  },
  {
    title: 'Partnerships',
    value: 'partners@eparcha.in',
    sublabel: 'Hospitals, Labs, Pharmacies',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'bg-cyan-50 text-accent border-cyan-200',
    urgent: false,
  },
  {
    title: 'Investor Relations',
    value: 'investors@eparcha.in',
    sublabel: 'Funding & Strategic Partnerships',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: 'bg-amber-50 text-amber-600 border-amber-200',
    urgent: false,
  },
];

const offices = [
  {
    city: 'Mumbai (HQ)',
    address: 'Level 12, Bandra Kurla Complex, Mumbai, Maharashtra 400051',
    phone: '+91 22 4567 8900',
  },
  {
    city: 'Delhi NCR',
    address: 'Tower B, Cyber City, DLF Phase 2, Gurugram, Haryana 122002',
    phone: '+91 11 4567 8900',
  },
  {
    city: 'Bengaluru',
    address: '4th Floor, Prestige Tech Park, Outer Ring Road, Bengaluru 560103',
    phone: '+91 80 4567 8900',
  },
];

export default function ContactInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Channels */}
          <div className="animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.8s ease-out both' }}>
            <h2 className="text-xl font-extrabold text-foreground mb-6">Contact Channels</h2>
            <div className="space-y-4">
              {channels?.map((channel) => (
                <div
                  key={channel?.title}
                  className={`flex items-start gap-4 p-5 rounded-2xl border ${channel?.color} ${channel?.urgent ? 'ring-2 ring-emergency/20' : ''}`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border ${channel?.color}`}>
                    {channel?.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{channel?.title}</span>
                      {channel?.urgent && (
                        <span className="text-[10px] font-bold text-emergency bg-emergency/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          24/7
                        </span>
                      )}
                    </div>
                    <div className="text-base font-extrabold text-foreground mt-0.5 truncate">{channel?.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{channel?.sublabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Office Locations */}
          <div className="animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.8s ease-out 0.15s both' }}>
            <h2 className="text-xl font-extrabold text-foreground mb-6">Our Offices</h2>
            <div className="space-y-4">
              {offices?.map((office) => (
                <div key={office?.city} className="p-5 rounded-2xl border border-border bg-muted/30 hover:border-primary/20 hover:bg-secondary transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-foreground mb-1">{office?.city}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed mb-1.5">{office?.address}</div>
                      <div className="text-xs font-semibold text-primary">{office?.phone}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency box */}
            <div className="mt-6 p-5 rounded-2xl bg-gradient-dark border border-emergency/20 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emergency emergency-pulse" />
                <span className="text-xs font-bold text-emergency uppercase tracking-widest">Medical Emergency?</span>
              </div>
              <p className="text-sm text-white/70 mb-4">Do not fill a form — call our emergency line immediately.</p>
              <a
                href="tel:1800-372724"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-emergency hover:bg-red-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 1800-EPARCHA Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}