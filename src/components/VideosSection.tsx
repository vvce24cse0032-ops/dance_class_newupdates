import { VIDEO_MILESTONES } from '../data/siteData';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function VideosSection() {
  return (
    <section id="performances" className="py-20 md:py-32 px-6 bg-[#fcf9f5] relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="kicker">Watch &amp; Witness</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a0404] uppercase tracking-tight royal-font">
            Milestone Recitals
          </h2>
          <div className="section-divider" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 font-light text-base md:text-lg">
            Experience the divine grace, intricate footwork, and expressive abhinaya of our disciples in performance.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {VIDEO_MILESTONES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#d4af37]/25 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${item.youtubeId}`}
                  title={`${item.title} - ${item.subtitle}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-5 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[#4a0404] text-lg royal-font mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#aa8a2e] text-xs font-semibold tracking-wider uppercase">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-1.5 text-gray-500 text-xs">
                  <Play className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
                  <span>Classical Performance</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
