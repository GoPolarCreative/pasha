import { useScrollFade } from '../hooks/useScrollFade';
import { User, Wrench, Award } from 'lucide-react';

const reasons = [
  {
    icon: User,
    title: 'Owner on Every Job',
    desc: 'The person quoting is the same person installing. No subcontractors, no handoffs — consistent quality every single time.',
  },
  {
    icon: Wrench,
    title: 'No Shortcuts on Prep',
    desc: "Proper surface preparation is where most epoxy failures start. We grind, clean and profile every substrate properly — we don't skip it.",
  },
  {
    icon: Award,
    title: 'APC Advantage Products',
    desc: 'We use industry-leading APC systems engineered to last — not just look good on day one. Premium products, applied properly.',
  },
];

export default function WhyUs() {
  const headingRef = useScrollFade();
  const cardsRef = useScrollFade();

  return (
    <section id="why" className="py-24 relative" style={{ background: '#0d0d0d' }}>
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-[#a8a8a8] text-xs tracking-widest uppercase font-medium mb-3">
            The Difference
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Why Pasha Epoxy?
          </h2>
          <div className="mt-4 w-16 h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #c0c0c0, transparent)' }} />
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col gap-5"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(192,192,192,0.1), rgba(192,192,192,0.04))',
                  border: '1px solid rgba(192,192,192,0.15)',
                }}
              >
                <Icon size={24} className="text-[#c0c0c0]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-3">{title}</h3>
                <p className="text-[#888] text-sm leading-[1.8]">{desc}</p>
              </div>
              <div
                className="h-px w-12"
                style={{ background: 'linear-gradient(90deg, rgba(192,192,192,0.4), transparent)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
