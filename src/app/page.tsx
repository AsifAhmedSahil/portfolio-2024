import ScrollUpButton from "@/components/ScrollUpButton ";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/ContactSection";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

async function extractAllDatas(currentSection:string) {
  const res = await fetch(`https://portfolio-2024-e6lw.vercel.app/api/${currentSection}/get`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  return data && data.data;
}

export default async function Home() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  // const experienceSectionData = await extractAllDatas("experience");
  // const educationSectionData = await extractAllDatas("education");
  // const projectSectionData = await extractAllDatas("project");
  console.log(homeSectionData,"************")

  
  
 
    return (
    <div>
      <Header/>
      <ScrollUpButton/>
      <HeroSection data={
          homeSectionData && homeSectionData.length ? homeSectionData[0] : []
        }/>
      <AboutSection data={
          aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
        }/>
      <TapeSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  );
}
