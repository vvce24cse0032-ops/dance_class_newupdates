import { useState, FormEvent } from 'react';
import { CONTACT_DATA } from '../data/siteData';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickEnquiryModal({ isOpen, onClose }: QuickEnquiryModalProps) {
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
    const subject = encodeURIComponent(`Nruthyathi Kalaashaale Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_DATA.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#d4af37]/30 p-6 sm:p-8 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#4a0404] royal-font mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Your enquiry has been prepared in your email client. You can also call us directly at{' '}
                  <a href={CONTACT_DATA.phoneHref} className="text-[#aa8a2e] font-semibold underline">
                    {CONTACT_DATA.phone}
                  </a>
                  .
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="btn-royal px-6 py-2.5 rounded-full text-xs font-bold"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-5 text-center">
                  <span className="kicker">Get In Touch</span>
                  <h3 className="text-2xl font-bold text-[#4a0404] royal-font">
                    Admissions &amp; Enquiries
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Nruthyathi Kalaashaale, Vivekanandanagar, Mysuru
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priyadarshini"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#d4af37] outline-none text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#d4af37] outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#d4af37] outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Area of Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#d4af37] outline-none text-xs bg-white text-gray-800"
                    >
                      <option value="Bharatanatyam Classes (Beginner/Intermediate/Advanced)">
                        Bharatanatyam Classes
                      </option>
                      <option value="Rangapravesha Training & Mentorship">
                        Rangapravesha Mentorship
                      </option>
                      <option value="Workshops & Masterclasses">Workshops &amp; Masterclasses</option>
                      <option value="Event Invitations & Performances">
                        Event Invitations
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Message
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Age of student, previous experience, etc..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#d4af37] outline-none text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-royal w-full py-3 rounded-xl font-bold text-xs tracking-widest flex items-center justify-center gap-2 mt-4"
                  >
                    <Send className="w-4 h-4" /> Send Enquiry
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
