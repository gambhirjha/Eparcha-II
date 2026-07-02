import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactForms from '@/app/contact/components/ContactForms';
import ContactInfo from '@/app/contact/components/ContactInfo';
import ScrollAnimInit from '@/app/components/ScrollAnimlnit';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <ContactHero />
        <ContactForms />
        <ContactInfo />
      </main>
      <Footer />
      <ScrollAnimInit />
    </>
  );
}