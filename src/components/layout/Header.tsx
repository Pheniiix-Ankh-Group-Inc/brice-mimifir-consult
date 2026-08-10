import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";

import { useLanguage } from "@/i18n/LanguageProvider";
import { scrollToSection } from "@/lib/scroll";
import { FullscreenMenu } from "./FullscreenMenu";

export function Header({ overlay = false }: { overlay?: boolean }) {
  const { t } = useLanguage();
  const navigate = useNavigate();
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
      if (!scrollToSection(id)) {
        void navigate({ to: "/", hash: id });
      }
    },
    [navigate],
  );

  const handleNavigate = useCallback(
    (id: string) => {
      goToSection(id);
      // Focus returns to the trigger before the panel unmounts.
      window.setTimeout(() => {
        document.getElementById("menu-trigger")?.focus();
      }, 0);
    },
    [goToSection],
  );

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
          <Link to="/" className="block text-ivory" aria-label={t.brand.name}>
            <span className="block text-[13px] font-semibold tracking-[0.24em] uppercase lg:text-[15px]">
              {t.brand.name}
            </span>
            {!compact && (
              <span className="mt-1 block text-[11px] tracking-[0.14em] text-ivory/60 uppercase">
                {t.brand.tagline}
              </span>
            )}
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
        onClose={() => {
          setMenuOpen(false);
          document.getElementById("menu-trigger")?.focus();
        }}
        onNavigate={handleNavigate}
      />
    </>
  );
}
