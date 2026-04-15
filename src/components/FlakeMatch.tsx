import { ExternalLink } from 'lucide-react';
import { useScrollFade } from '../hooks/useScrollFade';
import hyperFlake from '../assets/colour-hyper-flake.webp';
import ultraFlake from '../assets/ultraflake.webp';

const products = [
  {
    src: ultraFlake,
    name: 'Ultra Flake\u00ae Gallery',
    href: 'https://ultraflake.com.au/',
    description: 'Classic white & black speckle system',
  },
  {
    src: hyperFlake,
    name: 'Hyper Flake\u00ae Gallery',
    href: 'https://hyperflake.com.au/',
    description: 'Dark premium flake system',
  },
];

export default function FlakeMatch() {
  const headingRef = useScrollFade();
  const gridRef = useScrollFade();

  return (
    <section className="py-24 relative bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={headingRef} className="text-center mb-14">
          <p className="text-[#a8a8a8] text-xs tracking-widest uppercase font-medium mb-3">
            Colour Options
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Find Your Perfect Match
          </h2>
          <div
            className="mt-4 w-16 h-px mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, #c0c0c0, transparent)' }}
          />
          <p className="mt-6 text-[#888] text-sm max-w-lg mx-auto leading-relaxed">
            Browse the full colour ranges from our trusted suppliers to choose the flake blend that suits your space.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {products.map(({ src, name, href, description }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 focus:outline-none"
              style={{ border: '1px solid rgba(192,192,192,0.1)' }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={src}
                  alt={name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div
                className="flex flex-col gap-3 p-5"
                style={{ background: '#111' }}
              >
                <div>
                  <h3 className="text-white font-semibold text-lg">{name}</h3>
                  <p className="text-[#777] text-xs mt-1">{description}</p>
                </div>
                <div className="flex items-center gap-2 text-[#c0c0c0] text-sm font-medium group-hover:text-white transition-colors duration-200">
                  <span>View Gallery</span>
                  <ExternalLink size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="https://vision.vantagroup.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)', border: '1px solid rgba(192,192,192,0.2)' }}
          >
            Want to visualise it in your space?
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
