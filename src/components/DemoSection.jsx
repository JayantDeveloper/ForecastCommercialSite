import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const EVENTS = [
  { id: 0, x: '30%', y: '38%', title: 'CS Career Fair',       org: 'CS Department',   time: 'Today · 2PM · Iribe',   tag: 'Career',   tagColor: '#3B82F6' },
  { id: 1, x: '58%', y: '52%', title: 'Hackathon Kickoff',    org: 'Technica',         time: 'Sat · 6PM · Stamp',     tag: 'Event',    tagColor: '#8B5CF6' },
  { id: 2, x: '44%', y: '24%', title: 'Research Opportunity', org: 'UMD SURF Program', time: 'Deadline Fri',          tag: 'Research', tagColor: '#10B981' },
  { id: 3, x: '68%', y: '32%', title: 'Scholarship Deadline', org: 'Financial Aid',    time: '3 days left',           tag: 'Deadline', tagColor: '#F59E0B' },
  { id: 4, x: '22%', y: '62%', title: 'VC Panel Tonight',     org: 'Dingman Center',   time: 'Tonight · 5PM · VMP',   tag: 'Career',   tagColor: '#3B82F6' },
]

// Fake campus "streets" as SVG paths
function MapStreets() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 180 Q70 160 140 185 Q210 210 280 190" stroke="rgba(37,99,235,0.12)" strokeWidth="8" strokeLinecap="round"/>
      <path d="M0 260 Q80 245 140 265 Q200 280 280 260" stroke="rgba(37,99,235,0.08)" strokeWidth="6" strokeLinecap="round"/>
      <path d="M80 0 Q95 100 85 200 Q75 300 90 420" stroke="rgba(37,99,235,0.10)" strokeWidth="6" strokeLinecap="round"/>
      <path d="M180 0 Q185 80 178 180 Q170 280 185 420" stroke="rgba(37,99,235,0.08)" strokeWidth="5" strokeLinecap="round"/>
      <path d="M0 350 Q140 340 280 355" stroke="rgba(37,99,235,0.06)" strokeWidth="4" strokeLinecap="round"/>
      {/* Campus buildings */}
      <rect x="100" y="60" width="50" height="35" rx="3" fill="rgba(37,99,235,0.07)" stroke="rgba(37,99,235,0.15)" strokeWidth="1"/>
      <rect x="40" y="130" width="30" height="25" rx="2" fill="rgba(37,99,235,0.07)" stroke="rgba(37,99,235,0.12)" strokeWidth="1"/>
      <rect x="190" y="100" width="45" height="30" rx="3" fill="rgba(37,99,235,0.06)" stroke="rgba(37,99,235,0.12)" strokeWidth="1"/>
      <rect x="130" y="280" width="40" height="28" rx="2" fill="rgba(37,99,235,0.07)" stroke="rgba(37,99,235,0.12)" strokeWidth="1"/>
      <rect x="50" y="310" width="35" height="24" rx="2" fill="rgba(37,99,235,0.06)" stroke="rgba(37,99,235,0.10)" strokeWidth="1"/>
    </svg>
  )
}

