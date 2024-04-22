import { COURSES_DATA } from "@/data/courses";
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const Courses: React.FC = () => {
  return (
    <div className="container-fluid mt-[50px] mb-10 2xl:mt-[100px] 2xl:mb-[60px] full:mt-[150px] full:mb-20">
      <div className="flex flex-wrap gap-5 justify-between items-end">
        <div>
          <h2 className="font-semibold text-[28px] 2xl:text-[38px] full:text-5xl mb-1 full:mb-1.5">
            Our Courses
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
        {COURSES_DATA.map((course, index) => (
          <div
            key={index}
            className="flex flex-col p-6 rounded-[10px] bg-card min-w-[288px] 2xl:min-w-[430px] flex-1 shadow-md hover:shadow-lg transition-all hover:scale-[1.01]"
          >
            <img
              src={course.image}
              alt="Image Banner"
              className="rounded-md mb-6 full:mb-[30px]"
            />
            <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5 2xl:mb-6 full:mb-[30px]">
              <div className="flex items-center gap-2.5">
                <Badge variant="outline">{course.totalDuration}</Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>
              <p className="font-medium text-black/85 full:text-xl">
                By {course.author}
              </p>
            </div>

            <h3 className="font-semibold text-lg 2xl:text-xl full:text-2xl">
              {course.title}
            </h3>
            <p className="text-sm text-muted-foreground 2xl:text-base full:text-lg mt-2.5 mb-6 full:mt-3.5 full:mb-[30px]">
              {course.description}
            </p>
            <Button variant="secondary" className="w-full mt-auto">
              Get it Now
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
