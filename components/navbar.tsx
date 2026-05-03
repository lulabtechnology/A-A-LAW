"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Language, navLinks, pageText } from "@/lib/site";

export function Navbar({
  lang,
  onLanguageChange
}: {
  lang: Language;
  onLanguageChange: (language: Language) => void;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = navLinks[lang];
  const text = pageText[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoSrc = scrolled ? "/brand/logo-navy.png" : "/brand/logo-white.png";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2.5 pt-2.5 sm:px-6 sm:pt-4 lg:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-2.5 transition-all duration-300 sm:px-5 sm:py-3 ${
          scrolled
            ? "border-brand-pearl/100 bg-white/90 shadow-soft backdrop-blur"
            : "border-white/10 bg-brand-navy/30 backdrop-blur-md"
        }`}
      >
        <Link href="#inicio" className="relative h-9 w-32 shrink-0 sm:h-12 sm:w-44">
          <Image
            src={logoSrc}
            alt="A&A Law Firm"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-brand-mist ${
                scrolled ? "text-brand-navy" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => onLanguageChange(lang === "es" ? "en" : "es")}
            className={`rounded-full border px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] transition ${
              scrolled
                ? "border-brand-mist/70 text-brand-navy hover:bg-brand-mist/25"
                : "border-white/25 text-white hover:bg-white/10"
            }`}
            aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
          >
            {text.altLangLabel}
          </button>
          <Link
            href="#contacto"
            className={`inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold transition ${
              scrolled
                ? "bg-brand-navy text-white hover:bg-brand-slate"
                : "bg-brand-mist text-brand-navy hover:bg-brand-pearl"
            }`}
          >
            {lang === "es" ? "Solicitar asesoría" : "Request guidance"}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => onLanguageChange(lang === "es" ? "en" : "es")}
            className={`inline-flex h-10 min-w-10 shrink-0 items-center justify-center rounded-full border px-3 text-xs font-bold uppercase ${
              scrolled ? "border-brand-mist bg-white text-brand-navy" : "border-white/20 bg-white/10 text-white"
            }`}
            aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
          >
            {text.altLangLabel}
          </button>
          <button
            type="button"
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
              scrolled ? "bg-brand-navy text-white" : "bg-white/10 text-white"
            }`}
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[24px] border border-brand-pearl/70 bg-white p-3 shadow-soft lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-brand-navy transition hover:bg-brand-ivory"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-brand-navy px-4 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {lang === "es" ? "Solicitar asesoría" : "Request guidance"}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
