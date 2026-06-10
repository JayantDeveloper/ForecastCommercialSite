import Reveal from './Reveal'

const sources = [
  { label: 'Scholarship Deadline',  tag: 'Email',     color: '#3B82F6', rotate: '-2deg',  delay: 0 },
  { label: 'CS Career Fair',        tag: 'TerpLink',  color: '#8B5CF6', rotate:  '1.5deg', delay: 0.05 },
  { label: 'Research Opportunity',  tag: 'Newsletter',color: '#10B981', rotate: '-1deg',  delay: 0.1 },
  { label: 'Club Info Session',     tag: 'Instagram', color: '#EC4899', rotate:  '2deg',  delay: 0.15 },
  { label: 'Study Abroad Deadline', tag: 'Canvas',    color: '#F59E0B', rotate: '-1.5deg', delay: 0.2 },
  { label: 'VC Panel Tonight',      tag: 'GroupMe',   color: '#06B6D4', rotate:  '1deg',  delay: 0.25 },
]

export default function ProblemSection() {
  return (
    <section className="bg-forecast-surface py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal className="mb-20 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-forecast-blue mb-3">
            The problem
          </p>
          <h2
            className="text-4xl md:text-5xl font-display font-bold text-forecast-slate leading-tight mb-5"
            style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}
          >
            You're enrolled.
            <br />
            But you're missing 90% of it.
          </h2>
          <p className="text-forecast-muted text-lg max-w-xl mx-auto">
            Campus life is fragmented across a dozen channels. Most students see maybe a fraction
            of what's actually available to them.
          </p>
        </Reveal>

        {/* Source cards + arrow + solution */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: chaos */}
          <div className="flex-1">
            <p className="text-forecast-muted text-sm font-medium mb-6 tracking-wide uppercase">
              Opportunities scattered across
            </p>
            <div className="grid grid-cols-2 gap-3">
              {sources.map(({ label, tag, color, rotate }, i) => (
                <div key={i} style={{ transform: `rotate(${rotate})` }}>
                  <Reveal delay={i * 0.06} y={24} amount={0.4}>
                    <div
                      className="bg-white rounded-xl px-4 py-3 border border-slate-100"
                      style={{
                        borderLeft: `3px solid ${color}`,
                        boxShadow: '0 4px 18px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.06)',
                      }}
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color }}>
                        {tag}
                      </span>
                      <p className="text-forecast-slate text-sm font-medium mt-0.5 leading-snug">{label}</p>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-3 text-forecast-blue">
            <div className="hidden lg:flex flex-col items-center gap-2">
              <div className="w-px h-10 bg-gradient-to-b from-transparent to-forecast-blue/40" />
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="rgba(37,99,235,0.2)" strokeWidth="1.5" />
                <path d="M11 16h10M17 12l4 4-4 4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="w-px h-10 bg-gradient-to-b from-forecast-blue/40 to-transparent" />
            </div>
            <div className="lg:hidden">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="rgba(37,99,235,0.2)" strokeWidth="1.5" />
                <path d="M16 11v10M12 17l4 4 4-4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Right: solution */}
          <div className="flex-1">
            <p className="text-forecast-muted text-sm font-medium mb-6 tracking-wide uppercase">
              Forecast brings it together
            </p>
            <div
              className="rounded-2xl p-6"
              style={{
                background: '#080F1E',
                border: '1px solid rgba(96,165,250,0.15)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(37,99,235,0.2)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                    <path d="M2 15 C4 11, 7 7, 11 11 S15 15, 18 8" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="18.5" cy="7" r="2" fill="#F59E0B" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>Forecast</div>
                  <div className="text-slate-500 text-xs">One unified view</div>
                </div>
              </div>

              <div className="space-y-2.5">
                {['Scholarship Deadline — 3 days', 'CS Career Fair — Today 2PM', 'Research Opportunity — Apply now', 'Club Info Session — Tue 6PM'].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-forecast-sky flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 text-xs text-slate-500">
                All sources synced · Updated now
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
