/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import ArchiveSection from './components/ArchiveSection';
import NotablePerformancesSection from './components/NotablePerformancesSection';
import RangapraveshaSection from './components/RangapraveshaSection';
import AchievementsSection from './components/AchievementsSection';
import GallerySection from './components/GallerySection';
import VideosSection from './components/VideosSection';
import TrusteesSection from './components/TrusteesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuickEnquiryModal from './components/QuickEnquiryModal';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9f5f0] text-[#2d241e] selection:bg-[#d4af37] selection:text-white relative">
      {/* Sticky Top Navigation */}
      <Navbar onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      <main>
        {/* Cinematic Hero */}
        <Hero onOpenEnquiry={() => setIsEnquiryOpen(true)} />

        {/* Legacy & About Founder Guru */}
        <AboutSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />

        {/* Grand Events (Upcoming & Annual) */}
        <EventsSection />

        {/* Past Performances & Historical Archive */}
        <ArchiveSection />

        {/* Notable Performances & Sacred Stages */}
        <NotablePerformancesSection />

        {/* Sacred Milestones / Rangavidhi Praveshika Archive by Year */}
        <RangapraveshaSection />

        {/* Achievements & Press Coverage */}
        <AchievementsSection />

        {/* Interactive Photo Gallery with Lightbox */}
        <GallerySection />

        {/* Milestone Recital Videos */}
        <VideosSection />

        {/* Board of Trustees */}
        <TrusteesSection />

        {/* Direct Contact & Admissions Map */}
        <ContactSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}

