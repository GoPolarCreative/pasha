import { useScrollFade } from '../hooks/useScrollFade';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "I couldn't be happier with the work Pasha Epoxy Co did in my house. From start to finish he was incredibly professional, reliable and clearly takes pride in what he does. The quality of the epoxy flooring is outstanding and the final result completely transformed the space. If you're looking for high-quality epoxy flooring and someone you can trust, I highly recommend him.",
    name: 'George K',
    location: 'Sydney',
  },
  {
    text: 'Pasha did an incredible job with the epoxy. The finish is flawless and completely transformed the space. He was professional, punctual, and clearly takes pride in his work. You can tell he really cares about the quality of the result and making sure the client is happy. Highly recommend Pasha if you\'re looking for someone reliable who delivers amazing epoxy work.',
    name: 'Grace T',
    location: 'Sydney',
  },
  {
    text: "Highly recommend Pasha Epoxy Co! The transformation they did our garage floor is honestly incredible — it went from dull and worn to a clean, modern \"cookies & cream\" finish. The quality of the work is top-notch, and the attention to detail really shows. Super professional, easy to deal with, and the final result exceeded our expectations. Couldn't be happier!",
    name: 'Asrin A',
    location: 'Sydney',
  },
  {
    text: "Absolute loved the service from Pasha! 5/5 star service, quality and price! It's been so hard finding someone I can trust with a great price and I couldn't be happier with the team. Thank you so much Pasha for transforming my garage, will definitely recommend you to friends and family!",
    name: 'Harley K',
    location: 'Sydney',
  },
  {
    text: "If you're looking to get your floors done I would recommend Pasha. The final result was stunning and exactly what he promised — you can tell that Pasha takes pride in his work and ensures that the job is done to a high standard. Very professional and reassuring, explaining exactly how he executes the plan with constant updates. Shows up on time and does the job like it's his own space.",
    name: 'Tarek A',
    location: 'Sydney',
  },
  {
    text: "Super happy with how the epoxy turned out — looks super clean & professional. It completely transformed the place. Would definitely recommend!!!",
    name: 'Zaakirah K',
    location: 'Sydney',
  },
];

function StarRow() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="text-[#c0c0c0] fill-[#c0c0c0]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const headingRef = useScrollFade();
  const gridRef = useScrollFade();

  return (
    <section id="testimonials" className="bg-[#0a0a0a] py-24 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-[#a8a8a8] text-xs tracking-widest uppercase font-medium mb-3">
            Client Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>
          <div className="mt-4 w-16 h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #c0c0c0, transparent)' }} />
        </div>

        <div ref={gridRef} className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map(({ text, name, location }) => (
            <div
              key={name}
              className="break-inside-avoid rounded-lg p-7 relative"
              style={{
                background: '#141414',
                border: '1px solid rgba(192,192,192,0.1)',
              }}
            >
              <div className="silver-quote mb-2 select-none">"</div>
              <StarRow />
              <p className="text-[#aaa] text-sm leading-[1.85] mb-6">{text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-[#0a0a0a]"
                  style={{ background: 'linear-gradient(135deg, #c0c0c0, #a0a0a0)' }}
                >
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{name}</p>
                  <p className="text-[#666] text-xs">{location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
