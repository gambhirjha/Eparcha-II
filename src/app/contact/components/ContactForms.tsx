'use client';

import React, { useState } from 'react';

type TabType = 'patient' | 'doctor' | 'partner' | 'investor';

const tabs: { id: TabType; label: string; icon: string }[] = [
  { id: 'patient', label: 'Patient / General', icon: '🏥' },
  { id: 'doctor', label: 'Doctor Registration', icon: '👨‍⚕️' },
  { id: 'partner', label: 'Partner With Us', icon: '🤝' },
  { id: 'investor', label: 'Investor Relations', icon: '📈' },
];

function PatientForm() {
  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-foreground mb-1.5">Full Name *</label>
          <input
            type="text"
            placeholder="Rahul Sharma"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-foreground mb-1.5">Phone Number *</label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-foreground mb-1.5">Email Address</label>
        <input
          type="email"
          placeholder="rahul@example.com"
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
        />
      </div>
      <div>
        <label className="block text-xs font-bold text-foreground mb-1.5">City</label>
        <input
          type="text"
          placeholder="Mumbai, Delhi, Bengaluru..."
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
        />
      </div>
      <div>
        <label className="block text-xs font-bold text-foreground mb-1.5">How can we help? *</label>
        <textarea
          rows={4}
          placeholder="Describe your healthcare need or inquiry..."
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:-translate-y-0.5 text-sm"
      >
        Send Message
      </button>
    </div>
  );
}

function DoctorForm() {
  return (
    <div className="space-y-5" id="doctors">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-foreground mb-1.5">Doctor&apos;s Full Name *</label>
          <input
            type="text"
            placeholder="Dr. Ananya Krishnan"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-foreground mb-1.5">Specialization *</label>
          <input
            type="text"
            placeholder="Cardiologist, Pediatrician..."
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-foreground mb-1.5">MCI Registration No. *</label>
          <input
            type="text"
            placeholder="MCI-XXXXXXX"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-foreground mb-1.5">Years of Experience *</label>
          <input
            type="number"
            placeholder="e.g. 12"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-foreground mb-1.5">Phone Number *</label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-foreground mb-1.5">Email Address *</label>
          <input
            type="email"
            placeholder="doctor@hospital.com"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-foreground mb-1.5">Current Hospital / Clinic</label>
        <input
          type="text"
          placeholder="Apollo Hospitals, Mumbai"
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:-translate-y-0.5 text-sm"
      >
        Submit Registration
      </button>
    </div>
  );
}

function PartnerForm() {
  return (
    <div className="space-y-5" id="partners">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-foreground mb-1.5">Organisation Name *</label>
          <input
            type="text"
            placeholder="Fortis Healthcare, Mumbai"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-foreground mb-1.5">Partner Type *</label>
          <select className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-foreground">
            <option value="">Select type...</option>
            <option>Hospital / Clinic</option>
            <option>Laboratory</option>
            <option>Pharmacy</option>
            <option>Ambulance Provider</option>
            <option>Home Healthcare Agency</option>
            <option>Insurance Company</option>
          </select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-foreground mb-1.5">Contact Person *</label>
          <input
            type="text"
            placeholder="Vikram Patel"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-foreground mb-1.5">Phone Number *</label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-foreground mb-1.5">Email Address *</label>
        <input
          type="email"
          placeholder="partnerships@organisation.com"
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
        />
      </div>
      <div>
        <label className="block text-xs font-bold text-foreground mb-1.5">Cities / Locations of Operation</label>
        <input
          type="text"
          placeholder="Mumbai, Pune, Nashik"
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
        />
      </div>
      <div>
        <label className="block text-xs font-bold text-foreground mb-1.5">Tell us about your organisation</label>
        <textarea
          rows={3}
          placeholder="Brief description of services, scale, and how you'd like to partner with EPARCHA..."
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:-translate-y-0.5 text-sm"
      >
        Submit Partnership Request
      </button>
    </div>
  );
}

function InvestorForm() {
  return (
    <div className="space-y-5">
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-lg">📈</span>
          <div>
            <div className="text-sm font-bold text-foreground mb-1">Investor Inquiry</div>
            <div className="text-xs text-muted-foreground">
              EPARCHA is building India&apos;s ₹12 Lakh Crore healthcare infrastructure. We welcome conversations with strategic investors aligned with our mission.
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-foreground mb-1.5">Your Name *</label>
          <input
            type="text"
            placeholder="Suresh Venkataraman"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-foreground mb-1.5">Fund / Organisation *</label>
          <input
            type="text"
            placeholder="Sequoia India, Tiger Global..."
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-foreground mb-1.5">Email Address *</label>
          <input
            type="email"
            placeholder="investor@fund.com"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-foreground mb-1.5">Investment Stage Interest</label>
          <select className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-foreground">
            <option value="">Select stage...</option>
            <option>Seed / Pre-Seed</option>
            <option>Series A</option>
            <option>Series B+</option>
            <option>Strategic / Corporate</option>
            <option>Debt / Venture Debt</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-foreground mb-1.5">Message</label>
        <textarea
          rows={4}
          placeholder="Tell us about your investment thesis and how you see alignment with EPARCHA's mission..."
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:-translate-y-0.5 text-sm"
      >
        Send Investor Inquiry
      </button>
    </div>
  );
}

export default function ContactForms() {
  const [activeTab, setActiveTab] = useState<TabType>('patient');

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-white rounded-2xl border border-border shadow-sm animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.8s ease-out both' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex-1 justify-center ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-md shadow-primary/25'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Form panel */}
        <div className="bg-white rounded-2xl border border-border shadow-sm p-8 animate-on-scroll opacity-100" style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
          <div className="mb-6">
            <h2 className="text-lg font-extrabold text-foreground">
              {activeTab === 'patient' && 'Patient & General Inquiries'}
              {activeTab === 'doctor' && 'Doctor Registration'}
              {activeTab === 'partner' && 'Partnership Application'}
              {activeTab === 'investor' && 'Investor Relations'}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {activeTab === 'patient' && 'Book appointments, get support, or ask us anything about our services.'}
              {activeTab === 'doctor' && 'Join 10,000+ verified doctors on EPARCHA\'s growing platform.'}
              {activeTab === 'partner' && 'Hospitals, labs, pharmacies, and ambulance providers — grow with EPARCHA.'}
              {activeTab === 'investor' && 'Explore investment opportunities in India\'s healthcare infrastructure.'}
            </p>
          </div>
          {activeTab === 'patient' && <PatientForm />}
          {activeTab === 'doctor' && <DoctorForm />}
          {activeTab === 'partner' && <PartnerForm />}
          {activeTab === 'investor' && <InvestorForm />}
        </div>
      </div>
    </section>
  );
}