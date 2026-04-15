import heroBg from '../assets/gallery/5.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Pasha Epoxy Co metallic floor"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.85) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)',
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-shimmer" />
        <div
          className="hero-shimmer"
          style={{ animationDelay: '3s', left: '30%' }}
        />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(192,192,192,0.15), transparent)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center py-32">
        <div className="mb-5 inline-flex items-center gap-2 border border-[#c0c0c0]/25 rounded-full px-4 py-1.5 text-xs text-[#c0c0c0] tracking-widest uppercase font-medium backdrop-blur-sm bg-black/20">
          Sydney, NSW · Owner-Operated
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
          Sydney's Epoxy
          <br />
          <span className="shimmer-text">Flooring Specialists</span>
        </h1>

        <p className="text-[#c0c0c0] text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-light drop-shadow-lg">
          Flake, metallic & solid colour epoxy for garages, driveways, warehouses
          and commercial spaces. Owner-operated. APC Advantage trained. Built to last.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="btn-silver px-8 py-4 rounded text-sm tracking-wide inline-block"
          >
            Get a Free Quote
          </a>
          <a
            href="#gallery"
            className="btn-ghost px-8 py-4 rounded text-sm tracking-wide inline-block"
          >
            View Our Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#c0c0c0]" />
        <div className="w-1 h-1 rounded-full bg-[#c0c0c0]" />
      </div>
    </section>
  );
}
