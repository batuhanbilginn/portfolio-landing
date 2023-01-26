import ClosingHero from "@/components/sections/closingHero";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Stacks from "@/components/sections/stacks";
import Story from "@/components/sections/story";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stacks />
      <Story />
      <Projects />
      <ClosingHero />
      <Footer />
    </main>
  );
}
