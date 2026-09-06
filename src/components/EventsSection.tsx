import { useState } from 'react';
import { EVENTS_DATA } from '../data/siteData';
import { Calendar, MapPin, UserCheck, MailOpen, BookOpen, Sparkles, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import LightboxModal from './LightboxModal';

export default function EventsSection() {
  const [modalImage, setModalImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  return (
    <section
      id="events"
      className="py-20 md:py-32 relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, #3d0303 0%, #200101 100%)' }}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto text-center px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 md:mb-20"
        >
          <span className="text-[#d4af37] font-bold tracking-[0.4em] text-xs uppercase mb-3 block font-sans">
            Mark Your Calendar
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest royal-font">
            Upcoming Events
          </h2>
          <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6 opacity-80" />
        </motion.div>

        {/* Events Grid */}
        <div className={`${EVENTS_DATA.length === 1 ? 'max-w-2xl' : 'grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl'} mx-auto items-stretch`}>
          {EVENTS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="p-[1px] bg-gradient-to-b from-[#d4af37]/40 via-[#d4af37]/20 to-transparent rounded-[2rem] flex"
            >
              <div className="w-full bg-[#340202] hover:bg-[#3d0303] rounded-[1.95rem] p-8 md:p-10 relative overflow-hidden transition-all duration-500 flex flex-col justify-between shadow-2xl border border-white/5 text-left">
                {/* Badge */}
                <div className="absolute top-0 right-0 px-5 py-2 bg-gradient-to-r from-[#d4af37] to-[#b89528] text-[#330202] font-bold text-[9px] uppercase tracking-widest rounded-bl-3xl font-sans shadow-md">
                  {item.badge}
                </div>

                <div>
                  {/* Portrait & Title Header */}
                  {item.portrait ? (
                    <div className="flex items-center gap-4 mb-5 pt-2">
                      <img
                        src={item.portrait}
                        alt={item.subtitle}
                        loading="lazy"
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#d4af37] shrink-0 shadow-md"
                      />
                      <div className="min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold text-[#d4af37] uppercase tracking-wide royal-font leading-tight">
                          {item.title}
                        </h3>
                        <h4 className="text-[#f5df98] text-xs uppercase tracking-[0.2em] font-medium font-sans mt-1">
                          {item.subtitle}
                        </h4>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-5 pt-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#d4af37] uppercase tracking-wide royal-font leading-tight">
                        {item.title}
                      </h3>
                      <h4 className="text-[#f5df98] text-xs md:text-sm uppercase tracking-[0.18em] font-medium font-sans mt-2.5 leading-snug">
                        {item.subtitle}
                      </h4>
                    </div>
                  )}

                  {/* Introductory Normal Body Text */}
                  <div className="mb-6 space-y-2 font-sans">
                    {item.introHeadline && (
                      <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
                        {item.introHeadline}
                      </p>
                    )}
                    <p className="text-white/80 text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Detailed Event Sections */}
                  {item.inauguration && (
                    <div className="mb-5 space-y-1 border-t border-[#d4af37]/25 pt-5 font-sans">
                      <p className="font-bold text-[#f5df98] text-sm md:text-base tracking-wide">
                        {item.inauguration.heading}
                      </p>
                      <p className="font-bold text-white text-base md:text-lg">
                        {item.inauguration.name}
                      </p>
                      {item.inauguration.roles.map((role, rIdx) => (
                        <p key={rIdx} className="font-bold text-white/90 text-xs md:text-sm">
                          {role}
                        </p>
                      ))}
                    </div>
                  )}

                  {item.presentation && (
                    <div className="mb-5 space-y-1 border-t border-white/10 pt-5 font-sans">
                      <p className="font-bold text-[#f5df98] text-sm md:text-base tracking-wide">
                        {item.presentation.heading}
                      </p>
                      <p className="font-bold text-white/80 text-xs md:text-sm">
                        {item.presentation.byLabel}
                      </p>
                      <p className="font-bold text-white text-sm md:text-base">
                        {item.presentation.byText}
                      </p>
                    </div>
                  )}

                  {item.accompanyingArtistes && (
                    <div className="mb-6 space-y-1.5 border-t border-white/10 pt-5 font-sans">
                      <p className="font-bold text-[#f5df98] text-sm md:text-base tracking-wide mb-2">
                        {item.accompanyingArtistes.heading}
                      </p>
                      <div className="space-y-1 text-white text-xs md:text-sm">
                        {item.accompanyingArtistes.artistes.map((artiste, aIdx) => (
                          <p key={aIdx} className="font-bold">
                            {artiste}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.eventSchedule && (
                    <div className="space-y-2 border-t border-[#d4af37]/25 pt-5 mb-8 font-sans">
                      <p className="font-bold text-white text-xs md:text-sm flex items-center gap-2.5">
                        <Calendar className="w-4 h-4 text-[#d4af37] shrink-0" />
                        <span className="font-bold">Date: {item.eventSchedule.date}</span>
                      </p>
                      <p className="font-bold text-white text-xs md:text-sm flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                        <span className="font-bold">Time: {item.eventSchedule.time}</span>
                      </p>
                      <p className="font-bold text-white text-xs md:text-sm flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                        <span className="font-bold">Venue: {item.eventSchedule.venue}</span>
                      </p>
                    </div>
                  )}

                  {/* Fallback Legacy Event Details if no structured schedule */}
                  {!item.eventSchedule && item.dateTime && (
                    <div className="space-y-2.5 text-white/75 text-xs font-sans mb-8 border-t border-white/10 pt-5">
                      <p className="flex items-start gap-2.5">
                        <Calendar className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{item.dateTime}</span>
                      </p>
                      {item.venue && (
                        <p className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                          <span>{item.venue}</span>
                        </p>
                      )}
                      {item.guests && (
                        <p className="flex items-start gap-2.5">
                          <UserCheck className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                          <span>
                            <span className="text-white/75">Guests of Honour: </span>
                            <span className="text-[#f5df98] font-semibold">{item.guests}</span>
                          </span>
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {item.invitationUrl && (
                    <button
                      onClick={() =>
                        setModalImage({
                          src: item.invitationUrl!,
                          title: `${item.title} — Invitation`,
                          subtitle: item.subtitle,
                        })
                      }
                      className="border border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#4a0404] px-5 py-2.5 rounded-full font-bold text-[9px] tracking-widest transition-all inline-flex items-center gap-2"
                    >
                      <MailOpen className="w-3.5 h-3.5" />
                      View Invitation
                    </button>
                  )}
                  {item.brochureUrl && (
                    <button
                      onClick={() =>
                        setModalImage({
                          src: item.brochureUrl!,
                          title: `${item.title} — Brochure`,
                          subtitle: item.subtitle,
                        })
                      }
                      className="border border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#4a0404] px-5 py-2.5 rounded-full font-bold text-[9px] tracking-widest transition-all inline-flex items-center gap-2"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      View Brochure
                    </button>
                  )}
                  {!item.invitationUrl && !item.brochureUrl && (
                    <div className="flex items-center gap-2 text-[#d4af37] text-xs font-semibold tracking-widest uppercase">
                      <Sparkles className="w-4 h-4 text-[#d4af37]" />
                      <span>Annual Showcase</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
