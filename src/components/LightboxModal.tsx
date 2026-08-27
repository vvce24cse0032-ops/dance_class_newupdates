import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  onPrev?: () => void;
  onNext?: () => void;
  hasNavigation?: boolean;
}

export default function LightboxModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt = 'Viewing Image',
  title,
  subtitle,
  onPrev,
  onNext,
  hasNavigation = false,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (hasNavigation && e.key === 'ArrowLeft' && onPrev) onPrev();
      if (hasNavigation && e.key === 'ArrowRight' && onNext) onNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, hasNavigation, onPrev, onNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md">
          {/* Backdrop click to close */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/25 flex items-center justify-center transition"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          {hasNavigation && onPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous image"
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/80 flex items-center justify-center transition border border-white/10"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
          )}

          {hasNavigation && onNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next image"
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/80 flex items-center justify-center transition border border-white/10"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          )}

          {/* Image & Caption container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 max-w-[94vw] max-h-[86vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-[92vw] max-h-[78vh] object-contain rounded-lg border-2 border-[#d4af37]/40 shadow-2xl bg-black/40"
            />

            {(title || subtitle) && (
              <div className="mt-3 text-center px-4 max-w-xl">
                {title && <h4 className="text-white font-semibold text-sm md:text-base royal-font">{title}</h4>}
                {subtitle && <p className="text-[#d4af37] text-xs font-medium uppercase tracking-wider mt-0.5">{subtitle}</p>}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
