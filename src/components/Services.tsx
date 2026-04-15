import { useScrollFade } from '../hooks/useScrollFade';
import { Layers, Sparkles, Home, Building2 } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Flake Epoxy',
    desc: 'Full broadcast flake systems for garages & driveways. Durable, slip-resistant, and built to handle daily punishment.',
  },
  {
    icon: Sparkles,
    title: 'Metallic Epoxy',
    desc: 'Decorative finishes with depth and movement — turning your floor into a statement piece.',
  },
  {
    icon: Home,
    title: 'Residential Epoxy',
    desc: 'Clean, durable coating for home floors that looks stunning and stands up to everyday life.',
  },
  {
    icon: Building2,
    title: 'Commercial Epoxy',
    desc: 'Heavy-duty systems for warehouses & commercial spaces — engineered for heavy traffic and longevity.',
  },
];

export default function Services() {
  const headingRef = useScrollFade();
  const gridRef = useScrollFade();

  return (
    <section id="services" className="bg-[#0a0a0a] py-24 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-[#a8a8a8] text-xs tracking-widest uppercase font-medium mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            What We Install
          </h2>
          <div className="mt-4 w-16 h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #c0c0c0, transparent)' }} />
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="card-hover rounded-lg p-7 flex flex-col gap-5 relative overflow-hidden"
              style={{
                background: '#1a1a1a',
                border: '1px solid rgba(192,192,192,0.1)',
                borderTop: '2px solid rgba(192,192,192,0.35)',
              }}
            >
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 0%, rgba(192,192,192,0.05) 0%, transparent 70%)',
                }}
              />
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(192,192,192,0.12), rgba(192,192,192,0.06))',
                  border: '1px solid rgba(192,192,192,0.15)',
                }}
              >
                <Icon size={20} className="text-[#c0c0c0]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
