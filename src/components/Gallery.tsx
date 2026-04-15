import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { useScrollFade } from '../hooks/useScrollFade';

import img1 from '../assets/gallery/1.png';
import img2 from '../assets/gallery/2.png';
import img3 from '../assets/gallery/IMG_0057.png';
import img4 from '../assets/gallery/4.png';
import img5 from '../assets/gallery/5.png';

const photos = [
  { src: img1, label: 'Flake Epoxy — Double Garage' },
  { src: img2, label: 'Flake Epoxy — Internal Space' },
  { src: img3, label: 'Flake Epoxy — Full Broadcast System' },
  { src: img4, label: 'Flake Epoxy — Under Application' },
  { src: img5, label: 'Metallic Epoxy — Commercial Showroom' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const headingRef = useScrollFade();

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() =>
    setLightbox((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)), []);
  const next = useCallback(() =>
    setLightbox((i) => (i === null ? null : (i + 1) % photos.length)), []);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, prev, next]);

  return (
    <section id="gallery" className="py-24 relative bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={headingRef} className="text-center mb-14">
          <p className="text-[#a8a8a8] text-xs tracking-widest uppercase font-medium mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Recent Projects
          </h2>
          <div className="mt-4 w-16 h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #c0c0c0, transparent)' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-lg card-hover focus:outline-none${i === 4 ? ' sm:col-span-2 lg:col-span-1' : ''}`}
              style={{
                aspectRatio: '16/9',
                border: '1px solid rgba(192,192,192,0.08)',
              }}
            >
              <img
                src={photo.src}
                alt={photo.label}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-white text-sm font-medium">{photo.label}</p>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
                <Expand size={14} className="text-white" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#666] text-sm">
            More photos available on{' '}
            <span className="text-[#a8a8a8] font-medium">Instagram @pashaepoxyco</span>
          </p>
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10 border border-white/10"
          >
            <X size={18} className="text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 sm:left-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/10"
          >
            <ChevronLeft size={22} className="text-white" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] mx-14 sm:mx-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].label}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-[#c0c0c0] text-sm font-medium">{photos[lightbox].label}</p>
              <p className="text-[#555] text-xs mt-1">{lightbox + 1} / {photos.length}</p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 sm:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/10"
          >
            <ChevronRight size={22} className="text-white" />
          </button>
        </div>
      )}
    </section>
  );
}
