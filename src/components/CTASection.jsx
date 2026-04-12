import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

export default function CTASection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: '#080F1E', borderTop: '1px solid rgba(96,165,250,0.06)' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 300,
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.15) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} relative z-10 max-w-2xl mx-auto text-center`}>
        <h2
          className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-5"
          style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}
        >
          Stop missing out.
          <br />
          <span style={{ color: '#60A5FA' }}>Start forecasting.</span>
        </h2>

        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          Your campus is full of opportunities. Forecast makes sure you actually see them.
          Free for all students. No subscription, no noise.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://github.com/JayantDeveloper/Forecast"
            target="_blank"
            rel="noreferrer"
            className="px-9 py-4 rounded-xl text-base font-semibold bg-forecast-amber text-navy transition-all hover:brightness-110 active:scale-95 shadow-xl shadow-amber-500/20"
          >
            Get the App — Free
          </a>
          <Link
            to="/docs"
            className="px-9 py-4 rounded-xl text-base font-medium text-slate-300 transition-all hover:text-white hover:bg-white/5"
          >
            View Documentation →
          </Link>
        </div>

        <p className="text-slate-600 text-xs mt-8">
          Available on iOS & Android via Expo · Open source
        </p>
      </div>
    </section>
  )
}
