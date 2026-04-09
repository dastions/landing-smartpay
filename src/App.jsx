import { useEffect, useMemo, useState } from 'react'
import logo from './assets/logo-smartpay.png'
import caravaningIllustration from './assets/caravaning-illustration.png'

const tariffs = {
  access: [
    {
      tarifa: 'Barrera',
      ideal: 'Área controlada con reserva online',
      servicios: '1',
      precio: '89 €',
    },
  ],
  caravaning: [
    {
      tarifa: 'Arranque con Café',
      ideal: 'Áreas pequeñas que empiezan',
      servicios: '1',
      precio: '49 €',
      extra: '19 €/serv.',
    },
    {
      tarifa: 'Trío Rueda Feliz',
      ideal: 'Áreas con oferta variada',
      servicios: '3',
      precio: '99 €',
      extra: '19 €/serv.',
    },
    {
      tarifa: 'Área Festival',
      ideal: 'Zonas con muchos servicios',
      servicios: '6',
      precio: '139 €',
      extra: '19 €/serv.',
    },
  ],
  scale: [
    {
      tarifa: 'Báscula',
      ideal: 'TPV lector de tarjetas bancarias',
      servicios: '1',
      precio: '19 €',
    },
    {
      tarifa: 'QR de Pago',
      ideal: 'QR de pago para servicios digitales',
      servicios: '1',
      precio: '19 €',
      extra: '9 €/serv.',
    },
  ],
}

const services = [
  'Control de accesos',
  'Parking',
  'Reserva de caravaning (pernocta)',
  'Servicio de agua',
  'Contador de energía de 16A a 120A',
  'Servicio de aire',
  'Lavaderos',
  'Ticketing para eventos',
  'Básculas de camiones',
]

const services_images = [
  "https://images.unsplash.com/photo-1765710475256-1708882da66e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1771931108186-bf121365e609?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1752324658757-ca9e690772e5?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1637939157373-2198d933afdf?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1684684383508-261dd0e8f467?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1611807527279-f6ac568cd4f8?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1722097981809-042e0467ba12?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1754910567936-45306202302e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1759826350352-c5b0b77729bd?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
]

const audiences = [
  'Ayuntamientos',
  'Parques naturales',
  'Gasolineras',
  'Áreas de autoservicio',
  'Operadores privados',
  'Festivales y recintos temporales',
]

const benefits = [
  {
    title: 'Cobro desatendido',
    text: 'Permite cobrar servicios sin depender de personal presencial y con una operativa simple para el usuario final.',
  },
  {
    title: 'Se adapta a tu espacio',
    text: 'Configura accesos, parkings, pernocta, agua, luz, aire o lavaderos según los servicios que realmente ofreces.',
  },
  {
    title: 'Más rentabilidad',
    text: 'Convierte un espacio infrautilizado en una fuente de ingresos recurrente y fácil de gestionar.',
  },
  {
    title: 'Escalable',
    text: 'Empieza con un servicio y amplía a más módulos cuando tu área crezca o cambien las necesidades.',
  },
]

function useSeo() {
  useEffect(() => {
    const currentUrl = window.location.href
    const canonical = document.getElementById('canonical-link')
    if (canonical) canonical.setAttribute('href', currentUrl)

    const ensureMeta = ({ selector, attr, key, content }) => {
      let meta = document.querySelector(selector)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attr, key)
        document.head.appendChild(meta)
      }
      meta.setAttribute(attr, key)
      meta.setAttribute('content', content)
    }

    const ogImageUrl = `${window.location.origin}${import.meta.env.BASE_URL}favicon.png`

    ensureMeta({
      selector: 'meta[property="og:url"]',
      attr: 'property',
      key: 'og:url',
      content: currentUrl,
    })

    ensureMeta({
      selector: 'meta[property="og:image"]',
      attr: 'property',
      key: 'og:image',
      content: ogImageUrl,
    })

    ensureMeta({
      selector: 'meta[name="twitter:image"]',
      attr: 'name',
      key: 'twitter:image',
      content: ogImageUrl,
    })

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'SmartPay Caravaning',
      serviceType: 'Cobro desatendido para caravaning, accesos y servicios',
      areaServed: 'España',
      url: currentUrl,
      provider: {
        '@type': 'Organization',
        name: 'SmartPay',
        url: 'https://app.appsmartpay.com/',
        email: 'tienda@dastions.com',
      },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '19',
        highPrice: '139',
        priceCurrency: 'EUR',
      },
    }

    let script = document.getElementById('schema-service')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'schema-service'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(schema)
  }, [])
}

