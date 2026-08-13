"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import { prefersReducedMotion } from "@/lib/scroll";

type CarouselProps = {
  label: string;
  count: number;
  previousLabel: string;
  nextLabel: string;
  ofLabel: string;
  tone?: "dark" | "light";
  children: ReactNode;
};

/** Manual carousel: scroll-snap track, swipe, buttons and keyboard. No autoplay. */
export function Carousel({
  label,
  count,
  previousLabel,
  nextLabel,
  ofLabel,
  tone = "light",
  children,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  const syncIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = Array.from(track.children) as HTMLElement[];
    if (items.length === 0) return;
    const left = track.scrollLeft;
    let closest = 0;
    let minimumDistance = Number.POSITIVE_INFINITY;
    items.forEach((item, itemIndex) => {
      const distance = Math.abs(item.offsetLeft - track.offsetLeft - left);
      if (distance < minimumDistance) {
        minimumDistance = distance;
        closest = itemIndex;
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
    const boundedIndex = Math.max(0, Math.min(items.length - 1, next));
    const target = items[boundedIndex];
    if (!target) return;
    track.scrollTo({
      left: target.offsetLeft - track.offsetLeft,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
    setIndex(boundedIndex);
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
          <span className="sr-only">{previousLabel}</span>
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          disabled={index >= count - 1}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 disabled:opacity-40 ${buttonTone}`}
        >
          <span aria-hidden="true">→</span>
          <span className="sr-only">{nextLabel}</span>
        </button>
        <p aria-live="polite" className="text-[13px] tracking-[0.16em]">
          <span className="sr-only">{`${index + 1} ${ofLabel} ${count} — `}</span>
          {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
