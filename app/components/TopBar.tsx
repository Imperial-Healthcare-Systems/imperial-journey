export default function TopBar() {
  return (
    <div className="bg-ink text-white/70 text-[12px] py-3 font-light">
      <div className="wrap flex justify-between items-center gap-6 flex-wrap">
        <div className="flex gap-7 flex-wrap">
          <span className="inline-flex items-center gap-2">
            <i aria-hidden="true" className="not-italic text-accent-soft">📍</i>
            Gurugram, India · Richmond, KY
          </span>
          <span className="inline-flex items-center gap-2 max-[980px]:hidden">
            <i aria-hidden="true" className="not-italic text-accent-soft">📞</i>
            <a href="tel:+917358013585">+91 73580 13585</a>
          </span>
          <span className="inline-flex items-center gap-2 max-[980px]:hidden">
            <i aria-hidden="true" className="not-italic text-accent-soft">✉️</i>
            <a href="mailto:journeys@imperialhealthsystems.in">
              journeys@imperialhealthsystems.in
            </a>
          </span>
        </div>
        <div className="flex">
          {[
            { label: "Facebook", text: "f" },
            { label: "Instagram", text: "ig" },
            { label: "LinkedIn", text: "in" },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="inline-block w-7 h-7 border border-white/15 rounded-full text-center text-[11px] ml-2 transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white"
              style={{ lineHeight: "26px" }}
            >
              {s.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
