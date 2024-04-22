import { images } from "@/utils/images";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-card">
      <div className="flex flex-wrap gap-6 items-center justify-between pt-12 pb-5 2xl:pt-[60px] 2xl:pb-[30px] full:pt-24 full:pb-12 container-fluid">
        <div>
          <Link to="/">
            <img
              className="size-10 2xl:size-11 full:size-[54px] mb-7 full:mb-10"
              src={images.Logo}
              alt="Logo"
            />
          </Link>

          <div>
            <div className="flex items-center gap-1.5">
              <Mail className="fill-black stroke-white size-6 full:size-6" />
              <p className="text-sm 2xl:text-base full:text-lg fluid">hello@skillbridge.com</p>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="fill-black stroke-white size-6 full:size-6" />
              <p className="text-sm 2xl:text-base full:text-lg">+91 91813 23 2309</p>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="fill-black stroke-white size-6 full:size-6" />
              <p className="text-sm 2xl:text-base full:text-lg">Somewhere in the World</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-6 2xl:gap-10 full:gap-16">
          <nav className="min-w-32">
            <h3 className="font-semibold text-lg mb-2.5 full:mb-3.5">Home</h3>
            <ul>
              <li className="text-muted-foreground text-sm 2xl:text-base full:text-lg hover:underline underline-offset-4">
                <Link to="/">Benefits</Link>
              </li>
              <li className="text-muted-foreground text-sm 2xl:text-base full:text-lg hover:underline underline-offset-4">
                <Link to="/">Our Courses</Link>
              </li>
              <li className="text-muted-foreground text-sm 2xl:text-base full:text-lg hover:underline underline-offset-4">
                <Link to="/">Our Testimonials</Link>
              </li>
              <li className="text-muted-foreground text-sm 2xl:text-base full:text-lg hover:underline underline-offset-4">
                <Link to="/">Our FAQ</Link>
              </li>
            </ul>
          </nav>
          <nav className="min-w-32">
            <h3 className="font-semibold text-lg mb-2.5 full:mb-3.5">About Us</h3>
            <ul>
              <li className="text-muted-foreground text-sm 2xl:text-base full:text-lg hover:underline underline-offset-4">
                <Link to="/">Company</Link>
              </li>
              <li className="text-muted-foreground text-sm 2xl:text-base full:text-lg hover:underline underline-offset-4">
                <Link to="/">Achievements</Link>
              </li>
              <li className="text-muted-foreground text-sm 2xl:text-base full:text-lg hover:underline underline-offset-4">
                <Link to="/">Our Goals</Link>
              </li>
            </ul>
          </nav>
          <div className="min-w-32">
            <h3 className="font-semibold text-lg mb-2.5 full:mb-3.5">Social Profiles</h3>
            <div className="space-x-3.5">
              <Button variant="secondary" size="icon" className="[&>svg]:size-5 size-11 full:size-[52px] full:[&>svg]:size-6">
                <FaFacebook />
              </Button>
              <Button variant="secondary" size="icon" className="[&>svg]:size-5 size-11 full:size-[52px] full:[&>svg]:size-6">
                <FaTwitter />
              </Button>
              <Button variant="secondary" size="icon" className="[&>svg]:size-5 size-11 full:size-[52px] full:[&>svg]:size-6">
                <FaLinkedin />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <p className="text-center text-sm text-muted-foreground py-5 full:text-lg">
        &copy; 2023 Skillbridge. All rights reserved.
      </p>
    </footer>
  );
};
