import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { site } from "@/lib/site";

const whatsappHref = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(site.whatsappMessage)}`;

export function FloatingWhatsApp() {
  return (
    <Link
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white shadow-soft transition hover:scale-105 hover:bg-brand-slate sm:bottom-8 sm:right-8"
    >
      <MessageCircleMore size={24} />
    </Link>
  );
}
