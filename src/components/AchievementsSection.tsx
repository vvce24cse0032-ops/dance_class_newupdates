import { useState } from 'react';
import { PRESS_ITEMS } from '../data/siteData';
import { Newspaper, ChevronDown, ChevronUp, ExternalLink, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LightboxModal from './LightboxModal';

export default function AchievementsSection() {
  const [isPressOpen, setIsPressOpen] = useState(false);
  const [modalImage, setModalImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  return (
    <section id="achievements" className="py-20 md:py-32 px-6 bg-[#fcf9f5] relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="kicker">Recognition</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a0404] uppercase tracking-tight royal-font">
            Achievements &amp; Press
          </h2>
          <div className="section-divider" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 font-light text-base md:text-lg">
            A growing record of milestones, honours and recognitions earned by our students and institute. Send us your latest achievement to feature it here.
          </p>
        </motion.div>

        {/* Press Toggle Header */}
        <div className="text-center mb-8">
          <span className="kicker">Media Features</span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#4a0404] uppercase tracking-tight royal-font mb-6">
            In The Press
          </h3>

          <button
            type="button"
            onClick={() => setIsPressOpen(!isPressOpen)}
            className="group inline-flex items-center gap-3.5 bg-white border-2 border-[#d4af37] rounded-full pl-3 pr-7 py-2.5 mx-auto shadow-md hover:shadow-xl hover:border-[#4a0404] transition-all duration-300"
          >
            <span className="w-10 h-10 rounded-full bg-[#4a0404] text-[#d4af37] flex items-center justify-center text-sm shrink-0 shadow-inner">
              <Newspaper className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#4a0404]">
              {isPressOpen ? 'Hide Press Coverage' : `View Press Coverage (${PRESS_ITEMS.length})`}
            </span>
            {isPressOpen ? (
              <ChevronUp className="w-4 h-4 text-[#4a0404]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#4a0404] group-hover:translate-y-0.5 transition-transform" />
            )}
          </button>
        </div>

        {/* Press Grid */}
        <AnimatePresence>
          {isPressOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-8 pt-4">
                {PRESS_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    onClick={() =>
                      setModalImage({
                        src: item.image,
                        title: item.title,
                        subtitle: `${item.publication} ${item.date ? `• ${item.date}` : ''}`,
                      })
                    }
                    className="info-card overflow-hidden block group rounded-2xl border border-[#eee2c0] bg-white cursor-pointer hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="h-52 bg-stone-50 flex items-center justify-center overflow-hidden border-b border-stone-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-3 py-1 bg-[#f3e6c0] text-[#8a6d1f] rounded-full mb-3">
                          {item.publication} {item.date ? `• ${item.date}` : ''}
                        </span>
                        <h4 className="text-base font-bold text-[#4a0404] mb-2 royal-font leading-snug">
                          {item.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-1.5 text-[#8a6d1f] text-[10px] font-bold uppercase tracking-widest mt-4 pt-3 border-t border-gray-100 group-hover:text-[#4a0404] transition-colors">
                        <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>View Article</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-auto group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox for Press Clipping */}
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
