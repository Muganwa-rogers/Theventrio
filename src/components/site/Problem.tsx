import { Users, Wallet, Sparkles, CalendarClock, AlertTriangle } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Users, label: "Finding vendors" },
  { icon: Wallet, label: "Managing budgets" },
  { icon: Sparkles, label: "Decor decisions" },
  { icon: CalendarClock, label: "Guest coordination" },
  { icon: AlertTriangle, label: "Last-minute issues" },
];

export const Problem = () => (
  <section className="py-32 relative">
    <div className="container max-w-5xl text-center">
      <Reveal>
        <p className="text-xs tracking-[0.5em] uppercase text-gold mb-6">The Reality</p>
        <h2 className="font-serif-display text-4xl md:text-6xl mb-6">
          Doing it alone is <span className="italic text-gold">stressful</span>.
        </h2>
        <div className="gold-divider w-24 mx-auto mb-16" />
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 mb-16">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 100}>
            <div className="flex flex-col items-center p-6 border border-border/60 bg-card/40 hover:border-gold/50 transition-colors duration-500 h-full">
              <it.icon className="text-gold mb-4" size={28} strokeWidth={1.2} />
              <p className="text-sm text-muted-foreground tracking-wide">{it.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="font-serif-display text-2xl md:text-3xl italic text-foreground/90 max-w-3xl mx-auto">
          Your event shouldn't feel like pressure.
          <br /> It should feel like <span className="text-gold">joy</span>.
        </p>
      </Reveal>
    </div>
  </section>
);
