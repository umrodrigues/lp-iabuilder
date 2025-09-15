import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `${SITE_CONFIG.name} - Curso de Inteligência Artificial para Empresários`,
  description: `Aprenda a implementar IA na sua empresa com nosso treinamento imersivo. Curso na quinta-feira por apenas R$ ${SITE_CONFIG.price.current} (era R$ ${SITE_CONFIG.price.original}) com e-book exclusivo e templates de prompts. Transforme seu negócio com inteligência artificial.`,
  keywords: "treinamento imersivo IA, inteligência artificial, curso IA, empresários, negócios, ChatGPT, prompts, automação, IA para empresas, curso online IA",
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: `${SITE_CONFIG.name} - Curso de IA para Empresários`,
    description: `Domine a inteligência artificial e transforme sua empresa. Curso por R$ ${SITE_CONFIG.price.current} com e-book exclusivo.`,
    type: "website",
    locale: "pt_BR",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Curso de Inteligência Artificial`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - Curso de IA para Empresários`,
    description: `Domine a inteligência artificial e transforme sua empresa. Curso por R$ ${SITE_CONFIG.price.current} com e-book exclusivo.`,
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
