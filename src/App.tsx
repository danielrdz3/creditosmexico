import { useState } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1625690988276-0a7b0cdf3d5d?auto=format&fit=crop&w=1600&q=88";

type IconName =
  | "arrow"
  | "car"
  | "check"
  | "chevron"
  | "home"
  | "menu"
  | "personal"
  | "shield"
  | "wallet"
  | "x";

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    car: (
      <>
        <path d="m5 17-1 2m15-2 1 2M3 13l2-6a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 6" />
        <path d="M5 13h14a2 2 0 0 1 2 2v2H3v-2a2 2 0 0 1 2-2ZM7 16h.01M17 16h.01" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    personal: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    shield: <path d="M12 3 5 6v5c0 4.7 2.8 8.1 7 10 4.2-1.9 7-5.3 7-10V6l-7-3Zm-3 9 2 2 4-5" />,
    wallet: (
      <>
        <path d="M4 6h14a2 2 0 0 1 2 2v10H4a2 2 0 0 1-2-2V6a3 3 0 0 1 3-3h12" />
        <path d="M16 11h6v4h-6a2 2 0 0 1 0-4Z" />
      </>
    ),
    x: <path d="m6 6 12 12M18 6 6 18" />,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}

function Logo() {
  return (
    <a aria-label="Créditos México, inicio" className="logo" href="#inicio">
      <svg aria-hidden="true" className="logo-mark" viewBox="0 0 40 40">
        <circle cx="20" cy="20" fill="none" r="17.2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="20" cy="20" fill="none" r="13.2" stroke="currentColor" strokeWidth="1.1" />
        <circle cx="20" cy="20" fill="none" r="7.2" stroke="currentColor" strokeWidth="1.3" />
        <path
          d="M20 2.8L22 6L20 9.2L18 6L20 2.8ZM37.2 20L34 22L30.8 20L34 18L37.2 20ZM20 37.2L18 34L20 30.8L22 34L20 37.2ZM2.8 20L6 18L9.2 20L6 22L2.8 20Z"
          fill="currentColor"
        />
        <path
          d="M7.8 7.8L11.5 8.6L12.2 12.2L8.6 11.5L7.8 7.8ZM32.2 7.8L31.4 11.5L27.8 12.2L28.5 8.6L32.2 7.8ZM32.2 32.2L28.5 31.4L27.8 27.8L31.4 28.5L32.2 32.2ZM7.8 32.2L8.6 28.5L12.2 27.8L11.5 31.4L7.8 32.2Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="miter"
          strokeWidth="1.2"
        />
        <path
          d="M20 12.8L24.2 17L23 23L20 27.2L17 23L15.8 17L20 12.8ZM17.3 20H22.7M20 15.2V24.8"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="miter"
          strokeWidth="1.25"
        />
      </svg>
      <span>créditos</span>
      <strong>méxico</strong>
    </a>
  );
}

const products = [
  {
    icon: "wallet" as IconName,
    eyebrow: "Para disfrutar tu retiro",
    title: "Crédito para pensionados",
    text: "Obtén apoyo para tus planes con pagos claros y opciones pensadas para tu tranquilidad.",
    color: "bg-sand",
  },
  {
    icon: "personal" as IconName,
    eyebrow: "Para tus planes",
    title: "Crédito personal",
    text: "Haz realidad eso que tienes en mente, con pagos que sí caben en tu vida.",
    color: "bg-sky",
  },
  {
    icon: "home" as IconName,
    eyebrow: "Para tu patrimonio",
    title: "Crédito hipotecario",
    text: "Encuentra una opción clara para comprar, remodelar o mejorar tu hogar.",
    color: "bg-mint",
  },
  {
    icon: "car" as IconName,
    eyebrow: "Para seguir avanzando",
    title: "Crédito automotriz",
    text: "Estrena o cambia tu auto con condiciones que puedes entender desde el inicio.",
    color: "bg-lilac",
  },
];

