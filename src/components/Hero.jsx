import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#080F1E' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(96,165,250,0.12) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb-a absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            top: '-10%',
            left: '-8%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="orb-b absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            bottom: '-5%',
            right: '-5%',
            background: 'radial-gradient(circle, rgba(96,165,250,0.18) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="orb-c absolute rounded-full"
          style={{
            width: 300,
            height: 300,
            top: '50%',
            left: '60%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%)',
            filter: 'blur(35px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Headline */}
        <h1
          className={`text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-[0.95] tracking-tight mb-6 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ fontFamily: 'Cabinet Grotesk, sans-serif', transitionDelay: '0.1s' }}
        >
          Your campus.
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #60A5FA 0%, #2563EB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Forecasted.
          </span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          Never miss an opportunity again.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 mb-16 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.3s' }}
        >
          <a
            href="https://github.com/JayantDeveloper/Forecast"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3.5 rounded-xl text-sm font-semibold bg-forecast-amber text-navy transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-amber-500/20"
          >
            Get the App — It's Free
          </a>
          <Link
            to="/docs"
            className="px-8 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:bg-white/10"
            style={{ border: '1px solid rgba(255,255,255,0.15)' }}
          >
            Read the Docs →
          </Link>
        </div>

        {/* Stats */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-8 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.42s' }}
        >
          {[
            { num: '10,000+', label: 'Events tracked' },
            { num: '8+',      label: 'Campus sources' },
            { num: 'Real-time', label: 'Data sync' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div
                className="text-2xl font-display font-bold text-white"
                style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}
              >
                {num}
              </div>
              <div className="text-xs text-slate-500 mt-0.5 tracking-wide uppercase">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-cue">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 8l5 5 5-5" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
