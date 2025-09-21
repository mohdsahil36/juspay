"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import IdentificationBadge from "@/public/assets/IdentificationBadge.svg";
import type { SidebarPageItem } from "@/app/types/sidebar";

interface PagesSectionProps {
  links: SidebarPageItem[];
}

export function PagesSection({ links }: PagesSectionProps) {
  return (
    <nav className="flex flex-col gap-y-1">
      <div className="flex flex-col gap-y-1">
        <h3 className="px-1 py-2 text-[rgba(28,28,28,0.4)] font-normal text-sm">
          Pages
        </h3>
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            {/* User Profile Accordion with submenu */}
            <AccordionItem
              value="profile"
              className="border-0 text-sm w-full h-auto"
            >
              <AccordionTrigger className="flex items-center gap-2 h-[28px] text-sm font-normal text-black group hover:bg-zinc-50 after:hidden cursor-pointer w-full">
                <ChevronRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                <Image
                  className="w-5 h-5 mr-2"
                  alt="icon"
                  src={IdentificationBadge}
                />
                {links[0]?.label}
              </AccordionTrigger>
              <AccordionContent className="pb-2 pt-1 overflow-hidden">
                <ul className="flex flex-col gap-y-1 ml-7 px-2 py-1">
                  {links[0]?.submenu?.map((item) => (
                    <li key={item.href} className="ml-8">
                      <a
                        href={item.href}
                        className="block text-[14px] py-1 text-black hover:text-gray-600"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Other pages accordions */}
            {links.slice(1).map(({ label, href, icon }, i) => (
              <AccordionItem
                key={href || label}
                value={`page-item-${i + 1}`}
                className="border-0 text-sm w-full h-auto"
              >
                <AccordionTrigger className="flex items-center gap-2 h-[28px] text-sm font-normal text-black group hover:bg-zinc-50 after:hidden cursor-pointer w-full">
                  <ChevronRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                  {icon && (
                    <Image className="w-5 h-5 mr-2" alt="icon" src={icon} />
                  )}
                  {label}
                </AccordionTrigger>
                <AccordionContent className="pb-2 pt-1 overflow-hidden">
                  <div className="px-2 py-1">
                    <p className="text-sm text-black font-semibold">
                      Content for {label} page goes here.
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
