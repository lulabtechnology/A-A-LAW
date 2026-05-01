import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  FileCheck2,
  Landmark,
  Scale,
  ShieldCheck,
  ShipWheel,
  Sparkles,
  Store,
  Stamp,
  ScrollText,
  BriefcaseBusiness
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Navbar } from "@/components/navbar";
import { Preloader } from "@/components/preloader";
import {
  credibilityPoints,
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

function getServiceHref(serviceTitle: string) {
  const message = `Hola, deseo recibir asesoría legal con A&A Law Firm sobre: ${serviceTitle}.`;
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-brand-ivory">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Preloader />
      <Navbar />
      <FloatingWhatsApp />

      <section id="inicio" className="relative isolate min-h-[100svh]">
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
          <div className="absolute inset-0 bg-hero-overlay-mobile md:bg-hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/20 via-transparent to-brand-navy/90" />
        </div>

        <div className="site-container relative z-10 flex min-h-[100svh] items-center pb-14 pt-28 sm:pt-32 lg:pb-16">
          <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <AnimatedSection>
              <div className="max-w-3xl text-white">
                <span className="eyebrow border-white/15 bg-white/10 text-brand-pearl">
                  Firma legal en Panamá
                </span>
                <h1 className="mt-5 max-w-4xl font-serif text-[2.35rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl">
                  {site.heroTitle}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg md:text-xl md:leading-8">
                  {site.heroSubtitle}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                  >
                    Ver servicios legales <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {trustPoints.map((point) => (
                    <div
                      key={point}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs text-white/90 backdrop-blur sm:text-sm"
                    >
                      <BadgeCheck size={15} className="text-brand-gold" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.14} className="hidden lg:block">
              <div className="dark-panel p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold/85">
                  Atención estratégica
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-white">
                  Para negocios que necesitan operar con estructura legal correcta.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  La asesoría se enfoca en formalización, permisos, registros, protección de activos y cumplimiento regulatorio en Panamá.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Constitución y operación empresarial",
                    "Permisos, licencias y registros",
                    "Migración, marcas y servicios marítimos"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-brand-gold/15 p-1.5 text-brand-gold">
                        <Check size={14} />
                      </div>
                      <p className="text-sm text-white/100">{item}</p>
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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_410px] lg:items-center">
            <AnimatedSection>
              <div>
                <span className="eyebrow">Firma</span>
                <h2 className="section-title mt-6 max-w-3xl [font-family:var(--font-heading)]">
                  Una estructura legal sólida permite iniciar, regularizar y crecer con mayor seguridad.
                </h2>
                <div className="gold-divider mt-6" />
                <p className="body-copy mt-6 max-w-3xl">{site.intro}</p>
                <p className="body-copy mt-4 max-w-3xl">{site.extendedIntro}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="glass-card p-6 sm:p-8">
                <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                  {metrics.map((item) => (
                    <div key={item.label}>
                      <div className="font-serif text-4xl text-brand-navy [font-family:var(--font-heading)] sm:text-5xl">
                        {item.value}
                      </div>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-brand-slate sm:text-sm">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {credibilityPoints.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.06}>
                <div className="glass-card h-full p-6">
                  <div className="mb-5 h-px w-16 bg-brand-gold" />
                  <h3 className="text-xl font-semibold text-brand-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-slate">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="site-container">
          <AnimatedSection>
            <div className="grid overflow-hidden rounded-[28px] bg-brand-navy lg:grid-cols-[1.05fr_0.95fr] lg:rounded-[36px]">
              <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[500px]">
                <Image
                  src="/images/architecture.webp"
                  alt="Arquitectura premium en Panamá"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-brand-navy/10 to-transparent lg:bg-gradient-to-r lg:from-brand-navy/0 lg:via-brand-navy/10 lg:to-brand-navy/70" />
              </div>
              <div className="flex items-center p-6 text-white sm:p-8 md:p-12">
                <div>
                  <span className="eyebrow border-white/10 bg-white/5 text-brand-pearl">Enfoque estratégico</span>
                  <h2 className="mt-6 font-serif text-3xl leading-tight [font-family:var(--font-heading)] sm:text-4xl">
                    Diseñamos la ruta legal correcta para cada etapa de la operación.
                  </h2>
                  <p className="mt-6 text-base leading-7 text-white/100">
                    El trabajo legal se aborda desde la estructura, el cumplimiento y la prevención de riesgos para que cada proceso tenga sentido dentro del negocio.
                  </p>
                  <div className="mt-8 grid gap-4">
                    {differentiators.map((item) => (
                      <div key={item.title} className="rounded-[22px] border border-white/10 bg-white/5 p-5">
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
              <span className="eyebrow">Servicios legales principales</span>
              <h2 className="section-title mt-6 [font-family:var(--font-heading)]">
                Asesoría para estructurar, regularizar, proteger y expandir operaciones en Panamá.
              </h2>
              <p className="body-copy mt-6">
                Estos son los servicios principales de la firma para emprendedores, empresas, marcas e inversionistas que buscan operar correctamente desde el inicio.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <AnimatedSection key={service.title} delay={index * 0.035}>
                  <article className="glass-card flex h-full flex-col p-6 sm:p-7">
                    <div className="inline-flex w-fit rounded-2xl bg-brand-navy p-3 text-brand-gold">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold leading-tight text-brand-navy sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-brand-slate">{service.description}</p>
                    <ul className="mt-5 space-y-3">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-6 text-brand-navy">
                          <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-brand-gold" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={getServiceHref(service.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-gold/40 px-4 py-2.5 text-sm font-semibold text-brand-navy transition hover:bg-brand-gold/15"
                    >
                      Consultar este servicio <ArrowRight size={15} />
                    </Link>
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
            <div className="grid overflow-hidden rounded-[28px] bg-white shadow-soft lg:grid-cols-[0.88fr_1.12fr] lg:rounded-[36px]">
              <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[430px]">
                <Image
                  src="/images/canal.webp"
                  alt="Escena marítima en Panamá"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/15 to-transparent lg:bg-gradient-to-r lg:from-brand-navy/20 lg:to-brand-navy/55" />
              </div>
              <div className="p-6 sm:p-8 md:p-12">
                <span className="eyebrow">Necesidades comunes</span>
                <h2 className="section-title mt-6 [font-family:var(--font-heading)]">
                  La prevención legal evita retrasos, rechazos y riesgos innecesarios.
                </h2>
                <div className="mt-8 grid gap-4">
                  {painPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-[22px] border border-brand-pearl/70 bg-brand-ivory/100 p-4">
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
                Una firma para clientes que valoran claridad, estructura y cumplimiento.
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Acompañamiento completo",
                text: "La firma trabaja con soluciones integrales que permiten operar correctamente y con seguridad en Panamá."
              },
              {
                icon: Scale,
                title: "Prevención de riesgos",
                text: "La asesoría busca evitar errores de formalización, rechazos, multas y conflictos por estructuras incompletas."
              },
              {
                icon: Landmark,
                title: "Enfoque empresarial",
                text: "El servicio se dirige a emprendedores, empresas, marcas e inversionistas que necesitan crecer con respaldo legal."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 0.06}>
                  <div className="dark-panel h-full p-7 sm:p-8">
                    <div className="inline-flex rounded-2xl bg-white/10 p-3 text-brand-gold">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/100">{item.text}</p>
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
                Un proceso claro para definir la ruta legal y avanzar con respaldo profesional.
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.05}>
                <div className="glass-card h-full p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">{item.step}</p>
                  <h3 className="mt-5 text-xl font-semibold leading-tight text-brand-navy sm:text-2xl">
                    {item.title}
                  </h3>
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
              <span className="eyebrow">Preguntas frecuentes</span>
              <h2 className="section-title mt-6 [font-family:var(--font-heading)]">
                Respuestas iniciales para entender mejor los servicios legales principales.
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqItems.map((item, index) => (
              <AnimatedSection key={item.question} delay={index * 0.025}>
                <details className="group glass-card p-5 open:bg-white sm:p-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold text-brand-navy sm:text-lg">
                    <span>{item.question}</span>
                    <span className="mt-1 shrink-0 text-brand-gold transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-brand-slate sm:pr-6">{item.answer}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="section-padding pb-20">
        <div className="site-container">
          <AnimatedSection>
            <div className="grid overflow-hidden rounded-[28px] bg-brand-navy lg:grid-cols-[0.92fr_1.08fr] lg:rounded-[38px]">
              <div className="p-6 text-white sm:p-8 md:p-12">
                <span className="eyebrow border-white/10 bg-white/5 text-brand-pearl">Contacto</span>
                <h2 className="mt-6 font-serif text-3xl leading-tight [font-family:var(--font-heading)] sm:text-5xl">
                  Cuéntenos su necesidad legal y definamos la mejor ruta para avanzar.
                </h2>
                <p className="mt-6 text-base leading-7 text-white/100">
                  Puede escribirnos por WhatsApp o completar el formulario indicando el servicio de interés y una breve descripción de su caso.
                </p>

                <div className="mt-8 space-y-4 text-sm leading-7 text-white/100">
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

                <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold/90">
                    Enfoque de la firma
                  </p>
                  <p className="mt-4 text-base leading-8 text-white/90 sm:text-lg">{site.centralMessage}</p>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 md:p-12">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <footer className="border-t border-brand-pearl/70 bg-white">
        <div className="site-container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative h-12 w-40 shrink-0">
              <Image src="/brand/logo-navy.png" alt="A&A Law Firm" fill className="object-contain object-left" />
            </div>
            <p className="max-w-xl text-sm leading-6 text-brand-slate">
              Firma legal en Panamá enfocada en estructura empresarial, cumplimiento regulatorio, protección de activos y acompañamiento estratégico.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 text-sm text-brand-slate md:items-end">
            <Link href={whatsappHref} target="_blank" rel="noreferrer" className="font-semibold text-brand-navy transition hover:text-brand-slate">
              Solicitar asesoría por WhatsApp
            </Link>
            <p>© {new Date().getFullYear()} A&A Law Firm. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
