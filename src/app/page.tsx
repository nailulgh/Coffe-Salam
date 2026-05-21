import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Reservation } from "@/components/Reservation";
import { Testimonials } from "@/components/Testimonials";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-accent selection:text-accent-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reservation />
      <Testimonials />
      <Events />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
