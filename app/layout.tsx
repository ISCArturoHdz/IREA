import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IREA | Ingeniería industrial de alto nivel",
  description:
    "Automatización industrial, reparación electrónica, HVAC, cuartos limpios y mantenimiento estratégico para procesos que no pueden detenerse.",
  icons: {
    icon: "/irea-icon.png",
    shortcut: "/irea-icon.png",
  },
  openGraph: {
    title: "IREA | Ingeniería industrial de alto nivel",
    description:
      "Automatización, reparación electrónica, HVAC y mantenimiento para procesos que no pueden detenerse.",
    type: "website",
    locale: "es_MX",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IREA - Tu industria en movimiento" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IREA | Ingeniería industrial de alto nivel",
    description: "Ingeniería que mantiene tu industria en movimiento.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
