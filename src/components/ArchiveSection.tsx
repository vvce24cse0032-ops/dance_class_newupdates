import { useState } from 'react';
import { PAST_PERFORMANCES_DATA, PastPerformanceItem } from '../data/siteData';
import { Calendar, MapPin, Award, Sparkles, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';
import LightboxModal from './LightboxModal';

export default function ArchiveSection() {
  const [modalImage, setModalImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  return (
    <section id="archive" className="py-20 md:py-32 px-6 bg-[#f7f2ea] border-t border-[#d4af37]/20 relative">
      {/* Subtle ambient motif */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="kicker">Repertoire &amp; Heritage</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4a0404] uppercase tracking-tight royal-font">
            Past Performances
          </h2>
          <div className="section-divider" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 font-light text-base md:text-lg">
            A curated archive of thematic presentations, historic recitals, and landmark productions presented under our venerable lineage.
          </p>
        </motion.div>

        {/* Performances List / Grid */}
        <div className="space-y-10">
          {PAST_PERFORMANCES_DATA.map((item: PastPerformanceItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-[#d4af37]/25 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Visual Imagery */}
                {item.image && (
                  <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-stone-100 overflow-hidden group">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    {/* Badge Overlay */}
                    {item.badge && (
                      <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-[#4a0404]/90 backdrop-blur-sm text-[#f5df98] text-[10px] font-bold uppercase tracking-widest rounded-full border border-[#d4af37]/40 shadow-sm">
                        {item.badge}
                      </span>
                    )}

                    {/* Zoom Button */}
                    <button
                      onClick={() =>
                        setModalImage({
                          src: item.image!,
                          title: item.title,
                          subtitle: item.subtitle || 'Past Performance Archive',
                        })
                      }
                      className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-[#4a0404] p-2.5 rounded-full shadow-md text-xs font-semibold flex items-center gap-1.5 transition-transform hover:scale-105"
                      aria-label="View performance image"
                    >
                      <ImageIcon className="w-4 h-4 text-[#d4af37]" />
                      <span className="text-[10px] uppercase tracking-wider pr-1">View Image</span>
                    </button>
                  </div>
                )}

                {/* Performance Content */}
                <div className={`${item.image ? 'lg:col-span-7' : 'lg:col-span-12'} p-8 sm:p-10 flex flex-col justify-between`}>
                  <div>
                    {/* Header Details */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#aa8a2e] flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#d4af37]" /> Archived Presentation
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#4a0404] uppercase royal-font tracking-wide mb-2 leading-snug">
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="text-[#aa8a2e] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
                        {item.subtitle}
                      </p>
                    )}

                    <p className="text-gray-700 text-sm sm:text-base font-light leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Metadata Specs */}
                    <div className="grid sm:grid-cols-2 gap-3 py-4 border-t border-b border-[#d4af37]/15 text-xs text-gray-600 mb-6">
                      <div className="flex items-start gap-2.5">
                        <Calendar className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-gray-800 block">Performance Date</span>
                          <span>{item.date}</span>
                        </div>
                      </div>

                      {item.venue && (
                        <div className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-gray-800 block">Venue &amp; Location</span>
                            <span>{item.venue}</span>
                          </div>
                        </div>
                      )}

                      {(item.honouredGuests || item.guests) && (
                        <div className="sm:col-span-2 flex items-start gap-2.5 pt-2">
                          <Award className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                          <div className="w-full">
                            <span className="font-semibold text-gray-800 block text-xs uppercase tracking-wider mb-2">
                              Presented By / Honoured Guests
                            </span>
                            {item.honouredGuests && item.honouredGuests.length > 0 ? (
                              <div className="space-y-2 bg-[#fbf8f4] border border-[#d4af37]/35 rounded-xl p-4 shadow-sm">
                                {item.honouredGuests.map((guest, gIdx) => (
                                  <div
                                    key={gIdx}
                                    className="font-bold text-[#4a0404] text-sm sm:text-base tracking-wide flex items-center gap-2.5"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />
                                    <span className="font-bold">{guest}</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <span className="text-[#4a0404] font-bold text-sm block leading-relaxed">{item.guests}</span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#f9f5f0] text-[#55473f] text-[10px] font-semibold uppercase tracking-wider rounded-full border border-[#d4af37]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox for viewing performance images */}
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
