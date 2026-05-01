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
      className="fixed bottom-8 right-8 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white shadow-soft transition hover:scale-105 hover:bg-brand-slate sm:inline-flex"
    >
      <MessageCircleMore size={24} />
    </Link>
  );
}
