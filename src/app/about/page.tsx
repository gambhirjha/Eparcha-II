import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/app/about/components/AboutHero';
import MissionValues from '@/app/about/components/MissionValues';
import TeamSection from '@/app/about/components/TeamSection';
import TimelineSection from '@/app/about/components/TimelineSection';
import ScrollAnimInit from '@/app/components/ScrollAnimlnit';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <AboutHero />
        <MissionValues />
        <TimelineSection />
        <TeamSection />
      </main>
      <Footer />
      <ScrollAnimInit />
    </>
  );
}