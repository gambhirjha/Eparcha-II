import React from 'react';
import AppImage from '@/components/ui/AppImage';

const team = [
{
  name: 'Dr. Arjun Mehta',
  role: 'Founder & CEO',
  bio: 'MBBS, MBA. 15 years in healthcare operations. Former medical director at a leading hospital chain in Maharashtra.',
  img: "/assets/images/team/dr-arjun-mehta.png",
  alt: 'Indian male doctor in formal suit, professional headshot, neutral background'
},
{
  name: 'Priya Nair',
  role: 'Co-Founder & CTO',
  bio: 'IIT Bombay alumna. 12 years in healthtech engineering. Built India\'s first ABDM-integrated telehealth platform.',
  img: "/assets/images/team/priya-nair.png",
  alt: 'Indian woman in professional attire, confident smile, office background'
},
{
  name: 'Rajesh Kumar',
  role: 'Chief Operations Officer',
  bio: 'Former VP at a pan-India ambulance network. Scaled emergency services across 30 cities in 3 years.',
  img: "/assets/images/team/rajesh-kumar.png",
  alt: 'Indian man in business casual, professional headshot, light background'
},
{
  name: 'Dr. Sunita Sharma',
  role: 'Chief Medical Officer',
  bio: 'MD Internal Medicine, AIIMS Delhi. Leads clinical quality, doctor verification, and medical protocol design.',
  img: "/assets/images/team/dr-sunita-sharma.png",
  alt: 'Indian female doctor in white coat, warm smile, clinic background'
},
{
  name: 'Aditya Bansal',
  role: 'VP — Business Development',
  bio: 'Former McKinsey healthcare consultant. Leads hospital partnerships, investor relations, and government engagement.',
  img: "/assets/images/team/aditya-bansal.png",
  alt: 'Young Indian professional in suit, confident expression, corporate background'
},
{
  name: 'Meena Krishnamurthy',
  role: 'Head of Home Healthcare',
  bio: 'MSc Nursing, 18 years clinical experience. Designed EPARCHA\'s home care protocols and caregiver training program.',
  img: "/assets/images/team/kavya-verma.png",
  alt: 'Indian woman in healthcare professional attire, warm expression, bright background'
}];


export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.8s ease-out both' }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/8 text-xs font-bold tracking-widest text-accent uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Leadership Team
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-3">
            Driven by Experts,
            <span className="text-gradient-primary"> Guided by Purpose</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-muted-foreground">
            Our leadership combines deep healthcare expertise with world-class technology and business acumen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team?.map((member, i) =>
          <div
            key={member?.name}
            className="group rounded-2xl border border-border bg-white overflow-hidden hover:shadow-xl hover:shadow-primary/8 transition-all duration-500 hover:-translate-y-1 animate-on-scroll opacity-100"
            style={{ animation: `animationIn 0.7s ease-out ${i * 0.08}s both` }}>
            
              <div className="image-zoom h-52 bg-muted">
                <AppImage
                src={member?.img}
                alt={member?.alt}
                width={400}
                height={208}
                className="w-full h-full object-cover object-top" />
              
              </div>
              <div className="p-5">
                <h3 className="text-base font-extrabold text-foreground">{member?.name}</h3>
                <div className="text-xs font-bold text-primary mt-0.5 mb-3">{member?.role}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{member?.bio}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}