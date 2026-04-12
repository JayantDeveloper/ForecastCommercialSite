import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      className="border-t px-6 py-12"
      style={{
        background: '#060B15',
        borderColor: 'rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo + description */}
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-2">
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
              <path d="M2 15 C4 11, 7 7, 11 11 S15 15, 18 8" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="18.5" cy="7" r="2" fill="#F59E0B" />
            </svg>
            <span
              className="text-white font-bold text-sm"
              style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}
            >
              Forecast
            </span>
          </Link>
          <p className="text-slate-600 text-xs max-w-xs">
            Campus opportunity intelligence for students who refuse to miss out.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-slate-500 hover:text-white text-sm transition-colors">Home</Link>
          <Link to="/docs" className="text-slate-500 hover:text-white text-sm transition-colors">Docs</Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-white text-sm transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Copyright */}
        <p className="text-slate-700 text-xs">© 2026 Forecast · Built for students</p>
      </div>
    </footer>
  )
}
