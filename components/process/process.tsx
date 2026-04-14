import Image from "next/image";
import React from "react";
import card1 from "@/public/Card1.png";
import card2 from "@/public/Card2.png";
import card3 from "@/public/Card3.png";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Processo = () => {
  return (
    <div
      className="mx-auto px-4 py-3 mb-6 mt-5"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mx-auto px-4 py-2 max-w-6xl">
        <div className="flex flex-col items-start text-left gap-3 border-1.5 rounded-md shadow-md cursor-pointer transition-transform duration-300 hover:-translate-y-1">
          <Card
            className="relative mx-auto w-full h-full pt-0 rounded-2xl py-2 px-3"
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            <div className="absolute z-30 aspect-video" />
            <Image
              src={card1}
              alt="Card number 1"
              className="relative z-20 aspect-video w-full object-cover rounded-md"
            />
            <CardHeader>
              <CardAction>
                {/* <Badge variant="secondary">Featured</Badge> */}
              </CardAction>
              <CardTitle className="text-lg">
                01. Discovery & Analytics
              </CardTitle>
              <CardDescription className="text-sm leading-tight">
                We assess your business to identify AI opportunities that growth
                efficiantly
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        {/* number 2 */}
        <div className="flex flex-col items-start text-left gap-3 border-1.5 shadow-md rounded-md cursor-pointer transition-transform duration-300 hover:-translate-y-1">
          <Card
            className="relative mx-auto w-full h-full pt-0  rounded-2xl  py-2 px-3"
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            <div className="absolute z-30 aspect-video " />
            <Image
              src={card2}
              alt="Card number 2"
              className="relative z-20 aspect-video w-full object-cover rounded-md "
            />
            <CardHeader>
              <CardAction>
                {/* <Badge variant="secondary">Featured</Badge> */}
              </CardAction>
              <CardTitle className="text-lg">02. Development & Tests</CardTitle>
              <CardDescription className="text-sm leading-tight">
                We develop and integrate tailored AI driven solutions, using
                alighn high level techologies to achieve your goals
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        {/* number3 */}
        <div className="flex flex-col items-start text-left gap-3 border-1.5 shadow-md  cursor-pointer transition-transform duration-300 hover:-translate-y-1">
          <Card
            className="relative mx-auto w-full  h-full pt-0 rounded-2xl  py-2 px-3"
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            <div className="absolute z-30 aspect-video" />
            <Image
              src={card3}
              alt="Card number 3"
              className="relative z-20 aspect-video w-full object-cover rounded-md"
            />
            <CardHeader>
              <CardAction>
                {/* <Badge variant="secondary">Featured</Badge> */}
              </CardAction>
              <CardTitle className="text-lg">
                03. Implementation & Solutions
              </CardTitle>
              <CardDescription className="text-sm leading-tight">
                We continously monitor and improve your AI systems to maximize
                long-term performance
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Processo;
