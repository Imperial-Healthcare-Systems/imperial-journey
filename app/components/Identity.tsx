export default function Identity() {
  return (
    <section
      className="reveal relative py-[140px] text-center text-white"
      style={{
        background:
          "linear-gradient(rgba(26,26,26,0.78), rgba(26,26,26,0.78)), url('https://images.unsplash.com/photo-1599661046289-e31897846e41?w=2000&q=80') center/cover fixed",
      }}
    >
      <div className="wrap">
        <h2
          className="font-serif text-white font-medium max-w-[800px] mx-auto mb-12"
          style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
        >
          We craft a unique journey that{" "}
          <span className="italic text-accent-soft">conveys who you are.</span>
        </h2>
        <div className="grid grid-cols-2 gap-20 max-w-[980px] mx-auto text-left max-[720px]:grid-cols-1 max-[720px]:gap-[30px]">
          <p className="text-white/85 font-light text-base leading-[1.85]">
            Imperial Journeys is a travel brand of Imperial Healthcare Systems
            Pvt Ltd, with operations across India and the United States. We
            bring a decade of operational discipline to a craft that usually
            runs on charm.
          </p>
          <p className="text-white/85 font-light text-base leading-[1.85]">
            We design successful, memorable trips from the first conversation
            through the last airport farewell — the kind of travel where every
            detail has been handled before you knew it needed to be.
          </p>
        </div>
      </div>
    </section>
  );
}
