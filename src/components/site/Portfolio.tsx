import { Reveal } from "./Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g5, cat: "Weddings", title: "Twilight Garden Vows" },
  { src: g2, cat: "Corporate Events", title: "Annual Gala Dinner" },
  { src: g1, cat: "Weddings", title: "Candlelit Reception" },
  { src: g6, cat: "Private Celebrations", title: "Golden Birthday Soirée" },
  { src: g4, cat: "Weddings", title: "Chandelier Ballroom" },
  { src: g3, cat: "Private Celebrations", title: "Champagne Hour" },
];

export const Portfolio = () => (
  <section id="portfolio" className="py-32">
    <div className="container">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs tracking-[0.5em] uppercase text-gold mb-6">Portfolio</p>
            <h2 className="font-serif-display text-4xl md:text-6xl">
              A glimpse of our <span className="italic gradient-gold-text">moments</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm font-light">
            Weddings · Corporate Events · Private Celebrations
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-3 md:gap-4">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 80}>
            <figure className={`group relative overflow-hidden ${i % 5 === 0 ? "md:row-span-2" : ""}`}>
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110 ${
                  i % 5 === 0 ? "h-[500px] md:h-[820px]" : "h-[400px]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/15 transition-colors duration-700" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-2">{it.cat}</p>
                <h3 className="font-serif-display text-2xl">{it.title}</h3>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
