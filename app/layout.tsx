import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farmer - Multi-fenêtrage pour Dofus Mac",
  description:
    "Le multi-fenêtrage réinventé pour Mac. Farmer vous permet de gérer vos fenêtres Dofus avec une efficacité inégalée. Détection auto, raccourcis personnalisés, paiement unique.",
  keywords: [
    "Dofus",
    "Mac",
    "Multi-fenêtrage",
    "Farmer",
    "Window management",
    "Gaming tool",
  ],
  authors: [{ name: "Farmer" }],
  openGraph: {
    title: "Farmer - Multi-fenêtrage pour Dofus Mac",
    description:
      "Vos potes sous Windows passeront sur Mac pour jouer aussi vite que vous",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
