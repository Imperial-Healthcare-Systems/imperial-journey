export default function Footer() {
  return (
    <footer className="bg-ink text-white/65 pt-[70px] pb-7 text-center">
      <div className="wrap">
        <div className="inline-flex flex-col items-center mb-8">
          <span className="font-serif text-[28px] font-semibold text-white">
            Imperial Journeys
          </span>
          <span
            className="text-[10px] uppercase text-accent mt-1.5 font-medium"
            style={{ letterSpacing: "0.3em" }}
          >
            Curated Travel
          </span>
        </div>

        <div className="my-7 flex justify-center gap-3.5">
          {[
            { label: "Facebook", text: "f" },
            { label: "Instagram", text: "ig" },
            { label: "LinkedIn", text: "in" },
            { label: "WhatsApp", text: "wa" },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="w-10 h-10 border border-white/20 rounded-full grid place-items-center text-[13px] text-white/70 transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-0.5"
            >
              {s.text}
            </a>
          ))}
        </div>

        <div className="text-xs mt-7 pt-7 border-t border-white/10 text-white/50 font-light">
          <span
            className="text-[11px] uppercase text-accent-soft mb-1.5 block"
            style={{ letterSpacing: "0.15em" }}
          >
            A Travel Brand of Imperial Healthcare Systems Pvt Ltd
          </span>
          © 2024–2026 Imperial Journeys. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
