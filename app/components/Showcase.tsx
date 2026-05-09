import Image from "next/image";

type Card = {
  badge: string;
  src: string;
  alt: string;
  meta: string;
  title: string;
};

const CARDS: Card[] = [
  {
    badge: "Heritage",
    src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
    alt: "Rajasthan Palace Trail",
    meta: "10 Days · Rajasthan",
    title: "The Palace Trail",
  },
  {
    badge: "Mountains",
    src: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=900&q=80",
    alt: "Himalayan Retreat",
    meta: "7 Days · Himachal",
    title: "Himalayan Stillness",
  },
  {
    badge: "Backwaters",
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80",
    alt: "Kerala Backwaters",
    meta: "8 Days · Kerala",
    title: "Houseboat Reverie",
  },
  {
    badge: "International",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    alt: "Swiss Alps",
    meta: "12 Days · Switzerland",
    title: "The Alpine Odyssey",
  },
  {
    badge: "Wildlife",
    src: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=900&q=80",
    alt: "Serengeti Safari",
    meta: "9 Days · Tanzania",
    title: "Serengeti After Dark",
  },
  {
    badge: "Spiritual",
    src: "https://images.unsplash.com/photo-1532664189809-02133fee698d?w=900&q=80",
    alt: "Bhutan Monasteries",
    meta: "11 Days · Bhutan",
    title: "Kingdom in the Clouds",
  },
];

export default function Showcase() {
  return (
    <section id="showcase-section" className="py-[130px] bg-paper max-[600px]:py-[90px]">
      <div className="wrap">
        <div className="reveal text-center mb-20">
          <div className="eyebrow">Signature Experiences</div>
          <h2 className="my-4 mx-auto max-w-[780px]">
            Journeys we&apos;ve{" "}
            <span className="font-serif italic font-medium text-accent">
              designed
            </span>{" "}
            and travellers loved.
          </h2>
          <p className="max-w-[620px] mx-auto text-base">
            A glimpse of the trips we&apos;ve curated — every one shaped from
            scratch around the people taking it. Hover to peek inside.
          </p>
        </div>

        <div className="reveal grid grid-cols-3 gap-7 max-[880px]:grid-cols-2 max-[540px]:grid-cols-1">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="relative aspect-[4/5] overflow-hidden bg-ink cursor-pointer rounded group"
            >
              <span
                className="absolute top-6 left-6 z-[2] bg-white/95 px-3.5 py-1.5 text-[10px] font-semibold uppercase text-ink rounded-full"
                style={{ letterSpacing: "0.25em" }}
              >
                {c.badge}
              </span>
              <Image
                src={c.src}
                alt={c.alt}
                fill
                sizes="(max-width: 540px) 100vw, (max-width: 880px) 50vw, 33vw"
                className="object-cover transition-[transform,opacity] duration-[900ms] ease-in-out group-hover:scale-[1.08] group-hover:opacity-[0.45]"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-9 opacity-0 translate-y-5 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                <div
                  className="text-[10px] uppercase text-accent-soft font-medium mb-3"
                  style={{ letterSpacing: "0.3em" }}
                >
                  {c.meta}
                </div>
                <h4 className="font-serif text-[1.7rem] text-white font-medium mb-3">
                  {c.title}
                </h4>
                <span
                  className="inline-flex items-center text-[11px] uppercase text-white font-medium gap-2"
                  style={{ letterSpacing: "0.25em" }}
                >
                  View Itinerary →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
