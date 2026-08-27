import { CONTACT_DATA } from '../data/siteData';
import { Phone, Mail, MapPin, Navigation, MessageCircle, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';

interface ContactSectionProps {
  onOpenEnquiry?: () => void;
}

export default function ContactSection({ onOpenEnquiry }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Bharatanatyam Classes (Beginner/Intermediate/Advanced)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Create mailto link as fallback/standard client-side email trigger
    const subject = encodeURIComponent(`Nruthyathi Kalaashaale Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_DATA.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-[#f9f5f0] border-t border-[#d4af37]/20 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="kicker">We&apos;d Love To Hear From You</span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#4a0404] uppercase tracking-tight royal-font">
            Contact &amp; Admissions
          </h2>
          <div className="section-divider" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 font-light text-base md:text-lg">
            Reach out for admissions, upcoming event passes, Rangapravesha bookings, or lecture-demonstration enquiries.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-14">
          {/* Phone */}
          <a
            href={CONTACT_DATA.phoneHref}
            className="info-card p-6 sm:p-8 bg-white border border-[#d4af37]/25 rounded-2xl text-center flex flex-col items-center group hover:-translate-y-1.5 transition-all"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#fff8e8] to-[#f3e6c0] text-[#aa8a2e] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">
              Direct Phone
            </h3>
            <p className="text-base sm:text-lg font-semibold text-[#4a0404] group-hover:text-[#aa8a2e] transition-colors">
              {CONTACT_DATA.phone}
            </p>
            <span className="text-[10px] text-gray-400 mt-2 uppercase tracking-wider">
              Tap to call
            </span>
          </a>

          {/* Email */}
          <a
            href={CONTACT_DATA.emailHref}
            className="info-card p-6 sm:p-8 bg-white border border-[#d4af37]/25 rounded-2xl text-center flex flex-col items-center group hover:-translate-y-1.5 transition-all"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#fff8e8] to-[#f3e6c0] text-[#aa8a2e] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">
              Email Us
            </h3>
            <p className="text-sm sm:text-base font-semibold text-[#4a0404] break-all group-hover:text-[#aa8a2e] transition-colors">
              {CONTACT_DATA.email}
            </p>
            <span className="text-[10px] text-gray-400 mt-2 uppercase tracking-wider">
              Tap to email
            </span>
          </a>

          {/* Location */}
          <a
            href={CONTACT_DATA.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="info-card p-6 sm:p-8 bg-white border border-[#d4af37]/25 rounded-2xl text-center flex flex-col items-center group hover:-translate-y-1.5 transition-all"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#fff8e8] to-[#f3e6c0] text-[#aa8a2e] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">
              Dance Institute
            </h3>
            <p className="text-base sm:text-lg font-semibold text-[#4a0404] group-hover:text-[#aa8a2e] transition-colors">
              {CONTACT_DATA.location}
            </p>
            <span className="text-[10px] text-gray-400 mt-2 uppercase tracking-wider flex items-center gap-1 justify-center">
              <Navigation className="w-3 h-3 text-[#d4af37]" /> Open in Google Maps
            </span>
          </a>
        </div>

        {/* Quick Enquiry Form Container */}
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-2xl border border-[#d4af37]/30 shadow-lg mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-[#4a0404] royal-font mb-2">
              Send an Enquiry
            </h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              Fill in your details and our team will get in touch with you shortly.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-[#4a0404] royal-font mb-2">
                Thank You for Your Enquiry!
              </h4>
              <p className="text-gray-600 text-sm mb-6">
                Your email client was opened. We look forward to welcoming you to Nruthyathi Kalaashaale.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline px-6 py-2.5 rounded-full text-xs"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ananya Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none text-sm text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none text-sm text-gray-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none text-sm text-gray-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Area of Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none text-sm text-gray-800 bg-white"
                >
                  <option value="Bharatanatyam Classes (Beginner/Intermediate/Advanced)">
                    Bharatanatyam Classes (Beginner / Intermediate / Advanced)
                  </option>
                  <option value="Rangapravesha Training & Mentorship">
                    Rangapravesha Training &amp; Mentorship
                  </option>
                  <option value="Workshops & Masterclasses">Workshops &amp; Masterclasses</option>
                  <option value="Event Invitations & Performances">
                    Event Invitations &amp; Performances
                  </option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Message / Questions
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the student's age, dance experience, or specific questions..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none text-sm text-gray-800 resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-royal w-full py-4 rounded-xl font-bold text-xs tracking-widest shadow-lg flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4" />
                Submit Enquiry
              </button>
            </form>
          )}
        </div>

        {/* Action Button for Map Navigation */}
        <div className="text-center">
          <a
            href={CONTACT_DATA.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-royal px-12 sm:px-16 py-4 sm:py-5 rounded-full font-bold text-xs inline-flex items-center gap-3 shadow-2xl tracking-widest"
          >
            <Navigation className="w-4 h-4" />
            Navigate to Institute in Mysuru
          </a>
        </div>
      </div>
    </section>
  );
}
