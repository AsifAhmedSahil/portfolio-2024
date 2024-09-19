import { Card } from "@/components/card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import BookImage from "@/assets/images/book-cover.png"
import Image from "next/image";

import JacascriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CSSIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import GithubIcon from "@/assets/icons/github.svg"
import { TechIcon } from "@/components/TechIcon";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItem } from "@/components/ToolboxItem";


const MyToolbox = [
  {
    title:'javaScript',
    iconType: JacascriptIcon
  },
  {
    title:'HTML5',
    iconType:HTMLIcon
  },
  {
    title:'CSS3',
    iconType:CSSIcon
  },
  {
    title:'React',
    iconType:ReactIcon
  },
  {
    title:'Github',
    iconType:GithubIcon
  },
]

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left:"5%",
    top:"5%",
  },
  {
    title: "Gardening",
    emoji: "🌱",
    left:"50%",
    top:"5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left:"10%",
    top:"35%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left:"35%",
    top:"40%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left:"70%",
    top:"45%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left:"5%",
    top:"65%",
  }
];

export const AboutSection = () => {
  return (
    <div className=" py-20">
      <div className="container">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse into my world"
        description="Learn more about who I am, what I do, and what inspires mw"
      />

      <div className="mt-20 flex flex-col gap-8">
        <Card className="h-[320px]">
          <CardHeader title="My Reads" description="Explore the books shaping my perspective."/>
          
            <div className="w-40 mx-auto mt-8">

            <Image src={BookImage} alt="bookimg"/>
            </div>
          
        </Card>
        <Card className="h-[320px] p-0">

          <CardHeader title="My Toolbox" className="px-6 pt-6" description="Explore the technologies and tools i use to create digital presence"/>
          

          <ToolboxItem items={MyToolbox} className="mt-6"/>
          <ToolboxItem items={MyToolbox} className="mt-6 " itemWrapperClassname="-translate-x-1/2"/>
        </Card>

        <Card className="h-[320px] p-0 flex flex-col">

        <CardHeader title="Beyond the code" description="Explore the interestes and hobbies beyond the digital realm" className="px-6 py-6"/>
          
          <div className="relative flex-1">
            {
              hobbies.map((hobby) =>(
                <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                    left:hobby.left,
                    top:hobby.top
                }}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>

                </div>
              ))
            }
          </div>
        </Card>

        <Card>
        <CardHeader title="My Reads" description="Explore the books shaping my perspective."/>
        <div className="w-40 mx-auto mt-8">

<Image src={BookImage} alt="bookimg"/>
</div>
        </Card>

      </div>
    </div>
    </div>
  );
};
