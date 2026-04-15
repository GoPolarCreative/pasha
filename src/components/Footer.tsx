import { Phone, Mail } from 'lucide-react';
import logoSrc from '../assets/Logo2.png';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img
              src={logoSrc}
              alt="Pasha Epoxy Co"
              className="h-12 w-auto object-contain"
              style={{ filter: 'drop-shadow(0 0 8px rgba(192,192,192,0.12))' }}
            />
            <p className="text-[#555] text-sm">Sydney, NSW</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 text-sm">
            <a
              href="tel:0403111128"
              className="flex items-center gap-2 text-[#888] hover:text-[#c0c0c0] transition-colors duration-200"
            >
              <Phone size={14} />
              0403 111 128
            </a>
            <span className="hidden sm:block text-[#333]">·</span>
            <a
              href="mailto:arian@pashaepoxyco.com"
              className="flex items-center gap-2 text-[#888] hover:text-[#c0c0c0] transition-colors duration-200"
            >
              <Mail size={14} />
              arian@pashaepoxyco.com
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#444]">
          <p>© 2025 Pasha Epoxy Co. All rights reserved.</p>
          <p>
            Website by{' '}
            <a href="https://www.itscold.com.au" target="_blank" rel="noopener noreferrer" className="text-[#666] font-medium hover:text-[#888] transition-colors duration-200">Go Polar Creative</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
