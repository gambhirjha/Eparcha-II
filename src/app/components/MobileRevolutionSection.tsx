import React from 'react';
import AppImage from '@/components/ui/AppImage';

const highlights = [
{
  stat: '200+',
  label: 'Mobile Units Deployed',
  desc: 'Across 15 states and counting'
},
{
  stat: '500+',
  label: 'Villages Reached',
  desc: 'Bringing care to underserved India'
},
{
  stat: '3L+',
  label: 'Rural Patients Served',
  desc: 'Free screenings and consultations'
}];


export default function MobileRevolutionSection() {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div
            className="relative animate-on-scroll opacity-100 animate-float"
            style={{ animation: 'animationIn 0.9s ease-out both' }}>
            
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-accent/10 blur-2xl pointer-events-none" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border image-zoom">
              <AppImage
                src="/assets/images/mobile-unit.png"
                alt="Mobile healthcare van parked in rural Indian village, people gathered outside in daylight"
                width={600}
                height={420}
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="card-glass rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider">Mobile Unit EP-MOB-12 — Active</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Currently serving: Patna Rural Cluster, Bihar</div>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -right-4 top-8 card-glass rounded-2xl p-4 shadow-lg border border-border animate-float-delay hidden md:block">
              <div className="text-2xl font-extrabold text-primary">200+</div>
              <div className="text-xs text-muted-foreground font-medium">Mobile Units</div>
              <div className="text-xs text-accent font-semibold">Across India</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.9s ease-out 0.2s both' }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-bold tracking-widest text-primary uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Mobile Healthcare Revolution
            </span>

            <h2 className="text-section-title font-extrabold text-foreground tracking-tight mb-5">
              Healthcare That
              <span className="text-gradient-primary block">Comes to You</span>
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              EPARCHA&apos;s fleet of fully-equipped mobile healthcare units are transforming healthcare delivery in India&apos;s most underserved communities — from remote villages to urban slums. Each unit carries diagnostic equipment, medicines, and trained healthcare professionals.
            </p>

            <div className="space-y-4 mb-10">
              {[
              'Diagnostic equipment: ECG, ultrasound, blood testing',
              'Telemedicine link to specialist doctors',
              'Vaccination and preventive health programs',
              'Maternal and child health services',
              'Free consultations for BPL cardholders']?.
              map((point) =>
              <div key={point} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-foreground font-medium">{point}</span>
                </div>
              )}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              {highlights?.map((h) =>
              <div key={h?.label} className="text-center">
                  <div className="text-2xl font-extrabold text-primary">{h?.stat}</div>
                  <div className="text-xs font-bold text-foreground mt-1">{h?.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{h?.desc}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}