const faqs = [
  {
    question: "¿Consultar opciones afecta mi historial crediticio?",
    answer:
      "No. Explorar y comparar opciones con nosotros no afecta tu historial. Si decides solicitar un producto, la institución te explicará antes cualquier consulta formal.",
  },
  {
    question: "¿Créditos México presta el dinero directamente?",
    answer:
      "Somos una plataforma para comparar opciones de instituciones financieras. Te ayudamos a entender alternativas y elegir con más confianza.",
  },
  {
    question: "¿Qué necesito para comenzar?",
    answer:
      "Solo responde algunas preguntas básicas sobre lo que buscas. Nunca te pediremos pagos por adelantado para mostrarte opciones.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [amount, setAmount] = useState(150000);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const monthlyPayment = Math.round((amount * 0.0205) / 100) * 100;

  return (
    <main id="inicio">
      <header className="site-header">
        <div className="nav-shell">
          <Logo />
          <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Navegación principal">
            <a href="#creditos" onClick={() => setMenuOpen(false)}>
              Créditos <span>⌄</span>
            </a>
            <a href="#como-funciona" onClick={() => setMenuOpen(false)}>
              Cómo funciona
            </a>
            <a href="#confianza" onClick={() => setMenuOpen(false)}>
              Aprende
            </a>
            <a href="#ayuda" onClick={() => setMenuOpen(false)}>
              Ayuda
            </a>
          </nav>
          <div className="nav-actions">
            <a className="login-link" href="#ayuda">
              Iniciar sesión
            </a>
            <a className="button button-small" href="#simulador">
              Encontrar mi crédito
            </a>
          </div>
          <button
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-shell">
          <div className="hero-copy">
            <div className="eyebrow-pill">
              <span />
              Decisiones claras para tu tranquilidad
            </div>
            <h1>El crédito para vivir tus planes, <em>a tu manera.</em></h1>
            <p>
              Compara opciones confiables, entiende cada detalle y elige la que mejor se adapta a
              ti. Sin letras chiquitas ni complicaciones.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#simulador">
                Conoce tus opciones <Icon name="arrow" />
              </a>
              <a className="text-link" href="#como-funciona">
                Ver cómo funciona <Icon name="chevron" />
              </a>
            </div>
            <div className="hero-trust">
              <span className="trust-icon">
                <Icon name="shield" className="h-4 w-4" />
              </span>
              Consultar es gratis y no afecta tu historial crediticio
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-frame">
              <img
                src={heroImage}
                alt="Pareja adulta sonriendo y disfrutando un momento juntos"
              />
            </div>
            <div className="floating-card floating-card-top">
              <span className="mini-check">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <div>
                <strong>Opciones verificadas</strong>
                <small>Instituciones reguladas</small>
              </div>
            </div>
            <div className="floating-card floating-card-bottom">
              <div className="rate-badge">%</div>
              <div>
                <strong>Todo claro desde el inicio</strong>
                <small>Compara tasas y pagos</small>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave" />
      </section>

      <section className="credit-card-banner" aria-label="Tarjeta de crédito Créditos México">
        <div className="section-shell credit-card-shell">
          <div className="credit-card-visual" aria-hidden="true">
            <div className="card-plastic">
              <div className="card-plastic-top">
                <span className="card-mini-logo">
                  <i />
                  <i />
                  <i />
                </span>
                <span>créditos méxico</span>
              </div>
              <div className="card-chip">
                <span />
                <span />
                <span />
              </div>
              <div className="card-plastic-bottom">
                <span>•••• 2048</span>
                <strong>VISA</strong>
              </div>
            </div>
            <span className="card-spark card-spark-one">✦</span>
            <span className="card-spark card-spark-two">✦</span>
          </div>
          <div className="credit-card-copy">
            <span className="banner-kicker">NUEVO · TARJETA DE CRÉDITO</span>
            <h2>Una tarjeta para disfrutar más de cada día.</h2>
            <p>
              Una opción práctica para tus compras, con información sencilla y condiciones que
              puedes conocer antes de decidir.
            </p>
            <div className="banner-benefits">
              <span><Icon name="check" /> Beneficios fáciles de entender</span>
              <span><Icon name="check" /> Solicitud sencilla</span>
            </div>
          </div>
          <a className="button banner-button" href="#creditos">
            Conocer la tarjeta <Icon name="arrow" />
          </a>
        </div>
      </section>

      <section className="products section-shell" id="creditos">
        <div className="section-heading">
          <div>
            <span className="kicker">UN CRÉDITO PARA CADA META</span>
            <h2>¿Qué quieres lograr hoy?</h2>
          </div>
          <p>
            Encuentra soluciones sencillas para tus planes de hoy y la tranquilidad de mañana.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <a className="product-card" href="#simulador" key={product.title}>
              <span className={`product-icon ${product.color}`}>
                <Icon name={product.icon} className="h-7 w-7" />
              </span>
              <small>{product.eyebrow}</small>
              <h3>{product.title}</h3>
              <p>{product.text}</p>
              <span className="card-link">
                Conocer más <Icon name="arrow" className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="calculator-section" id="simulador">
        <div className="section-shell calculator-shell">
          <div className="calculator-copy">
            <span className="kicker kicker-light">HAZ CUENTAS SIN COMPLICARTE</span>
            <h2>Un primer vistazo a tu crédito.</h2>
            <p>
              Ajusta el monto para conocer un pago mensual estimado. Te mostraremos opciones
              personalizadas cuando estés listo.
            </p>
            <ul>
              <li>
                <Icon name="check" /> Comparar no tiene costo
              </li>
              <li>
                <Icon name="check" /> Respuesta en pocos minutos
              </li>
              <li>
                <Icon name="check" /> Tus datos siempre protegidos
              </li>
            </ul>
          </div>
          <div className="calculator-card">
            <div className="calculator-top">
              <span>¿Cuánto necesitas?</span>
              <strong>${amount.toLocaleString("es-MX")}</strong>
            </div>
            <input
              aria-label="Monto del crédito"
              max="500000"
              min="10000"
              onChange={(event) => setAmount(Number(event.target.value))}
              step="5000"
              type="range"
              value={amount}
            />
            <div className="range-labels">
              <span>$10,000</span>
              <span>$500,000</span>
            </div>
            <div className="estimate-box">
              <span>Pago mensual estimado desde</span>
              <strong>${monthlyPayment.toLocaleString("es-MX")} <small>MXN</small></strong>
              <p>Estimación a 60 meses. La tasa final depende de tu perfil.</p>
            </div>
            <a className="button button-coral" href="#como-funciona">
              Ver opciones para mí <Icon name="arrow" />
            </a>
            <small className="privacy-note">Sin compromiso · Resultado personalizado</small>
          </div>
        </div>
      </section>

      <section className="steps section-shell" id="como-funciona">
        <div className="center-heading">
          <span className="kicker">ASÍ DE SENCILLO</span>
          <h2>Avanza con confianza.</h2>
          <p>Tú decides. Nosotros hacemos que comparar sea fácil.</p>
        </div>
        <div className="steps-grid">
          {[
            ["01", "Cuéntanos tu meta", "Responde unas preguntas sencillas. Te tomará menos de 3 minutos."],
            ["02", "Compara con claridad", "Revisa tasas, plazos y pagos lado a lado, sin sorpresas."],
            ["03", "Elige a tu ritmo", "Solicita la opción que prefieras cuando te sientas listo."],
          ].map(([number, title, text], index) => (
            <div className="step" key={number}>
              <div className="step-number">{number}</div>
              {index < 2 && <div className="step-line" />}
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="confidence" id="confianza">
        <div className="section-shell confidence-shell">
          <div className="confidence-art">
            <div className="confidence-circle">
              <Icon name="shield" className="h-20 w-20" />
            </div>
            <span className="spark spark-one">✦</span>
            <span className="spark spark-two">✦</span>
          </div>
          <div className="confidence-copy">
            <span className="kicker">TU CONFIANZA VA PRIMERO</span>
            <h2>Créditos claros. Decisiones más tranquilas.</h2>
            <p>
              No necesitas ser experto en finanzas. Explicamos lo importante en palabras simples y
              trabajamos únicamente con instituciones formales.
            </p>
            <div className="confidence-points">
              <div>
                <Icon name="check" />
                <span><strong>Sin letras chiquitas</strong> Información fácil de entender.</span>
              </div>
              <div>
                <Icon name="check" />
                <span><strong>Sin presión</strong> Compara y decide a tu tiempo.</span>
              </div>
              <div>
                <Icon name="check" />
                <span><strong>Siempre protegidos</strong> Tus datos se mantienen seguros.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq section-shell" id="ayuda">
        <div className="faq-heading">
          <span className="kicker">ESTAMOS PARA AYUDARTE</span>
          <h2>Preguntas frecuentes.</h2>
          <p>Respuestas claras para que tomes una mejor decisión.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className={openFaq === index ? "faq-item open" : "faq-item"} key={faq.question}>
              <button onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <span>{faq.question}</span>
                <span className="faq-plus">{openFaq === index ? "−" : "+"}</span>
              </button>
              {openFaq === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-shape final-cta-shape-one" />
        <div className="final-cta-shape final-cta-shape-two" />
        <div className="section-shell final-cta-content">
          <span>Tu siguiente paso puede ser más sencillo</span>
          <h2>Un buen plan empieza con opciones claras.</h2>
          <a className="button button-white" href="#simulador">
            Encontrar mi crédito <Icon name="arrow" />
          </a>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-top">
          <div className="footer-brand">
            <Logo />
            <p>Créditos más claros para todo México.</p>
          </div>
          <div className="footer-links">
            <div>
              <strong>Productos</strong>
              <a href="#creditos">Crédito personal</a>
              <a href="#creditos">Crédito hipotecario</a>
              <a href="#creditos">Crédito automotriz</a>
            </div>
            <div>
              <strong>Compañía</strong>
              <a href="#como-funciona">Cómo funciona</a>
              <a href="#confianza">Nosotros</a>
              <a href="#ayuda">Contacto</a>
            </div>
            <div>
              <strong>Ayuda</strong>
              <a href="#ayuda">Preguntas frecuentes</a>
              <a href="#ayuda">Privacidad</a>
              <a href="#ayuda">Términos</a>
            </div>
          </div>
        </div>
        <div className="section-shell footer-bottom">
          <span>© 2025 Créditos México. Todos los derechos reservados.</span>
          <span>
            Créditos México es un comparador informativo y no otorga financiamiento directamente.
          </span>
        </div>
      </footer>
    </main>
  );
}
