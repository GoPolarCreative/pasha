import { useState, useEffect } from 'react';
import logoSrc from '../assets/Logo2.png';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-sm shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[70px]">
        <a href="#" className="select-none flex items-center">
          <img
            src={logoSrc}
            alt="Pasha Epoxy Co"
            className="h-10 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 8px rgba(192,192,192,0.15))' }}
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[#c0c0c0] hover:text-white text-sm font-medium transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="btn-ghost px-5 py-2.5 rounded text-sm tracking-wide"
          >
            Get a Free Quote
          </a>
        </div>

        <button
          className="md:hidden text-[#c0c0c0] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 backdrop-blur-sm border-t border-white/5 px-5 pb-6 pt-4 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[#c0c0c0] hover:text-white text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-silver inline-block text-center px-5 py-3 rounded text-sm tracking-wide mt-1"
            onClick={() => setMenuOpen(false)}
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </nav>
  );
}
