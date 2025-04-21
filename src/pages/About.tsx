
import { Separator } from "@/components/ui/separator";
import Hero from "./about/components/Hero";
import StorySection from "./about/components/StorySection";
import ValuesSection from "./about/components/ValuesSection";
import TeamSection from "./about/components/TeamSection";
import ContactCTA from "./about/components/ContactCTA";

const About = () => {
  return (
    <div className="flex flex-col bg-bakery-beige-light text-bakery-brown-dark">
      <Hero />
      <StorySection />
      <Separator className="divider max-w-xl" />
      <ValuesSection />
      <Separator className="divider max-w-xl" />
      <TeamSection />
      <Separator className="divider max-w-xl" />
      <ContactCTA />
    </div>
  );
};

export default About;
