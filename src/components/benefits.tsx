import { BENEFITS_CARD } from "@/data/benefits";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Benefits: React.FC = () => {
  return (
    <div className="container-fluid mt-[50px] mb-10 2xl:mt-[100px] 2xl:mb-[60px] full:mt-[150px] full:mb-20">
      <div className="flex flex-wrap gap-5 justify-between items-end">
        <div>
          <h2 className="font-semibold text-[28px] 2xl:text-[38px] full:text-5xl mb-1 full:mb-1.5">
            Benefits
          </h2>
          <p className="text-muted-foreground text-sm 2xl:text-base full:text-lg max-w-[1100px]">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/">View All</Link>
        </Button>
      </div>

      <div className="flex flex-wrap items-stretch gap-5 mt-10 mb-[50px] 2xl:mt-[60px] 2xl:mb-[100px] full:mt-20">
        {BENEFITS_CARD.map((benefit, index) => (
          <Link to="/" key={index} className="flex flex-col p-[30px] bg-card rounded-[10px] min-w-[288px] 2xl:min-w-[410px] full:min-w-[500px] flex-1 group shadow-md hover:shadow-lg transition-all hover:scale-[1.01]">
            <span className="font-bold text-[50px] text-end block 2xl:text-6xl full:text-6xl">0{index + 1}</span>
            <div className="space-y-2.5 my-[30px]">
              <h3 className="font-semibold text-xl full:text-2xl">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground 2xl:text-base full:text-lg">{benefit.description}</p>
            </div>
            <Button variant="link" size="icon" className="flex ml-auto mt-auto group-hover:bg-primary group-hover:text-accent">
              <ArrowUpRight />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
