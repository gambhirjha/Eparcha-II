import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const features = [
{
  title: 'Instant Dispatch',
  desc: 'Ambulance dispatched in under 60 seconds from booking confirmation.',
  icon:
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>

},
{
  title: 'Real-Time GPS Tracking',
  desc: 'Track your ambulance live on the map. Share location with family instantly.',
  icon:
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>

},
{
  title: 'Emergency Coordination',
  desc: 'Direct hospital pre-notification so the ER team is ready before you arrive.',
  icon:
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>

},
{
  title: 'Fast Response Network',
  desc: 'Strategically positioned ambulances ensure average response time under 8 minutes.',
  icon:
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>

}];


export default function EmergencySection() {
  return (
    <section id="emergency" className="py-0 relative overflow-hidden bg-gradient-dark">
      {/* Atmospheric beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[0, 1, 2, 3]?.map((i) =>
        <div
          key={i}
          className="absolute w-px h-full"
          style={{
            left: `${20 + i * 20}%`,
            background: 'rgba(229,62,62,0.04)'
          }}>
          
            <div
            className="animate-beam"
            style={{
              animationDelay: `${i * 2}s`,
              background: 'linear-gradient(to bottom, transparent, rgba(229,62,62,0.4), transparent)'
            }} />
          
          </div>
        )}
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <div className="animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.9s ease-out both' }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emergency/20 border border-emergency/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-emergency emergency-pulse" />
                <span className="text-xs font-bold text-emergency uppercase tracking-widest">
                  Emergency Response
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Every
                <span className="block text-emergency">Second</span>
                Matters
              </h2>

              <p className="text-base text-white/60 leading-relaxed mb-10 max-w-lg">
                When emergencies strike, EPARCHA&apos;s rapid-response ambulance network ensures help reaches you faster than ever — fully equipped, GPS-tracked, and hospital-coordinated.
              </p>

              {/* Features */}
              <div className="space-y-5 mb-10">
                {features?.map((feature) =>
                <div key={feature?.title} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emergency/20 border border-emergency/20 flex items-center justify-center text-emergency group-hover:bg-emergency group-hover:text-white transition-all duration-300">
                      {feature?.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white mb-1">{feature?.title}</div>
                      <div className="text-sm text-white/50">{feature?.desc}</div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-emergency hover:bg-red-700 transition-all duration-300 shadow-lg shadow-emergency/40 hover:-translate-y-0.5 text-sm emergency-pulse">
                
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Request Ambulance Now
              </Link>
            </div>

            {/* Right image */}
            <div
              className="relative animate-on-scroll opacity-100 animate-float"
              style={{ animation: 'animationIn 0.9s ease-out 0.2s both' }}>
              
              <div className="absolute inset-0 rounded-3xl bg-emergency/20 blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-emergency/20 shadow-2xl shadow-emergency/20">
                <AppImage
                  src="/assets/images/emergency-ambulance.png"
                  alt="Emergency ambulance with red flashing lights at night, dark urban background"
                  width={600}
                  height={400}
                  className="w-full h-72 md:h-96 object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="card-glass-dark rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emergency emergency-pulse" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">LIVE — Ambulance En Route</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emergency rounded-full w-3/4" />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-white/50">
                      <span>ETA: 6 min</span>
                      <span>Unit: EP-AMB-047</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}