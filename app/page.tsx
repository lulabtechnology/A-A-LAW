"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
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
  BriefcaseBusiness,
  Globe2
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Navbar } from "@/components/navbar";
import { Preloader } from "@/components/preloader";
import { differentiators, faqItems, Language, pageText, services, site } from "@/lib/site";

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

function getWhatsAppHref(message: string) {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}

function getServiceHref(serviceTitle: string, lang: Language) {
  const message =
    lang === "es"
      ? `Hola, deseo recibir asesoría legal con A&A Law Firm sobre: ${serviceTitle}.`
      : `Hello, I would like legal guidance from A&A Law Firm regarding: ${serviceTitle}.`;

  return getWhatsAppHref(message);
}

export default function HomePage() {
  const [lang, setLang] = useState<Language>("es");
  const text = pageText[lang];
  const currentServices = services[lang];
  const currentDifferentiators = differentiators[lang];
  const currentFaqs = faqItems[lang];
  const whatsappHref = getWhatsAppHref(text.whatsappMessage);

  useEffect(() => {
    const saved = window.localStorage.getItem("aa-law-lang");
    if (saved === "es" || saved === "en") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("aa-law-lang", lang);
  }, [lang]);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: site.name,
      description:
        lang === "es"
          ? "Firma legal en Panamá especializada en estructuración empresarial, cumplimiento regulatorio, migración, relocation y asesoría para inversionistas."
          : "Legal firm in Panama focused on business structuring, regulatory compliance, migration, relocation and guidance for investors.",
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
    }),
    [lang]
  );

  return (
    <main className="relative overflow-x-hidden bg-brand-ivory">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Preloader />
      <Navbar lang={lang} onLanguageChange={setLang} />
      <FloatingWhatsApp lang={lang} />

      <section id="inicio" className="relative isolate min-h-[100svh]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 md:hidden">
            <Image
              src="/images/hero-mobile.webp"
              alt={lang === "es" ? "Vista premium de la ciudad de Panamá" : "Premium view of Panama City"}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 hidden md:block">
            <Image
              src="/images/hero-desktop.webp"
              alt={lang === "es" ? "Skyline de Panamá para A&A Law Firm" : "Panama skyline for A&A Law Firm"}
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
                <span className="eyebrow border-white/20 bg-white/10 text-brand-pearl">
                  {text.heroEyebrow}
                </span>
                <h1 className="mt-5 max-w-4xl font-serif text-[2.05rem] leading-[1.04] min-[390px]:text-[2.35rem] sm:text-5xl md:text-6xl lg:text-7xl">
                  {text.heroTitle}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg md:text-xl md:leading-8">
                  {text.heroSubtitle}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-brand-mist px-6 py-3.5 text-sm font-semibold text-brand-navy transition hover:bg-brand-pearl"
                  >
                    {text.heroPrimary}
                  </Link>
                  <Link
                    href="#servicios"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    {text.heroSecondary} <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {text.trustPoints.map((point) => (
                    <div
                      key={point}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs text-white/90 backdrop-blur sm:text-sm"
                    >
                      <BadgeCheck size={15} className="text-brand-mist" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.14} className="hidden lg:block">
              <div className="dark-panel p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-mist/90">
                  {text.heroPanelEyebrow}
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-white">
                  {text.heroPanelTitle}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  {text.heroPanelText}
                </p>
                <div className="mt-6 space-y-3">
                  {text.heroPanelItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-brand-mist/20 p-1.5 text-brand-mist">
                        <Check size={14} />
                      </div>
                      <p className="text-sm text-white/90">{item}</p>
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
                <span className="eyebrow">{text.firmEyebrow}</span>
                <h2 className="section-title mt-6 max-w-3xl [font-family:var(--font-heading)]">
                  {text.firmTitle}
                </h2>
                <div className="gold-divider mt-6" />
                <p className="body-copy mt-6 max-w-3xl">{text.intro}</p>
                <p className="body-copy mt-4 max-w-3xl">{text.extendedIntro}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="glass-card p-6 sm:p-8">
                <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                  {text.metrics.map((item) => (
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
            {text.credibilityPoints.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.06}>
                <div className="glass-card h-full p-6">
                  <div className="mb-5 h-px w-16 bg-brand-mist" />
                  <h3 className="text-xl font-semibold text-brand-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-slate">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="relocation" className="pb-8">
        <div className="site-container">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-[30px] bg-brand-slate text-white shadow-glow lg:rounded-[40px]">
              <div className="absolute inset-0 opacity-20">
                <Image
                  src="/images/canal.webp"
                  alt={lang === "es" ? "Panamá como punto de entrada para clientes extranjeros" : "Panama as an entry point for foreign clients"}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-slate/90 to-brand-slate/80" />

              <div className="relative z-10 grid gap-8 p-6 sm:p-8 md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:p-14">
                <div>
                  <span className="eyebrow border-white/10 bg-white/10 text-brand-pearl">
                    {text.relocationEyebrow}
                  </span>
                  <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-[1.05] [font-family:var(--font-heading)] sm:text-4xl lg:text-5xl">
                    {text.relocationTitle}
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
                    {text.relocationSubtitle}
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={getWhatsAppHref(text.relocationPrimary)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-brand-mist px-6 py-3.5 text-sm font-semibold text-brand-navy transition hover:bg-brand-pearl"
                    >
                      {text.relocationPrimary}
                    </Link>
                    <Link
                      href={getWhatsAppHref(text.relocationSecondary)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
                    >
                      {text.relocationSecondary}
                    </Link>
                  </div>
                </div>

                <div className="grid gap-4">
                  {text.relocationCards.map((item, index) => (
                    <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-mist/20 text-brand-mist">
                          {index === 0 ? <Globe2 size={18} /> : index === 1 ? <Building2 size={18} /> : <ShieldCheck size={18} />}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-white/80">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-8">
        <div className="site-container">
          <AnimatedSection>
            <div className="grid overflow-hidden rounded-[28px] bg-brand-navy lg:grid-cols-[1.05fr_0.95fr] lg:rounded-[36px]">
              <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[500px]">
                <Image
                  src="/images/architecture.webp"
                  alt={lang === "es" ? "Arquitectura premium en Panamá" : "Premium architecture in Panama"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/10 to-transparent lg:bg-gradient-to-r lg:from-brand-navy/0 lg:via-brand-navy/10 lg:to-brand-navy/70" />
              </div>
              <div className="flex items-center p-6 text-white sm:p-8 md:p-12">
                <div>
                  <span className="eyebrow border-white/10 bg-white/5 text-brand-pearl">{text.strategyEyebrow}</span>
                  <h2 className="mt-6 font-serif text-3xl leading-tight [font-family:var(--font-heading)] sm:text-4xl">
                    {text.strategyTitle}
                  </h2>
                  <p className="mt-6 text-base leading-7 text-white/90">
                    {text.strategyText}
                  </p>
                  <div className="mt-8 grid gap-4">
                    {currentDifferentiators.map((item) => (
                      <div key={item.title} className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                        <div className="flex items-start gap-3">
                          <Sparkles size={18} className="mt-1 shrink-0 text-brand-mist" />
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
              <span className="eyebrow">{text.servicesEyebrow}</span>
              <h2 className="section-title mt-6 [font-family:var(--font-heading)]">
                {text.servicesTitle}
              </h2>
              <p className="body-copy mt-6">
                {text.servicesText}
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {currentServices.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <AnimatedSection key={service.title} delay={index * 0.035}>
                  <article className="glass-card flex h-full flex-col p-6 sm:p-7">
                    <div className="inline-flex w-fit rounded-2xl bg-brand-navy p-3 text-brand-mist">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-brand-navy">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-brand-slate">{service.description}</p>
                    <ul className="mt-5 space-y-3">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-6 text-brand-navy">
                          <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-brand-mist" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={getServiceHref(service.title, lang)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-mist/70 px-4 py-2 text-sm font-semibold text-brand-navy transition hover:bg-brand-mist/20"
                    >
                      {text.consultService} <ArrowRight size={15} />
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
            <div className="grid overflow-hidden rounded-[30px] bg-white shadow-soft lg:grid-cols-[0.88fr_1.12fr] lg:rounded-[36px]">
              <div className="relative min-h-[280px] lg:min-h-[440px]">
                <Image
                  src="/images/canal.webp"
                  alt={lang === "es" ? "Escena marítima y canal en Panamá" : "Maritime and canal scene in Panama"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/20 to-brand-slate/60" />
              </div>
              <div className="p-6 sm:p-8 md:p-12">
                <span className="eyebrow">{text.problemsEyebrow}</span>
                <h2 className="section-title mt-6 [font-family:var(--font-heading)]">
                  {text.problemsTitle}
                </h2>
                <div className="mt-8 grid gap-4">
                  {text.painPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-[22px] border border-brand-pearl/70 bg-brand-ivory/100 p-4">
                      <div className="mt-1 rounded-full bg-brand-mist/25 p-1.5 text-brand-slate">
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
              <span className="eyebrow">{text.whyEyebrow}</span>
              <h2 className="section-title mt-6 [font-family:var(--font-heading)]">
                {text.whyTitle}
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {text.whyCards.map((item, index) => {
              const Icon = index === 0 ? ShieldCheck : index === 1 ? Scale : Landmark;
              return (
                <AnimatedSection key={item.title} delay={index * 0.08}>
                  <div className="dark-panel h-full p-7 sm:p-8">
                    <div className="inline-flex rounded-2xl bg-white/10 p-3 text-brand-mist">
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
              <span className="eyebrow">{text.processEyebrow}</span>
              <h2 className="section-title mt-6 [font-family:var(--font-heading)]">
                {text.processTitle}
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {text.processSteps.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.06}>
                <div className="glass-card h-full p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-slate">{item.step}</p>
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
              <span className="eyebrow">{text.faqEyebrow}</span>
              <h2 className="section-title mt-6 [font-family:var(--font-heading)]">
                {text.faqTitle}
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {currentFaqs.map((item, index) => (
              <AnimatedSection key={item.question} delay={index * 0.03}>
                <details className="group glass-card p-5 open:bg-white sm:p-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold text-brand-navy sm:text-lg">
                    <span>{item.question}</span>
                    <span className="mt-1 text-brand-slate transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 pr-4 text-sm leading-7 text-brand-slate sm:pr-6">{item.answer}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="section-padding pb-20">
        <div className="site-container">
          <AnimatedSection>
            <div className="grid w-full min-w-0 overflow-hidden rounded-[30px] bg-brand-navy lg:grid-cols-[0.92fr_1.08fr] lg:rounded-[38px]">
              <div className="min-w-0 p-6 text-white sm:p-8 md:p-12">
                <span className="eyebrow border-white/10 bg-white/5 text-brand-pearl">{text.contactEyebrow}</span>
                <h2 className="mt-6 break-words font-serif text-[2rem] leading-[1.08] [font-family:var(--font-heading)] sm:text-4xl md:text-5xl">
                  {text.contactTitle}
                </h2>
                <p className="mt-6 break-words text-base leading-7 text-white/100">
                  {text.contactText}
                </p>

                <div className="mt-8 space-y-4 text-sm leading-7 text-white/90">
                  <p className="min-w-0 break-words">
                    <span className="font-semibold text-brand-mist">{text.contactInfoLabels.whatsapp}:</span> {site.phoneDisplay}
                  </p>
                  <p className="min-w-0 break-words">
                    <span className="font-semibold text-brand-mist">{text.contactInfoLabels.email}:</span> {site.email}
                  </p>
                  <p className="min-w-0 break-words">
                    <span className="font-semibold text-brand-mist">{text.contactInfoLabels.address}:</span> {site.address}
                  </p>
                  <p className="min-w-0 break-words">
                    <span className="font-semibold text-brand-mist">{text.contactInfoLabels.hours}:</span> {site.hours[lang]}
                  </p>
                  <p className="min-w-0 break-words">
                    <span className="font-semibold text-brand-mist">{text.contactInfoLabels.instagram}:</span> {site.instagramHandle}
                  </p>
                </div>

                <div className="mt-7 rounded-[22px] border border-white/10 bg-white/5 p-4 sm:p-5">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-brand-mist/90 sm:text-xs sm:tracking-[0.28em]">
                    {text.firmFocus}
                  </p>
                  <p className="mt-4 break-words text-sm leading-7 text-white/90 sm:text-lg sm:leading-8">
                    {text.centralMessage}
                  </p>
                </div>
              </div>

              <div className="w-full min-w-0 bg-white px-4 py-8 sm:p-8 md:p-12">
                <ContactForm lang={lang} />
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
              {text.footerText}
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 text-sm text-brand-slate md:items-end">
            <Link href={whatsappHref} target="_blank" rel="noreferrer" className="font-semibold text-brand-navy transition hover:text-brand-slate">
              {text.footerCta}
            </Link>
            <p>© {new Date().getFullYear()} A&A Law Firm. {text.rights}</p>
            <Link href="https://lulabtech.com" target="_blank" rel="noreferrer" className="font-semibold text-brand-slate transition hover:text-brand-navy">
              {text.developedBy}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
