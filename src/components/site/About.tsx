import { Reveal } from "./Reveal";

const team = [
  { name: "Amélie Laurent", role: "Creative Director", initials: "AL" },
  { name: "Noah Bennett", role: "Lead Planner", initials: "NB" },
  { name: "Saoirse Kim", role: "Design & Styling", initials: "SK" },
];

export const About = () => (
  <section id="about" className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background">
    <div className="container">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs tracking-[0.5em] uppercase text-gold mb-6">About</p>
          <h2 className="font-serif-display text-4xl md:text-6xl mb-8">Meet Event Trio</h2>
          <div className="gold-divider w-24 mx-auto mb-8" />
          <p className="font-serif-display italic text-xl md:text-2xl leading-relaxed text-foreground/90">
            Elegant or simple — we craft perfection.
            <br /> Every detail. Every moment. Centered on you.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 120}>
            <div className="text-center group">
              <div className="relative mx-auto mb-6 w-48 h-48">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/30 via-secondary to-background border border-gold/40 flex items-center justify-center font-serif-display text-5xl text-gold group-hover:border-gold transition-colors duration-500">
                  {m.initials}
                </div>
                <div className="absolute -inset-2 rounded-full border border-gold/20 group-hover:border-gold/50 transition-colors duration-500" />
              </div>
              <h3 className="font-serif-display text-2xl mb-1">{m.name}</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-gold/80">{m.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
