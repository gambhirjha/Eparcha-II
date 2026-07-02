import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero grid-lines-overlay pt-20">
      
      {/* Atmospheric blobs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 animate-pulse-slow pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00C2D1 0%, transparent 70%)' }} />
      
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-15 animate-pulse-slow pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0A3D91 0%, transparent 70%)', animationDelay: '2s' }} />
      
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,209,0.08) 0%, transparent 65%)' }} />
      
      {/* Beam lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-8 md:px-24 overflow-hidden">
        {[0, 1, 2]?.map((i) =>
        <div key={i} className="relative w-px h-full" style={{ background: 'rgba(10,61,145,0.05)' }}>
            <div
            className="animate-beam"
            style={{ animationDelay: `${i * 2.5}s` }} />
          
          </div>
        )}
      </div>
      {/* Decorative side images */}
      <div className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 w-32 md:w-44 hidden lg:block animate-on-scroll opacity-100"
      style={{ animation: 'animationIn 1.4s ease-out 0.4s both' }}>
        <div className="rounded-2xl overflow-hidden border border-border shadow-xl shadow-primary/10 image-zoom">
          <AppImage
            src="/assets/images/verified-doctors.png"
            alt="Indian doctor in white coat consulting patient in bright clinic"
            width={176}
            height={240}
            className="w-full h-48 object-cover"
          />
        </div>
        <span className="block mt-3 text-[9px] uppercase tracking-[0.35em] text-muted-foreground text-center">
          Verified Doctors
        </span>
      </div>
      <div className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 w-32 md:w-44 hidden lg:block animate-on-scroll opacity-100"
      style={{ animation: 'animationIn 1.4s ease-out 0.6s both' }}>
        <div className="rounded-2xl overflow-hidden border border-border shadow-xl shadow-accent/10 image-zoom">
          <AppImage
            src="/assets/images/ambulance-24-7.png"
            alt="Modern ambulance vehicle on bright urban Indian road, daytime"
            width={176}
            height={240}
            className="w-full h-48 object-cover"
          />
        </div>
        <span className="block mt-3 text-[9px] uppercase tracking-[0.35em] text-muted-foreground text-center">
          24/7 Ambulance
        </span>
      </div>
      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8 animate-on-scroll opacity-100"
          style={{ animation: 'animationIn 0.9s ease-out 0.1s both' }}>
          
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            India&apos;s Healthcare Future — Est. 2026
          </span>
        </div>

        {/* Headline */}
        <div
          className="animate-on-scroll opacity-100 mb-6"
          style={{ animation: 'animationIn 1s ease-out 0.2s both' }}>
          
          <h1 className="text-hero-2xl font-extrabold leading-[1.0] text-foreground tracking-tight">
            India&apos;s Next
            <span className="block text-gradient-primary">Healthcare</span>
            <span className="block">Revolution</span>
            <span className="block text-hero-xl font-light italic text-accent leading-tight">
              Starts Here
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <p
          className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed mb-10 animate-on-scroll opacity-100"
          style={{ animation: 'animationIn 0.9s ease-out 0.4s both' }}>
          
          Connecting Patients, Doctors, Hospitals, Pharmacies, Laboratories, Ambulances, and Home Healthcare Services Through One Intelligent Platform.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll opacity-100"
          style={{ animation: 'animationIn 0.9s ease-out 0.55s both' }}
          id="book">
          
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 text-sm">
            
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Book a Doctor
          </Link>

          <Link
            href="#emergency"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-emergency border-2 border-emergency/30 bg-emergency/5 hover:bg-emergency hover:text-white transition-all duration-300 hover:-translate-y-0.5 text-sm emergency-pulse">
            
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Request Ambulance
          </Link>

          <Link
            href="/contact#doctors"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-primary border border-primary/30 bg-white hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 text-sm">
            
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Join as a Doctor
          </Link>
        </div>

        {/* Trust micro-stats */}
        <div
          className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10 animate-on-scroll opacity-100"
          style={{ animation: 'animationIn 0.9s ease-out 0.7s both' }}>
          
          {[
          { value: '10K+', label: 'Doctors' },
          { value: '50+', label: 'Cities' },
          { value: '24/7', label: 'Emergency' },
          { value: '1L+', label: 'Patients' }]?.
          map((stat) =>
          <div key={stat?.label} className="text-center">
              <div className="text-xl font-extrabold text-primary">{stat?.value}</div>
              <div className="text-xs text-muted-foreground font-medium mt-0.5">{stat?.label}</div>
            </div>
          )}
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float opacity-60">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>);

}