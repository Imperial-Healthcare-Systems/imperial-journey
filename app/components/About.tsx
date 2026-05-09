"use client";

import { useEffect, useState } from "react";

export default function About() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <section
        id="about-section"
        className="py-[130px] bg-offwhite max-[600px]:py-[90px]"
      >
        <div className="wrap">
          <div className="grid grid-cols-2 gap-20 items-center max-[880px]:grid-cols-1 max-[880px]:gap-[50px]">
            <div className="reveal">
              <div className="eyebrow">Behind the Scene</div>
              <h2 className="font-serif font-medium mb-7 mt-4">
                The team that{" "}
                <span className="italic text-accent">crafts the journey</span>{" "}
                long before you board.
              </h2>
              <p className="mb-[22px] leading-[1.85]">
                Imperial Journeys is the travel arm of Imperial Healthcare
                Systems Pvt Ltd — a group that has spent the last decade
                building dependable, detail-obsessed services across healthcare
                and technology. We brought the same instinct to travel.
              </p>
              <p className="mb-[22px] leading-[1.85]">
                Every itinerary you see was sketched by a real planner who has
                stayed in the rooms they&apos;re sending you to, eaten in the
                kitchens they&apos;re recommending, and trusted the drivers on
                the road. The work happens behind the scene — what you
                experience is just the journey.
              </p>
              <a href="#contact-section" className="btn btn-dark mt-4">
                Talk to a Planner <span className="arrow">→</span>
              </a>
            </div>

            <button
              type="button"
              aria-label="Play story film"
              onClick={() => setOpen(true)}
              className="reveal relative aspect-[4/5] w-full bg-cover bg-center overflow-hidden rounded-md cursor-pointer grid place-items-center border-0 p-0 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80')",
              }}
            >
              <span
                className="absolute pointer-events-none rounded-sm"
                style={{
                  inset: 24,
                  border: "1px solid rgba(255,255,255,0.4)",
                }}
              />
              <span className="relative w-[100px] h-[100px] bg-accent rounded-full grid place-items-center transition-transform duration-[400ms] group-hover:scale-[1.08] z-[2]">
                <span className="absolute -inset-2.5 rounded-full border border-white/60 animate-ripple" />
                <span
                  className="block ml-1"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "18px solid #fff",
                    borderTop: "12px solid transparent",
                    borderBottom: "12px solid transparent",
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </section>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="videoModalTitle"
          className="fixed inset-0 z-[200] grid place-items-center p-8"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="w-full max-w-[980px] aspect-video bg-black relative">
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 bg-transparent border-0 text-white text-3xl cursor-pointer"
            >
              ×
            </button>
            <div
              className="absolute inset-0 grid place-items-center text-center text-white p-10"
              style={{
                background: "linear-gradient(135deg, #1f1f1f, #2a2a2a)",
              }}
            >
              <div className="max-w-[480px]">
                <div className="eyebrow" style={{ color: "#e8d6a8" }}>
                  Story Film
                </div>
                <h3
                  id="videoModalTitle"
                  className="font-serif italic font-medium text-white my-3.5"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                >
                  Coming soon.
                </h3>
                <p className="text-white/70">
                  We&apos;re shooting a short film with our travellers across
                  India this season. Drop us a line and we&apos;ll send it to
                  you the moment it lands.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