function TariffCard({ row, showExtra }) {
  const n = Number.parseInt(row.servicios, 10)
  const serviciosLabel =
    Number.isFinite(n) && n === 1 ? '1 servicio incluido' : `${row.servicios} servicios incluidos`

  return (
    <article className="tariff-card">
      <h4 className="tariff-card__name">{row.tarifa}</h4>
      <p className="tariff-card__ideal">{row.ideal}</p>
      <span className="tariff-card__badge">{serviciosLabel}</span>
      <p className="tariff-card__price">
        {row.precio}
        <span className="tariff-card__period">/mes</span>
      </p>
      {showExtra && row.extra ? (
        <p className="tariff-card__extra">
          <span className="tariff-card__extra-label">Servicios adicionales</span>
          {row.extra}
        </p>
      ) : null}
    </article>
  )
}

function TariffCategory({ categoryId, title, description, rows, showExtra }) {
  const compact = rows.length <= 1
  const headingId = `tariff-${categoryId}`

  return (
    <section
      className={`tariff-category${compact ? ' tariff-category--compact' : ''}`}
      aria-labelledby={headingId}
    >
      <header className="tariff-category__head">
        <h3 id={headingId}>{title}</h3>
        {description ? <p className="tariff-category__desc">{description}</p> : null}
      </header>
      <div className="tariff-cards">
        {rows.map((row) => (
          <TariffCard key={row.tarifa} row={row} showExtra={showExtra} />
        ))}
      </div>
    </section>
  )
}

