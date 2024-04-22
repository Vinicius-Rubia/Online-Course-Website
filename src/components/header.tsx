import { images } from "@/utils/images";
import { ArrowRight } from "lucide-react";
import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const navLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/",
    label: "Courses",
  },
  {
    path: "/",
    label: "About Us",
  },
  {
    path: "/",
    label: "Pricing",
  },
  {
    path: "/",
    label: "Contact",
  },
];

export const Header: React.FC = () => {
  return (
    <header className="mt-5 mb-[50px] 2xl:mb-20 full:mb-[100px]">
      <Button className="text-wrap font-normal flex mx-auto w-[calc(100%-32px)] gap-3 2xl:text-base">
        Free Courses 🌟 Sale Ends Soon, Get It Now
        <ArrowRight className="size-5 shrink-0" />
      </Button>

      <div className="flex items-center justify-between py-3.5 container-fluid">
        <div className="flex items-center gap-12">
          <Link to="/">
            <img className="size-10 2xl:size-11 full:size-[54px]" src={images.Logo} alt="Logo" />
          </Link>

          <nav className="hidden md:block">
            <ul>
              {navLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  asChild
                  className="font-normal"
                >
                  <Link to={link.path}>
                    <li>{link.label}</li>
                  </Link>
                </Button>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-2 [&>button]:font-normal">
          <Button variant="ghost">Sign Up</Button>
          <Button>Login</Button>
          <Button variant="ghost" className="md:hidden">
            <RiMenu3Fill className="size-6" />
          </Button>
        </div>
      </div>
      <Separator />
    </header>
  );
};
