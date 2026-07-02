import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import TrustBar from '@/app/components/TrustBar';
import EcosystemSection from '@/app/components/EcosystemSection';
import VisionSection from '@/app/components/VisionSection';
import EmergencySection from '@/app/components/EmergencySection';
import HomeHealthcareSection from '@/app/components/HomeHealthcareSection';
import MobileRevolutionSection from '@/app/components/MobileRevolutionSection';
import TechInnovationSection from '@/app/components/TechlnnovationSection';
import ImpactMetricsSection from '@/app/components/ImpactMetricesSection';
import AboutSection from '@/app/components/AboutSection';
import PartnershipSection from '@/app/components/PartnershipSection';
import SpotlightCardInit from '@/app/components/SpotlightCardlnit';
import ScrollAnimInit from '@/app/components/ScrollAnimlnit';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <TrustBar />
        <EcosystemSection />
        <VisionSection />
        <EmergencySection />
        <HomeHealthcareSection />
        <MobileRevolutionSection />
        <TechInnovationSection />
        <ImpactMetricsSection />
        <AboutSection />
        <PartnershipSection />
      </main>
      <Footer />
      <SpotlightCardInit />
      <ScrollAnimInit />
    </>
  );
}