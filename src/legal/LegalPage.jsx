import { useEffect } from 'react'
import logo from '../assets/logo-smartpay.png'
import {
  companySection,
  legalMeta,
  legalNoticeBlocks,
  privacyPolicyBlocks,
} from './legalBlocks.js'

function renderParagraph(text) {
  const email = 'info@appsmartpay.com'
  const t = text.trim()
  if (t === email) {
    return (
      <p>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    )
  }
  if (t.includes(email)) {
    const parts = text.split(email)
    return (
      <p>
        {parts[0]}
        <a href={`mailto:${email}`}>{email}</a>
        {parts[1]}
      </p>
    )
  }
  return <p>{text}</p>
}

function ProseBlocks({ blocks, idPrefix = 'doc' }) {
  return (
    <div className="legal-prose">
      {blocks.map((block, i) => {
        if (block.type === 'h2') {
          return (
            <h2 key={`${idPrefix}-${i}`} id={`${idPrefix}-h2-${i}`}>
              {block.text}
            </h2>
          )
        }
        if (block.type === 'p') {
          return <div key={`${idPrefix}-p-${i}`}>{renderParagraph(block.text)}</div>
        }
        if (block.type === 'ul') {
          return (
            <ul key={`${idPrefix}-ul-${i}`}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }
        return null
      })}
    </div>
  )
}

export default function LegalPage({ tab }) {
  const isPrivacy = tab === 'privacy'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tab])

  return (
    <div className="legal-page">
      <header className="legal-page-header">
        <div className="container legal-page-header-inner">
          <a className="brand legal-page-brand" href="#/" aria-label="Volver al inicio">
            <img src={logo} alt="SmartPay" />
          </a>
          <nav className="legal-page-nav">
            <a href="#/">Inicio</a>
            <a href="#/legal" aria-current={!isPrivacy ? 'page' : undefined}>
              Aviso legal
            </a>
            <a href="#/legal/privacidad" aria-current={isPrivacy ? 'page' : undefined}>
              Política de privacidad
            </a>
          </nav>
        </div>
      </header>

      <main className="legal-page-main">
        <div className="container legal-page-inner">
          <h1 className="legal-page-title">{legalMeta.title}</h1>
          <p className="legal-page-updated">Last updated: {legalMeta.lastUpdated}</p>
          <p className="legal-page-intro">{legalMeta.intro}</p>

          <hr className="legal-divider" />

          <section className="legal-company" aria-labelledby="company-info-heading">
            <h2 id="company-info-heading">{companySection.title}</h2>
            <dl className="legal-company-grid">
              {companySection.lines.map((row) => (
                <div key={row.label} className="legal-company-row">
                  <dt>{row.label}</dt>
                  <dd>
                    {row.href ? (
                      <a href={row.href}>{row.value}</a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p>{companySection.note}</p>
            <p>{companySection.contactNote}</p>
            <p>
              <a href={`mailto:${companySection.contactEmail}`}>{companySection.contactEmail}</a>
            </p>
          </section>

          <hr className="legal-divider" />

          <div className="legal-tabs" role="tablist" aria-label="Document sections">
            <a
              role="tab"
              href="#/legal"
              className={`legal-tab${!isPrivacy ? ' legal-tab-active' : ''}`}
              aria-selected={!isPrivacy}
            >
              Legal Notice
            </a>
            <a
              role="tab"
              href="#/legal/privacidad"
              className={`legal-tab${isPrivacy ? ' legal-tab-active' : ''}`}
              aria-selected={isPrivacy}
            >
              Information Protection Policy
            </a>
          </div>

          <section
            className="legal-tab-panel"
            role="tabpanel"
            aria-label={isPrivacy ? 'Information Protection Policy' : 'Legal Notice'}
            tabIndex={0}
          >
            {isPrivacy ? (
              <ProseBlocks idPrefix="privacy" blocks={privacyPolicyBlocks} />
            ) : (
              <ProseBlocks idPrefix="notice" blocks={legalNoticeBlocks} />
            )}
          </section>
        </div>
      </main>

      <footer className="site-footer legal-page-footer">
        <div className="container footer-grid">
          <div>
            <a href="#/">
              <img className="footer-logo" src={logo} alt="SmartPay Caravaning" />
            </a>
          </div>
          <div className="footer-links">
            <a href="https://app.appsmartpay.com" target="_blank" rel="noreferrer">
              Abrir aplicación
            </a>
            <a href="#/legal">Aviso legal</a>
            <a href="#/legal/privacidad">Política de privacidad</a>
            <a href="https://www.appsmartpay.com/terms-conditions/" target="_blank" rel="noreferrer">
              Términos y condiciones
            </a>
            <a href="mailto:info@appsmartpay.com">info@appsmartpay.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
