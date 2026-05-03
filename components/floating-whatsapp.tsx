import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { Language, pageText, site } from "@/lib/site";

export function FloatingWhatsApp({ lang }: { lang: Language }) {
  const whatsappHref = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(pageText[lang].whatsappMessage)}`;

  return (
    <Link
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={lang === "es" ? "Escribir por WhatsApp" : "Write through WhatsApp"}
      className="fixed bottom-5 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white shadow-soft transition hover:scale-105 hover:bg-brand-slate sm:bottom-8 sm:right-8 sm:inline-flex"
    >
      <MessageCircleMore size={24} />
    </Link>
  );
}
