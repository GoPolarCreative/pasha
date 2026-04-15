import { useScrollFade } from '../hooks/useScrollFade';
import { Wrench, ShieldCheck, MessageSquare, Star } from 'lucide-react';

const items = [
  { icon: Wrench, label: 'Owner-Operated' },
  { icon: ShieldCheck, label: 'APC Advantage Trained' },
  { icon: MessageSquare, label: 'Free Quotes' },
  { icon: Star, label: '5-Star Google Reviews' },
];

export default function TrustBar() {
  const ref = useScrollFade();

  return (
    <section className="bg-[#111111] py-12 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(192,192,192,0.15), transparent)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(192,192,192,0.15), transparent)' }}
      />

      <div ref={ref} className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 text-center group"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(192,192,192,0.1), rgba(192,192,192,0.05))',
                  border: '1px solid rgba(192,192,192,0.15)',
                }}
              >
                <Icon size={20} className="text-[#c0c0c0]" />
              </div>
              <span className="text-sm font-medium text-[#e0e0e0] leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
