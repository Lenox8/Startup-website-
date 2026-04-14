"use client";

import { Button } from "../ui/button";
import { useState } from "react";
import GlobePulseDemo from "./CardAside";

const Mission = () => {
  const [content, setContent] = useState({
    title: "Mission",
    text: "To Develop innovative and accessible techological solutions that transform positively the organizations and society reality, contributing to socioecconomic development and digital solution",
  }
  );

  // change to Vision text
  const handleChangeToVision = () => {
   setContent({
    title: "Vision",
    text: "To be the leading reference in the development of technological solutions in Southern Africa, recognized for excellence, innovation, and positive impact on the communities and markets where we operate.",
   })
  };
  // change to Mission text
  const handleChangeToMission = () => {
    setContent({
      title: "Mission",
      text:"To Develop innovative and accessible techological solutions that transform positively the organizations and society reality, contributing to socioecconomic development and digital solution",
    })
  };

  // change to Values text
  const handleChangeToValues = () => {
    setContent({
      title: "Values",
      text: "Innovation, ethics, and excellence guide our work. Committed to real results and social responsibility, we deliver solutions that transform businesses and communities.",
    })
  };
  return (
    <aside className="flex flex-col md:flex-row  mx-auto px-3 items-center justify-center container">
      <div
        className="mx-auto px-4 py-3 mb-6 mt-5  gap-3 flex flex-col select-none"
        data-aos="fade-up-left"
        data-aos-duration="1300"
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            {content.title}
          </h1>
          <p className="text-[17px] leading-relaxed text-white text-justify max-w-xl">
            {content.text}
          </p>
        </div>

        <div className="flex flex-col items-start gap-2">
          <Button
            className="bg-transparent border border-purple-600/25 text-white text-[16px] hover:bg-white/15 cursor-pointer w-75"
            onClick={() => handleChangeToMission()}
          >
            Mission
          </Button>
          {/* plans */}
          <Button
            className="bg-transparent border border-purple-600/25 text-white text-[16px] hover:bg-white/15 cursor-pointer w-75"
            onClick={() => handleChangeToVision()}
          >
            Vision
          </Button>
          {/* another bullshit */}
          <Button
            className="bg-transparent border border-purple-600/25 text-white text-[16px] hover:bg-white/15 cursor-pointer w-75"
            onClick={() =>
              handleChangeToValues()
            }
          >
            Values
          </Button>
        </div>
      </div>
      <div>
        <GlobePulseDemo />
      </div>
    </aside>
  );
};

export default Mission;
