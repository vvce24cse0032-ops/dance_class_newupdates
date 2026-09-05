import { useState } from 'react';
import { NOTABLE_PERFORMANCES, NotablePerformanceItem } from '../data/siteData';
import { MapPin, Sparkles, Image as ImageIcon, Award } from 'lucide-react';
import { motion } from 'motion/react';
import LightboxModal from './LightboxModal';

export default function NotablePerformancesSection() {
  const [modalImage, setModalImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  return (
    <section id="notable-performances" className="py-20 md:py-32 px-6 bg-[#faf6f0] border-t border-[#d4af37]/20 relative">
      {/* Classical ambient background aura */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-[#4a0404]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="kicker">Prestigious Stages &amp; Sacred Shrines</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a0404] uppercase tracking-tight royal-font">
            Notable Performances
          </h2>
          <div className="section-divider" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 font-light text-base md:text-lg">
            A chronicle of historic performances, sacred temple offerings, and state cultural festivals graced by Team Nruthyathi and disciples of Nruthyathi Kalaashaale.
          </p>
        </motion.div>

        {/* Performances Presentation Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {NOTABLE_PERFORMANCES.map((item: NotablePerformanceItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="bg-white rounded-2xl border border-[#d4af37]/30 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative h-64 sm:h-72 bg-stone-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 bg-[#4a0404]/90 backdrop-blur-sm text-[#f5df98] text-[10px] font-bold uppercase tracking-widest rounded-full border border-[#d4af37]/40 shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#d4af37]" />
                    {item.category}
                  </span>
                </div>

                {/* Lightbox Preview Button */}
                <button
                  onClick={() =>
                    setModalImage({
                      src: item.image,
                      title: item.title,
                      subtitle: `${item.category} · ${item.location}`,
                    })
                  }
                  className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-[#4a0404] px-3.5 py-1.5 rounded-full shadow-md text-xs font-semibold flex items-center gap-1.5 transition-transform hover:scale-105"
                  aria-label={`View full image for ${item.title}`}
                >
                  <ImageIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="text-[10px] uppercase tracking-wider font-bold">Enlarge</span>
                </button>
              </div>

              {/* Textual Details */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#aa8a2e] font-semibold mb-2 uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#4a0404] royal-font mb-3 tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-gray-800 text-sm font-medium leading-relaxed mb-3">
                    {item.summary}
                  </p>

                  <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Footer Badges & Indicator */}
                <div className="pt-4 border-t border-[#d4af37]/15 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-[#f9f5f0] text-[#55473f] text-[10px] font-semibold tracking-wider rounded-md border border-[#d4af37]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#8c6d1d]">
                    <Award className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Nruthyathi Repertoire</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
        imageSrc={modalImage?.src || ''}
        title={modalImage?.title}
        subtitle={modalImage?.subtitle}
      />
    </section>
  );
}
