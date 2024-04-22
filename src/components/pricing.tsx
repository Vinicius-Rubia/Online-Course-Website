import { LucideCheck, X } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export const Pricing: React.FC = () => {
  return (
    <div className="relative container-fluid mt-[50px] mb-10 2xl:mt-[100px] 2xl:mb-[60px] full:mt-[150px] full:mb-20">
      <div className="flex flex-wrap gap-5 justify-between items-end">
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
        <Tabs defaultValue="monthly" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="monthly" asChild>
              <Button variant="ghost">Monthly</Button>
            </TabsTrigger>
            <TabsTrigger value="yearly" asChild>
              <Button variant="ghost">Yearly</Button>
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="absolute left-0 mt-10 container-fluid"
          >
            <div className="bg-card rounded-xl p-5">
              <div className="py-[30px] px-5 bg-slate-50/50 rounded-xl border border-input/50">
                <h3 className="py-2 bg-primary/10 rounded border border-primary/30 text-center font-medium">
                  Free Plan
                </h3>
                <h2 className="font-semibold text-[50px] flex items-end justify-center leading-[1] my-[30px]">
                  $0{" "}
                  <span className="font-medium text-sm text-black/60">
                    /month
                  </span>
                </h2>
                <div className="p-5 bg-card border border-input/50 rounded-xl space-y-5">
                  <h2 className="text-lg font-medium text-center">Available Features</h2>
                  <div className="flex items-start gap-2 border border-input/50 p-3 rounded-md">
                    <span className="bg-primary/10 block rounded size-6">
                      <LucideCheck className="p-1" />
                    </span>
                    <p className="text-sm">Access to selected free courses.</p>
                  </div>
                  <div className="flex items-start gap-2 border border-input/50 p-3 rounded-md">
                    <span className="bg-primary/10 block rounded size-6">
                      <LucideCheck className="p-1" />
                    </span>
                    <p className="text-sm">Limited course materials and resources.</p>
                  </div>
                  <div className="flex items-start gap-2 border border-input/50 p-3 rounded-md">
                    <span className="bg-primary/10 block rounded size-6">
                      <LucideCheck className="p-1" />
                    </span>
                    <p className="text-sm">Basic community support.</p>
                  </div>
                  <div className="flex items-start gap-2 border border-input/50 p-3 rounded-md">
                    <span className="bg-primary/10 block rounded size-6">
                      <LucideCheck className="p-1" />
                    </span>
                    <p className="text-sm">No certification upon completion.</p>
                  </div>
                  <div className="flex items-start gap-2 border border-input/50 p-3 rounded-md">
                    <span className="bg-primary/10 block rounded size-6">
                      <LucideCheck className="p-1" />
                    </span>
                    <p className="text-sm">Ad-supported platform.</p>
                  </div>
                  <div className="flex items-start gap-2 border border-input/50 p-3 rounded-md">
                    <span className="block rounded size-6 border border-input/50">
                      <X className="p-1" />
                    </span>
                    <p className="text-sm">Access to exclusive Pro Plan community forums.</p>
                  </div>
                  <div className="flex items-start gap-2 border border-input/50 p-3 rounded-md">
                    <span className="block rounded size-6 border border-input/50">
                      <X className="p-1" />
                    </span>
                    <p className="text-sm">Early access to new courses and updates.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="bg-purple-500 absolute left-0 mt-10 container-fluid"
          >
            Yearly
          </TabsContent>
        </Tabs>
      </div>
      <div className="mt-24">Teste</div>
    </div>
  );
};
