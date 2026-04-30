import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileCheck2,
  Landmark,
  Scale,
  ShieldCheck,
  ShipWheel,
  Sparkles,
  Store,
  Stamp,
  ScrollText,
  BriefcaseBusiness,
  Check
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Navbar } from "@/components/navbar";
import { Preloader } from "@/components/preloader";
import {
  differentiators,
  faqItems,
  metrics,
  painPoints,
  processSteps,
  services,
  site,
  trustPoints
} from "@/lib/site";

const whatsappHref = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(site.whatsappMessage)}`;

const serviceIcons = [
  Building2,
  FileCheck2,
  ScrollText,
  ShieldCheck,
  Store,
  Stamp,
  Landmark,
  ShipWheel,
  BriefcaseBusiness
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.name,
  description: site.description,
  telephone: site.phoneDisplay,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressCountry: "PA"
  },
  areaServed: "Panamá",
  url: site.url,
  sameAs: [site.instagram],
  openingHours: "Mo-Fr 08:00-17:00"
};

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-brand-ivory">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Preloader />
      <Navbar />
      <FloatingWhatsApp />

      <section id="inicio" className="relative isolate min-h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 md:hidden">
            <Image
              src="/images/hero-mobile.webp"
              alt="Vista premium de la ciudad de Panamá"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 hidden md:block">
            <Image
              src="/images/hero-desktop.webp"
              alt="Skyline de Panamá para A&A Law Firm"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/25 via-brand-navy/10 to-brand-navy/80" />
        </div>

        <div className="site-container relative z-10 flex min-h-screen items-end py-24 pt-32 sm:pt-36 md:items-center md:py-16">
          <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <AnimatedSection>
              <div className="max-w-3xl text-white">
                <span className="eyebrow border-white/15 bg-white/8 text-brand-pearl">
                  Firma legal en Panamá
                </span>
                <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.03] sm:text-5xl md:text-6xl lg:text-7xl">
                  {site.heroTitle}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/82 sm:text-lg md:text-xl md:leading-8">
                  {site.heroSubtitle}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3.5 text-sm font-semibold text-brand-navy transition hover:bg-brand-pearl"
                  >
                    Solicitar asesoría por WhatsApp
                  </Link>
                  <Link
                    href="#servicios"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                  >
                    Ver servicios legales <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {trustPoints.map((point) => (
                    <div
                      key={point}
                      className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm text-white/85 backdrop-blur"
                    >
                      <BadgeCheck size={16} className="text-brand-gold" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.14}>
              <div className="dark-panel p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold/85">
                  Impulso comercial
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-white">
                  Lista para captar consultas desde Google Ads.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  La estructura del sitio está pensada para explicar servicios, transmitir confianza y convertir tráfico frío en conversaciones calificadas.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Mensajes claros y orientados a conversión",
                    "SEO inicial y estructura semántica",
                    "WhatsApp y formulario como CTA principal"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-brand-gold/15 p-1.5 text-brand-gold">
                        <Check size={14} />
                      </div>
                      <p className="text-sm text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="firma" className="section-padding relative">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_420px] lg:items-center">
            <AnimatedSection>
              <div>
                <span className="eyebrow">Firma</span>
                <h2 className="section-title mt-6 max-w-3xl [font-family:var(--font-heading)]">
                  Una estructura legal sólida es la base para operar con seguridad y crecer con confianza.
                </h2>
                <div className="gold-divider mt-6" />
                <p className="body-copy mt-6 max-w-3xl">{site.intro}</p>
                <p className="body-copy mt-4 max-w-3xl">
                  Trabajamos con emprendedores, empresas, marcas e inversionistas que necesitan claridad, acompañamiento y soluciones bien estructuradas en Panamá.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="glass-card p-8">
                <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                  {metrics.map((item) => (
                    <div key={item.label}>
                      <div className="font-serif text-5xl text-brand-navy [font-family:var(--font-heading)]">{item.value}</div>
                      <p className="mt-2 text-sm uppercase tracking-[0.22em] text-brand-slate">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="site-container">
          <AnimatedSection>
            <div className="grid overflow-hidden rounded-[36px] bg-brand-navy lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[360px] lg:min-h-[480px]">
                <Image src="/images/architecture.webp" alt="Arquitectura premium en Panamá" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/0 via-brand-navy/10 to-brand-navy/70" />
              </div>
              <div className="flex items-center p-8 text-white md:p-12">
                <div>
                  <span className="eyebrow border-white/10 bg-white/6 text-brand-pearl">Enfoque estratégico</span>
                  <h2 className="mt-6 font-serif text-3xl leading-tight [font-family:var(--font-heading)] sm:text-4xl">
                    Diseñamos la ruta legal correcta para cada etapa de su operación.
                  </h2>
                  <p className="mt-6 text-base leading-7 text-white/80">
                    Nuestro trabajo no se limita a cumplir un requisito puntual. Acompañamos decisiones que impactan la operación, el cumplimiento y la protección del negocio a corto y largo plazo.
                  </p>
                  <div className="mt-8 grid gap-4">
                    {differentiators.map((item) => (
                      <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                        <div className="flex items-start gap-3">
                          <Sparkles size={18} className="mt-1 shrink-0 text-brand-gold" />
                          <div>
                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-white/75">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="servicios" className="section-padding">
        <div className="site-container">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="eyebrow">Servicios legales</span>
              <h2 className="section-title mt-6 [font-family:var(--font-heading)]">
                Soluciones prioritarias para estructurar, regularizar, proteger y expandir operaciones en Panamá.
              </h2>
              <p className="body-copy mt-6">
                Cada servicio está presentado con enfoque comercial, claridad y orientación a consulta. La meta es que el visitante entienda rápido el valor del acompañamiento y encuentre la ruta adecuada para su necesidad.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <AnimatedSection key={service.title} delay={index * 0.04}>
                  <article className="glass-card h-full p-7">
                    <div className="inline-flex rounded-2xl bg-brand-navy p-3 text-brand-gold">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-brand-navy">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-brand-slate">{service.description}</p>
                    <ul className="mt-5 space-y-3">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-6 text-brand-navy">
                          <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-brand-gold" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="site-container">
          <AnimatedSection>
            <div className="grid overflow-hidden rounded-[36px] bg-white shadow-soft lg:grid-cols-[0.88fr_1.12fr]">
              <div className="relative min-h-[320px] lg:min-h-[420px]">
                <Image src="/images/canal.webp" alt="Escena marítima y canal en Panamá" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/20 to-brand-navy/55" />
              </div>
              <div className="p-8 md:p-12">
                <span className="eyebrow">Problemas que resolvemos</span>
                <h2 className="section-title mt-6 [font-family:var(--font-heading)]">
                  Ayudamos a transformar incertidumbre legal en estructura, orden y capacidad de acción.
                </h2>
                <div className="mt-8 grid gap-4">
                  {painPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-[22px] border border-brand-pearl/70 bg-brand-ivory/70 p-4">
                      <div className="mt-1 rounded-full bg-brand-gold/15 p-1.5 text-brand-gold">
                        <Scale size={16} />
                      </div>
                      <p className="text-sm leading-7 text-brand-navy">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="diferenciales" className="section-padding">
        <div className="site-container">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="eyebrow">Diferenciales</span>
              <h2 className="section-title mt-6 [font-family:var(--font-heading)]">
                Una firma pensada para clientes que valoran claridad, cumplimiento y estrategia.
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Acompañamiento con criterio",
                text: "Entendemos que un trámite mal ejecutado puede impactar tiempos, reputación y operación. Por eso acompañamos con visión integral."
              },
              {
                icon: Scale,
                title: "Cumplimiento sin improvisación",
                text: "Priorizamos estructuras bien planteadas y procesos ordenados para reducir fricciones regulatorias y riesgos innecesarios."
              },
              {
                icon: Landmark,
                title: "Panamá como plataforma de crecimiento",
                text: "Trabajamos con negocios locales e inversionistas que buscan establecerse y expandirse con respaldo legal sólido."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 0.08}>
                  <div className="dark-panel h-full p-8">
                    <div className="inline-flex rounded-2xl bg-white/8 p-3 text-brand-gold">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/80">{item.text}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section id="proceso" className="section-padding bg-white/70">
        <div className="site-container">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="eyebrow">Proceso</span>
              <h2 className="section-title mt-6 [font-family:var(--font-heading)]">
                Un proceso claro para avanzar con respaldo legal y visión de negocio.
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {processSteps.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.06}>
                <div className="glass-card h-full p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">{item.step}</p>
                  <h3 className="mt-5 text-2xl font-semibold text-brand-navy">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-brand-slate">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-padding">
        <div className="site-container">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="eyebrow">FAQ · SEO inicial</span>
              <h2 className="section-title mt-6 [font-family:var(--font-heading)]">
                Preguntas frecuentes que fortalecen confianza y ayudan a la visibilidad del sitio en buscadores.
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqItems.map((item, index) => (
              <AnimatedSection key={item.question} delay={index * 0.03}>
                <details className="group glass-card p-6 open:bg-white">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-lg font-semibold text-brand-navy">
                    <span>{item.question}</span>
                    <span className="mt-1 text-brand-gold transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 pr-6 text-sm leading-7 text-brand-slate">{item.answer}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="section-padding pb-20">
        <div className="site-container">
          <AnimatedSection>
            <div className="grid overflow-hidden rounded-[38px] bg-brand-navy lg:grid-cols-[0.92fr_1.08fr]">
              <div className="p-8 text-white md:p-12">
                <span className="eyebrow border-white/10 bg-white/6 text-brand-pearl">Contacto</span>
                <h2 className="mt-6 font-serif text-4xl leading-tight [font-family:var(--font-heading)] sm:text-5xl">
                  Cuéntenos su necesidad legal y definamos la mejor ruta para avanzar.
                </h2>
                <p className="mt-6 text-base leading-7 text-white/78">
                  Puede escribirnos por WhatsApp o completar el formulario para que conozcamos su caso, servicio de interés y próximos pasos.
                </p>

                <div className="mt-8 space-y-4 text-sm leading-7 text-white/80">
                  <p>
                    <span className="font-semibold text-brand-gold">WhatsApp:</span> {site.phoneDisplay}
                  </p>
                  <p>
                    <span className="font-semibold text-brand-gold">Correo:</span> {site.email}
                  </p>
                  <p>
                    <span className="font-semibold text-brand-gold">Dirección:</span> {site.address}
                  </p>
                  <p>
                    <span className="font-semibold text-brand-gold">Horario:</span> {site.hours}
                  </p>
                  <p>
                    <span className="font-semibold text-brand-gold">Instagram:</span> {site.instagramHandle}
                  </p>
                </div>

                <div className="mt-8 rounded-[24px] border border-white/10 bg-white/6 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold/90">Mensaje central</p>
                  <p className="mt-4 text-lg leading-8 text-white/88">{site.centralMessage}</p>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <footer className="border-t border-brand-pearl/60 bg-white">
        <div className="site-container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-28">
              <Image src="/brand/logo-navy.png" alt="A&A Law Firm" fill className="object-contain object-left" />
            </div>
            <p className="text-sm leading-6 text-brand-slate">
              Firma legal en Panamá enfocada en estructura, cumplimiento y crecimiento con respaldo estratégico.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 text-sm text-brand-slate md:items-end">
            <Link href={whatsappHref} target="_blank" rel="noreferrer" className="font-medium text-brand-navy transition hover:text-brand-slate">
              Solicitar asesoría por WhatsApp
            </Link>
            <p>© {new Date().getFullYear()} A&A Law Firm. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