export default function App() {
  useSeo()

  const serviceItems = useMemo(
    () =>
      services.map((label, i) => ({
        label,
        imageUrl: (services_images[i] ?? '').trim(),
      })),
    [],
  )

  const [activeServiceIndex, setActiveServiceIndex] = useState(0)

  const activeService = serviceItems[activeServiceIndex]
  const activeServiceImageUrl = activeService?.imageUrl || undefined

  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    interes: 'Área de caravaning',
    mensaje: '',
  })
  const [errors, setErrors] = useState({})

  const introMessage = useMemo(
    () =>
      [
        `Nombre: ${formData.nombre}`,
        `Empresa/organización: ${formData.empresa}`,
        `Email: ${formData.email}`,
        `Teléfono: ${formData.telefono}`,
        `Interés principal: ${formData.interes}`,
        '',
        'Mensaje:',
        formData.mensaje,
      ].join('\n'),
    [formData],
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}
    if (!formData.nombre.trim()) nextErrors.nombre = 'Indica tu nombre.'
    if (!formData.email.trim()) nextErrors.email = 'Indica tu email.'
    if (!formData.mensaje.trim()) nextErrors.mensaje = 'Escribe brevemente qué necesitas.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const subject = encodeURIComponent(`Interés comercial SmartPay Caravaning - ${formData.interes}`)
    const body = encodeURIComponent(introMessage)
    window.location.href = `mailto:tienda@dastions.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="page-shell">
      <div className="promo-float" role="status" aria-live="polite">
        <div className="promo-bar">
          <span>Promoción activa</span>
          <strong>Prueba 3 meses gratuitos</strong>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-row">
          <a className="brand" href="#inicio" aria-label="Ir al inicio">
            <img src={logo} alt="SmartPay" />
          </a>
          <nav>
            <a href="#soluciones">Soluciones</a>
            <a href="#tarifas">Tarifas</a>
            <a href="#contacto">Contacto</a>
            <a className="button button-small" href="#contacto">
              Estoy interesado
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Powered by <a href="https://app.appsmartpay.com/" target="_blank" rel="noreferrer">AppSmartPay</a></p>
              <h1>Cobra servicios de caravaning y autoservicio de forma fácil, rentable y desatendida</h1>
              <p className="lead">
                Una landing enfocada a áreas de caravaning, parkings, accesos, agua, luz, aire,
                lavaderos, ticketing y básculas para ayuntamientos y operadores privados.
              </p>
              <div className="hero-actions">
                <a className="button" href="#contacto">
                  Estoy interesado
                </a>
                <a className="button button-secondary" href="#tarifas">
                  Ver tarifas
                </a>
              </div>
              <ul className="hero-points">
                <li>Control de accesos y parking con reserva</li>
                <li>Cobro por uso de agua, energía, aire y lavaderos</li>
                <li>Venta de tickets y cobro en básculas de camiones</li>
              </ul>
            </div>
            <div className="hero-visual">
              <div className="visual-card">
                <img src={caravaningIllustration} alt="Ilustración de área residencial y acceso controlado" />
              </div>
            </div>
          </div>
        </section>

        <section className="impact-section">
          <div className="container impact-grid">
            <div>
              <p className="eyebrow">Pon rentabilidad a tu espacio</p>
              <h2>Diseñado para cobrar donde antes era difícil monetizar</h2>
              <p>
                Convierte una zona de acceso, un aparcamiento, un área de pernocta o un servicio auxiliar
                en una fuente de ingresos sencilla de gestionar y preparada para crecer contigo.
              </p>
            </div>
            <div className="impact-image-card">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
                alt="Paisaje natural vinculado a áreas turísticas y caravaning"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="section" id="soluciones">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Soluciones</p>
              <h2>El producto se adapta a los servicios disponibles</h2>
              <p>
                Activa solo lo que necesites hoy y amplía más adelante con servicios adicionales o
                proyectos a medida.
              </p>
            </div>
            <div
              className="service-picker"
              role="tablist"
              aria-label="Servicios que puedes activar"
            >
              {serviceItems.map((item, i) => (
                <button
                  key={item.label}
                  type="button"
                  role="tab"
                  id={`service-tab-${i}`}
                  aria-selected={i === activeServiceIndex}
                  aria-controls="service-preview-panel"
                  className={`chip chip--service${i === activeServiceIndex ? ' chip--service-active' : ''}`}
                  onClick={() => setActiveServiceIndex(i)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div
              className="service-preview"
              id="service-preview-panel"
              role="tabpanel"
              aria-labelledby={`service-tab-${activeServiceIndex}`}
            >
              {activeServiceImageUrl ? (
                <div className="service-preview__frame">
                  <img
                    src={activeServiceImageUrl}
                    alt={`Ilustración: ${activeService.label}`}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="service-preview__placeholder">
                  <p>Añade la URL de la imagen en <code>services_images</code> para este servicio.</p>
                </div>
              )}
              <p className="service-preview__caption">{activeService?.label}</p>
            </div>
          </div>
        </section>

        <section className="section tinted-section">
          <div className="container cards-grid">
            {benefits.map((benefit) => (
              <article className="info-card" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section audience-section">
          <div className="container audience-grid">
            <div>
              <p className="eyebrow">Cliente ideal</p>
              <h2>Para ayuntamientos y empresas que quieran cobrar de forma sencilla</h2>
              <p>
                Especialmente útil para espacios donde se quiere automatizar el cobro, reducir carga
                operativa y mejorar la experiencia del usuario final.
              </p>
            </div>
            <div className="audience-list">
              {audiences.map((audience) => (
                <div className="audience-item" key={audience}>
                  {audience}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section tariffs-section" id="tarifas">
          <div className="container">
            <div className="section-heading left">
              <p className="eyebrow">Tarifas mensuales</p>
              <h2>Precios claros para empezar rápido</h2>
              <p>
                Elige el bloque que encaje con tu espacio: cada tarjeta resume qué incluye, el precio
                mensual y, en caravaning, cuánto cuesta ampliar servicios.
              </p>
            </div>

            <p className="tariffs-legend">
              <strong>Todos los importes son mensuales y sin IVA.</strong> En caravaning, el precio base
              incluye el número de servicios indicado; puedes sumar más al mismo precio unitario.
            </p>

            <div className="tariffs-stack">
              <TariffCategory
                categoryId="accesos"
                title="Control de accesos (parques naturales)"
                description="Barrera o acceso controlado con reserva online. Una tarifa sencilla para espacios que priorizan el control de entradas."
                rows={tariffs.access}
                showExtra={false}
              />

              <TariffCategory
                categoryId="caravaning"
                title="Servicios de caravaning"
                description="Packs según cuántos servicios quieras digitalizar (agua, luz, pernocta, etc.). Si creces, pagas solo el extra por servicio adicional."
                rows={tariffs.caravaning}
                showExtra
              />

              <TariffCategory
                categoryId="bascula"
                title="Otros Servicios"
                description="Cobro de otros servicios como lavaderos, ticketing para eventos, básculas de camiones, etc."
                rows={tariffs.scale}
                showExtra={false}
              />
            </div>

            <ul className="tariff-notes">
              <li>
                <strong>Comisiones por pago</strong>
                <span>
                  De 0,10 € a 0,15 € + 2% del importe cuando el cliente no configura <a href="https://redsys.es/" target="_blank" rel="noreferrer">Redsys</a> o el cobro va
                  por tarjeta física en <a href="https://www.adyen.com/es_ES/dispositivos-tpv/" target="_blank" rel="noreferrer">TPV</a>.
                </span>
              </li>
              <li>
                <strong>IVA</strong>
                <span>Los precios de las tarjetas no incluyen IVA.</span>
              </li>
              <li>
                <strong>Asistencia remota</strong>
                <span>55 €/h en administraciones, facturable a final de mes con albaranes.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="section process-section">
          <div className="container process-grid">
            <div>
              <p className="eyebrow">Cómo encaja</p>
              <h2>Un sistema pensado para vender y cobrar sin complicaciones</h2>
            </div>
            <div className="steps-grid">
              <article className="step-card">
                <span>01</span>
                <h3>Configuras el servicio</h3>
                <p>Accesos, parking, pernocta, agua, luz, aire, ticketing o báscula.</p>
              </article>
              <article className="step-card">
                <span>02</span>
                <h3>El usuario paga</h3>
                <p>Desde el flujo de reserva o en el punto de servicio, con una experiencia directa.</p>
              </article>
              <article className="step-card">
                <span>03</span>
                <h3>Tú rentabilizas</h3>
                <p>Cobras más fácil, con menos gestión manual y un modelo preparado para crecer.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container cta-banner">
            <div>
              <p className="eyebrow">Proyectos a medida</p>
              <h2>¿Quieres instalar un área de caravaning completa o servicios específicos?</h2>
              <p>
                Te ayudamos a plantear una propuesta personalizada. El contacto comercial centraliza
                tanto el interés por tarifas como proyectos especiales.
              </p>
            </div>
            <a className="button" href="#contacto">
              Solicitar propuesta
            </a>
          </div>
        </section>

        <section className="section contact-section" id="contacto">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Contacto comercial</p>
              <h2>Cuéntanos tu caso y te preparamos una propuesta</h2>
              <p>
                Completa el formulario y se abrirá tu gestor de correo con el mensaje preparado para
                enviarlo a <strong>tienda@dastions.com</strong>.
              </p>
              <ul className="contact-points">
                <li>Ideal para ayuntamientos, operadores privados y espacios de autoservicio</li>
                <li>Útil para empezar rápido con una landing de captación</li>
                <li>Preparado para ampliar con proyectos a medida</li>
              </ul>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Nombre *
                <input name="nombre" value={formData.nombre} onChange={handleChange} />
                {errors.nombre && <small>{errors.nombre}</small>}
              </label>
              <label>
                Empresa / organización
                <input name="empresa" value={formData.empresa} onChange={handleChange} />
              </label>
              <div className="form-row">
                <label>
                  Email *
                  <input name="email" type="email" value={formData.email} onChange={handleChange} />
                  {errors.email && <small>{errors.email}</small>}
                </label>
                <label>
                  Teléfono
                  <input name="telefono" value={formData.telefono} onChange={handleChange} />
                </label>
              </div>
              <label>
                Interés principal
                <select name="interes" value={formData.interes} onChange={handleChange}>
                  <option>Área de caravaning</option>
                  <option>Control de accesos</option>
                  <option>Parking</option>
                  <option>Agua / luz / aire</option>
                  <option>Lavaderos</option>
                  <option>Ticketing para eventos</option>
                  <option>Básculas de camiones</option>
                  <option>Proyecto a medida</option>
                </select>
              </label>
              <label>
                Mensaje *
                <textarea
                  name="mensaje"
                  rows="5"
                  placeholder="Explícanos brevemente qué espacio tienes, qué servicios quieres cobrar y qué tipo de cliente gestionas."
                  value={formData.mensaje}
                  onChange={handleChange}
                />
                {errors.mensaje && <small>{errors.mensaje}</small>}
              </label>
              <button type="submit" className="button">
                Enviar interés
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <img className="footer-logo" src={logo} alt="SmartPay" />
          </div>
          <div className="footer-links">
            <a href="https://app.appsmartpay.com/privacy/legal-notice" target="_blank" rel="noreferrer">
              Aviso Legal y Política de Privacidad
            </a>
            <a href="https://www.appsmartpay.com/terms-conditions/" target="_blank" rel="noreferrer">
              Términos y condiciones
            </a>
            <a href="mailto:tienda@dastions.com">tienda@dastions.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
