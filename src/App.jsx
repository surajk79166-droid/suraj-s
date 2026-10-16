import { useState } from 'react'
import './App.css'

const services = [
  {
    number: '01',
    title: 'Business websites',
    description:
      'A polished, professional home for your business, built to make a strong first impression.',
    icon: 'business',
  },
  {
    number: '02',
    title: 'Portfolio websites',
    description:
      'A thoughtful space to showcase your work, your services, and what makes your brand yours.',
    icon: 'portfolio',
  },
  {
    number: '03',
    title: 'Landing pages',
    description:
      'A focused, conversion-minded page that gets to the point and gives visitors a clear next step.',
    icon: 'landing',
  },
  {
    number: '04',
    title: 'React development',
    description:
      'Responsive, interactive websites developed with React and made to work across screen sizes.',
    icon: 'react',
  },
  {
    number: '05',
    title: 'Meta ads',
    description:
      'Digital marketing support to help you plan and promote your business with Meta advertising.',
    icon: 'ads',
  },
  {
    number: '06',
    title: 'Website redesign',
    description:
      'A considered refresh to bring an existing website up to date and improve the experience.',
    icon: 'redesign',
  },
]

const skills = [
  'AI website development',
  'React development',
  'Modern UI/UX design',
  'Meta ads & digital marketing',
  'Responsive design',
]

