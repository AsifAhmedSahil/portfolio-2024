import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/ContactSection";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <TapeSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  );
}
