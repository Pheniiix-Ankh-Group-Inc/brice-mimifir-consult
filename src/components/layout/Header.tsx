"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import type { Content } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { scrollToSection } from "@/lib/scroll";
import { BrandLogo } from "./BrandLogo";
import { FullscreenMenu } from "./FullscreenMenu";

type HeaderContent = Pick<Content, "brand" | "common" | "nav">;

export function Header({
  locale,
  t,
  overlay = false,
}: {
  locale: Locale;
  t: HeaderContent;
  overlay?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(!overlay);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const threshold = Math.max(window.innerHeight * 0.75, 320);
      setCompact(y > threshold);
      setHidden(y > threshold && y > lastY && y - lastY > 4);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const goToSection = useCallback(
    (id: string) => {
      setMenuOpen(false);
      if (pathname === `/${locale}` && scrollToSection(id)) return;
      router.push(`/${locale}#${id}`);
    },
    [locale, pathname, router],
  );

  const handleNavigate = useCallback(
    (id: string) => {
      goToSection(id);
      window.setTimeout(() => document.getElementById("menu-trigger")?.focus(), 0);
    },
    [goToSection],
  );

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.getElementById("menu-trigger")?.focus();
  }, []);

  return (
    <>
      <header
        className={[
          "fixed top-0 right-0 left-0 z-40 transition-transform duration-300",
          compact ? "bg-midnight shadow-[0_1px_0_0_rgba(185,151,91,0.25)]" : "bg-transparent",
          hidden ? "-translate-y-full" : "translate-y-0",
        ].join(" ")}
      >
        {overlay && !compact && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-deep-midnight/70 to-transparent"
          />
        )}
        <div
          className={`shell relative flex items-center justify-between transition-[height] duration-300 ${
            compact ? "h-16" : "h-[72px] lg:h-24"
          }`}
        >
          <Link href={`/${locale}`} className="block" aria-label={t.brand.name}>
            <BrandLogo
              alt=""
              priority
              className={compact ? "h-11 w-11" : "h-14 w-14 lg:h-16 lg:w-16"}
            />
          </Link>

          <button
            id="menu-trigger"
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-haspopup="dialog"
            className="link-editorial text-ivory"
          >
            {t.common.menu}
          </button>
        </div>
      </header>

      <FullscreenMenu
        open={menuOpen}
        onClose={closeMenu}
        onNavigate={handleNavigate}
        locale={locale}
        t={t}
      />
    </>
  );
}
