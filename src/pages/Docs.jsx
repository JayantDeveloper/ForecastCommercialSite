import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const SECTIONS = [
  { id: 'overview',      label: 'Overview' },
  { id: 'prerequisites', label: 'Prerequisites' },
  { id: 'backend',       label: 'Backend Setup' },
  { id: 'mobile',        label: 'Mobile App Setup' },
  { id: 'google-cloud',  label: 'Google Cloud Setup' },
  { id: 'api',           label: 'API Reference' },
  { id: 'schema',        label: 'Data Schema' },
  { id: 'architecture',  label: 'Architecture' },
  { id: 'roadmap',       label: 'Roadmap' },
]

function Code({ children, lang = '' }) {
  return (
    <pre className="docs-code">
      <code>{children}</code>
    </pre>
  )
}

function IC({ children }) {
  return <code className="docs-inline-code">{children}</code>
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <h2
        style={{ fontFamily: 'Cabinet Grotesk, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}
      >
        {title}
      </h2>
      <div className="docs-prose">{children}</div>
    </section>
  )
}

export default function Docs() {
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const ids = SECTIONS.map(s => s.id)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="min-h-screen" style={{ background: '#080F1E', paddingTop: '64px' }}>
        <div className="max-w-6xl mx-auto px-6 flex gap-12 py-16">
          {/* Sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <p className="text-xs font-semibold tracking-widest uppercase text-forecast-muted mb-4 px-3">
                Documentation
              </p>
              <nav className="space-y-0.5">
                {SECTIONS.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      active === id
                        ? 'text-white bg-white/8 font-medium'
                        : 'text-slate-500 hover:text-slate-300 hover:bg-white/4'
                    }`}
                    style={active === id ? { background: 'rgba(255,255,255,0.08)' } : {}}
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <Link
                  to="/"
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors px-3"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Back to home
                </Link>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0 max-w-2xl">

            <Section id="overview" title="Overview">
              <p>
                Forecast is a campus intelligence app for college students. It aggregates fragmented
                opportunity data — emails, TerpLink, newsletters, social feeds — into one unified,
                real-time view pinned to your campus map.
              </p>
              <p>
                Students can sign in with Google, connect their Gmail and Calendar, and immediately
                start seeing a curated feed of what's happening around them. Gemini AI processes
                incoming data to surface only what's relevant.
              </p>
              <p>
                The project is composed of two parts:
              </p>
              <ul>
                <li><strong style={{color:'#fff'}}>Backend</strong> — Python / FastAPI with SQLite, Google OAuth, Gmail and Calendar APIs, Gemini AI, and background sync workers.</li>
                <li><strong style={{color:'#fff'}}>Mobile App</strong> — React Native / Expo with a map view, event feed, and Intel (integrations) tab.</li>
              </ul>
            </Section>

            <Section id="prerequisites" title="Prerequisites">
              <p>Before you begin, make sure you have the following installed:</p>
              <ul>
                <li>Python 3.11+</li>
                <li>Node.js 18+ and npm</li>
                <li>Expo CLI (<IC>npm install -g expo-cli</IC>)</li>
                <li>A Google Cloud project with Gmail, Calendar, and People APIs enabled</li>
                <li>A Gemini API key from <a href="https://ai.google.dev" target="_blank" rel="noreferrer">Google AI Studio</a></li>
              </ul>
            </Section>

            <Section id="backend" title="Backend Setup">
              <h3>1. Create a virtual environment</h3>
              <Code>{`cd backend
python3 -m venv venv
source venv/bin/activate   # Windows: venv\\Scripts\\activate`}</Code>

              <h3>2. Install dependencies</h3>
              <Code>{`pip install -r requirements.txt`}</Code>

              <h3>3. Configure environment variables</h3>
              <p>
                Copy the example env file and fill in your credentials:
              </p>
              <Code>{`cp .env.example .env`}</Code>
              <p>
                Open <IC>backend/.env</IC> and set the following:
              </p>
              <Code>{`GEMINI_API_KEY=your_gemini_api_key

GOOGLE_CLIENT_ID=your_oauth_client_id
GOOGLE_CLIENT_SECRET=your_oauth_client_secret

JWT_SECRET=your_random_secret_here
JWT_EXPIRE_DAYS=30`}</Code>
              <p>
                Generate a secure <IC>JWT_SECRET</IC> with:
              </p>
              <Code>{`openssl rand -hex 32`}</Code>

              <h3>4. Start the development server</h3>
              <Code>{`uvicorn api.main:app --host 0.0.0.0 --port 8000 --reload`}</Code>
              <p>
                The API will be available at <IC>http://localhost:8000</IC>.
                Interactive docs at <IC>http://localhost:8000/docs</IC>.
              </p>
            </Section>

            <Section id="mobile" title="Mobile App Setup">
              <h3>1. Install dependencies</h3>
              <Code>{`cd mobile
npm install`}</Code>

              <h3>2. Configure environment variables</h3>
              <p>
                Open <IC>mobile/.env</IC> and fill in:
              </p>
              <Code>{`EXPO_PUBLIC_GOOGLE_CLIENT_ID=your_oauth_client_id
EXPO_PUBLIC_API_BASE_URL=http://YOUR_MACHINE_IP:8000`}</Code>
              <p>
                Find your local IP address with:
              </p>
              <Code>{`# macOS / Linux
ifconfig | grep "inet "

# Windows
ipconfig`}</Code>

              <h3>3. Start Expo</h3>
              <Code>{`npx expo start`}</Code>
              <ul>
                <li>Press <IC>i</IC> to open in the iOS Simulator.</li>
                <li>Press <IC>a</IC> to open in an Android emulator.</li>
                <li>Scan the QR code with the <strong style={{color:'#fff'}}>Expo Go</strong> app on a physical device.</li>
              </ul>
            </Section>

            <Section id="google-cloud" title="Google Cloud Setup">
              <p>
                Forecast requires a Google Cloud project with OAuth 2.0 configured for Gmail,
                Calendar, and People API access.
              </p>

              <h3>Enable APIs</h3>
              <p>
                In <a href="https://console.cloud.google.com" target="_blank" rel="noreferrer">Google Cloud Console</a>,
                go to <strong style={{color:'#fff'}}>APIs & Services → Library</strong> and enable:
              </p>
              <ul>
                <li>Gmail API</li>
                <li>Google Calendar API</li>
                <li>Google People API</li>
              </ul>

              <h3>Create OAuth credentials</h3>
              <ol style={{color:'#94a3b8', paddingLeft:'1.5rem', lineHeight:'1.75'}}>
                <li style={{marginBottom:'0.25rem'}}>Go to <strong style={{color:'#fff'}}>APIs & Services → Credentials → Create Credentials → OAuth 2.0 Client ID</strong></li>
                <li style={{marginBottom:'0.25rem'}}>Choose <strong style={{color:'#fff'}}>Web application</strong></li>
                <li style={{marginBottom:'0.25rem'}}>Add your Expo redirect URI (see below) to <strong style={{color:'#fff'}}>Authorized redirect URIs</strong></li>
                <li style={{marginBottom:'0.25rem'}}>Copy the <strong style={{color:'#fff'}}>Client ID</strong> and <strong style={{color:'#fff'}}>Client Secret</strong></li>
              </ol>

              <h3>Find your Expo redirect URI</h3>
              <p>
                Start Expo and check the terminal output for a line like:
              </p>
              <Code>{`Redirect URI: https://auth.expo.io/@your-username/scope`}</Code>
              <p>
                Register this exact URL in your Google Cloud OAuth client's authorized redirect URIs.
              </p>

              <h3>Test users</h3>
              <p>
                While your app is in <em>Testing</em> mode, only accounts listed under
                <strong style={{color:'#fff'}}> OAuth consent screen → Test users</strong> can sign in.
                Add each tester's Google account there.
              </p>
            </Section>

            <Section id="api" title="API Reference">
              <p>
                The Forecast backend exposes a REST API at <IC>http://localhost:8000</IC>.
              </p>

              <table className="docs-table">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Path</th>
                    <th>Description</th>
                    <th>Auth</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['GET',  '/api/events',          'List upcoming campus events',         'No'],
                    ['GET',  '/api/events/:id',       'Get a single event by ID',            'No'],
                    ['GET',  '/health',               'Health check',                        'No'],
                    ['GET',  '/docs',                 'Swagger UI (dev only)',               'No'],
                    ['POST', '/auth/google',          'Exchange Google OAuth code for JWT',  'No'],
                    ['GET',  '/api/intel/gmail',      'Trigger Gmail sync for current user', 'JWT'],
                    ['GET',  '/api/intel/calendar',   'List calendar events',                'JWT'],
                  ].map(([method, path, desc, auth]) => (
                    <tr key={path}>
                      <td>
                        <span
                          className="text-xs font-semibold px-1.5 py-0.5 rounded"
                          style={{
                            background: method === 'GET' ? 'rgba(16,185,129,0.12)' : 'rgba(245,158,11,0.12)',
                            color: method === 'GET' ? '#10B981' : '#F59E0B',
                          }}
                        >
                          {method}
                        </span>
                      </td>
                      <td><IC>{path}</IC></td>
                      <td>{desc}</td>
                      <td style={{ color: auth === 'JWT' ? '#60A5FA' : '#64748B' }}>{auth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h3>Authentication</h3>
              <p>
                Protected endpoints require a JWT in the <IC>Authorization</IC> header:
              </p>
              <Code>{`Authorization: Bearer <your_jwt_token>`}</Code>
              <p>
                Obtain a token by POSTing the Google OAuth authorization code to <IC>/auth/google</IC>.
              </p>
            </Section>

            <Section id="schema" title="Data Schema">
              <h3>Event object</h3>
              <Code>{`{
  "id": 1,
  "title": "Hackathon Kickoff @ Iribe",
  "lat": 38.9891,
  "lng": -76.9364,
  "start_time": "2026-04-12T10:00:00-04:00",
  "end_time": "2026-04-12T12:00:00-04:00",
  "source": "terplink",
  "category": "academic",
  "org": "Technica",
  "link": "https://terplink.umd.edu/event/1"
}`}</Code>

              <h3>Event categories</h3>
              <table className="docs-table">
                <thead>
                  <tr><th>Category</th><th>Description</th></tr>
                </thead>
                <tbody>
                  {[
                    ['academic',  'Classes, lectures, study sessions'],
                    ['career',    'Career fairs, recruiting events, panels'],
                    ['social',    'Club events, parties, gatherings'],
                    ['deadline',  'Applications, scholarship deadlines'],
                    ['research',  'Research opportunities, lab openings'],
                    ['free-food', 'Events with complimentary food'],
                  ].map(([cat, desc]) => (
                    <tr key={cat}>
                      <td><IC>{cat}</IC></td>
                      <td>{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h3>Event sources</h3>
              <table className="docs-table">
                <thead>
                  <tr><th>Source</th><th>Description</th></tr>
                </thead>
                <tbody>
                  {[
                    ['terplink',   'TerpLink / Engage campus events platform'],
                    ['gmail',      'Events extracted from user Gmail (via Gemini AI)'],
                    ['calendar',   'Google Calendar entries'],
                    ['newsletter', 'Campus newsletter scraping'],
                  ].map(([src, desc]) => (
                    <tr key={src}>
                      <td><IC>{src}</IC></td>
                      <td>{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Section>

            <Section id="architecture" title="Architecture">
              <p>
                Forecast follows a straightforward client-server architecture:
              </p>
              <Code>{`ForecastCommercialSite/
├── backend/              # Python · FastAPI
│   ├── api/
│   │   └── main.py       # REST API routes
│   ├── core/             # Auth, JWT, config
│   ├── workers/          # Background Gmail sync jobs
│   ├── schema.sql        # SQLite schema
│   ├── scope.db          # SQLite database
│   └── requirements.txt
│
└── mobile/               # React Native · Expo
    ├── App.js            # Root navigation
    ├── screens/          # Map, Feed, Intel tabs
    ├── contexts/
    │   └── AuthContext.js  # Google OAuth state
    └── utils/            # API helpers`}</Code>

              <h3>Backend stack</h3>
              <ul>
                <li><strong style={{color:'#fff'}}>FastAPI</strong> — async Python REST framework</li>
                <li><strong style={{color:'#fff'}}>SQLite + SQLAlchemy</strong> — lightweight local database</li>
                <li><strong style={{color:'#fff'}}>Google APIs</strong> — OAuth 2.0, Gmail, Calendar, People</li>
                <li><strong style={{color:'#fff'}}>Gemini AI</strong> — event extraction from unstructured email text</li>
                <li><strong style={{color:'#fff'}}>Background workers</strong> — periodic Gmail sync (every 15 min)</li>
              </ul>

              <h3>Mobile stack</h3>
              <ul>
                <li><strong style={{color:'#fff'}}>React Native + Expo</strong> — cross-platform mobile</li>
                <li><strong style={{color:'#fff'}}>React Navigation</strong> — tab-based routing</li>
                <li><strong style={{color:'#fff'}}>Expo MapView</strong> — campus event map</li>
                <li><strong style={{color:'#fff'}}>expo-auth-session</strong> — Google OAuth flow</li>
              </ul>
            </Section>

            <Section id="roadmap" title="Roadmap">
              <p>
                Forecast is actively developed. Here's what's coming:
              </p>

              {[
                { done: true,  item: 'Google Sign-In + OAuth flow' },
                { done: true,  item: 'Gmail scanning with Gemini AI extraction' },
                { done: true,  item: 'Google Calendar integration' },
                { done: true,  item: 'Campus map with event pins' },
                { done: false, item: 'Wire scraper.py to live TerpLink / Engage API' },
                { done: false, item: 'Push notifications for events starting soon' },
                { done: false, item: 'Filter events by category (academic, career, social…)' },
                { done: false, item: 'Multi-campus support beyond UMD' },
                { done: false, item: 'Building polygon overlay from campus map data' },
                { done: false, item: 'Personalized ranking based on major and interests' },
              ].map(({ done, item }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-2.5"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: done ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.05)',
                      border: done ? '1px solid rgba(16,185,129,0.3)' : '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {done ? (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    )}
                  </div>
                  <span style={{ color: done ? '#94a3b8' : '#cbd5e1', textDecoration: done ? 'line-through' : 'none' }}>
                    {item}
                  </span>
                </div>
              ))}
            </Section>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
