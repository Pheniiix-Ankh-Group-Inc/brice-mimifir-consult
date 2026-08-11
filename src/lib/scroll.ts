export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Scroll to a section anchor and optionally move keyboard focus into it.
 * Returns false when the target does not exist on the current page.
 */
export function scrollToSection(id: string, focusSelector?: string): boolean {
  if (typeof document === "undefined") return false;
  const target = document.getElementById(id);
  if (!target) return false;

  target.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });

  const focusTarget = focusSelector ? target.querySelector<HTMLElement>(focusSelector) : target;
  if (focusTarget) {
    if (!focusTarget.hasAttribute("tabindex") && focusTarget === target) {
      focusTarget.setAttribute("tabindex", "-1");
    }
    focusTarget.focus({ preventScroll: true });
  }
  return true;
}
