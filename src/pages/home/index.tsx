import { Benefits } from "@/components/benefits";
import { Courses } from "@/components/courses";
import { Faq } from "@/components/faq";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { images } from "@/utils/images";
import React from "react";

const logoClients = [
  images.ZapierLogo,
  images.SpotifyLogo,
  images.ZoomLogo,
  images.AmazonLogo,
  images.AdobeLogo,
  images.NotionLogo,
  images.NetflixLogo,
];

export const Home: React.FC = () => {
  return (
    <main>
      <div className="flex flex-col max-w-[900px] mx-auto text-center container-fluid">
        <div className="inline-flex mx-auto items-center gap-2.5 p-3.5 rounded-lg bg-card relative shadow-lg">
          <img
            className="absolute -top-7 -left-7"
            src={images.AbstractLine}
            alt="Abstract-Line"
          />
          <Button
            disabled
            size="icon"
            className="disabled:opacity-100 bg-primary/20"
          >
            <img src={images.Ray} alt="Ray" className="full:h-7" />
          </Button>
          <h1 className="font-semibold 2xl:text-4xl full:text-5xl">
            <span className="text-primary">Unlock</span> Your Creative Potential
          </h1>
        </div>
        <h2 className="mt-4 mb-1.5 font-medium text-2xl 2xl:text-[28px] full:text-[38px] full:mt-7 full:mb-2.5">
          with Online Design and Development Courses.
        </h2>
        <p className="text-sm text-muted-foreground 2xl:text-base full:text-lg">
          Learn from Industry Experts and Enhance Your Skills.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mt-12 mb-7 2xl:mb-24 full:mt-14">
          <Button>Explore Courses</Button>
          <Button variant="outline">View Pricing</Button>
        </div>
      </div>

      <div className="container-fluid shadow-sm">
        <div className="bg-card rounded-lg">
          <ScrollArea>
            <div className="flex p-2.5 justify-between mx-auto">
              {logoClients.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Logo"
                  className="p-3 2xl:p-5 2xl:size-auto size-20"
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>

      <img
        src={images.BannerMain}
        alt="Banner"
        className="container-fluid aspect-video mt-[30px] 2xl:mt-20 full:mt-[100px] shadow-2xl rounded-xl"
      />

      <Benefits />
      <Courses />
      <Testimonials />
      <Pricing />
      <Faq />
    </main>
  );
};
