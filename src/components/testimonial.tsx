import { TestimonialItem } from "@/data/testimonials";
import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface TestimonialProps {
  testimonial: TestimonialItem;
}

export const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="flex flex-col items-stretch bg-card rounded-[10px]">
      <p className="p-[30px] text-sm text-muted-foreground 2xl:p-10 2xl:text-base full:p-[50px] full:text-lg">
        {testimonial.testimonial}
      </p>
      <Separator />
      <div className="flex items-center mt-auto justify-between px-[30px] py-5 gap-2.5 2xl:px-10 2xl:py-6 full:px-[50px] full:py-[30px]">
        <div className="flex flex-wrap justify-center items-center gap-2.5">
          <img
            className="size-[50px] full:size-[60px] rounded-md"
            src={testimonial.imageProfile}
            alt={testimonial.username}
          />
          <h3 className="font-semibold text-center">{testimonial.username}</h3>
        </div>
        <Button variant="secondary">Read Full Story</Button>
      </div>
    </div>
  );
};
