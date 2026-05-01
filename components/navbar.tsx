"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#firma", label: "Firma" },
  { href: "#servicios", label: "Servicios" },
  { href: "#diferenciales", label: "Diferenciales" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-2.5 transition-all duration-300 sm:px-5 sm:py-3 ${
          scrolled
            ? "border-brand-pearl/100 bg-white/90 shadow-soft backdrop-blur"
            : "border-white/10 bg-brand-navy/30 backdrop-blur-md"
        }`}
      >
        <Link href="#inicio" className="relative h-10 w-32 shrink-0 sm:h-12 sm:w-44">
          <Image
            src={scrolled ? "/brand/logo-navy.png" : "/brand/logo-gold.png"}
            alt="A&A Law Firm"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-brand-gold ${
                scrolled ? "text-brand-navy" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="#contacto"
            className={`inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold transition ${
              scrolled
                ? "bg-brand-navy text-white hover:bg-brand-slate"
                : "bg-brand-gold text-brand-navy hover:bg-brand-pearl"
            }`}
          >
            Solicitar asesoría
          </Link>
        </div>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
            scrolled ? "bg-brand-navy text-white" : "bg-white/10 text-white"
          }`}
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
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
              Solicitar asesoría
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
