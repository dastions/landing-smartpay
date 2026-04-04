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

function TariffTable({ title, columns, rows }) {
  return (
    <div className="tariff-block">
      <h3>{title}</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.tarifa}>
                {columns.map((column) => (
                  <td key={`${row.tarifa}-${column.key}`}>{row[column.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function App() {
  useSeo()

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
      <div className="promo-bar">
        <span>Promoción activa</span>
        <strong>Prueba 3 meses gratuitos</strong>
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
            <div className="chip-grid">
              {services.map((service) => (
                <span className="chip" key={service}>
                  {service}
                </span>
              ))}
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
              <h2>Para ayuntamientos y servicio privado que quieran cobrar de forma sencilla</h2>
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

        <section className="section" id="tarifas">
          <div className="container">
            <div className="section-heading left">
              <p className="eyebrow">Tarifas mensuales</p>
              <h2>Precios claros para publicar y empezar rápido</h2>
              <p>Basado en el flyer facilitado, con el mismo esquema comercial y precios sin IVA.</p>
            </div>

            <TariffTable
              title="Control de Accesos Parques Naturales"
              columns={[
                { key: 'tarifa', label: 'Tarifa' },
                { key: 'ideal', label: 'Ideal para' },
                { key: 'servicios', label: 'Servicios' },
                { key: 'precio', label: 'Precio' },
              ]}
              rows={tariffs.access}
            />

            <TariffTable
              title="Servicios de Caravaning"
              columns={[
                { key: 'tarifa', label: 'Tarifa' },
                { key: 'ideal', label: 'Ideal para' },
                { key: 'servicios', label: 'Servicios' },
                { key: 'precio', label: 'Precio' },
                { key: 'extra', label: 'Extra' },
              ]}
              rows={tariffs.caravaning}
            />

            <TariffTable
              title="Ticket de Báscula"
              columns={[
                { key: 'tarifa', label: 'Tarifa' },
                { key: 'ideal', label: 'Ideal para' },
                { key: 'servicios', label: 'Servicios' },
                { key: 'precio', label: 'Precio' },
              ]}
              rows={tariffs.scale}
            />

            <div className="tariff-notes">
              <p>
                <strong>Comisiones flexibles:</strong> de 0,10 € a 0,15 € + 2% del importe, cuando el
                cliente no configura su Redsys o el pago se realiza mediante tarjeta física sobre TPV.
              </p>
              <p>Precios sin IVA.</p>
              <p>
                <strong>Asistencia remota:</strong> 55 €/h para administraciones facturables a final de
                mes con albaranes.
              </p>
            </div>
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
            <p>Landing comercial estática para publicar rápido y captar leads de servicios de pago.</p>
          </div>
          <div className="footer-links">
            <a href="https://app.appsmartpay.com/" target="_blank" rel="noreferrer">
              Web / app madre
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
