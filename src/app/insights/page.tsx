'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Article {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  featured?: boolean;
  icon: string;
  tags: string[];
}

const articles: Article[] = [
  {
    id: 1,
    category: 'Telemedicine',
    categoryColor: 'cyan',
    title: 'The Future of Remote Diagnostics: How AI-Powered Video Consultations Are Redefining Primary Care in India',
    excerpt: 'With over 600 million Indians living in rural areas with limited access to specialists, telemedicine is not a convenience — it is a lifeline. EPARCHA\'s integrated consultation platform bridges the gap between patients in tier-3 cities and top-tier specialists in metropolitan hospitals.',
    readTime: '8 min read',
    date: 'June 2026',
    featured: true,
    icon: '📡',
    tags: ['Telemedicine', 'AI Diagnostics', 'Rural Healthcare'],
  },
  {
    id: 2,
    category: 'Emergency Care',
    categoryColor: 'red',
    title: 'Golden Hour Protocol: Why Real-Time Ambulance Coordination Saves More Lives Than Equipment Alone',
    excerpt: 'Emergency medicine research consistently shows that the first 60 minutes after a cardiac event or trauma are decisive. EPARCHA\'s emergency response network integrates GPS dispatch, hospital bed availability, and pre-arrival patient data to compress response times across urban and semi-urban India.',
    readTime: '6 min read',
    date: 'May 2026',
    featured: true,
    icon: '🚑',
    tags: ['Emergency Response', 'Ambulance Network', 'Cardiac Care'],
  },
  {
    id: 3,
    category: 'Ecosystem Innovation',
    categoryColor: 'blue',
    title: 'Building India\'s Healthcare Super-Stack: Why Fragmentation Is the Real Health Crisis',
    excerpt: 'India has world-class doctors, cutting-edge diagnostics, and a thriving pharmaceutical industry — yet patients still fall through the cracks. The problem is not capability; it is connectivity. EPARCHA\'s unified ecosystem model connects every node of the healthcare value chain into a single, intelligent platform.',
    readTime: '10 min read',
    date: 'April 2026',
    featured: true,
    icon: '🔗',
    tags: ['Healthcare Ecosystem', 'Digital Health', 'Platform Strategy'],
  },
  {
    id: 4,
    category: 'Telemedicine',
    categoryColor: 'cyan',
    title: 'Asynchronous Care Models: How Store-and-Forward Telemedicine Is Transforming Dermatology and Radiology',
    excerpt: 'Not every consultation requires a live video call. Asynchronous telemedicine — where patients submit images, reports, and symptoms for specialist review — is proving highly effective for dermatology, radiology, and pathology. EPARCHA\'s platform supports both synchronous and asynchronous care pathways.',
    readTime: '5 min read',
    date: 'March 2026',
    icon: '🩺',
    tags: ['Async Care', 'Dermatology', 'Radiology'],
  },
  {
    id: 5,
    category: 'Emergency Care',
    categoryColor: 'red',
    title: 'Mobile ICUs and the Democratization of Critical Care: EPARCHA\'s Mobile Ambulance Unit Vision',
    excerpt: 'Advanced life support should not be a privilege of geography. EPARCHA\'s Mobile Ambulance Units are equipped with portable ventilators, defibrillators, and point-of-care diagnostics — bringing ICU-grade intervention to patients before they reach the hospital.',
    readTime: '7 min read',
    date: 'February 2026',
    icon: '🏥',
    tags: ['Mobile ICU', 'Critical Care', 'Rural Access'],
  },
  {
    id: 6,
    category: 'Ecosystem Innovation',
    categoryColor: 'blue',
    title: 'Digital Health Records as Infrastructure: The Case for a Unified Patient Identity Across India\'s Healthcare System',
    excerpt: 'Every time a patient visits a new doctor, their medical history starts from zero. Duplicate tests, missed allergies, and conflicting prescriptions cost lives and money. EPARCHA\'s longitudinal health record system creates a portable, consent-driven health identity that travels with the patient.',
    readTime: '9 min read',
    date: 'January 2026',
    icon: '📋',
    tags: ['Digital Records', 'Patient Identity', 'Interoperability'],
  },
  {
    id: 7,
    category: 'Telemedicine',
    categoryColor: 'cyan',
    title: 'Mental Health at Scale: Why Telepsychiatry Is India\'s Most Underutilized Healthcare Lever',
    excerpt: 'India faces a mental health crisis with fewer than 0.3 psychiatrists per 100,000 people. Telepsychiatry removes the dual barriers of stigma and geography, enabling confidential, accessible mental health support. EPARCHA\'s platform integrates licensed mental health professionals into its consultation network.',
    readTime: '6 min read',
    date: 'December 2026',
    icon: '🧠',
    tags: ['Mental Health', 'Telepsychiatry', 'Accessibility'],
  },
  {
    id: 8,
    category: 'Ecosystem Innovation',
    categoryColor: 'blue',
    title: 'Pharmacy Intelligence: How Predictive Analytics Can Eliminate Drug Shortages and Reduce Medication Errors',
    excerpt: 'India\'s pharmaceutical supply chain is complex, fragmented, and prone to last-mile failures. EPARCHA\'s integrated pharmacy network uses prescription data, regional demand patterns, and inventory analytics to ensure the right medication reaches the right patient at the right time.',
    readTime: '7 min read',
    date: 'November 2026',
    icon: '💊',
    tags: ['Pharmacy', 'Supply Chain', 'Analytics'],
  },
];

const categories = ['All', 'Telemedicine', 'Emergency Care', 'Ecosystem Innovation'];

