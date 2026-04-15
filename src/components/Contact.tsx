import { useState, FormEvent } from 'react';
import { useScrollFade } from '../hooks/useScrollFade';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const headingRef = useScrollFade();
  const contentRef = useScrollFade();

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'c397924c-9cda-43b8-bcef-aa7a11d836c9',
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setForm({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-[#1a1a1a] border border-[rgba(192,192,192,0.15)] rounded px-4 py-3.5 text-white text-sm placeholder:text-[#555] focus:outline-none focus:border-[rgba(192,192,192,0.45)] transition-colors duration-200';

  return (
    <section id="contact" className="py-24 relative" style={{ background: '#0d0d0d' }}>
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-[#a8a8a8] text-xs tracking-widest uppercase font-medium mb-3">
            Free Quotes
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Get Your Free Quote
          </h2>
          <p className="mt-4 text-[#888] text-sm sm:text-base">
            Call, SMS or fill out the form — Pasha will get back to you fast.
          </p>
          <div className="mt-4 w-16 h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #c0c0c0, transparent)' }} />
        </div>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-white font-semibold text-xl mb-6">Contact Details</h3>
              <div className="flex flex-col gap-5">
                <a
                  href="tel:0403111128"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-[rgba(192,192,192,0.35)]"
                    style={{
                      background: 'rgba(192,192,192,0.07)',
                      border: '1px solid rgba(192,192,192,0.15)',
                    }}
                  >
                    <Phone size={18} className="text-[#c0c0c0]" />
                  </div>
                  <div>
                    <p className="text-[#666] text-xs uppercase tracking-wider font-medium mb-0.5">Phone / SMS</p>
                    <p className="text-white font-medium text-lg group-hover:text-[#c0c0c0] transition-colors">0403 111 128</p>
                  </div>
                </a>

                <a
                  href="mailto:arian@pashaepoxyco.com"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-[rgba(192,192,192,0.35)]"
                    style={{
                      background: 'rgba(192,192,192,0.07)',
                      border: '1px solid rgba(192,192,192,0.15)',
                    }}
                  >
                    <Mail size={18} className="text-[#c0c0c0]" />
                  </div>
                  <div>
                    <p className="text-[#666] text-xs uppercase tracking-wider font-medium mb-0.5">Email</p>
                    <p className="text-white font-medium group-hover:text-[#c0c0c0] transition-colors">arian@pashaepoxyco.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(192,192,192,0.07)',
                      border: '1px solid rgba(192,192,192,0.15)',
                    }}
                  >
                    <MapPin size={18} className="text-[#c0c0c0]" />
                  </div>
                  <div>
                    <p className="text-[#666] text-xs uppercase tracking-wider font-medium mb-0.5">Location</p>
                    <p className="text-white font-medium">Sydney, NSW</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-lg p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(192,192,192,0.06) 0%, rgba(192,192,192,0.02) 100%)',
                border: '1px solid rgba(192,192,192,0.1)',
              }}
            >
              <p className="text-[#c0c0c0] text-sm font-semibold mb-2">Serving All of Sydney</p>
              <p className="text-[#666] text-sm leading-relaxed">
                We travel across Greater Sydney for residential and commercial epoxy projects. Get in touch to discuss your job — no job too big or small.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#888] text-xs uppercase tracking-wider font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[#888] text-xs uppercase tracking-wider font-medium mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="04XX XXX XXX"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className="block text-[#888] text-xs uppercase tracking-wider font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-[#888] text-xs uppercase tracking-wider font-medium mb-2">Job Details *</label>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your surface, location, approximate size..."
                rows={5}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-silver flex items-center justify-center gap-2.5 px-8 py-4 rounded text-sm tracking-wide font-semibold disabled:opacity-60 disabled:cursor-not-allowed mt-1"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#0a0a0a]/30 border-t-[#0a0a0a] rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Enquiry
                </>
              )}
            </button>

            {status === 'sent' && (
              <p className="text-[#c0c0c0] text-sm text-center font-medium mt-1">
                Enquiry sent! Pasha will be in touch shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center mt-1">
                Something went wrong. Please try calling directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
