import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Faq: React.FC = () => {
  return (
    <div className="container-fluid flex flex-col lg:flex-row gap-10 bg-card">
      <div className="lg:max-w-[410px]">
        <h2 className="font-semibold text-[28px] 2xl:text-[38px] full:text-5xl mb-1 full:mb-1.5">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-sm 2xl:text-base full:text-lg mb-5 lg:mb-10 full:mb-[50px]">
          Still you have any questions? Contact our Team via
          support@skillbridge.com
        </p>
        <Button variant="outline" asChild>
          <Link to="/">See All FAQ's</Link>
        </Button>
      </div>
      <div>Accordion</div>
    </div>
  );
};
