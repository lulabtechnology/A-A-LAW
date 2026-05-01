import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aalawfirmpa.com"),
  title: "A&A Law Firm | Asesoría legal estratégica en Panamá",
  description:
    "Firma legal en Panamá especializada en estructuración empresarial, cumplimiento regulatorio, registros, permisos, migración, marcas y servicios marítimos.",
  applicationName: "A&A Law Firm",
  keywords: [
    "abogados en Panamá",
    "constitución de empresas Panamá",
    "registro sanitario Panamá",
    "registro de marca Panamá",
    "visa países amigos Panamá",
    "permisos para restaurantes Panamá",
    "asesoría legal empresarial Panamá"
  ],
  openGraph: {
    title: "A&A Law Firm",
    description:
      "Asesoría legal estratégica para estructurar, cumplir y operar correctamente en Panamá.",
    type: "website",
    url: "https://aalawfirmpa.com",
    siteName: "A&A Law Firm"
  },
  icons: {
    icon: "/brand/favicon.png",
    shortcut: "/brand/favicon.png",
    apple: "/brand/favicon.png"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="font-body antialiased [font-family:var(--font-body)]">{children}</body>
    </html>
  );
}
