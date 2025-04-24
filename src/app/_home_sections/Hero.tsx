import React from "react";
import Image from "next/image";
import { Input } from "#/src/components/ui/input";
import { Button } from "#/src/components/ui/button";
import { SearchIcon, ShoppingBagIcon, BuildingIcon ,Users2Icon } from "lucide-react";
const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        alt="Image"
        src={heroData.bg_img}
        width={1024}
        height={1024}
        className="absolute inset-0 w-full h-full object-cover z-0  backdrop-blur-2xl"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground opacity-70 z-10 "></div>

      {/* Content */}
      <main className="relative z-20 text-background p-8 flex flex-col justify-center items-center h-screen gap-5">
        <h1 className="text-6xl font-bold">Find Your Dream Job Today!</h1>
        <p className="text-background/90">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>
        <div className="flex  items-center bg-background h-16  w-[50%] rounded-2xl">
          <Input
            className="h-full rounded-l-2xl rounded-r-none text-center text-2xl text-foreground"
            placeholder="Job Title or Company"
          />

          <Button className="h-full text-lg rounded-r-2xl rounded-l-none">
            <SearchIcon />
            Search Job
          </Button>
        </div>
        <div className="flex gap-16 p-10 justify-center items-center">
          <div className="flex gap-2 items-start">
            <Button className=" size-16 rounded-full">
              <ShoppingBagIcon className="size-8" />
            </Button>
            <div>
              <h4 className="text-lg font-bold">25,851</h4>

              <span className="text-background/80">jobs</span>
            </div>
          </div>

          <div className="flex gap-2 items-start">
            <Button className=" size-16 rounded-full">
              <Users2Icon className="size-8" />
            </Button>
            <div>
              <h4 className="text-lg font-bold">10,420</h4>

              <span className="text-background/80">Candidates</span>
            </div>
          </div>

          <div className="flex gap-2 items-start">
            <Button className=" size-16 rounded-full">
              <BuildingIcon className="size-8" />
            </Button>
            <div>
              <h4 className="text-lg font-bold">15,051</h4>

              <span className="text-background/80">Companies</span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;

const heroData = {
  bg_img: "/images/hero.jpg",
};
