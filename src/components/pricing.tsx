import { LucideCheck, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

export const Pricing: React.FC = () => {
  const [contentPrice, setContentPrice] = useState<"monthly" | "yearly">("monthly");
  return (
    <div className="relative container-fluid mt-[50px] mb-10 2xl:mt-[100px] 2xl:mb-[60px] full:mt-[150px] full:mb-20">
      <div className="flex flex-wrap gap-5 justify-between items-end mb-10 2xl:mb-[60px] full:mb-[100px]">
        <div>
          <h2 className="font-semibold text-[28px] 2xl:text-[38px] full:text-5xl mb-1 full:mb-1.5">
            Our Pricing
          </h2>
          <p className="text-muted-foreground text-sm 2xl:text-base full:text-lg max-w-[1100px]">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>

        <div className="bg-card rounded-lg p-3 mx-auto full:mr-0">
          <Button
            variant={contentPrice === "monthly" ? "default" : "ghost"}
            onClick={() => setContentPrice("monthly")}
          >
            Monthly
          </Button>
          <Button
            variant={contentPrice === "yearly" ? "default" : "ghost"}
            onClick={() => setContentPrice("yearly")}
          >
            Yearly
          </Button>
        </div>
      </div>

      <div className="bg-card rounded-xl p-5 flex flex-col gap-[30px] lg:grid lg:grid-cols-2 lg:p-12 2xl:p-20">
        {contentPrice === "monthly" ? (
          <>
            <div className="pt-[30px] px-5 bg-slate-50/50 rounded-xl border border-input/50 lg:pt-[40px] full:pt-[50px]">
              <h3 className="py-2 bg-primary/10 rounded border border-primary/30 text-center font-medium">
                Free Plan
              </h3>
              <h2 className="font-semibold text-[50px] flex items-end justify-center leading-[1] my-[30px]">
                $0 <span className="font-medium text-sm text-black/60">/month</span>
              </h2>
              <div className="px-5 pt-5 mb-5 bg-card border border-input/50 rounded-xl space-y-5 lg:px-16 lg:pt-[30px] full:px-[70px] full:pt-10">
                <h2 className="text-lg font-medium text-center">
                  Available Features
                </h2>
                <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                  <span className="bg-primary/10 block rounded size-6">
                    <LucideCheck className="p-1" />
                  </span>
                  <p className="text-sm">Access to selected free courses.</p>
                </div>
                <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                  <span className="bg-primary/10 block rounded size-6">
                    <LucideCheck className="p-1" />
                  </span>
                  <p className="text-sm">Limited course materials and resources.</p>
                </div>
                <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                  <span className="bg-primary/10 block rounded size-6">
                    <LucideCheck className="p-1" />
                  </span>
                  <p className="text-sm">Basic community support.</p>
                </div>
                <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                  <span className="bg-primary/10 block rounded size-6">
                    <LucideCheck className="p-1" />
                  </span>
                  <p className="text-sm">No certification upon completion.</p>
                </div>
                <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                  <span className="bg-primary/10 block rounded size-6">
                    <LucideCheck className="p-1" />
                  </span>
                  <p className="text-sm">Ad-supported platform.</p>
                </div>
                <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                  <span className="block rounded size-6 border border-input/50">
                    <X className="p-1" />
                  </span>
                  <p className="text-sm">
                    Access to exclusive Pro Plan community forums.
                  </p>
                </div>
                <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                  <span className="block rounded size-6 border border-input/50">
                    <X className="p-1" />
                  </span>
                  <p className="text-sm">
                    Early access to new courses and updates.
                  </p>
                </div>
                <div className="-m-5 lg:-m-16 full:-mx-[70px]">
                  <Button className="w-full rounded-t-none">Get Started</Button>
                </div>
              </div>
            </div>
            <div className="pt-[30px] px-5 bg-slate-50/50 rounded-xl border border-input/50 lg:pt-[40px] full:pt-[50px]">
              <h3 className="py-2 bg-primary/10 rounded border border-primary/30 text-center font-medium">
                Pro Plan
              </h3>
              <h2 className="font-semibold text-[50px] flex items-end justify-center leading-[1] my-[30px]">
                $79 <span className="font-medium text-sm text-black/60">/month</span>
              </h2>
              <div className="px-5 pt-5 mb-5 bg-card border border-input/50 rounded-xl space-y-5 lg:px-16 lg:pt-[30px] full:px-[70px] full:pt-10">
                <h2 className="text-lg font-medium text-center">
                  Available Features
                </h2>
                <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                  <span className="bg-primary/10 block rounded size-6">
                    <LucideCheck className="p-1" />
                  </span>
                  <p className="text-sm">Unlimited access to all courses.</p>
                </div>
                <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                  <span className="bg-primary/10 block rounded size-6">
                    <LucideCheck className="p-1" />
                  </span>
                  <p className="text-sm">Unlimited course materials and resources.</p>
                </div>
                <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                  <span className="bg-primary/10 block rounded size-6">
                    <LucideCheck className="p-1" />
                  </span>
                  <p className="text-sm">Priority support from instructors.</p>
                </div>
                <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                  <span className="bg-primary/10 block rounded size-6">
                    <LucideCheck className="p-1" />
                  </span>
                  <p className="text-sm">Course completion certificates.</p>
                </div>
                <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                  <span className="bg-primary/10 block rounded size-6">
                    <LucideCheck className="p-1" />
                  </span>
                  <p className="text-sm">Ad-free experience.</p>
                </div>
                <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                  <span className="bg-primary/10 block rounded size-6">
                    <LucideCheck className="p-1" />
                  </span>
                  <p className="text-sm">
                    Access to exclusive Pro Plan community forums.
                  </p>
                </div>
                <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                  <span className="bg-primary/10 block rounded size-6">
                    <LucideCheck className="p-1" />
                  </span>
                  <p className="text-sm">
                    Early access to new courses and updates.
                  </p>
                </div>
                <div className="-m-5 lg:-m-16 full:-mx-[70px]">
                  <Button className="w-full rounded-t-none">Get Started</Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
          <div className="pt-[30px] px-5 bg-slate-50/50 rounded-xl border border-input/50 lg:pt-[40px] full:pt-[50px]">
            <h3 className="py-2 bg-primary/10 rounded border border-primary/30 text-center font-medium">
              Pro Plan
            </h3>
            <h2 className="font-semibold text-[50px] flex items-end justify-center leading-[1] my-[30px]">
              $800 <span className="font-medium text-sm text-black/60">/month</span>
            </h2>
            <div className="px-5 pt-5 mb-5 bg-card border border-input/50 rounded-xl space-y-5 lg:px-16 lg:pt-[30px] full:px-[70px] full:pt-10">
              <h2 className="text-lg font-medium text-center">
                Available Features
              </h2>
              <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                <span className="bg-primary/10 block rounded size-6">
                  <LucideCheck className="p-1" />
                </span>
                <p className="text-sm">Access to selected free courses.</p>
              </div>
              <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                <span className="bg-primary/10 block rounded size-6">
                  <LucideCheck className="p-1" />
                </span>
                <p className="text-sm">Limited course materials and resources.</p>
              </div>
              <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                <span className="bg-primary/10 block rounded size-6">
                  <LucideCheck className="p-1" />
                </span>
                <p className="text-sm">Basic community support.</p>
              </div>
              <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                <span className="bg-primary/10 block rounded size-6">
                  <LucideCheck className="p-1" />
                </span>
                <p className="text-sm">No certification upon completion.</p>
              </div>
              <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                <span className="bg-primary/10 block rounded size-6">
                  <LucideCheck className="p-1" />
                </span>
                <p className="text-sm">Ad-supported platform.</p>
              </div>
              <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                <span className="block rounded size-6 border border-input/50">
                  <X className="p-1" />
                </span>
                <p className="text-sm">
                  Access to exclusive Pro Plan community forums.
                </p>
              </div>
              <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                <span className="block rounded size-6 border border-input/50">
                  <X className="p-1" />
                </span>
                <p className="text-sm">
                  Early access to new courses and updates.
                </p>
              </div>
              <div className="-m-5 lg:-m-16 full:-mx-[70px]">
                  <Button className="w-full rounded-t-none">Get Started</Button>
                </div>
            </div>
          </div>
          <div className="pt-[30px] px-5 bg-slate-50/50 rounded-xl border border-input/50 lg:pt-[40px] full:pt-[50px]">
            <h3 className="py-2 bg-primary/10 rounded border border-primary/30 text-center font-medium">
              Premium Plan
            </h3>
            <h2 className="font-semibold text-[50px] flex items-end justify-center leading-[1] my-[30px]">
              $1200 <span className="font-medium text-sm text-black/60">/month</span>
            </h2>
            <div className="px-5 pt-5 mb-5 bg-card border border-input/50 rounded-xl space-y-5 lg:px-16 lg:pt-[30px] full:px-[70px] full:pt-10">
              <h2 className="text-lg font-medium text-center">
                Available Features
              </h2>
              <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                <span className="bg-primary/10 block rounded size-6">
                  <LucideCheck className="p-1" />
                </span>
                <p className="text-sm">Unlimited access to all courses.</p>
              </div>
              <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                <span className="bg-primary/10 block rounded size-6">
                  <LucideCheck className="p-1" />
                </span>
                <p className="text-sm">Unlimited course materials and resources.</p>
              </div>
              <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                <span className="bg-primary/10 block rounded size-6">
                  <LucideCheck className="p-1" />
                </span>
                <p className="text-sm">Priority support from instructors.</p>
              </div>
              <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                <span className="bg-primary/10 block rounded size-6">
                  <LucideCheck className="p-1" />
                </span>
                <p className="text-sm">Course completion certificates.</p>
              </div>
              <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                <span className="bg-primary/10 block rounded size-6">
                  <LucideCheck className="p-1" />
                </span>
                <p className="text-sm">Ad-free experience.</p>
              </div>
              <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                <span className="bg-primary/10 block rounded size-6">
                  <LucideCheck className="p-1" />
                </span>
                <p className="text-sm">
                  Access to exclusive Pro Plan community forums.
                </p>
              </div>
              <div className="flex items-start sm:items-center gap-2 border border-input/50 p-3 rounded-md">
                <span className="bg-primary/10 block rounded size-6">
                  <LucideCheck className="p-1" />
                </span>
                <p className="text-sm">
                  Early access to new courses and updates.
                </p>
              </div>
              <div className="-m-5 lg:-m-16 full:-mx-[70px]">
                  <Button className="w-full rounded-t-none">Get Started</Button>
                </div>
            </div>
          </div>
        </>
        )}
      </div>
    </div>
  );
};
