export const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-serif-display text-xl">
        Event <span className="text-gold">Trio</span>
      </p>
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        © {new Date().getFullYear()} Event Trio · Crafted with care
      </p>
    </div>
  </footer>
);
