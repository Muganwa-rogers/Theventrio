import hero from "@/assets/hero.jpg";

export const Hero = () => (
  <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={hero}
      alt="Luxury event with chandeliers and candlelight"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_64%_52%/0.12),_transparent_60%)]" />

    <div className="relative container text-center max-w-4xl px-6 py-32 animate-fade-in-slow">
      <p className="text-xs tracking-[0.5em] uppercase text-gold mb-8">Event Trio · Luxury Event Atelier</p>
      <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8">
        Planning <span className="italic">an</span>
        <br />
        <span className="gradient-gold-text">Event?</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed">
        Let's be honest… you don't need more stress.
        <br className="hidden md:block" /> You need <span className="text-gold italic">perfection</span>.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="#contact"
          className="group relative inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.25em] bg-gold text-primary-foreground hover-glow"
        >
          Book a Consultation
        </a>
        <a
          href="#packages"
          className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.25em] border border-gold/60 text-gold hover:bg-gold/10 transition-all duration-500"
        >
          View Packages
        </a>
      </div>
    </div>

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/60 text-[10px] tracking-[0.4em] uppercase animate-pulse">
      Scroll
    </div>
  </section>
);
