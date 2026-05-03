import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aalawfirmpa.com"),
  title: "A&A Law Firm | Strategic legal counsel in Panama",
  description:
    "Legal firm in Panama focused on business structuring, regulatory compliance, migration, relocation, company incorporation, trademarks, permits and maritime services.",
  applicationName: "A&A Law Firm",
  keywords: [
    "abogados en Panamá",
    "law firm Panama",
    "relocation Panama",
    "friendly nations visa Panama",
    "constitución de empresas Panamá",
    "company incorporation Panama",
    "registro sanitario Panamá",
    "registro de marca Panamá",
    "visa países amigos Panamá",
    "permisos para restaurantes Panamá",
    "asesoría legal empresarial Panamá"
  ],
  openGraph: {
    title: "A&A Law Firm",
    description:
      "Strategic legal counsel to move, build and operate in Panama legally and strategically.",
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
