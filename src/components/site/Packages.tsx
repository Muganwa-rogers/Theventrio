import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const tiers = [
  {
    name: "Basic",
    price: "From $1,200",
    tag: "Essential elegance",
    features: [
      "Initial consultation",
      "Vendor recommendations",
      "Basic timeline planning",
      "Day-of guidance (4 hrs)",
    ],
  },
  {
    name: "Standard",
    price: "From $3,500",
    tag: "Most chosen",
    featured: true,
    features: [
      "Full planning consultations",
      "Curated vendor management",
      "Decor & styling concept",
      "Day-of coordination (8 hrs)",
      "Guest coordination support",
    ],
  },
  {
    name: "Premium",
    price: "From $7,500",
    tag: "Bespoke luxury",
    features: [
      "Unlimited planning sessions",
      "Full design & styling direction",
      "Premium vendor concierge",
      "Full event coordination",
      "On-site team & day-after care",
    ],
  },
];

export const Packages = () => (
  <section id="packages" className="py-32 bg-gradient-to-b from-background to-secondary/30">
    <div className="container">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs tracking-[0.5em] uppercase text-gold mb-6">Investment</p>
          <h2 className="font-serif-display text-4xl md:text-6xl mb-6">Our Pricing Packages</h2>
          <p className="text-muted-foreground font-light">Three thoughtfully curated tiers — each tailored to make your celebration effortless.</p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 120}>
            <div
              className={`relative h-full p-10 bg-card border transition-all duration-500 hover-glow ${
                t.featured ? "border-gold glow-gold lg:-translate-y-4" : "border-border hover:border-gold/60"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] uppercase tracking-[0.3em] bg-gold text-primary-foreground">
                  Signature
                </span>
              )}
              <p className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-3">{t.tag}</p>
              <h3 className="font-serif-display text-4xl mb-2">{t.name}</h3>
              <p className="font-serif-display text-2xl gradient-gold-text mb-8">{t.price}</p>
              <div className="gold-divider mb-8" />
              <ul className="space-y-4 mb-10">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full text-center py-3 text-xs uppercase tracking-[0.25em] transition-all duration-500 ${
                  t.featured
                    ? "bg-gold text-primary-foreground hover:opacity-90"
                    : "border border-gold/60 text-gold hover:bg-gold hover:text-primary-foreground"
                }`}
              >
                Choose Package
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
