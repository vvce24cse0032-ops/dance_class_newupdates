import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Rangapravesha', href: '#rangapravesha' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Milestones', href: '#performances' },
    { name: 'Trustees', href: '#trustees' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-[5000] transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#d4af37]/20 py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-[#d4af37]/10 py-3.5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3.5 group">
          <img
            src="/assets/logo.png"
            alt="Nruthyathi Kalaashaale Logo"
            className="h-12 md:h-14 w-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden lg:block">
            <span className="text-lg md:text-xl font-bold text-[#4a0404] tracking-tight uppercase royal-font block leading-none">
              Nruthyathi <span className="text-[#d4af37] font-normal">Kalaashaale</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#aa8a2e] font-semibold block mt-1">
              Mysuru
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#55473f]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#4a0404] transition-colors relative py-1 hover:border-b-2 hover:border-[#d4af37]"
            >
              {link.name}
            </a>
          ))}
          {onOpenEnquiry ? (
            <button
              onClick={onOpenEnquiry}
              className="btn-royal px-4 py-2 rounded-full text-[10px] font-bold tracking-widest shadow-md"
            >
              Enquire
            </button>
          ) : (
            <a
              href="#contact"
              className="border border-[#4a0404]/30 text-[#4a0404] px-4 py-2 rounded-full font-bold hover:bg-[#4a0404] hover:text-white transition-all text-[10px]"
            >
              Contact
            </a>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="tel:+917760134034"
            className="p-2 text-[#4a0404] hover:text-[#d4af37] transition"
            aria-label="Call Institute"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="text-[#4a0404] p-2 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b-4 border-[#d4af37] shadow-xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-4 text-xs font-semibold uppercase tracking-widest text-[#4a0404]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-2 border-b border-gray-100 hover:text-[#d4af37] transition"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-royal text-center py-3 rounded-full text-[10px] tracking-widest font-bold"
              >
                Get In Touch
              </a>
              <div className="flex justify-center gap-4 text-gray-500 pt-2">
                <a href="tel:+917760134034" className="hover:text-[#4a0404] flex items-center gap-1.5 text-[11px] font-normal">
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" /> +91 77601 34034
                </a>
                <a href="mailto:contact@nruthyathikalaashaale.com" className="hover:text-[#4a0404] flex items-center gap-1.5 text-[11px] font-normal">
                  <Mail className="w-3.5 h-3.5 text-[#d4af37]" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
