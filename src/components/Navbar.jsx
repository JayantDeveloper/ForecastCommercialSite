import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function ForecastLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 15 C4 11, 7 7, 11 11 S15 15, 18 8"
        stroke="#60A5FA"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18.5" cy="7" r="2" fill="#F59E0B" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/90 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <ForecastLogo />
          <span
            className="font-display text-white text-lg tracking-tight"
            style={{ fontFamily: 'Cabinet Grotesk, sans-serif', fontWeight: 800 }}
          >
            Forecast
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/')
                ? 'text-white bg-white/10'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Home
          </Link>
          <Link
            to="/docs"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/docs')
                ? 'text-white bg-white/10'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Docs
          </Link>
          <a
            href="https://github.com/JayantDeveloper/Forecast"
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-forecast-amber text-navy transition-all hover:brightness-110 active:scale-95"
          >
            Get the App
          </a>
        </nav>
      </div>
    </header>
  )
}
