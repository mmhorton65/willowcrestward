import { useEffect, useState, type CSSProperties } from 'react'
import { organizations, type Organization } from './data/organizations'
import './App.css'

function getOrganizationId() {
  const match = window.location.pathname.match(/^\/organization\/([^/]+)\/?$/)
  return match ? decodeURIComponent(match[1]) : null
}

function Header({ onHome }: { onHome: () => void }) {
  return <header className="site-header">
    <button className="brand" type="button" onClick={onHome} aria-label="Willow Crest Ward">
      <span className="brand-mark" aria-hidden="true">w</span><span>Willow Crest</span>
    </button>
    <span className="header-note">Church of Jesus Christ of Latter-day Saints</span>
  </header>
}

function HomePage({ onSelect }: { onSelect: (organization: Organization) => void }) {
  return <main className="home-page">
    <section className="welcome" aria-labelledby="welcome-title">
      <p className="eyebrow">Welcome!</p>
      <h1 id="welcome-title">Willow Crest Ward</h1>
      <p className="welcome-copy">Quick links for what’s happening in our ward.</p>
    </section>
    <section className="directory" aria-labelledby="directory-title">
      <div className="section-heading"><h2 id="directory-title">Explore organizations</h2><span>{organizations.length} areas</span></div>
      <div className="organization-grid">
        {organizations.map((organization, index) => <button className="organization-card" key={organization.id} type="button"
          style={{ '--accent': organization.accentColor, '--delay': `${index * 70}ms` } as CSSProperties} onClick={() => onSelect(organization)}>
          <span className="card-icon" aria-hidden="true">{organization.icon}</span>
          <span className="card-category">{organization.category}</span>
          <strong>{organization.name}</strong>
          <span className="card-description">{organization.description}</span>
          <span className="card-arrow" aria-hidden="true">↗</span>
        </button>)}
      </div>
    </section>
  </main>
}

function DetailPage({ organization, onHome }: { organization: Organization; onHome: () => void }) {
  const [embedFailed, setEmbedFailed] = useState(false)
  return <main className="detail-page" style={{ '--accent': organization.accentColor } as CSSProperties}>
    <button className="back-button" type="button" onClick={onHome}>← <span>Back to home</span></button>
    <section className="detail-intro" aria-labelledby="detail-title">
      <span className="detail-icon" aria-hidden="true">{organization.icon}</span>
      <p className="eyebrow">{organization.category}</p>
      <h1 id="detail-title">{organization.name}</h1>
      <p>{organization.description}</p>
    </section>
    <section className="info-strip" aria-label="Organization details">
      <div><span>When</span><strong>{organization.meetingTime}</strong></div>
      <div><span>Where</span><strong>{organization.location}</strong></div>
    </section>
    <section className="document-section" aria-labelledby="document-title">
      <div className="section-heading"><h2 id="document-title">Latest details</h2><span>Live document</span></div>
      {embedFailed ? <div className="embed-fallback" role="status"><strong>This document is unavailable right now.</strong><p>Please check back soon for the latest information.</p></div> : <div className="document-frame">
        <iframe title={`${organization.name} latest details`} src={organization.googleDocUrl} onError={() => setEmbedFailed(true)} />
      </div>}
    </section>
  </main>
}

function App() {
  const [organizationId, setOrganizationId] = useState(getOrganizationId)
  useEffect(() => {
    const handlePopState = () => setOrganizationId(getOrganizationId())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])
  const goHome = () => { window.history.pushState({}, '', '/'); setOrganizationId(null); window.scrollTo(0, 0) }
  const selectOrganization = (organization: Organization) => { window.history.pushState({}, '', `/organization/${organization.id}`); setOrganizationId(organization.id); window.scrollTo(0, 0) }
  const organization = organizations.find((item) => item.id === organizationId)
  return <div className="app-shell"><Header onHome={goHome} />
    {organization ? <DetailPage organization={organization} onHome={goHome} /> : <HomePage onSelect={selectOrganization} />}
    <footer className="site-footer"><span>Willow Crest Ward</span><span>Welcome!</span></footer>
  </div>
}

export default App
