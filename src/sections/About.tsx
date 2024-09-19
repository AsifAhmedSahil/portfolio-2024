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
    emoji: "🎨"
  },
  {
    title: "Gardening",
    emoji: "🌱"
  },
  {
    title: "Photography",
    emoji: "📸"
  },
  {
    title: "Cooking",
    emoji: "🍳"
  },
  {
    title: "Reading",
    emoji: "📚"
  },
  {
    title: "Hiking",
    emoji: "🥾"
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

      <div className="mt-20">
        <Card className="h-[320px]">
          <CardHeader title="My Reads" description="Explore the books shaping my perspective."/>
          
            <div className="w-40 mx-auto mt-8">

            <Image src={BookImage} alt="bookimg"/>
            </div>
          
        </Card>
        <Card>

          <CardHeader title="My Toolbox" description="Explore the technologies and tools i use to create digital presence"/>
          

          <ToolboxItem items={MyToolbox}/>
          <ToolboxItem items={MyToolbox}/>
        </Card>

        <Card>

        <CardHeader title="Beyond the code" description="Explore the interestes and hobbies beyond the digital realm"/>
          
          <div>
            {
              hobbies.map((hobby) =>(
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>

                </div>
              ))
            }
          </div>
        </Card>

        <Card>
        <CardHeader title="My Reads" description="Explore the books shaping my perspective."/>
          
        </Card>

      </div>
    </div>
    </div>
  );
};