const categoryColorMap: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  cyan: {
    bg: 'bg-cyan-50',
    text: 'text-cyan-700',
    border: 'border-cyan-200',
    dot: 'bg-cyan-500',
  },
  red: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    border: 'border-red-200',
    dot: 'bg-red-500',
  },
  blue: {
    bg: 'bg-blue-50',
    text: 'text-[#0A3D91]',
    border: 'border-blue-200',
    dot: 'bg-[#0A3D91]',
  },
};

function CategoryBadge({ category, color }: { category: string; color: string }) {
  const colors = categoryColorMap[color] || categoryColorMap.blue;
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${colors.bg} ${colors.text} ${colors.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
      {category}
    </span>
  );
}

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredArticles = articles.filter((a) => a.featured);
  const filteredArticles = articles.filter((a) => {
    if (activeCategory === 'All') return true;
    return a.category === activeCategory;
  });
  const gridArticles = filteredArticles.filter((a) => !a.featured || activeCategory !== 'All');

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white overflow-x-hidden">
        {/* Hero */}
        <section className="relative pt-28 pb-20 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D91]/5 via-white to-[#00C2D1]/5 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#00C2D1]/8 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0A3D91]/6 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A3D91]/8 border border-[#0A3D91]/15 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00C2D1] animate-pulse" />
                <span className="text-xs font-bold text-[#0A3D91] tracking-widest uppercase">Healthcare Insights Hub</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A3D91] leading-tight mb-6">
                Thought Leadership
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00C2D1] to-[#0A3D91]">
                  for Modern Healthcare
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                EPARCHA's perspectives on telemedicine, emergency care, and the future of India's healthcare ecosystem. Evidence-based insights from the frontlines of healthcare innovation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Telemedicine', 'Emergency Care', 'Ecosystem Innovation'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-600 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles — Asymmetric Bento */}
        {activeCategory === 'All' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#0A3D91] to-[#00C2D1]" />
              <h2 className="text-xl font-bold text-gray-900">Featured Perspectives</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
              {/* Large featured card */}
              <div className="lg:col-span-3 group relative bg-gradient-to-br from-[#0A3D91] to-[#0A3D91]/80 rounded-2xl p-8 overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-[#0A3D91]/20 transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#00C2D1]/15 blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />
                <div className="relative">
                  <div className="text-5xl mb-5">{featuredArticles[0]?.icon}</div>
                  <CategoryBadge category={featuredArticles[0]?.category} color={featuredArticles[0]?.categoryColor} />
                  <h3 className="mt-4 text-2xl font-extrabold text-white leading-snug group-hover:text-[#00C2D1] transition-colors duration-300">
                    {featuredArticles[0]?.title}
                  </h3>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed line-clamp-3">
                    {featuredArticles[0]?.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-white/50 text-xs">
                      <span>{featuredArticles[0]?.date}</span>
                      <span>·</span>
                      <span>{featuredArticles[0]?.readTime}</span>
                    </div>
                    <span className="text-[#00C2D1] text-sm font-bold group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                      Read Article <span>→</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Two stacked cards */}
              <div className="lg:col-span-2 flex flex-col gap-5">
                {featuredArticles.slice(1, 3).map((article) => (
                  <div
                    key={article.id}
                    className="group flex-1 bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#00C2D1]/40 hover:shadow-xl hover:shadow-[#00C2D1]/10 transition-all duration-400 cursor-pointer"
                  >
                    <div className="text-3xl mb-3">{article.icon}</div>
                    <CategoryBadge category={article.category} color={article.categoryColor} />
                    <h3 className="mt-3 text-base font-bold text-gray-900 leading-snug group-hover:text-[#0A3D91] transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-gray-500 text-sm leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-gray-400 text-xs">{article.date} · {article.readTime}</span>
                      <span className="text-[#0A3D91] text-xs font-bold group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                        Read <span>→</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Category Filter + Article Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {/* Filter tabs */}
          <div className="flex items-center gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#0A3D91] text-white shadow-lg shadow-[#0A3D91]/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {(activeCategory === 'All' ? articles.filter((a) => !a.featured) : filteredArticles).map((article, idx) => (
              <article
                key={article.id}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#0A3D91]/20 hover:shadow-xl hover:shadow-[#0A3D91]/8 transition-all duration-400 cursor-pointer flex flex-col"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {/* Card top accent */}
                <div className={`h-1 w-full ${article.categoryColor === 'cyan' ? 'bg-gradient-to-r from-[#00C2D1] to-[#00C2D1]/40' : article.categoryColor === 'red' ? 'bg-gradient-to-r from-red-500 to-red-300' : 'bg-gradient-to-r from-[#0A3D91] to-[#0A3D91]/40'}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{article.icon}</span>
                    <CategoryBadge category={article.category} color={article.categoryColor} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#0A3D91] transition-colors duration-300 mb-3 flex-1">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100 text-xs text-gray-500 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="text-gray-400 text-xs">{article.date} · {article.readTime}</span>
                    <span className="text-[#0A3D91] text-xs font-bold group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                      Read More <span>→</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Authority CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A3D91] via-[#0A3D91]/90 to-[#00C2D1]/80 p-12 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptNiAwaDZ2LTZoLTZ2NnptLTEyIDBoLTZ2Nmg2di02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40 pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00C2D1] animate-pulse" />
                <span className="text-xs font-bold text-white/80 tracking-widest uppercase">Stay Informed</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Healthcare Intelligence, Delivered
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
                Join healthcare professionals, investors, and policymakers who follow EPARCHA's insights on India's evolving healthcare landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#0A3D91] font-bold text-sm hover:bg-[#00C2D1] hover:text-white transition-all duration-300 shadow-lg"
                >
                  Partner With EPARCHA
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all duration-300"
                >
                  Explore Our Platform
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
