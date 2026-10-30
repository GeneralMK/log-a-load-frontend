import { useEffect } from "react";

/** Enhance visible content only when the visitor permits motion. */
export function useMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".section-heading, .step, .service, .app-intro-photo, .app-intro-copy, .journey-layout, .registration-card, .registration-step, .app-section > div, .driver > div, .faq > .eyebrow, .faq > h2, .faq > details, .contact > div, .contact > form",
      ),
    );

    const reset = () => {
      observer?.disconnect();
      targets.forEach((element) => {
        delete element.dataset.motion;
        element.style.removeProperty("--reveal-delay");
      });
    };
    const start = () => {
      reset();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            (entry.target as HTMLElement).dataset.motion = "visible";
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
      );
      targets.forEach((element) => {
        // Already visible content stays visible; sections below reveal as they arrive.
        if (element.getBoundingClientRect().top < window.innerHeight - 24)
          return;
        const siblings = Array.from(element.parentElement?.children ?? []);
        const stagger = element.matches(".step, .service")
          ? siblings.indexOf(element) % 3
          : 0;
        element.style.setProperty("--reveal-delay", `${stagger * 85}ms`);
        element.dataset.motion = "pending";
        observer?.observe(element);
      });
    };
    start();
    preference.addEventListener("change", start);
    return () => {
      reset();
      preference.removeEventListener("change", start);
    };
  }, []);
}
