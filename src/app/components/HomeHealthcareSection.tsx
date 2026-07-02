import React from 'react';
import AppImage from '@/components/ui/AppImage';

const homeServices = [
{
  title: 'Nursing Care',
  desc: 'Certified nurses for wound dressing, IV administration, catheter care, and daily medical support.',
  img: "/assets/images/nursing-care.png",
  alt: 'Nurse in uniform providing home nursing care to patient in bright bedroom',
  color: 'from-pink-500/10 to-pink-500/5',
  border: 'border-pink-200'
},
{
  title: 'Elderly Care',
  desc: 'Trained caregivers providing companionship, medication reminders, mobility support, and daily hygiene assistance.',
  img: "/assets/images/elderly-care.png",
  alt: 'Caregiver assisting smiling elderly woman at home in warm afternoon light',
  color: 'from-teal-500/10 to-teal-500/5',
  border: 'border-teal-200'
},
{
  title: 'Post Surgery Care',
  desc: 'Specialized post-operative care including physiotherapy, wound management, and recovery monitoring.',
  img: "/assets/images/physical-therapy.png",
  alt: 'Medical professional checking patient recovery at home in bright clinical setting',
  color: 'from-blue-500/10 to-blue-500/5',
  border: 'border-blue-200'
},
{
  title: 'Home Monitoring',
  desc: 'Regular vital checks including BP, blood sugar, SpO2, and ECG monitoring by trained technicians.',
  img: "/assets/images/home-monitoring.png",
  alt: 'Technician using medical monitoring device on patient at home',
  color: 'from-purple-500/10 to-purple-500/5',
  border: 'border-purple-200'
},
{
  title: 'Medical Assistance',
  desc: 'On-call medical assistance at home — injections, dressings, physiotherapy, and palliative support.',
  img: "/assets/images/medical-assistance.png",
  alt: 'Medical assistant providing home treatment to patient in comfortable home environment',
  color: 'from-orange-500/10 to-orange-500/5',
  border: 'border-orange-200'
}];


export default function HomeHealthcareSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <div className="animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.8s ease-out both' }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/8 text-xs font-bold tracking-widest text-accent uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Home Healthcare
            </span>
            <h2 className="text-section-title font-extrabold text-foreground tracking-tight mt-3">
              Hospital-Quality Care,
              <span className="text-gradient-primary block">Delivered Home</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.8s ease-out 0.15s both' }}>
            Skip the commute. Our trained healthcare professionals bring clinical-grade services to your doorstep — safe, affordable, and available across 50+ cities.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeServices?.map((service, i) =>
          <div
            key={service?.title}
            className={`group rounded-2xl border ${service?.border} bg-gradient-to-br ${service?.color} overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-on-scroll opacity-100`}
            style={{ animation: `animationIn 0.7s ease-out ${i * 0.08}s both` }}>
            
              <div className="image-zoom h-44">
                <AppImage
                src={service?.img}
                alt={service?.alt}
                width={400}
                height={176}
                className="w-full h-full object-cover" />
              
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-foreground mb-2">{service?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service?.desc}</p>
              </div>
            </div>
          )}

          {/* CTA card — fills last slot in row */}
          <div className="rounded-2xl border border-primary/20 bg-primary flex flex-col items-center justify-center p-8 text-center hover:shadow-xl hover:shadow-primary/25 transition-all duration-500 hover:-translate-y-1 animate-on-scroll opacity-100"
          style={{ animation: 'animationIn 0.7s ease-out 0.4s both' }}>
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-lg font-extrabold text-white mb-2">Book Home Care</h3>
            <p className="text-sm text-white/70 mb-5">Available in 50+ cities. Book in under 2 minutes.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-primary font-bold text-sm hover:bg-accent hover:text-white transition-all duration-300">
              
              Book Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>);

}