function EventPin({ event, isActive, isVisible }) {
  if (!isVisible) return null
  return (
    <div
      className="absolute"
      style={{
        left: event.x,
        top: event.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Ping ring */}
      {isActive && (
        <div
          className="absolute rounded-full"
          style={{
            width: 24,
            height: 24,
            top: -4,
            left: -4,
            background: 'rgba(37,99,235,0.3)',
            animation: 'ping-ring 1.2s ease-out infinite',
          }}
        />
      )}
      {/* Pin dot */}
      <div
        className="rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          width: isActive ? 18 : 12,
          height: isActive ? 18 : 12,
          background: isActive ? event.tagColor : 'rgba(96,165,250,0.6)',
          border: isActive ? `2px solid ${event.tagColor}` : '1.5px solid rgba(96,165,250,0.4)',
          boxShadow: isActive ? `0 0 12px ${event.tagColor}60` : 'none',
          animation: 'pin-pop 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
      />
    </div>
  )
}

export default function DemoSection() {
  const [sectionRef, sectionVis] = useScrollReveal(0.2)
  const [activeIdx, setActiveIdx] = useState(0)
  const [visiblePins, setVisiblePins] = useState([])

  // Reveal pins one by one when section becomes visible
  useEffect(() => {
    if (!sectionVis) return
    EVENTS.forEach((_, i) => {
      setTimeout(() => {
        setVisiblePins((prev) => [...prev, i])
      }, i * 400)
    })
  }, [sectionVis])

  // Cycle through events
  useEffect(() => {
    if (!sectionVis) return
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % EVENTS.length)
    }, 2400)
    return () => clearInterval(interval)
  }, [sectionVis])

  const active = EVENTS[activeIdx]

  return (
    <section
      className="py-28 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #080F1E 0%, #060B16 100%)',
        borderTop: '1px solid rgba(96,165,250,0.06)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={sectionRef} className={`reveal ${sectionVis ? 'visible' : ''} text-center mb-16`}>
          <p className="text-xs font-semibold tracking-widest uppercase text-forecast-sky mb-3">
            See it in action
          </p>
          <h2
            className="text-4xl md:text-5xl font-display font-bold text-white leading-tight"
            style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}
          >
            Everything happening.
            <br />
            Nothing missed.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Phone mockup */}
          <div className={`reveal ${sectionVis ? 'visible' : ''} phone-float`} style={{ flexShrink: 0 }}>
            <div
              style={{
                width: 270,
                height: 520,
                borderRadius: 38,
                background: '#050A12',
                border: '7px solid #141F35',
                boxShadow: '0 0 0 1px rgba(96,165,250,0.08), 0 50px 100px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.03)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Status bar */}
              <div className="flex justify-between items-center px-5 pt-3 pb-1" style={{ zIndex: 10, position: 'relative' }}>
                <span className="text-white text-[10px] font-medium">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5">
                    {[3, 4, 5].map(h => (
                      <div key={h} style={{ width: 3, height: h, background: 'rgba(255,255,255,0.5)', borderRadius: 1 }} />
                    ))}
                  </div>
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <rect x="1" y="2" width="9" height="7" rx="1.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
                    <path d="M10.5 4.5v1" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round"/>
                    <rect x="2" y="3" width="5" height="5" rx="0.5" fill="rgba(255,255,255,0.4)"/>
                  </svg>
                </div>
              </div>

              {/* App header */}
              <div className="px-4 py-2 flex items-center justify-between" style={{ position: 'relative', zIndex: 10 }}>
                <div>
                  <div className="text-white text-xs font-bold" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>Forecast</div>
                  <div className="text-slate-400 text-[9px]">UMD Campus · Live</div>
                </div>
                <div
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}
                >
                  <div
                    className="w-1 h-1 rounded-full bg-emerald-400"
                    style={{ animation: 'scan-pulse 1.5s ease-in-out infinite' }}
                  />
                  <span className="text-emerald-400 text-[9px] font-medium">Syncing</span>
                </div>
              </div>

              {/* Map area */}
              <div
                className="relative mx-3 rounded-xl overflow-hidden"
                style={{
                  height: 280,
                  background: '#08111E',
                  backgroundImage: 'linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }}
              >
                <MapStreets />

                {/* Pins */}
                {EVENTS.map((ev, i) => (
                  <EventPin
                    key={ev.id}
                    event={ev}
                    isActive={activeIdx === i}
                    isVisible={visiblePins.includes(i)}
                  />
                ))}

                {/* Scan line effect */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, transparent 40%, rgba(37,99,235,0.03) 50%, transparent 60%)',
                    animation: 'drift-a 8s ease-in-out infinite',
                  }}
                />
              </div>

              {/* Event card */}
              <div
                className="mx-3 mt-2 rounded-xl overflow-hidden"
                key={activeIdx}
                style={{ animation: 'card-slide 0.35s ease-out forwards' }}
              >
                <div
                  className="px-3.5 py-3"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div
                        className="inline-block px-1.5 py-0.5 rounded text-[9px] font-semibold mb-1.5 uppercase tracking-wide"
                        style={{ background: `${active.tagColor}22`, color: active.tagColor }}
                      >
                        {active.tag}
                      </div>
                      <div className="text-white text-xs font-semibold leading-snug">{active.title}</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">{active.org}</div>
                    </div>
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.25)' }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 2v4l2.5 1.5" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round"/>
                        <circle cx="6" cy="6" r="4.5" stroke="#F59E0B" strokeWidth="1.2"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-forecast-sky text-[10px] mt-2">{active.time}</div>
                </div>
              </div>

              {/* Home indicator */}
              <div className="flex justify-center mt-3">
                <div className="w-20 h-1 rounded-full bg-white/10" />
              </div>
            </div>
          </div>

          {/* Right side copy */}
          <div className="max-w-sm">
            <div className="space-y-8">
              {[
                {
                  icon: '⚡',
                  title: 'Instant awareness',
                  desc: 'Forecast scans all your campus sources and surfaces what matters right now. No hunting, no missing out.',
                  delay: '0s',
                },
                {
                  icon: '🗺️',
                  title: 'Spatial context',
                  desc: "Events pinned on your actual campus map. Know exactly where to go before you step outside.",
                  delay: '0.1s',
                },
                {
                  icon: '🔔',
                  title: 'Smart alerts',
                  desc: 'AI filters the noise. You only hear about what actually matches your interests and schedule.',
                  delay: '0.2s',
                },
              ].map(({ icon, title, desc, delay }, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} ${sectionVis ? 'visible' : ''} flex gap-4`}
                  style={{ transitionDelay: delay }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(96,165,250,0.12)' }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div
                      className="text-white font-semibold text-base mb-1"
                      style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}
                    >
                      {title}
                    </div>
                    <p className="text-slate-400 text-[15px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
