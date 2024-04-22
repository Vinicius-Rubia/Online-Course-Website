import { TESTIMONIALS } from "@/data/testimonials";
import React from "react";
import { Link } from "react-router-dom";
import { Testimonial } from "./testimonial";
import { Button } from "./ui/button";

export const Testimonials: React.FC = () => {
  return (
    <div className="container-fluid mt-[50px] mb-10 2xl:mt-[100px] 2xl:mb-[60px] full:mt-[150px] full:mb-20">
      <div className="flex flex-wrap gap-5 justify-between items-end">
        <div>
          <h2 className="font-semibold text-[28px] 2xl:text-[38px] full:text-5xl mb-1 full:mb-1.5">
            Our Testimonials
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

      <div className="flex flex-wrap gap-5 mt-10 mb-[50px] 2xl:mt-[60px] 2xl:mb-[100px] full:mt-20">
        {TESTIMONIALS.map((testimonial, index) => (
          <div className="min-w-[288px] 2xl:min-w-[630px] flex flex-1">
            <Testimonial key={index} testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};
