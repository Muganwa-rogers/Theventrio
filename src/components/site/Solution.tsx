import { Reveal } from "./Reveal";
import gallery1 from "@/assets/gallery-1.jpg";

const points = [
  { n: "01", t: "We handle the details", d: "Every thread, every flower, every flicker of light." },
  { n: "02", t: "We manage everything", d: "Vendors, timelines, logistics — orchestrated seamlessly." },
  { n: "03", t: "We bring your vision to life", d: "Your story, told through atmosphere and elegance." },
];

export const Solution = () => (
  <section className="py-32 relative bg-gradient-to-b from-background via-secondary/30 to-background">
    <div className="container grid lg:grid-cols-2 gap-16 items-center">
      <Reveal>
        <div className="relative">
          <img
            src={gallery1}
            alt="Elegant tablescape"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute -inset-4 border border-gold/40 -z-10 translate-x-6 translate-y-6" />
        </div>
      </Reveal>

      <div>
        <Reveal>
          <p className="text-xs tracking-[0.5em] uppercase text-gold mb-6">The Difference</p>
          <h2 className="font-serif-display text-4xl md:text-6xl mb-12">
            With <span className="italic gradient-gold-text">Event Trio</span>…
          </h2>
        </Reveal>

        <div className="space-y-8 mb-12">
          {points.map((p, i) => (
            <Reveal key={p.n} delay={i * 120}>
              <div className="flex gap-6 group">
                <span className="font-serif-display text-3xl text-gold/70 group-hover:text-gold transition-colors">{p.n}</span>
                <div>
                  <h3 className="font-serif-display text-2xl mb-2">{p.t}</h3>
                  <p className="text-muted-foreground font-light">{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="gold-divider w-32 mb-6" />
          <p className="font-serif-display italic text-xl md:text-2xl text-foreground/90">
            You simply show up, smile, and enjoy the moment.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
