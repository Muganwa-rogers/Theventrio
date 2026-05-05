import { Phone, Mail, Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Thank you", description: "We'll be in touch within 24 hours to begin crafting your moment." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(43_64%_52%/0.08),_transparent_60%)]" />
      <div className="container relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs tracking-[0.5em] uppercase text-gold mb-6">Contact</p>
            <h2 className="font-serif-display text-4xl md:text-6xl mb-6">
              Let's create something <span className="italic gradient-gold-text">unforgettable</span>.
            </h2>
            <div className="gold-divider w-24 mx-auto" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <Reveal>
            <div className="space-y-8">
              <a href="tel:+250798375737" className="flex items-start gap-5 group">
                <Phone className="text-gold mt-1" size={22} strokeWidth={1.2} />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Call us</p>
                  <p className="font-serif-display text-2xl group-hover:text-gold transition-colors">+250 798 375 737</p>
                </div>
              </a>
              <a href="mailto:hello@eventtrio.com" className="flex items-start gap-5 group">
                <Mail className="text-gold mt-1" size={22} strokeWidth={1.2} />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Write to us</p>
                  <p className="font-serif-display text-2xl group-hover:text-gold transition-colors">hello@eventtrio.com</p>
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-start gap-5 group">
                <Instagram className="text-gold mt-1" size={22} strokeWidth={1.2} />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">DM us</p>
                  <p className="font-serif-display text-2xl group-hover:text-gold transition-colors">@eventtrio</p>
                </div>
              </a>
              <div className="gold-divider" />
              <p className="font-serif-display italic text-lg text-muted-foreground">
                "Every great event begins with a single conversation."
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={submit} className="space-y-6 p-10 bg-card/60 border border-border">
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-gold py-3 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-gold py-3 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Tell us about your event</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-gold py-3 outline-none resize-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 text-xs uppercase tracking-[0.3em] bg-gold text-primary-foreground hover-glow"
              >
                DM us or Book Now
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
