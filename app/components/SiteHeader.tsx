"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#intro-section", label: "Intro" },
  { href: "#showcase-section", label: "Showcase" },
  { href: "#about-section", label: "About" },
  { href: "#features-section", label: "Features" },
  { href: "#services-section", label: "Services" },
  { href: "#contact-section", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("intro-section");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`bg-paper sticky top-0 z-[100] border-b border-line transition-all duration-300 ${
        scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      <div className="wrap flex items-center justify-between py-5">
        <a href="#intro-section" className="flex items-center gap-3.5">
          <div
            className="w-11 h-11 grid place-items-center text-white font-serif text-[22px] font-semibold italic rounded-md"
            style={{
              background: "linear-gradient(135deg, #c8a45a, #a08039)",
              boxShadow: "0 6px 18px -6px rgba(200,164,90,0.5)",
            }}
          >
            IJ
          </div>
          <div className="leading-[1.1]">
            <span className="font-serif font-semibold text-[22px]">
              Imperial Journeys
            </span>
            <span className="block mt-1 text-[9px] uppercase font-medium text-accent" style={{ letterSpacing: "0.28em" }}>
              Curated Travel · Est. 2024
            </span>
          </div>
        </a>

        <nav
          className={`flex gap-9 items-center ${
            open
              ? "max-[980px]:right-0"
              : "max-[980px]:right-[-100%]"
          } max-[980px]:fixed max-[980px]:top-0 max-[980px]:w-4/5 max-[980px]:max-w-[340px] max-[980px]:h-screen max-[980px]:bg-ink max-[980px]:flex-col max-[980px]:items-start max-[980px]:pt-[100px] max-[980px]:px-9 max-[980px]:pb-9 max-[980px]:gap-[22px] max-[980px]:transition-[right] max-[980px]:duration-[400ms] max-[980px]:z-[99]`}
        >
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-[13px] font-medium relative py-2 transition-colors duration-300 hover:text-accent-deep max-[980px]:text-white ${
                  isActive ? "text-accent-deep" : ""
                }`}
                style={{ letterSpacing: "0.05em" }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 h-0.5 bg-accent transition-[width] duration-[400ms]"
                  style={{ width: isActive ? "100%" : 0 }}
                />
              </a>
            );
          })}
        </nav>

        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="hidden max-[980px]:block bg-transparent border-0 p-2 z-[101]"
        >
          <span className="block w-6 h-0.5 bg-ink my-[5px] transition-all duration-300" />
          <span className="block w-6 h-0.5 bg-ink my-[5px] transition-all duration-300" />
          <span className="block w-6 h-0.5 bg-ink my-[5px] transition-all duration-300" />
        </button>
      </div>
    </header>
  );
}
