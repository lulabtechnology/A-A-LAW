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
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-brand-pearl/80 bg-white/90 shadow-soft backdrop-blur"
            : "border-white/10 bg-brand-navy/20 backdrop-blur-md"
        }`}
      >
        <Link href="#inicio" className="relative h-10 w-28 shrink-0 sm:h-12 sm:w-32">
          <Image
            src={scrolled ? "/brand/logo-navy.png" : "/brand/logo-gold.png"}
            alt="A&A Law Firm"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
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
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
            scrolled ? "bg-brand-navy text-white" : "bg-white/10 text-white"
          }`}
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[26px] border border-brand-pearl/70 bg-white p-4 shadow-soft lg:hidden">
          <nav className="flex flex-col gap-2">
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
