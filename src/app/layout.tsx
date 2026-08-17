import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { appFont } from "@/lib/fonts";
import { person } from "@/data/content";

const siteUrl = "https://ahmedskulj.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${person.name} — ${person.role}`,
    template: `%s — ${person.name}`,
  },
  description: person.intro,
  keywords: [
    person.name,
    "Frontend Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Bosnia and Herzegovina",
  ],
  authors: [{ name: person.name }],
  creator: person.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${person.name} — ${person.role}`,
    description: person.intro,
    siteName: person.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — ${person.role}`,
    description: person.intro,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={appFont.variable}>
      <body className="bg-ink text-paper font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
