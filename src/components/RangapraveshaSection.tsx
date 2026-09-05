import { useState } from 'react';
import { RANGAPRAVESHA_DATA } from '../data/siteData';
import { Calendar, MapPin, UserCheck, MailOpen, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import LightboxModal from './LightboxModal';

export default function RangapraveshaSection() {
  const [activeYear, setActiveYear] = useState('2025');
  const [modalImage, setModalImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const currentYearData = RANGAPRAVESHA_DATA.find((g) => g.year === activeYear);

  return (
    <section id="rangapravesha" className="py-20 md:py-32 px-6 bg-white relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="kicker">A Sacred Milestone</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a0404] uppercase tracking-tight royal-font">
            Rangavidhi Praveshika
          </h2>
          <div className="section-divider" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 font-light text-base md:text-lg">
            A living record of our disciples&apos; Rangapravesha — the solo stage debut marking years of disciplined training. Choose a year to see milestone dates, chief guests, venues, invitations, and brochures.
          </p>
        </motion.div>

        {/* Year Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          {RANGAPRAVESHA_DATA.map((group) => {
            const isSelected = activeYear === group.year;
            return (
              <button
                key={group.year}
                onClick={() => setActiveYear(group.year)}
                className={`px-8 py-2.5 rounded-full font-bold text-sm tracking-widest transition-all duration-300 ${
                  isSelected
                    ? 'btn-royal shadow-lg scale-105'
                    : 'bg-stone-100 text-[#4a0404] hover:bg-stone-200 border border-[#d4af37]/30'
                }`}
              >
                Yr: {group.year}
              </button>
            );
          })}
        </div>

        {/* Active Year Panel */}
        {currentYearData && (
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-8"
          >
            {currentYearData.entries.map((entry, index) => (
              <div key={index} className="space-y-6">
                {/* Main Card */}
                <div className="info-card overflow-hidden md:grid md:grid-cols-[280px_1fr] bg-white border border-[#d4af37]/25 shadow-md rounded-2xl">
                  {entry.portrait && (
                    <div className="h-64 md:h-full bg-stone-100 overflow-hidden">
                      <img
                        src={entry.portrait}
                        alt={entry.title || 'Disciple portrait'}
                        loading="lazy"
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="p-7 md:p-10 flex flex-col justify-between">
                    <div>
                      {entry.title && (
                        <h3 className="text-2xl md:text-3xl font-bold text-[#4a0404] mb-1 royal-font">
                          {entry.title}
                        </h3>
                      )}
                      <p className="text-[#aa8a2e] text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        {entry.date}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700 mb-8 border-t border-b border-gray-100 py-4">
                        <div className="flex items-start gap-2.5">
                          <UserCheck className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                          <div>
                            <strong className="text-[#4a0404] block text-xs uppercase tracking-wider mb-0.5">
                              Guests of Honour
                            </strong>
                            <span className="text-xs leading-relaxed text-gray-600">{entry.guests}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                          <div>
                            <strong className="text-[#4a0404] block text-xs uppercase tracking-wider mb-0.5">
                              Venue
                            </strong>
                            <span className="text-xs leading-relaxed text-gray-600">{entry.venue}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3">
                      {entry.invitationUrl && (
                        <button
                          onClick={() =>
                            setModalImage({
                              src: entry.invitationUrl!,
                              title: `${entry.title} — Invitation`,
                              subtitle: entry.date,
                            })
                          }
                          className="btn-outline px-6 py-2.5 rounded-full text-[10px] tracking-widest inline-flex items-center gap-2"
                        >
                          <MailOpen className="w-3.5 h-3.5 text-[#d4af37]" />
                          View Invitation
                        </button>
                      )}

                      {entry.brochureUrl && (
                        <button
                          onClick={() =>
                            setModalImage({
                              src: entry.brochureUrl!,
                              title: `${entry.title} — Brochure`,
                              subtitle: entry.date,
                            })
                          }
                          className="btn-outline px-6 py-2.5 rounded-full text-[10px] tracking-widest inline-flex items-center gap-2"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
                          View Brochure
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Sub Disciples Grid (e.g. 2025 joint event with Poornima, Prarthana, Vandana) */}
                {entry.disciples && (
                  <div className="grid md:grid-cols-3 gap-6 pt-2">
                    {entry.disciples.map((disciple, dIdx) => (
                      <div
                        key={dIdx}
                        className="info-card overflow-hidden bg-white border border-[#d4af37]/20 rounded-2xl flex flex-col"
                      >
                        {disciple.portrait && (
                          <div className="h-60 overflow-hidden bg-stone-100">
                            <img
                              src={disciple.portrait}
                              alt={disciple.name}
                              loading="lazy"
                              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                        <div className="p-5 text-center flex-1 flex flex-col justify-between">
                          <h4 className="text-lg font-bold text-[#4a0404] mb-3 royal-font">
                            {disciple.name}
                          </h4>
                          {disciple.brochureUrl && (
                            <button
                              onClick={() =>
                                setModalImage({
                                  src: disciple.brochureUrl!,
                                  title: `${disciple.name} — Brochure`,
                                  subtitle: 'Rangavidhipraveshika 2025',
                                })
                              }
                              className="btn-outline px-5 py-2 rounded-full text-[10px] tracking-widest inline-flex items-center justify-center gap-2 mx-auto"
                            >
                              <BookOpen className="w-3 h-3 text-[#d4af37]" />
                              View Brochure
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Lightbox for Invitation & Brochure */}
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