const currentYear = new Date().getFullYear()

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function ServiceIcon({ name }) {
  const drawings = {
    business: (
      <>
        <rect x="4" y="3.5" width="16" height="17" rx="2" />
        <path d="M9 20.5v-5h6v5M8 8h2m4 0h2M8 11h2m4 0h2" />
      </>
    ),
    portfolio: (
      <>
        <rect x="3" y="5" width="18" height="15" rx="2" />
        <path d="M8 5V3h8v2M3 11h18m-11 0v2h4v-2" />
      </>
    ),
    landing: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18m-13 4h4m-4 3h8" />
      </>
    ),
    react: (
      <>
        <ellipse cx="12" cy="12" rx="9" ry="3.7" />
        <ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </>
    ),
    ads: (
      <>
        <path d="m4 14 11-7v12L4 12v2Z" />
        <path d="m7 14 2 6h4m5-12 2-2m-2 7h3" />
      </>
    ),
    redesign: (
      <>
        <path d="M20 7V3m0 4h-4M4 17v4m0-4h4" />
        <path d="M5.5 9A7 7 0 0 1 18 5l2 2M4 17l2 2a7 7 0 0 0 12.5-4" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className="service-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {drawings[name]}
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copiedBrief, setCopiedBrief] = useState('')
  const [formMessage, setFormMessage] = useState('')

  function closeMenu() {
    setMenuOpen(false)
  }

  async function handleBriefSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const brief = [
      'Project enquiry for Omvexa Digital',
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Service: ${formData.get('service') || 'Not selected'}`,
      `Project details: ${formData.get('message')}`,
    ].join('\n')

    setCopiedBrief(brief)

    try {
      await navigator.clipboard.writeText(brief)
      setFormMessage('Your project brief is copied and ready to paste.')
    } catch {
      setFormMessage(
        'Clipboard access was blocked. Select and copy your brief below.',
      )
    }
  }

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" onClick={closeMenu}>
            omvexa<span className="wordmark-dot">.</span>
            <span className="wordmark-label">DIGITAL</span>
          </a>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span />
            <span />
          </button>

          <nav
            aria-label="Main navigation"
            className={`main-nav${menuOpen ? ' is-open' : ''}`}
          >
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#approach" onClick={closeMenu}>
              Approach
            </a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Let&apos;s talk <ArrowIcon diagonal />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              DIGITAL DESIGN & DEVELOPMENT
            </p>
            <h1>
              Make your
              <br />
              next move
              <br />
              <span className="heading-accent">online.</span>
            </h1>
            <p className="hero-description">
              Websites with a little more thought behind them. Omvexa Digital
              brings design, development, and digital marketing together for
              your next big idea.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                Start a project <ArrowIcon />
              </a>
              <a className="text-link" href="#services">
                Explore services
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              BUILT AROUND YOUR NEXT CHAPTER
            </div>
          </div>

          <div
            aria-label="Illustration of a modern website layout"
            className="hero-art"
            role="img"
          >
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-spark spark-one">✳</div>
            <div className="art-spark spark-two">✳</div>
            <div className="art-sticker">
              <span>GOOD IDEAS</span>
              <span>START HERE ↗</span>
            </div>
            <div className="browser-card">
              <div className="browser-topbar">
                <span />
                <span />
                <span />
                <div className="browser-address">yourbrand.com</div>
                <span className="browser-menu">☰</span>
              </div>
              <div className="browser-page">
                <div className="browser-brand">
                  <span className="brand-mark">o.</span>
                  <span>YOUR BRAND</span>
                  <span className="browser-links">ABOUT&nbsp;&nbsp; WORK</span>
                </div>
                <div className="browser-content">
                  <span className="browser-kicker">A FRESH PERSPECTIVE</span>
                  <span className="browser-heading">
                    YOUR NEXT
                    <br />
                    CHAPTER
                    <br />
                    STARTS HERE<span>.</span>
                  </span>
                  <span className="browser-cta">
                    MAKE IT HAPPEN <ArrowIcon />
                  </span>
                </div>
                <div aria-hidden="true" className="browser-sun">
                  <span />
                </div>
                <div className="browser-footer">
                  <span>DESIGNED TO STAND OUT</span>
                  <span>SCROLL TO EXPLORE ↓</span>
                </div>
              </div>
            </div>
            <div className="art-caption">
              <span>01 / 01</span>
              <span>YOUR IDEA, IN A NEW LIGHT.</span>
            </div>
          </div>
          <a className="scroll-cue" href="#intro" aria-label="Scroll to introduction">
            <span />
          </a>
        </section>

        <section className="intro section-shell" id="intro">
          <p className="eyebrow">A GOOD PLACE TO START</p>
          <div className="intro-copy">
            <h2>
              Your website should do more than just <em>look the part.</em>
            </h2>
            <p>
              It should feel like you, work beautifully on every screen, and
              make it easy for the right people to take the next step. That&apos;s
              where thoughtful design and solid development come in.
            </p>
          </div>
          <a className="round-link" href="#services" aria-label="Explore services">
            <ArrowIcon diagonal />
          </a>
        </section>

        <section className="services section-shell" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT I CAN HELP WITH</p>
              <h2>
                Built for the way
                <br />
                <em>you do business.</em>
              </h2>
            </div>
            <p className="section-heading-note">
              From a first online presence to a fresh new look, find the right
              starting point for your next move.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <a
                className="service-card"
                href="#contact"
                key={service.number}
                aria-label={`Ask about ${service.title}`}
              >
                <div className="service-card-top">
                  <ServiceIcon name={service.icon} />
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span aria-hidden="true" className="service-arrow">
                  <ArrowIcon diagonal />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="skills-band">
          <div className="section-shell skills-inner">
            <p className="eyebrow">THE TOOLKIT</p>
            <div className="skill-list">
              {skills.map((skill, index) => (
                <span className="skill-item" key={skill}>
                  {skill}
                  {index < skills.length - 1 && (
                    <span aria-hidden="true" className="skill-separator">
                      ✳
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="approach section-shell" id="approach">
          <div className="approach-heading">
            <p className="eyebrow">GOOD WORK, THOUGHT THROUGH</p>
            <h2>
              Clear steps.
              <br />
              <em>Better websites.</em>
            </h2>
            <p>
              A straightforward approach keeps the focus on what matters: a
              website that feels right for your business.
            </p>
          </div>
          <div className="approach-steps">
            <article className="approach-step">
              <span>01</span>
              <div>
                <h3>Understand</h3>
                <p>
                  Start with your goals, your audience, and what you need your
                  website to do.
                </p>
              </div>
              <span aria-hidden="true" className="step-symbol">
                ↗
              </span>
            </article>
            <article className="approach-step">
              <span>02</span>
              <div>
                <h3>Design</h3>
                <p>
                  Shape a clear, considered experience around your brand and
                  your visitors.
                </p>
              </div>
              <span aria-hidden="true" className="step-symbol">
                ✳
              </span>
            </article>
            <article className="approach-step">
              <span>03</span>
              <div>
                <h3>Build</h3>
                <p>
                  Bring it to life with responsive development, ready for
                  desktop and mobile.
                </p>
              </div>
              <span aria-hidden="true" className="step-symbol">
                ↗
              </span>
            </article>
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
            <h2>
              Let&apos;s make
              <br />
              <em>it happen.</em>
            </h2>
            <p>
              Tell me a little about what you&apos;re looking for. Your brief will
              be copied so you can paste it into an email or message.
            </p>
            <div className="contact-aside">
              <span className="status-dot" />
              GOOD THINGS START WITH A CONVERSATION
            </div>
          </div>

          <form className="contact-form" onSubmit={handleBriefSubmit}>
            <div className="form-row">
              <label>
                Your name
                <input
                  autoComplete="name"
                  name="name"
                  placeholder="How should I address you?"
                  required
                />
              </label>
              <label>
                Your email
                <input
                  autoComplete="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </label>
            </div>
            <label>
              What do you need?
              <select defaultValue="" name="service">
                <option disabled value="">
                  Choose a service
                </option>
                {services.map((service) => (
                  <option key={service.number} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <label>
              A little about your project
              <textarea
                name="message"
                placeholder="What are you hoping to create?"
                required
                rows="4"
              />
            </label>
            <button className="button button-lime" type="submit">
              Copy project brief <ArrowIcon />
            </button>
            {formMessage && (
              <p aria-live="polite" className="form-message" role="status">
                {formMessage}
              </p>
            )}
            {copiedBrief && (
              <label className="brief-copy">
                Your project brief
                <textarea
                  aria-label="Your project brief, ready to copy"
                  onFocus={(event) => event.target.select()}
                  readOnly
                  rows="5"
                  value={copiedBrief}
                />
              </label>
            )}
            <p className="form-note">
              No message is sent from this page. An email or contact service
              can be added when you&apos;re ready.
            </p>
          </form>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="wordmark footer-wordmark" href="#home">
          omvexa<span className="wordmark-dot">.</span>
          <span className="wordmark-label">DIGITAL</span>
        </a>
        <p>Thoughtful digital, made for what&apos;s next.</p>
        <a className="back-top" href="#home">
          BACK TO TOP <ArrowIcon diagonal />
        </a>
        <span className="footer-copyright">
          © {currentYear} OMVEXA DIGITAL
        </span>
      </footer>
    </>
  )
}

export default App
