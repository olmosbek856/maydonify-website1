"use client";

import { useEffect, useRef } from "react";

interface Options {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Attaches IntersectionObserver to a container ref.
 * All children with class "reveal" inside the container receive "is-visible"
 * when the container enters the viewport, triggering CSS fade-up transitions.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <div ref={ref}>
 *     <p className="reveal delay-100">...</p>
 *     <p className="reveal delay-200">...</p>
 *   </div>
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: Options = {}
) {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -48px 0px",
    once = true,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll<HTMLElement>(".reveal").forEach((child) => {
              child.classList.add("is-visible");
            });
            if (once) observer.unobserve(el);
          } else if (!once) {
            el.querySelectorAll<HTMLElement>(".reveal").forEach((child) => {
              child.classList.remove("is-visible");
            });
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
