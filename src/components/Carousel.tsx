import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import { useLanguage } from "@/i18n/LanguageProvider";
import { prefersReducedMotion } from "@/lib/scroll";

type CarouselProps = {
  label: string;
  count: number;
  tone?: "dark" | "light";
  children: ReactNode;
};

/** Manual carousel: scroll-snap track, swipe, buttons and keyboard. No autoplay. */
export function Carousel({ label, count, tone = "light", children }: CarouselProps) {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  const syncIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = Array.from(track.children) as HTMLElement[];
    if (items.length === 0) return;
    const left = track.scrollLeft;
    let closest = 0;
    let min = Number.POSITIVE_INFINITY;
    items.forEach((item, i) => {
      const distance = Math.abs(item.offsetLeft - track.offsetLeft - left);
      if (distance < min) {
        min = distance;
        closest = i;
      }
    });
    setIndex(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", syncIndex, { passive: true });
    return () => track.removeEventListener("scroll", syncIndex);
  }, [syncIndex]);

  const goTo = useCallback((next: number) => {
    const track = trackRef.current;
    if (!track) return;
    const items = Array.from(track.children) as HTMLElement[];
    const target = items[Math.max(0, Math.min(items.length - 1, next))];
    if (!target) return;
    track.scrollTo({
      left: target.offsetLeft - track.offsetLeft,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
    setIndex(Math.max(0, Math.min(items.length - 1, next)));
  }, []);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }
  };

  const buttonTone =
    tone === "dark"
      ? "border-ivory/30 text-ivory hover:border-brass hover:text-brass"
      : "border-border-light text-midnight hover:border-brass hover:text-brass";

  return (
    <div role="group" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={trackRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label={label}
        className="no-scrollbar -mx-[var(--gutter)] flex snap-x snap-mandatory gap-6 overflow-x-auto px-[var(--gutter)] pb-2 lg:gap-8"
      >
        {children}
      </div>

      <div className="mt-8 flex items-center gap-5">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 disabled:opacity-40 ${buttonTone}`}
        >
          <span aria-hidden="true">←</span>
          <span className="sr-only">{t.common.previous}</span>
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          disabled={index >= count - 1}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 disabled:opacity-40 ${buttonTone}`}
        >
          <span aria-hidden="true">→</span>
          <span className="sr-only">{t.common.next}</span>
        </button>
        <p aria-live="polite" className="text-[13px] tracking-[0.16em]">
          <span className="sr-only">{`${index + 1} ${t.common.of} ${count} — `}</span>
          {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
