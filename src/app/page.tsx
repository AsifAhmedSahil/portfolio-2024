import ScrollUpButton from "@/components/ScrollUpButton ";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/ContactSection";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

async function extractAllDatas(currentSection:string) {
  try {
    const res = await fetch(`http://localhost:3000/api/${currentSection}/get`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Error fetching ${currentSection}: ${res.statusText}`);
    }

    const data = await res.json();
    return data && data.data;
  } catch (error) {
    console.error(error);
    return null; // Handle as appropriate for your app
  }
}


export default async function Home() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  // const experienceSectionData = await extractAllDatas("experience");
  // const educationSectionData = await extractAllDatas("education");
  // const projectSectionData = await extractAllDatas("project");
  console.log(aboutSectionData,"************")
  
 
    return (
    <div>
      <Header/>
      <ScrollUpButton/>
      <HeroSection data={homeSectionData[0]}/>
      <AboutSection data={aboutSectionData[0]}/>
      <TapeSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  );
}
