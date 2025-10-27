'use client';

import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, CheckCircle, FileText, Clock, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Sasinelwa Training Academy",
    "description": "SANC-accredited nursing training academy in Kimberley, Northern Cape. Professional nursing programs including Registered Nurse, Enrolled Nurse, Midwifery, and Critical Care.",
    "url": "https://hpo.sasinelwa.co.za",
    "logo": "https://hpo.sasinelwa.co.za/logo.png",
    "sameAs": [
      "https://www.facebook.com/sasinelwaacademy",
      "https://www.linkedin.com/company/sasinelwa-academy",
      "https://www.instagram.com/sasinelwaacademy"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Admissions",
      "telephone": "+27-53-XXXX-XXXX",
      "email": "admissions@sasinelwaacademy.co.za"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kimberley",
      "addressLocality": "Kimberley",
      "addressRegion": "Northern Cape",
      "postalCode": "8300",
      "addressCountry": "ZA"
    },
    "areaServed": ["ZA"],
    "founder": {
      "@type": "Organization",
      "name": "Sasinelwa Training Academy"
    },
    "foundingDate": "2015",
    "knowsAbout": [
      "Nursing Education",
      "Healthcare Training",
      "SANC Accreditation",
      "Nursing Programs"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need work experience to apply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, work experience is not required. However, healthcare volunteer work or internships can strengthen your application and help you understand if nursing is right for you."
        }
      },
      {
        "@type": "Question",
        "name": "What if I don't have Grade 12 yet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Grade 12 or equivalent is required for admission. If you're still completing it, apply once you have your certificate."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the application process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically 2-4 weeks from application to admission decision, depending on how quickly you submit documents and schedule your interview."
        }
      },
      {
        "@type": "Question",
        "name": "Can I apply if my Grade 12 scores were low?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can still apply. We consider your overall profile including motivation, experience, and potential. Your GPA must be at least 2.5."
        }
      },
      {
        "@type": "Question",
        "name": "What is the entrance assessment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our entrance exam tests your readiness for nursing studies. It covers basic literacy, numeracy, and comprehension. You can take it online or in-person."
        }
      }
    ]
  };

  const programSchema = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    "name": "Nursing Programs - Sasinelwa Training Academy",
    "description": "Apply for SANC-accredited nursing programs in Kimberley",
    "url": "https://hpo.sasinelwa.co.za/#programs",
    "startDate": "2025-01-15",
    "endDate": "2029-12-31",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Sasinelwa Training Academy",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kimberley",
        "addressRegion": "Northern Cape",
        "addressCountry": "ZA"
      }
    }
  };

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>Nursing Programs Kimberley | SANC-Accredited | Sasinelwa Academy</title>
        <meta name="description" content="Apply to SANC-accredited nursing programs at Sasinelwa Training Academy in Kimberley. Registered Nurse, Enrolled Nurse, Midwifery, and Critical Care programs. 500+ graduates, 98% employment." />
        <meta name="keywords" content="nursing programs Kimberley, nursing school Northern Cape, SANC accredited nursing, nursing training Kimberley, apply nursing school, RN program, EN program" />
        <meta name="author" content="Sasinelwa Training Academy" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hpo.sasinelwa.co.za/" />
        <meta property="og:title" content="Nursing Programs Kimberley | SANC-Accredited | Sasinelwa Academy" />
        <meta property="og:description" content="Apply to SANC-accredited nursing programs in Kimberley. 500+ successful graduates. Simple application process, guaranteed career support." />
        <meta property="og:image" content="https://hpo.sasinelwa.co.za/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Sasinelwa Training Academy" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hpo.sasinelwa.co.za/" />
        <meta property="twitter:title" content="Nursing Programs Kimberley | SANC-Accredited | Sasinelwa Academy" />
        <meta property="twitter:description" content="Apply to SANC-accredited nursing programs in Kimberley. 500+ successful graduates. Simple application process, guaranteed career support." />
        <meta property="twitter:image" content="https://hpo.sasinelwa.co.za/twitter-image.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://hpo.sasinelwa.co.za/" />

        {/* Additional Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Geo Targeting */}
        <meta name="geo.placename" content="Kimberley, Northern Cape, South Africa" />
        <meta name="geo.region" content="ZA-NC" />
        <meta name="geo.position" content="-28.7473;24.8692" />
        <meta name="ICBM" content="-28.7473, 24.8692" />

        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      {/* Schema.org Structured Data */}
      <Script 
        id="organization-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Script 
        id="faq-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script 
        id="program-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programSchema) }}
      />

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      />

      <div className="min-h-screen bg-white">
        {/* ===== HEADER ===== */}
        <header className="border-b border-slate-200 sticky top-0 z-50 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">STA</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-base font-bold text-slate-900 leading-tight">Sasinelwa</h1>
                  <p className="text-xs text-slate-600 leading-none">Training Academy</p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8 text-sm">
                <a href="#programs" className="text-slate-600 hover:text-blue-600 font-medium transition">Programs</a>
                <a href="#requirements" className="text-slate-600 hover:text-blue-600 font-medium transition">Requirements</a>
                <a href="#apply" className="text-slate-600 hover:text-blue-600 font-medium transition">Apply</a>
                <a href="#faq" className="text-slate-600 hover:text-blue-600 font-medium transition">FAQ</a>
              </nav>

              {/* Desktop Button */}
              <div className="hidden sm:flex items-center gap-3">
                <a href="#apply" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm transition">
                  Apply Now
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X size={24} className="text-slate-900" /> : <Menu size={24} className="text-slate-900" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <nav className="md:hidden border-t border-slate-200 pb-4 pt-4 space-y-1">
                <a href="#programs" className="block px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg font-medium text-sm transition">Programs</a>
                <a href="#requirements" className="block px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg font-medium text-sm transition">Requirements</a>
                <a href="#apply" className="block px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg font-medium text-sm transition">Apply</a>
                <a href="#faq" className="block px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg font-medium text-sm transition">FAQ</a>
                <a href="#apply" className="block w-full mt-3 px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition text-center">
                  Start Application
                </a>
              </nav>
            )}
          </div>
        </header>

        {/* ===== HERO SECTION ===== */}
        <section className="bg-blue-50 py-12 sm:py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Badge */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <span className="inline-block px-3 py-1.5 bg-blue-100 text-blue-700 font-semibold text-xs rounded-full">
                Now Accepting Applications - 2025
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight text-center">
              SANC-Accredited Nursing Programs in Kimberley
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 leading-relaxed text-center max-w-2xl mx-auto">
              Join 500+ successful graduates at Sasinelwa Training Academy. Simple application, clear pathway, guaranteed career support. Start your nursing career today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
              <a 
                href="#apply" 
                className="px-6 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-center transition shadow-md hover:shadow-lg"
              >
                Start Application
              </a>
              <a 
                href="#how-it-works" 
                className="px-6 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold rounded-lg text-center transition"
              >
                How It Works
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 sm:pt-12 border-t border-slate-200">
              {[
                { value: '500+', label: 'Graduates' },
                { value: '100%', label: 'Pass Rate' },
                { value: '98%', label: 'Employment' },
                { value: '2-4', label: 'Weeks to Admit' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DIVIDER ===== */}
        <div className="border-t border-slate-200"></div>

        {/* ===== PROGRAMS SECTION ===== */}
        <section id="programs" className="bg-white py-12 sm:py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-10 sm:mb-12 text-center">
              Nursing Programs in Kimberley
            </h2>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  title: "Registered Nurse (RN)",
                  duration: "4 Years",
                  desc: "Full qualification for registered nursing professionals. SANC-accredited comprehensive program.",
                  intake: "January & July",
                },
                {
                  title: "Enrolled Nurse (EN)",
                  duration: "2 Years",
                  desc: "Specialized nursing support qualification. Ideal for healthcare enthusiasts.",
                  intake: "January & July",
                },
                {
                  title: "Midwifery",
                  duration: "1 Year",
                  desc: "Advanced postgraduate midwifery training for registered nurses.",
                  intake: "February",
                },
                {
                  title: "Critical Care Nursing",
                  duration: "1 Year",
                  desc: "Intensive care and emergency nursing specialization.",
                  intake: "April & October",
                },
                {
                  title: "Community Health Nursing",
                  duration: "6 Months",
                  desc: "Public health and community nursing expertise.",
                  intake: "Rolling",
                },
                {
                  title: "Professional Development",
                  duration: "Flexible",
                  desc: "Continuing education and skills updates for practicing nurses.",
                  intake: "Throughout year",
                },
              ].map((program, idx) => (
                <article key={idx} className="border border-slate-200 rounded-lg p-5 sm:p-6 hover:border-slate-300 hover:shadow-md transition">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">
                    {program.duration}
                  </p>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {program.desc}
                  </p>
                  <p className="text-slate-600 text-xs mb-4 p-2.5 bg-slate-50 rounded font-medium">
                    <strong className="text-slate-900">Intake:</strong> {program.intake}
                  </p>
                  <a href="#apply" className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2 group">
                    Apply <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DIVIDER ===== */}
        <div className="border-t border-slate-200"></div>

        {/* ===== REQUIREMENTS SECTION ===== */}
        <section id="requirements" className="bg-slate-50 py-12 sm:py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-10 sm:mb-12 text-center">
              Nursing Program Admission Requirements
            </h2>

            {/* Requirements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-10 sm:mb-12">
              {/* General Requirements */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                  General Requirements
                </h3>
                <div className="space-y-3">
                  {[
                    "South African citizen or permanent resident",
                    "Valid identity document",
                    "Grade 12 (or equivalent) - REQUIRED",
                    "Minimum 50% in Mathematics",
                    "Minimum 50% in Science/Physical Science",
                    "Good health and physical fitness",
                    "Pass criminal background check",
                    "Fluent in English (written & spoken)",
                  ].map((req, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {req}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Needed */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                  Required Documents
                </h3>
                <div className="space-y-3">
                  {[
                    "Copy of ID (front & back)",
                    "Grade 12 certificate (certified copy)",
                    "Academic transcripts",
                    "Medical clearance (form provided)",
                    "Recent passport photo (4x6)",
                    "CV/Resume (1 page max)",
                    "Proof of residence (utility bill)",
                  ].map((doc, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <FileText className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {doc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Note */}
                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    <strong className="text-slate-900">📝 Note:</strong> Don&apos;t have all documents yet? Apply anyway! We can guide you through the process.
                  </p>
                </div>
              </div>
            </div>

            {/* GPA & Prerequisites */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-8">
                Academic Minimum Requirements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">
                    Minimum GPA
                  </h4>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                    2.5+
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Or demonstrate academic improvement
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">
                    Math & Science
                  </h4>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                    50%+
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    In both subjects required
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">
                    Grade 12
                  </h4>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                    Required
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    No exceptions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== DIVIDER ===== */}
        <div className="border-t border-slate-200"></div>

        {/* ===== APPLICATION PROCESS ===== */}
        <section id="how-it-works" className="bg-white py-12 sm:py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-10 sm:mb-12 text-center">
              Nursing Application Process
            </h2>

            {/* Steps */}
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  step: "1",
                  title: "Complete Application Form",
                  desc: "Fill out our comprehensive online form with your personal and academic details. Takes about 15 minutes.",
                  time: "Online (Instant)",
                },
                {
                  step: "2",
                  title: "Submit Documents",
                  desc: "Upload copies of your ID, Grade 12 certificate, transcripts, and medical clearance.",
                  time: "Next 5 days",
                },
                {
                  step: "3",
                  title: "We Review Everything",
                  desc: "Our admissions team verifies your qualifications and documents. We'll contact you if we need clarification.",
                  time: "3-5 business days",
                },
                {
                  step: "4",
                  title: "Entrance Assessment",
                  desc: "Complete our entrance exam (online or in-person). Tests your readiness for nursing studies.",
                  time: "Scheduled for you",
                },
                {
                  step: "5",
                  title: "Admissions Interview",
                  desc: "Brief interview with our admissions team to understand your motivation and fit for the program.",
                  time: "1-2 weeks after exam",
                },
                {
                  step: "6",
                  title: "Acceptance & Enrollment",
                  desc: "Receive acceptance letter and complete registration. Start your program on the next intake date.",
                  time: "Within 1 week of interview",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base mb-3 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                      <Clock size={16} /> {item.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline Info */}
            <div className="mt-10 sm:mt-12 p-5 sm:p-6 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                <strong className="text-slate-900">⏱️ Timeline:</strong> From application to enrollment typically takes 2-4 weeks. We&apos;re fast because we want to help you start your nursing career!
              </p>
            </div>
          </div>
        </section>

        {/* ===== DIVIDER ===== */}
        <div className="border-t border-slate-200"></div>

        {/* ===== APPLICATION FORM ===== */}
        <section id="apply" className="bg-slate-50 py-12 sm:py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
              {/* Form Header */}
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                  Apply for Nursing Program
                </h2>
                <p className="text-slate-600 text-sm sm:text-base">
                  Start your nursing career today. Takes about 15 minutes.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-3">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className={`h-1.5 flex-1 mx-1 rounded-full transition ${formStep >= step ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 text-center font-medium">
                  Step {formStep} of 3
                </p>
              </div>

              <form className="space-y-6">
                {/* Step 1: Personal Information */}
                {formStep === 1 && (
                  <div className="space-y-5">
                    <h3 className="text-lg font-bold text-slate-900">
                      Personal Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-slate-900 mb-2">
                          First Name <span className="text-red-600">*</span>
                        </label>
                        <input 
                          id="firstName"
                          type="text" 
                          required 
                          placeholder="John" 
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition" 
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-slate-900 mb-2">
                          Last Name <span className="text-red-600">*</span>
                        </label>
                        <input 
                          id="lastName"
                          type="text" 
                          required 
                          placeholder="Doe" 
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition" 
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input 
                        id="email"
                        type="email" 
                        required 
                        placeholder="john@example.com" 
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition" 
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input 
                        id="phone"
                        type="tel" 
                        required 
                        placeholder="+27 (0) 71 123 4567" 
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition" 
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="idNumber" className="block text-sm font-semibold text-slate-900 mb-2">
                          ID Number <span className="text-red-600">*</span>
                        </label>
                        <input 
                          id="idNumber"
                          type="text" 
                          required 
                          placeholder="YYMMDD SSSSSC CZ" 
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition" 
                        />
                      </div>
                      <div>
                        <label htmlFor="dob" className="block text-sm font-semibold text-slate-900 mb-2">
                          Date of Birth <span className="text-red-600">*</span>
                        </label>
                        <input 
                          id="dob"
                          type="date" 
                          required 
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition" 
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-semibold text-slate-900 mb-2">
                        Province/City <span className="text-red-600">*</span>
                      </label>
                      <input 
                        id="location"
                        type="text" 
                        required 
                        placeholder="Kimberley, Northern Cape" 
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition" 
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Academic Background */}
                {formStep === 2 && (
                  <div className="space-y-5">
                    <h3 className="text-lg font-bold text-slate-900">
                      Academic Background
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="grade12Year" className="block text-sm font-semibold text-slate-900 mb-2">
                          Year Completed Grade 12 <span className="text-red-600">*</span>
                        </label>
                        <input 
                          id="grade12Year"
                          type="number" 
                          required 
                          min="2000" 
                          max="2024" 
                          placeholder="2024" 
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition" 
                        />
                      </div>
                      <div>
                        <label htmlFor="grade12Score" className="block text-sm font-semibold text-slate-900 mb-2">
                          Grade 12 Score %
                        </label>
                        <input 
                          id="grade12Score"
                          type="number" 
                          min="0" 
                          max="100" 
                          placeholder="75" 
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="mathScore" className="block text-sm font-semibold text-slate-900 mb-2">
                          Math Score %
                        </label>
                        <input 
                          id="mathScore"
                          type="number" 
                          min="0" 
                          max="100" 
                          placeholder="65" 
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition" 
                        />
                      </div>
                      <div>
                        <label htmlFor="scienceScore" className="block text-sm font-semibold text-slate-900 mb-2">
                          Science Score %
                        </label>
                        <input 
                          id="scienceScore"
                          type="number" 
                          min="0" 
                          max="100" 
                          placeholder="70" 
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition" 
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-sm font-semibold text-slate-900 mb-2">
                        Healthcare Experience <span className="text-red-600">*</span>
                      </label>
                      <select 
                        id="experience"
                        required 
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition"
                      >
                        <option value="">-- Select --</option>
                        <option value="none">No healthcare experience</option>
                        <option value="volunteer">Volunteer work (hospital/clinic)</option>
                        <option value="cna">CNA or Nursing Assistant</option>
                        <option value="healthcare">Other healthcare role</option>
                        <option value="personal">Personal/family caregiving</option>
                      </select>
                      <p className="text-slate-600 text-xs mt-2">
                        Experience helps but is NOT required
                      </p>
                    </div>

                    <div>
                      <label htmlFor="motivation" className="block text-sm font-semibold text-slate-900 mb-2">
                        Why do you want to become a nurse? <span className="text-red-600">*</span>
                      </label>
                      <textarea 
                        id="motivation"
                        required 
                        rows={4} 
                        placeholder="Tell us your motivation, experiences, and career goals..." 
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm resize-none transition" 
                      ></textarea>
                      <p className="text-slate-600 text-xs mt-2">
                        250 characters minimum, 1000 maximum
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 3: Program Selection */}
                {formStep === 3 && (
                  <div className="space-y-5">
                    <h3 className="text-lg font-bold text-slate-900">
                      Program Selection
                    </h3>

                    <div>
                      <label htmlFor="program" className="block text-sm font-semibold text-slate-900 mb-2">
                        Program of Interest <span className="text-red-600">*</span>
                      </label>
                      <select 
                        id="program"
                        required 
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition"
                      >
                        <option value="">-- Select a program --</option>
                        <option value="rn">Registered Nurse (4 Years)</option>
                        <option value="en">Enrolled Nurse (2 Years)</option>
                        <option value="midwifery">Midwifery (1 Year)</option>
                        <option value="critical">Critical Care (1 Year)</option>
                        <option value="community">Community Health (6 Months)</option>
                        <option value="professional">Professional Development</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="intake" className="block text-sm font-semibold text-slate-900 mb-2">
                        Preferred Intake Date <span className="text-red-600">*</span>
                      </label>
                      <select 
                        id="intake"
                        required 
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition"
                      >
                        <option value="">-- Select intake --</option>
                        <option value="january2025">January 2025</option>
                        <option value="july2025">July 2025</option>
                        <option value="february2025">February 2025</option>
                        <option value="april2025">April 2025</option>
                        <option value="october2025">October 2025</option>
                      </select>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-bold text-slate-900 mb-3 text-sm">
                        📄 Next Steps After Application
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        <li>✅ We&apos;ll email you a document checklist</li>
                        <li>✅ Upload your documents (or mail them)</li>
                        <li>✅ We schedule your entrance exam</li>
                        <li>✅ Brief admissions interview</li>
                        <li>✅ Acceptance letter & enrollment</li>
                      </ul>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        Acknowledgment <span className="text-red-600">*</span>
                      </label>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <input type="checkbox" id="agree1" className="mt-1 cursor-pointer" />
                          <label htmlFor="agree1" className="text-sm text-slate-600 cursor-pointer leading-relaxed">
                            I confirm that all information provided is true and accurate
                          </label>
                        </div>
                        <div className="flex items-start gap-3">
                          <input type="checkbox" id="agree2" className="mt-1 cursor-pointer" />
                          <label htmlFor="agree2" className="text-sm text-slate-600 cursor-pointer leading-relaxed">
                            I have read and agree to the terms and conditions
                          </label>
                        </div>
                        <div className="flex items-start gap-3">
                          <input type="checkbox" id="agree3" className="mt-1 cursor-pointer" />
                          <label htmlFor="agree3" className="text-sm text-slate-600 cursor-pointer leading-relaxed">
                            I consent to be contacted about my application
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex gap-3 justify-between pt-8 border-t border-slate-200">
                  <button 
                    onClick={() => setFormStep(Math.max(1, formStep - 1))}
                    disabled={formStep === 1}
                    className="px-6 py-2.5 border border-slate-300 rounded-lg font-semibold text-slate-900 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition text-sm"
                  >
                    Previous
                  </button>
                  
                  {formStep < 3 ? (
                    <button 
                      onClick={() => setFormStep(formStep + 1)}
                      className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition text-sm"
                    >
                      Continue
                    </button>
                  ) : (
                    <button className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition text-sm">
                      Submit Application
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* ===== DIVIDER ===== */}
        <div className="border-t border-slate-200"></div>

        {/* ===== FAQ SECTION ===== */}
        <section id="faq" className="bg-white py-12 sm:py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-10 sm:mb-12 text-center">
              Frequently Asked Questions About Our Nursing Programs
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Do I need work experience to apply?",
                  a: "No, work experience is not required. However, healthcare volunteer work or internships can strengthen your application and help you understand if nursing is right for you.",
                },
                {
                  q: "What if I don't have Grade 12 yet?",
                  a: "Grade 12 or equivalent is required for admission. If you're still completing it, apply once you have your certificate.",
                },
                {
                  q: "How long does the application process take?",
                  a: "Typically 2-4 weeks from application to admission decision, depending on how quickly you submit documents and schedule your interview.",
                },
                {
                  q: "Can I apply if my Grade 12 scores were low?",
                  a: "Yes, you can still apply. We consider your overall profile including motivation, experience, and potential. Your GPA must be at least 2.5.",
                },
                {
                  q: "What is the entrance assessment?",
                  a: "Our entrance exam tests your readiness for nursing studies. It covers basic literacy, numeracy, and comprehension. You can take it online or in-person.",
                },
              ].map((item, idx) => (
                <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                    className="w-full px-5 sm:px-6 py-4 flex justify-between items-start sm:items-center hover:bg-slate-50 transition text-left"
                  >
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base pr-3">
                      {item.q}
                    </h3>
                    <ChevronDown 
                      className={`flex-shrink-0 transition ${expandedFAQ === idx ? 'rotate-180' : ''}`} 
                      size={20} 
                    />
                  </button>
                  {expandedFAQ === idx && (
                    <div className="px-5 sm:px-6 py-4 border-t border-slate-200 bg-slate-50">
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DIVIDER ===== */}
        <div className="border-t border-slate-200"></div>

        {/* ===== CONTACT SECTION ===== */}
        <section className="bg-slate-50 py-12 sm:py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-10 sm:mb-12 text-center">
              Contact Sasinelwa Training Academy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 text-center">
                <Phone className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="font-bold text-slate-900 mb-3">Call Us</h3>
                <a href="tel:+27xxxxxxxxxx" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  +27 (0) 53 XXX XXXX
                </a>
                <p className="text-slate-600 text-xs mt-3">
                  Mon-Fri, 08:00 - 17:00
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 text-center">
                <Mail className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="font-bold text-slate-900 mb-3">Email</h3>
                <a href="mailto:admissions@sasinelwaacademy.co.za" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  admissions@sasinelwaacademy.co.za
                </a>
                <p className="text-slate-600 text-xs mt-3">
                  Response within 24 hours
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 text-center">
                <MapPin className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="font-bold text-slate-900 mb-3">Visit Us</h3>
                <p className="text-slate-600 font-semibold text-sm">
                  Kimberley
                </p>
                <p className="text-slate-600 text-xs">
                  Northern Cape, South Africa
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="bg-slate-900 text-slate-400 py-10 sm:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">STA</span>
                  </div>
                  <span className="font-bold text-white text-sm">Sasinelwa Academy</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Professional SANC-accredited nursing education in Kimberley, Northern Cape.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-4 text-xs sm:text-sm">Programs</h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li><a href="#programs" className="hover:text-white transition">All Programs</a></li>
                  <li><a href="#requirements" className="hover:text-white transition">Requirements</a></li>
                  <li><a href="#how-it-works" className="hover:text-white transition">Process</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-4 text-xs sm:text-sm">Apply</h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li><a href="#apply" className="hover:text-white transition">Start Application</a></li>
                  <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
                  <li><a href="#" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-4 text-xs sm:text-sm">Legal</h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
              <p>&copy; 2024 Sasinelwa Training Academy. All rights reserved. SANC Accredited.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition">Privacy</a>
                <a href="#" className="hover:text-white transition">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}