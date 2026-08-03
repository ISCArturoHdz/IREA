"use client";

import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Automatización industrial",
    short: "Control que convierte procesos complejos en operaciones precisas.",
    description:
      "Integramos PLC, HMI, variadores, sensores y sistemas eléctricos multimarca. Programamos, respaldamos y optimizamos procesos críticos para que la planta responda con precisión.",
    tags: ["PLC + HMI", "VFD", "Sensores", "Backups"],
  },
  {
    number: "02",
    title: "Reparación electrónica",
    short: "Diagnóstico especializado para recuperar el corazón de tu operación.",
    description:
      "Reparamos drives, tarjetas de control, HMI, PLC, servomotores y motores de C.A. y C.D. con enfoque en extender la vida útil del equipo y reducir reemplazos innecesarios.",
    tags: ["Drives", "Tarjetas", "Servomotores", "Embobinado"],
  },
  {
    number: "03",
    title: "HVAC y cuartos limpios",
    short: "Ambientes críticos estables, medibles y bajo control.",
    description:
      "Mantenimiento de UMA y UEX, control de presión diferencial, humedad y temperatura, además de balanceo de sistemas bajo los criterios de ISO 14644.",
    tags: ["UMA + UEX", "ISO 14644", "Presión", "Temperatura"],
  },
  {
    number: "04",
    title: "Mantenimiento estratégico",
    short: "Intervenciones que protegen la continuidad de tu planta.",
    description:
      "Planes preventivos y correctivos, diagnóstico eléctrico y mecánico, atención en planta y acompañamiento técnico para reducir tiempos muertos y mejorar el rendimiento operativo.",
    tags: ["Preventivo", "Correctivo", "Diagnóstico", "En planta"],
  },
  {
    number: "05",
    title: "SCADA y portales en tiempo real",
    short: "Los datos de tus máquinas, convertidos en decisiones oportunas.",
    description:
      "Desarrollamos sistemas SCADA, portales y dashboards interactivos a la medida. Nos conectamos con los PLC de las máquinas, seleccionamos los tags críticos y transformamos sus datos en visualizaciones en tiempo real para monitorear estados, detectar desviaciones y seguir indicadores clave a nivel operativo y directivo.",
    tags: ["SCADA", "Tags de PLC", "Tiempo real", "KPI + OEE"],
  },
];

