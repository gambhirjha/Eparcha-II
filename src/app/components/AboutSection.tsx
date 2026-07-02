import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { CheckIcon, EyeIcon, HeartIcon, VerifiedIcon } from '@/components/ui/Icons';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.9s ease-out both' }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-bold tracking-widest text-primary uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              About EPARCHA
            </span>

            <h2 className="text-section-title font-extrabold text-foreground tracking-tight mb-5">
              Building India&apos;s
              <span className="text-gradient-primary block">Healthcare OS</span>
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              EPARCHA Pvt. Ltd. is a healthcare technology company headquartered in India, building the country&apos;s most comprehensive integrated healthcare ecosystem. We are not just a doctor-booking app — we are the infrastructure layer connecting every stakeholder in India&apos;s healthcare value chain.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              From a patient in a Mumbai apartment booking a specialist, to a family in rural Bihar receiving care from a mobile unit — EPARCHA serves every Indian, everywhere.
            </p>

            {/* Mission / Vision */}
            <div className="space-y-4 mb-10">
              <div className="p-5 rounded-2xl bg-secondary border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
                    <CheckIcon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Mission</span>
                </div>
                <p className="text-sm text-foreground font-medium">
                  To make quality healthcare accessible, connected, and affordable for every individual across India.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-cyan-50 border border-accent/15">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center">
                    <EyeIcon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">Vision</span>
                </div>
                <p className="text-sm text-foreground font-medium">
                  To become India&apos;s most trusted integrated healthcare ecosystem — connecting patients to care, instantly.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image + floating cards */}
          <div className="relative animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.9s ease-out 0.2s both' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 image-zoom border border-border">
              <AppImage
                src="/assets/Image/about-hero.png"
                alt="Healthcare team in India — doctor, nurse, and patient in bright modern hospital"
                width={600}
                height={480}
                className="w-full h-80 md:h-[420px] object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>

            {/* Floating card 1 */}
            <div className="absolute -bottom-6 -left-4 card-glass rounded-2xl p-4 shadow-xl border border-border animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <HeartIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-foreground">1 Lakh+</div>
                  <div className="text-xs text-muted-foreground">Patients Served</div>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -top-4 -right-4 card-glass rounded-2xl p-4 shadow-xl border border-border animate-float-delay hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                  <VerifiedIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-foreground">ABDM</div>
                  <div className="text-xs text-muted-foreground">Compliant Platform</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}