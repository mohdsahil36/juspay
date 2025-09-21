"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import type { SidebarLink } from "@/app/types/sidebar";

interface DashboardSectionProps {
  links: SidebarLink[];
}

export function DashboardSection({ links }: DashboardSectionProps) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-y-1">
      <div className="flex flex-col gap-y-1">
        <h3 className="px-1 py-2 text-[rgba(28,28,28,0.4)] font-normal text-sm">
          Dashboards
        </h3>
        <Button
          variant={pathname === "/" ? "secondary" : "ghost"}
          className={cn(
            "justify-start w-full py-2 text-sm font-normal cursor-pointer flex items-center gap-2 rounded-[8px] h-[28px]",
            pathname === "/" && "border-l-2 border-black bg-zinc-100"
          )}
        >
          <Image
            className="w-5 h-5"
            src={links[0]?.icon ?? "/placeholder.png"}
            alt="icon"
          />
          {links[0]?.label}
        </Button>
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            {links.slice(1).map(({ label, href, icon }, i) => (
              <AccordionItem
                key={href}
                value={`dash-item-${i + 1}`}
                className="border-0 text-sm w-full h-auto"
              >
                <AccordionTrigger className="flex items-center gap-2 h-[28px] text-sm font-normal text-black group hover:bg-zinc-50 after:hidden cursor-pointer w-full">
                  <ChevronRight className="w-4 h-4 shrink-0 transition-transform duration-200 mr-1 group-data-[state=open]:rotate-90" />
                  <Image className="w-5 h-5 mr-2" src={icon} alt="icon" />
                  {label}
                </AccordionTrigger>
                <AccordionContent className="pb-2 pt-1 overflow-hidden">
                  <div className="px-2 py-1">
                    <p className="text-sm text-black font-semibold">
                      Content for {label} dashboard goes here.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </nav>
  );
}
