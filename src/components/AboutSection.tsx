import { ABOUT_DATA } from '../data/siteData';
import { FileText, Mail, Sparkles, Award, Users, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  onOpenEnquiry?: () => void;
}

export default function AboutSection({ onOpenEnquiry }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-[#faf6f0] relative overflow-hidden">
      {/* Background classical watermark / motif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4a0404]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Guru Portrait Column */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-md">
              <div className="relative">
                {/* Refined portrait container without playful card rotations */}
                <div className="relative overflow-hidden rounded-xl border border-[#d4af37]/35 shadow-xl bg-stone-100">
                  <img
                    src={ABOUT_DATA.image}
                    alt="Smt. Anusha Varun - Nruthyathi Kalaashaale"
                    loading="lazy"
                    className="w-full h-auto object-cover object-center max-h-[520px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#200101]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5 text-center text-white">
                    <p className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-[#f5df98] royal-font">
                      Smt. Anusha Varun
                    </p>
                    <p className="text-[11px] text-white/80 uppercase tracking-widest font-sans mt-1">
                      Founder &amp; Artistic Director
                    </p>
                    <p className="text-[10px] text-[#d4af37] font-light mt-0.5">
                      Classical Bharatanatyam Excellence in Mysuru
                    </p>
                  </div>
                </div>

                {/* Subtle classic embellishment */}
                <div className="mt-4 flex items-center justify-center gap-3 text-xs text-stone-500 font-sans tracking-widest uppercase">
                  <div className="h-[1px] w-10 bg-[#d4af37]/40" />
                  <span className="flex items-center gap-1.5 text-[#8c6d1d]">
                    <Sparkles className="w-3 h-3 text-[#d4af37]" /> Vasundhara Style Lineage
                  </span>
                  <div className="h-[1px] w-10 bg-[#d4af37]/40" />
                </div>
              </div>
            </div>
          </div>

          {/* Guru Narrative & Profile Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="max-w-2xl">
              <span className="kicker">Guru&apos;s Profile &amp; Lineage</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4a0404] royal-font leading-tight mb-4">
                Smt. Anusha Varun
              </h2>
              <div className="h-[2px] w-20 bg-gradient-to-r from-[#d4af37] to-transparent mb-6" />

              <p className="text-gray-800 text-lg sm:text-xl leading-relaxed mb-5 font-light">
                Founder and Artistic Director of Nruthyathi Kalaashaale, <strong className="font-semibold text-[#4a0404]">Smt. Anusha Varun</strong> {ABOUT_DATA.highlight}
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 font-light">
                {ABOUT_DATA.body}
              </p>

              {/* Dignified Cultural Milestones (Typographic Highlights replacing card widgets) */}
              <div className="space-y-4 mb-10 border-y border-[#d4af37]/25 py-6 font-sans">
                <div className="flex items-start gap-3.5">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#f3e6c0]/70 text-[#8c6d1d] flex items-center justify-center shrink-0">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[#4a0404]">
                      500+ Students Trained
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      Nurturing young talents through disciplined pedagogical training, foundational adavus, and abhinaya.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#f3e6c0]/70 text-[#8c6d1d] flex items-center justify-center shrink-0">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[#4a0404]">
                      Vasundhara Bani Pedagogy
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      Preserving the athletic agility, sculptural karanas, and expressive richness of Karnataka Kalathilaka Guru Dr. Vasundhara Doraswamy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#f3e6c0]/70 text-[#8c6d1d] flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[#4a0404]">
                      Rangapravesha Solo Debuts
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      Mentoring accomplished disciples to full solo stage debuts accompanied by traditional live orchestra.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={ABOUT_DATA.profilePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-royal px-7 py-3.5 rounded-full text-[10px] tracking-widest font-bold inline-flex items-center gap-2 shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  View Guru&apos;s Profile (PDF)
                </a>
                {onOpenEnquiry ? (
                  <button
                    onClick={onOpenEnquiry}
                    className="btn-outline px-7 py-3.5 rounded-full text-[10px] tracking-widest inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Enquire Now
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className="btn-outline px-7 py-3.5 rounded-full text-[10px] tracking-widest inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Enquire Now
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
