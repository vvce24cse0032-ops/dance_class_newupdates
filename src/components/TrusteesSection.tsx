import { TRUSTEES_DATA } from '../data/siteData';
import { motion } from 'motion/react';

export default function TrusteesSection() {
  return (
    <section id="trustees" className="py-20 md:py-32 px-6 bg-white relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="kicker">Guiding the Institute</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a0404] uppercase tracking-tight royal-font">
            Board of Trustees
          </h2>
          <div className="section-divider" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 font-light text-base md:text-lg">
            The stewardship, passion, and vision guiding Nruthyathi Kalaashaale&apos;s pedagogical mission and cultural heritage.
          </p>
        </motion.div>

        {/* Trustees Grid */}
        <div className="grid sm:grid-cols-2 gap-10 max-w-2xl mx-auto">
          {TRUSTEES_DATA.map((trustee, idx) => (
            <motion.div
              key={trustee.name}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="info-card p-8 md:p-10 text-center bg-[#fcf9f5] border border-[#d4af37]/25 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative w-36 h-36 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-[#d4af37] scale-105" />
                <img
                  src={trustee.image}
                  alt={trustee.name}
                  loading="lazy"
                  className="w-full h-full rounded-full object-cover shadow-md"
                />
              </div>

              <h3 className="text-xl font-bold text-[#4a0404] mb-1.5 royal-font">
                {trustee.name}
              </h3>
              <p className="text-[#aa8a2e] text-xs font-bold uppercase tracking-widest">
                {trustee.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
