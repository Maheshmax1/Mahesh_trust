'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { GallerySection } from '@/components/GallerySection';
import { VolunteerSection } from '@/components/VolunteerSection';
import { DonateSection } from '@/components/DonateSection';
import { EventsSection } from '@/components/EventsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { SuccessStories } from '@/components/SuccessStories';
import { BlogSection } from '@/components/BlogSection';
import { TransparencySection } from '@/components/TransparencySection';
import { PartnersSection } from '@/components/PartnersSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { FloatingSocialWidget } from '@/components/FloatingSocialWidget';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-white">
      {/* Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Sections */}
      <Hero setActiveSection={setActiveSection} />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <GallerySection />
      <VolunteerSection />
      <DonateSection />
      <EventsSection />
      <TestimonialsSection />
      <SuccessStories />
      <BlogSection />
      <TransparencySection />
      <PartnersSection />
      <FAQSection />
      <ContactSection />

      {/* Floating social links dial widget */}
      <FloatingSocialWidget />

      {/* Footer */}
      <Footer setActiveSection={setActiveSection} />
    </main>
  );
}
