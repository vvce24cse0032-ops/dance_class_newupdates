import { HERO_DATA } from '../data/siteData';
import { ChevronDown, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenEnquiry?: () => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#1a0303]">
      {/* Background Image with Ambient Glow and Slow Pan */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-slow-pan opacity-50 md:opacity-55"
        style={{ backgroundImage: `url('${HERO_DATA.bgImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1a0303]/90 z-[1]" />

      {/* Royal Subtle Gold Particle Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none z-[2]" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 text-white/85 text-xs md:text-sm uppercase tracking-[0.5em] mb-4 font-semibold px-4 py-1.5 rounded-full border border-white/15 bg-black/20 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            {HERO_DATA.kicker}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-4 drop-shadow-2xl leading-tight tracking-tight royal-font"
          style={{
            background: 'linear-gradient(135deg, #ffffff 30%, #ecd580 80%, #d4af37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {HERO_DATA.titleLine1} <br className="sm:hidden" />
          <span className="font-light">{HERO_DATA.titleLine2}</span>
        </motion.h1>

        {/* Decorative Golden Divider */}
        <div className="flex items-center justify-center gap-4 my-6 opacity-80">
          <div className="h-[1px] w-12 md:w-28 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
          <div className="h-[1px] w-12 md:w-28 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-2 mb-10"
        >
          <p className="text-xl md:text-3xl text-white font-light tracking-[0.22em] uppercase">
            {HERO_DATA.subtitle}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[#d4af37] tracking-[0.38em] uppercase font-medium">
            {HERO_DATA.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#events"
            className="btn-royal px-8 md:px-10 py-3.5 md:py-4 rounded-full text-[10px] md:text-xs tracking-widest font-bold shadow-xl hover:shadow-[#d4af37]/30"
          >
            Upcoming Events
          </a>
          {onOpenEnquiry ? (
            <button
              onClick={onOpenEnquiry}
              className="border border-white/40 bg-white/5 hover:bg-white hover:text-[#4a0404] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-[10px] md:text-xs tracking-widest transition-all duration-300 backdrop-blur-sm"
            >
              Admissions & Enquiries
            </button>
          ) : (
            <a
              href="#contact"
              className="border border-white/40 bg-white/5 hover:bg-white hover:text-[#4a0404] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-[10px] md:text-xs tracking-widest transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </a>
          )}
        </motion.div>
      </div>

      {/* Down arrow link */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white text-xl animate-bounce p-2"
        aria-label="Scroll to About Section"
      >
        <ChevronDown className="w-6 h-6 text-[#d4af37]" />
      </a>
    </section>
  );
}
