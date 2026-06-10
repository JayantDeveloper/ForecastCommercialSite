import Reveal from './Reveal'

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="2" fill="rgba(96,165,250,0.2)" stroke="#60A5FA" strokeWidth="1.5"/>
        <rect x="12" y="2" width="8" height="8" rx="2" fill="rgba(96,165,250,0.1)" stroke="rgba(96,165,250,0.4)" strokeWidth="1.5"/>
        <rect x="2" y="12" width="8" height="8" rx="2" fill="rgba(96,165,250,0.1)" stroke="rgba(96,165,250,0.4)" strokeWidth="1.5"/>
        <rect x="12" y="12" width="8" height="8" rx="2" fill="rgba(96,165,250,0.2)" stroke="#60A5FA" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Gmail Scan',
    desc: 'Forecast reads your campus emails and automatically extracts events, deadlines, and opportunities — no manual searching required.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#60A5FA" strokeWidth="1.5"/>
        <circle cx="11" cy="11" r="3" fill="rgba(96,165,250,0.3)" stroke="#60A5FA" strokeWidth="1.5"/>
        <path d="M11 3v2M11 17v2M3 11h2M17 11h2" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Campus Map',
    desc: 'See exactly where things are happening in real-time, pinned directly onto your campus map. Know the vibe before you show up.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="4" width="16" height="14" rx="2.5" stroke="#60A5FA" strokeWidth="1.5"/>
        <path d="M7 2v4M15 2v4M3 9h16" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 13h2M11 13h2M7 16h2" stroke="rgba(96,165,250,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Calendar Sync',
    desc: 'Save any event to Google Calendar with a single tap. Forecast handles all the details so your schedule actually reflects your campus life.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M2 15 C4 11, 7 7, 11 11 S15 15, 18 8" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18.5" cy="7" r="2.5" fill="rgba(245,158,11,0.3)" stroke="#F59E0B" strokeWidth="1.5"/>
        <path d="M18.5 5V3M20.5 7h2M18.5 9v2M16.5 7h-2" stroke="rgba(245,158,11,0.5)" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    title: 'AI-Powered',
    desc: 'Gemini AI filters the noise and surfaces only what matters to you. The more you use Forecast, the sharper its signal gets.',
  },
]

export default function FeaturesSection() {
  return (
    <section style={{ background: '#080F1E' }} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-forecast-sky mb-3">
            How it works
          </p>
          <h2
            className="text-4xl md:text-5xl font-display font-bold text-white leading-tight"
            style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}
          >
            Built for how students
            <br />
            actually live
          </h2>
        </Reveal>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon, title, desc }, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              amount={0.25}
              whileHover={{ y: -4 }}
              className="gradient-border rounded-2xl p-6 hover:border-forecast-sky/30"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(96,165,250,0.08)' }}
              >
                {icon}
              </div>
              <h3
                className="text-white font-semibold text-base mb-2"
                style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}
              >
                {title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
