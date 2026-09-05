import { CONTACT_DATA } from '../data/siteData';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 text-center bg-white border-t border-[#d4af37]/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <a href="#home" className="inline-block mb-6 group">
          <img
            src="/assets/logo.png"
            alt="Nruthyathi Kalaashaale Logo"
            className="h-16 md:h-20 mx-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <h3 className="text-xl font-bold text-[#4a0404] tracking-tight uppercase royal-font mt-3">
            Nruthyathi <span className="text-[#d4af37] font-light">Kalaashaale</span>
          </h3>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#aa8a2e] font-semibold mt-1">
            Mysuru, Karnataka
          </p>
        </a>

        {/* Quick Contact Links */}
        <div className="flex justify-center flex-wrap gap-6 mb-8 text-gray-600 text-sm">
          <a
            href={CONTACT_DATA.emailHref}
            className="hover:text-[#4a0404] flex items-center gap-1.5 transition"
          >
            <Mail className="w-4 h-4 text-[#d4af37]" /> {CONTACT_DATA.email}
          </a>
          <span className="flex items-center gap-1.5 text-gray-500">
            <MapPin className="w-4 h-4 text-[#d4af37]" /> {CONTACT_DATA.location}
          </span>
        </div>

        <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6 opacity-60" />

        <p className="text-gray-400 text-[10px] tracking-[0.45em] uppercase font-medium">
          © {new Date().getFullYear()} Nruthyathi Kalaashaale ®. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
