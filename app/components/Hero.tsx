"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  "https://images.unsplash.com/photo-1502786129293-79981df4e689?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=85",
  "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=85",
  "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=85",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      5500,
    );
  }, [stopTimer]);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  const goTo = (i: number) => {
    setIndex(i);
    startTimer();
  };

  return (
    <section
      id="intro-section"
      className="relative h-screen min-h-[680px] overflow-hidden bg-ink text-white max-[720px]:h-auto max-[720px]:py-[110px] max-[720px]:min-h-[580px]"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      <div className="absolute inset-0">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-[1.4s] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${src}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/45" />
          </div>
        ))}
      </div>

      <div className="wrap relative z-[2] h-full flex flex-col justify-center items-center text-center">
        <span
          className="font-serif italic mb-7 text-[13px] text-accent-soft"
          style={{ letterSpacing: "0.4em", textTransform: "uppercase" }}
        >
          Imperial Journeys
        </span>
        <h1
          className="font-sans font-semibold text-white mb-10 max-w-[1100px]"
          style={{
            fontSize: "clamp(3.2rem, 8.5vw, 7.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
          }}
        >
          Curated
          <br />
          <span className="font-serif italic font-medium text-accent-soft">
            Travel Journeys
          </span>
        </h1>
        <p className="text-[1.1rem] text-white/85 max-w-[600px] mx-auto mb-12 font-light leading-[1.7]">
          Bespoke itineraries across India and the world — designed by planners
          who&apos;ve stayed in the rooms, eaten in the kitchens, and trusted
          the drivers on the road.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#contact-section" className="btn btn-primary">
            Plan My Trip <span className="arrow">→</span>
          </a>
          <a href="#showcase-section" className="btn btn-outline">
            View Journeys
          </a>
        </div>
      </div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-[3]">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full border-0 cursor-pointer transition-all duration-300 ${
              i === index
                ? "bg-white scale-[1.3]"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="absolute right-8 bottom-10 text-[10px] uppercase text-white/60 z-[3] max-[720px]:hidden"
        style={{
          letterSpacing: "0.3em",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        }}
      >
        Scroll
        <span
          className="block w-px h-10 mx-auto mt-3.5 animate-drop"
          style={{
            background: "linear-gradient(to top, #e8d6a8, transparent)",
          }}
        />
      </div>
    </section>
  );
}
