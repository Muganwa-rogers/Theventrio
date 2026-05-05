import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { Services } from "@/components/site/Services";
import { Packages } from "@/components/site/Packages";
import { Portfolio } from "@/components/site/Portfolio";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Navbar />
    <Hero />
    <Problem />
    <Solution />
    <Services />
    <Packages />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
  </main>
);

export default Index;
