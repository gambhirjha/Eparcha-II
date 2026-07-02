import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const services = [
{
  id: '01',
  title: 'Doctor Consultations',
  desc: 'Book in-clinic appointments with verified specialists across 20+ disciplines. Same-day slots available.',
  img: "/assets/images/doctor-consultations.png",
  alt: 'Indian doctor in white coat at bright consultation desk',
  accent: 'text-primary',
  bg: 'bg-secondary'
},
{
  id: '02',
  title: 'Video Consultation',
  desc: 'Connect with top doctors from the comfort of home via HD video, audio, or chat — in minutes.',
  img: "/assets/images/video-consultation.png",
  alt: 'Person on video call with doctor on laptop in well-lit home',
  accent: 'text-accent',
  bg: 'bg-cyan-50'
},
{
  id: '03',
  title: 'Digital Medical Records',
  desc: 'Your complete health history — prescriptions, reports, and diagnoses — securely stored and accessible anywhere.',
  img: "/assets/images/digital-records.png",
  alt: 'Doctor reviewing digital health records on tablet in bright office',
  accent: 'text-primary',
  bg: 'bg-blue-50'
},
{
  id: '04',
  title: 'Pharmacy Services',
  desc: 'Order genuine medicines online with fast home delivery. Prescription upload, refills, and generic alternatives.',
  img: "/assets/images/pharmacy.png",
  alt: 'Pharmacist in modern pharmacy handing medicine to customer',
  accent: 'text-emerald-600',
  bg: 'bg-emerald-50'
},
{
  id: '05',
  title: 'Laboratory Tests',
  desc: 'Book 500+ diagnostic tests with home sample collection. Results in 24–48 hours, shared digitally.',
  img: "/assets/images/laboratory.png",
  alt: 'Lab technician in clean laboratory analyzing blood sample',
  accent: 'text-purple-600',
  bg: 'bg-purple-50'
},
{
  id: '06',
  title: 'Ambulance Services',
  desc: 'On-demand ambulance dispatch with GPS tracking. ALS and BLS units, trained paramedics on board.',
  img: "/assets/images/ambulance-services.png",
  alt: 'Emergency ambulance with flashing lights on Indian city road',
  accent: 'text-emergency',
  bg: 'bg-red-50'
},
{
  id: '07',
  title: 'Mobile Ambulance Units',
  desc: 'Fully-equipped mobile healthcare vans reaching rural and underserved communities across India.',
  img: "/assets/images/mobile-ambulance.png",
  alt: 'Mobile healthcare van in rural Indian village setting',
  accent: 'text-orange-600',
  bg: 'bg-orange-50'
},
{
  id: '08',
  title: 'Nurse at Home',
  desc: 'Certified nurses for wound care, IV therapy, injections, and post-surgical monitoring at your home.',
  img: "/assets/images/nurse-at-home.png",
  alt: 'Nurse in uniform providing home care to elderly patient in bright room',
  accent: 'text-pink-600',
  bg: 'bg-pink-50'
},
{
  id: '09',
  title: 'Elderly Care',
  desc: 'Dedicated caregivers for senior citizens — daily assistance, medication management, and companionship.',
  img: "/assets/images/elderly-care-service.png",
  alt: 'Caregiver holding hands with smiling elderly person in warm home',
  accent: 'text-teal-600',
  bg: 'bg-teal-50'
}];


export default function EcosystemSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.8s ease-out both' }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/8 text-xs font-bold tracking-widest text-accent uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Complete Healthcare Ecosystem
          </span>
          <h2 className="text-section-title font-extrabold text-foreground tracking-tight mt-3">
            Every Healthcare Service,
            <span className="text-gradient-primary block">One Intelligent Platform</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground">
            From booking a specialist to emergency ambulance dispatch — EPARCHA covers every healthcare need for you and your family.
          </p>
        </div>

        {/* Grid — 9 cards, 3 cols */}
        {/* Row 1: Doctor, Video, Records */}
        {/* Row 2: Pharmacy, Lab, Ambulance */}
        {/* Row 3: MobileAmb, Nurse, Elderly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map((service, i) =>
          <div
            key={service?.id}
            className="spotlight-card group bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/8 transition-all duration-500 hover:-translate-y-1 animate-on-scroll opacity-100"
            style={{ animation: `animationIn 0.7s ease-out ${0.05 + i * 0.06}s both` }}>
            
              <div className="image-zoom h-44 w-full bg-muted">
                <AppImage
                src={service?.img}
                alt={service?.alt}
                width={400}
                height={176}
                className="w-full h-full object-cover" />
              
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-mono font-bold tracking-widest ${service?.accent} opacity-60`}>
                    {service?.id}
                  </span>
                  <div className={`w-7 h-7 rounded-lg ${service?.bg} flex items-center justify-center`}>
                    <span className={`text-xs font-black ${service?.accent}`}>→</span>
                  </div>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{service?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service?.desc}</p>
                <Link
                href="/contact"
                className={`inline-flex items-center gap-1.5 mt-4 text-xs font-bold ${service?.accent} hover:opacity-70 transition-opacity`}>
                
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}