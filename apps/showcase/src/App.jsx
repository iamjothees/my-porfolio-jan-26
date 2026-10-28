import { useState, useEffect, useCallback } from 'react'
import { projects, filterMap } from './data/projects.js'

function App() {
  const [activeFilter, setActiveFilter] = useState('all')

  const handleFilter = useCallback((filter) => {
    setActiveFilter(filter)
  }, [])

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => (filterMap[p.industry] || 'all') === activeFilter)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' })

    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight + 50 && rect.bottom > -50) {
        el.classList.add('active')
      }
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [activeFilter])

  return (
    <>
      <div className="bg-grid" />
      <div className="page">
        <Header />
        <Hero />
        <section className="projects-section">
          <FilterBar activeFilter={activeFilter} onFilter={handleFilter} />
          <div className="projects-grid">
            {filteredProjects.map((p, i) => (
              <ProjectCard key={p.dir} project={p} index={i} />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

function SocialLinks({ variant = 'icon' }) {
  const links = [
    { href: 'https://github.com/iamjothees', label: 'GitHub', icon: 'github' },
    { href: 'https://in.linkedin.com/in/iamjothees', label: 'LinkedIn', icon: 'linkedin' },
    { href: 'mailto:iamjothees@gmail.com', label: 'Email', icon: 'email' },
  ]

  if (variant === 'text') {
    return (
      <div className="footer-links">
        {links.map(link => (
          <a key={link.icon} href={link.href} target="_blank" rel="noopener">{link.label}</a>
        ))}
      </div>
    )
  }

  return (
    <div className="header-links">
      {links.map(link => (
        <a key={link.icon} href={link.href} target="_blank" rel="noopener" aria-label={link.label}>
          {link.icon === 'github' && (
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          )}
          {link.icon === 'linkedin' && (
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          )}
          {link.icon === 'email' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          )}
        </a>
      ))}
    </div>
  )
}

function Header() {
  return (
    <header className="header reveal">
      <div className="header-left">
        <div className="header-avatar">JC</div>
        <div className="header-info">
          <h1>Joe Codes</h1>
          <p>End-to-End Engineer · Enterprise Solutions · SaaS</p>
        </div>
      </div>
      <div className="header-right">
        <SocialLinks variant="icon" />
        <a
          href="http://joecodes.in"
          className="back-btn"
          aria-label="Back to Core Terminal"
          title="Back to Core Terminal"
        >
          <span className="back-btn-arrow" aria-hidden="true">←</span>
          <span className="back-btn-text">Back to Core Terminal</span>
          <span className="back-btn-compact" aria-hidden="true">Terminal</span>
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="hero-badge reveal">Available for projects</div>
        <h2 className="hero-title reveal reveal-delay-1">
          <span className="line">Websites → ERP → SaaS.</span>
        </h2>
        <p className="hero-sub reveal reveal-delay-2">
          End-to-End Engineer building complete technical solutions — from landing pages to enterprise systems, legacy migrations, and multi-tenant SaaS platforms.
        </p>
        <div className="hero-journey reveal reveal-delay-3">
          <span className="journey-tag">Website Dev</span>
          <span className="journey-arrow">→</span>
          <span className="journey-tag active">Custom ERP</span>
          <span className="journey-arrow">→</span>
          <span className="journey-tag">SaaS</span>
        </div>
        <div className="hero-actions reveal reveal-delay-4">
          <a href="#projects" className="btn-primary">
            View Projects
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="mailto:iamjothees@gmail.com" className="btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Get in Touch
          </a>
        </div>
      </div>
      <Terminal />
    </section>
  )
}

function Terminal() {
  return (
    <div className="terminal reveal reveal-delay-2">
      <div className="terminal-header">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />
      </div>
      <div className="terminal-body">
        <div className="terminal-line">
          <span className="terminal-prompt">→</span>
          <span className="terminal-command">whoami</span>
        </div>
        <div className="terminal-output">Joe Codes — End-to-End Engineer</div>
        <br />
        <div className="terminal-line">
          <span className="terminal-prompt">→</span>
          <span className="terminal-command">ls services/</span>
        </div>
        <div className="terminal-output">Website Dev · Custom ERP · Legacy Migration<br />SaaS Development · API Integration</div>
        <br />
        <div className="terminal-line">
          <span className="terminal-prompt">→</span>
          <span className="terminal-command">cat tech-stack.json</span>
        </div>
        <div className="terminal-output">PHP/Laravel · JavaScript/React · Go<br />MySQL · Docker · PEST · Figma</div>
        <br />
        <div className="terminal-line">
          <span className="terminal-prompt">→</span>
          <span className="terminal-command">cat projects.json | length</span>
        </div>
        <div className="terminal-output success">6 projects delivered</div>
        <br />
        <div className="terminal-line">
          <span className="terminal-prompt">→</span>
          <span className="terminal-cursor" />
        </div>
      </div>
    </div>
  )
}

function FilterBar({ activeFilter, onFilter }) {
  const filters = ['all', 'fintech', 'fashion', 'healthcare', 'edtech', 'agriculture', 'travel']
  const labels = { all: 'All', fintech: 'Fintech', fashion: 'Fashion', healthcare: 'Healthcare', edtech: 'EdTech', agriculture: 'Agriculture', travel: 'Travel' }

  return (
    <div className="filter-bar reveal reveal-delay-1">
      {filters.map(f => (
        <button
          key={f}
          className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
          onClick={() => onFilter(f)}
        >
          {labels[f]}
        </button>
      ))}
    </div>
  )
}

function ProjectCard({ project, index }) {
  const previewUrl = `landing-pages/${project.dir}/index.html`

  return (
    <a
      href={previewUrl}
      className={`project-card reveal reveal-delay-${(index % 2) + 1}`}
      data-filter={filterMap[project.industry]}
      target="_blank"
      style={{ '--card-color': project.color }}
    >
      <div className="project-card-preview">
        <iframe src={previewUrl} loading="lazy" sandbox="allow-same-origin allow-scripts" />
      </div>
      <div className="project-card-body">
        <div className="project-card-top">
          <span className="project-card-index">0{index + 1}</span>
          <span className="project-card-badge">{project.tag}</span>
          <div className="project-card-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <h3 className="project-card-name">{project.name}</h3>
        <p className="project-card-tagline">{project.tagline}</p>
        <span className="project-card-industry">{project.industry}</span>
        <p className="project-card-desc">{project.description}</p>
        <div className="project-card-footer">
          <span>View Project</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </a>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <span className="footer-logo">jc.</span>
        <span className="footer-copy">Template by <a href="https://joecodes.in" target="_blank">joecodes.in</a></span>
      </div>
      <SocialLinks variant="text" />
    </footer>
  )
}

export default App