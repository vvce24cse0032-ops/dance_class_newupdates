import { useState, useEffect, useRef, useCallback } from 'react';
import { GALLERY_IMAGES } from '../data/siteData';
import { Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LightboxModal from './LightboxModal';

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, []);

  // Automatic slideshow timer
  useEffect(() => {
    if (isPaused || isLightboxOpen) return;
    timerRef.current = setTimeout(() => {
      handleNext();
    }, 4500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isPaused, isLightboxOpen, handleNext]);

  return (
    <section id="gallery" className="py-20 md:py-32 px-6 bg-white relative">
      <div className="container mx-auto text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="kicker">Moments Captured</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a0404] uppercase tracking-tight royal-font">
            Photo Gallery
          </h2>
          <div className="section-divider mb-10 md:mb-14" />
        </motion.div>

        {/* Featured Showcase Slide */}
        <div
          className="relative max-w-4xl mx-auto aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-black/90 cursor-pointer group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => setIsLightboxOpen(true)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={GALLERY_IMAGES[currentIndex].src}
              alt={GALLERY_IMAGES[currentIndex].alt}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Hover overlay hint */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
            <div className="flex justify-end">
              <span className="bg-black/60 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" /> Click to Expand
              </span>
            </div>
            <div className="text-left text-white">
              <p className="text-sm font-medium">{GALLERY_IMAGES[currentIndex].alt}</p>
              <p className="text-xs text-[#d4af37] font-semibold">
                Photo {currentIndex + 1} of {GALLERY_IMAGES.length}
              </p>
            </div>
          </div>

          {/* Prev/Next overlay controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 text-white/90 hover:bg-black/80 hover:text-white flex items-center justify-center transition border border-white/20 opacity-80 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 text-white/90 hover:bg-black/80 hover:text-white flex items-center justify-center transition border border-white/20 opacity-80 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {GALLERY_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-[#d4af37]' : 'w-2 bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Reel */}
        <div className="mt-8 flex justify-center gap-2.5 overflow-x-auto py-2 px-4 no-scrollbar">
          {GALLERY_IMAGES.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 transition-all ${
                idx === currentIndex
                  ? 'border-[#d4af37] scale-105 shadow-md ring-2 ring-[#d4af37]/30'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        <p className="mt-6 text-[#aa8a2e] text-xs font-bold uppercase tracking-[0.3em]">
          Tap photo to view high-resolution gallery
        </p>
      </div>

      {/* Lightbox for Gallery */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageSrc={GALLERY_IMAGES[currentIndex].src}
        imageAlt={GALLERY_IMAGES[currentIndex].alt}
        title={GALLERY_IMAGES[currentIndex].alt}
        subtitle={`Photo ${currentIndex + 1} of ${GALLERY_IMAGES.length}`}
        hasNavigation={true}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
