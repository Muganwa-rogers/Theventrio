import { CalendarHeart, Palette, Handshake, Clock, Building2, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  { icon: CalendarHeart, title: "Event Planning", desc: "End-to-end planning crafted around your vision and timeline." },
  { icon: Palette, title: "Event Design & Styling", desc: "Concept, decor and atmosphere designed to take breath away." },
  { icon: Handshake, title: "Vendor Management", desc: "A trusted network handled with discretion and precision." },
  { icon: Clock, title: "Day-of Coordination", desc: "Calm, choreographed execution so you can be fully present." },
  { icon: Building2, title: "Private & Corporate", desc: "From intimate dinners to gala launches — refined for any occasion." },
  { icon: Users, title: "Guest Experience", desc: "Seamless coordination that ensures every guest feels considered, welcomed, and impressed." },
];

export const Services = () => (
  <section id="services" className="py-32">
    <div className="container">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs tracking-[0.5em] uppercase text-gold mb-6">Services</p>
          <h2 className="font-serif-display text-4xl md:text-6xl mb-6">
            Crafted with <span className="italic gradient-gold-text">intention</span>
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <div className="bg-card p-10 h-full group hover:bg-secondary/60 transition-colors duration-700">
              <s.icon className="text-gold mb-8" size={36} strokeWidth={1.1} />
              <h3 className="font-serif-display text-2xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{s.desc}</p>
              <div className="mt-8 h-px w-12 bg-gold/40 group-hover:w-24 transition-all duration-500" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
