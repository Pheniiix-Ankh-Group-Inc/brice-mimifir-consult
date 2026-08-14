import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { getSiteUrl } from "@/lib/site-url";
import "@/styles.css";

const manrope = localFont({
  src: "../../src/assets/fonts/manrope-variable.ttf",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const newsreader = localFont({
  src: "../../src/assets/fonts/newsreader-variable.ttf",
  variable: "--font-newsreader",
  weight: "200 800",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  const indexable = process.env["VERCEL_ENV"] === "production";

  return {
    metadataBase: getSiteUrl(process.env),
    title: t.meta.title,
    description: t.meta.description,
    authors: [{ name: "Brice MIMIFIR" }],
    creator: "Brice MIMIFIR",
    publisher: "Groupe Pheniiix Ankh Inc.",
    icons: { icon: "/favicon.png" },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true },
  };
}

export default async function LocalizedLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${manrope.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
