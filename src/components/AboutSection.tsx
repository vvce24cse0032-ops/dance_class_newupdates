import { ABOUT_DATA } from '../data/siteData';
import { FileText, Mail, Award, Users, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  onOpenEnquiry?: () => void;
}

export default function AboutSection({ onOpenEnquiry }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-[#fcf9f5] relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="kicker">{ABOUT_DATA.kicker}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#4a0404] mb-6 leading-tight royal-font">
              {ABOUT_DATA.heading}
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-5 font-light">
              Founded by <strong className="font-semibold text-[#4a0404]">{ABOUT_DATA.founder}</strong>, Nruthyathi Kalaashaale {ABOUT_DATA.highlight}
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {ABOUT_DATA.body}
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 pt-2">
              <div className="bg-white p-4 rounded-xl border border-[#d4af37]/20 shadow-sm text-center">
                <Users className="w-5 h-5 mx-auto text-[#aa8a2e] mb-1.5" />
                <div className="text-xl font-bold text-[#4a0404] royal-font">500+</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Students Trained</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#d4af37]/20 shadow-sm text-center">
                <BookOpen className="w-5 h-5 mx-auto text-[#aa8a2e] mb-1.5" />
                <div className="text-xl font-bold text-[#4a0404] royal-font">Vasundhara</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Authentic Style</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#d4af37]/20 shadow-sm text-center col-span-2 sm:col-span-1">
                <Award className="w-5 h-5 mx-auto text-[#aa8a2e] mb-1.5" />
                <div className="text-xl font-bold text-[#4a0404] royal-font">Rangapravesha</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Stage Milestones</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={ABOUT_DATA.profilePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal px-7 py-3.5 rounded-full text-[10px] tracking-widest font-bold inline-flex items-center gap-2 shadow-lg"
              >
                <FileText className="w-4 h-4" />
                Guru&apos;s Profile
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
          </motion.div>

          {/* Right Column Image Framed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-4 border-2 border-[#d4af37]/30 rounded-3xl rotate-2 pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-md w-full bg-stone-100">
              <img
                src={ABOUT_DATA.image}
                alt="Nruthyathi Kalaashaale student performance"
                loading="lazy"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="p-4 bg-white/95 border-t border-[#d4af37]/20 text-center">
                <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#4a0404]">
                  Smt. Anusha Varun &amp; Disciples
                </p>
                <p className="text-[10px] text-gray-500 font-medium mt-0.5">
                  Classical Bharatanatyam Excellence in Mysuru
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
