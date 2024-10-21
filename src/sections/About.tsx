'use client'
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

import JacascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TypeIcon from "@/assets/icons/type.svg";
import MongoIcon from "@/assets/icons/mongo.svg";


import { CardHeader } from "@/components/CardHeader";
import { ToolboxItem } from "@/components/ToolboxItem";
import {motion} from 'framer-motion'
import { useRef } from "react";

const MyToolbox = [
  {
    title: "javaScript",
    iconType: JacascriptIcon,
  },
  {
    title: "javaScript",
    iconType: TypeIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoIcon,
  }
  
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gardening",
    emoji: "🌱",
    left: "50%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "10%",
    top: "35%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "35%",
    top: "40%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "70%",
    top: "45%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "5%",
    top: "65%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "80%",
    top: "10%",
  },
  {
    title: "Cycling",
    emoji: "🚴‍♂️",
    left: "30%",
    top: "70%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "60%",
    top: "80%",
  },
];


export const AboutSection = ({data}:{data:any}) => {
  const constrainRef = useRef(null)
  return (
    <div id="about" className=" py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse into my world"
          description={data.aboutme}
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3  ">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1  ">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective."
              />

              <div className="w-40 mx-auto mt-4 md:mt-0">
                <Image src={BookImage} alt="bookimg" />
              </div>
            </Card>
            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                className=""
                description="Explore the technologies and tools i use to create digital presence"
              />

              <ToolboxItem items={MyToolbox} className="" itemWrapperClassname="animate-move-left [animation-duration:20s]" />
              
              <ToolboxItem
                items={MyToolbox}
                className="mt-6 "
                itemWrapperClassname="animate-move-right [animation-duration:10s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                description="Explore the interestes and hobbies beyond the digital realm"
                className="px-6 py-6"
              />

              <div className="relative flex-1 " ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective."
              />

              <div className="w-40 mx-auto mt-4 md:mt-0">
                <Image src={BookImage} alt="bookimg" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