const process = [
  ["01", "Escuchamos", "Entendemos el proceso, la falla y el impacto operativo."],
  ["02", "Diagnosticamos", "Medimos, analizamos y definimos una ruta técnica clara."],
  ["03", "Integramos", "Ejecutamos con ingeniería, trazabilidad y comunicación directa."],
  ["04", "Acompañamos", "Entregamos, validamos y permanecemos cerca de tu operación."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
        <a className="brand" href="#inicio" aria-label="IREA, volver al inicio">
          <span className="brand-name">IREA</span>
          <span className="brand-tagline">Design &amp; Control</span>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Abrir navegación"
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Navegación principal">
          <a onClick={closeMenu} href="#nosotros">Nosotros</a>
          <a onClick={closeMenu} href="#servicios">Servicios</a>
          <a onClick={closeMenu} href="#metodo">Método</a>
          <a onClick={closeMenu} href="#contacto">Contacto</a>
          <a className="nav-cta" onClick={closeMenu} href="https://wa.me/525572732719" target="_blank" rel="noreferrer">
            Cotizar proyecto <span>↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-noise" />
        <div className="hero-content">
          <div className="eyebrow"><span /> Ingeniería industrial de alto nivel</div>
          <h1>
            Ingeniería que mantiene
            <span> tu industria en movimiento.</span>
          </h1>
          <p>
            Automatización, reparación electrónica, HVAC y mantenimiento para
            procesos que no pueden detenerse.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">Hablemos de tu proyecto <span>↗</span></a>
            <a className="text-link" href="#servicios">Explorar capacidades <span>↓</span></a>
          </div>
        </div>
        <div className="hero-rail" aria-label="Especialidades">
          <span>Automatización</span><i />
          <span>Electrónica</span><i />
          <span>HVAC</span><i />
          <span>Mantenimiento</span><i />
          <span>Datos en tiempo real</span>
        </div>
        <div className="scroll-cue"><span>Scroll</span><i /></div>
      </section>

      <section className="manifesto section" id="nosotros">
        <div className="section-label">01 / Quiénes somos</div>
        <div className="manifesto-grid">
          <h2>Tu operación merece algo más que una reparación temporal.</h2>
          <div className="manifesto-copy">
            <p className="lead">
              En IREA convertimos necesidades técnicas en soluciones integrales,
              confiables y hechas para durar.
            </p>
            <p>
              Combinamos ingeniería, diagnóstico especializado y ejecución en
              planta para optimizar el rendimiento, prolongar la vida útil de los
              equipos y dar continuidad a los procesos industriales.
            </p>
            <div className="proof-line">
              <span><strong>Multimarca</strong>Integración sin ataduras</span>
              <span><strong>Integral</strong>De la falla a la solución</span>
              <span><strong>Cercano</strong>Acompañamiento técnico</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services section" id="servicios">
        <div className="section-label light">02 / Capacidades</div>
        <div className="services-heading">
          <h2>Especialistas en lo que hace funcionar tu planta.</h2>
          <p>Selecciona una capacidad para conocer nuestro alcance.</p>
        </div>
        <div className="services-shell">
          <div className="service-tabs" role="tablist" aria-label="Servicios IREA">
            {services.map((service, index) => (
              <button
                key={service.title}
                className={activeService === index ? "service-tab is-active" : "service-tab"}
                onClick={() => setActiveService(index)}
                role="tab"
                aria-selected={activeService === index}
              >
                <span>{service.number}</span>
                <strong>{service.title}</strong>
                <i>↗</i>
              </button>
            ))}
          </div>
          <div className="service-detail" role="tabpanel">
            <span className="service-index">{services[activeService].number}</span>
            <p className="service-kicker">{services[activeService].short}</p>
            <p className="service-description">{services[activeService].description}</p>
            <div className="tags">
              {services[activeService].tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a href="#contacto">Solicitar evaluación técnica <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="method section" id="metodo">
        <div className="section-label">03 / Nuestra forma de trabajar</div>
        <div className="method-heading">
          <h2>Rigor técnico.<br />Respuesta humana.</h2>
          <p>
            Un proceso claro, desde la primera conversación hasta la validación
            final en planta.
          </p>
        </div>
        <div className="process-grid">
          {process.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <div className="process-mark" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="commitment">
        <div className="commitment-visual">
          <img src="/irea-icon.png" alt="" />
        </div>
        <div className="commitment-copy">
          <div className="section-label light">04 / Nuestro compromiso</div>
          <p className="quote">
            “No se trata sólo de reparar equipos. Se trata de proteger la
            continuidad de todo lo que depende de ellos.”
          </p>
          <div className="commitment-list">
            <span>Continuidad operativa</span>
            <span>Eficiencia y confiabilidad</span>
            <span>Alianzas a largo plazo</span>
          </div>
        </div>
      </section>

      <section className="contact section" id="contacto">
        <div className="contact-glow" />
        <div className="section-label light">05 / Contacto</div>
        <div className="contact-grid">
          <div>
            <p className="contact-kicker">El siguiente gran proyecto puede empezar hoy.</p>
            <h2>Hagamos que tu operación avance.</h2>
          </div>
          <div className="contact-actions">
            <a className="button button-primary button-large" href="https://wa.me/525572732719?text=Hola%20IREA%2C%20quiero%20platicarles%20sobre%20un%20proyecto." target="_blank" rel="noreferrer">
              Iniciar conversación <span>↗</span>
            </a>
            <a href="mailto:electronicaycontrolirea@gmail.com">electronicaycontrolirea@gmail.com</a>
            <a href="tel:+525572732719">+52 55 7273 2719</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <strong>IREA</strong>
          <span>Ingeniería industrial de alto nivel.</span>
        </div>
        <div className="footer-links">
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#metodo">Método</a>
          <a href="#contacto">Contacto</a>
        </div>
        <p>© {new Date().getFullYear()} IREA Design &amp; Control.</p>
      </footer>
    </main>
  );
}
