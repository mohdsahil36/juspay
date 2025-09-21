"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import type { NavbarProps } from "@/app/types/navbar";
import Image from "next/image";
import Star from "@/public/assets/Star.svg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import Text from "@/public/assets/Text.svg";
import React from "react";
import ShortCut from "@/public/assets/Shortcut.svg";
import Sun from "@/public/assets/Sun.svg";
import ClockCounterClockwise from "@/public/assets/ClockCounterClockwise.svg";
import Sidebar from "@/public/assets/Sidebar.svg";
import Bell from "@/public/assets/Bell.svg";
import Search from "@/public/assets/Search.svg";
import { useNotifications } from "@/providers/NotificationProvider";

export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const { toggleNotifications } = useNotifications();

  const pathSegments = pathname.split("/").filter(Boolean);
  const breadcrumbItems = [
    {
      name: "Dashboards",
      href: "/",
      isCurrent: pathSegments.length === 0,
    },
    ...pathSegments.map((segment, idx) => {
      const href = "/" + pathSegments.slice(0, idx + 1).join("/");
      const isCurrent = idx === pathSegments.length - 1;
      const name = segment.charAt(0).toUpperCase() + segment.slice(1);
      return { name, href, isCurrent };
    }),
  ];

  return (
    <header
      className={cn(
        "h-16 border-b border-gray-200 bg-white md:px-[1.5rem] flex items-center justify-between",
        className
      )}
    >
      <div className="flex items-center gap-2 md:gap-4">
        <SidebarTrigger className="h-[1.25rem] w-[1.25rem]" />
        <Image src={Star} alt="Star" width={20} height={20} />
        <Breadcrumb className="text-xs md:text-sm">
          <BreadcrumbList>
            {breadcrumbItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <BreadcrumbItem>
                  {item.isCurrent ? (
                    <BreadcrumbPage className="text-xs md:text-sm">
                      {item.name}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      href={item.href}
                      className="text-xs md:text-sm text-[rgba(28,28,28,0.4)]"
                    >
                      {item.name}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {idx < breadcrumbItems.length - 1 && (
                  <BreadcrumbSeparator>
                    <Image src={Text} alt="Separator" />
                  </BreadcrumbSeparator>
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex gap-[0.5rem] md:gap-[1.25rem] ">
        <div className="flex items-center gap-2 md:gap-4 rounded-md px-[0.5rem] py-[0.25rem] bg-[rgba(28,28,28,0.05)] ">
          <div className="flex items-center w-max">
            <div className="flex">
              <Image src={Search} alt="icon" />
              <input
                type="text"
                placeholder="Search"
                aria-label="Search"
                className="pl-[0.5rem] rounded bg-transparent border-none outline-none text-sm text-[rgba(28,28,28,0.4)]"
              />
            </div>
            <Image src={ShortCut} alt="icon" />
          </div>
        </div>
        <div className="flex gap-1 md:gap-[1rem]">
          <button>
            <Image
              src={Sun}
              alt="mode-icon"
              height={20}
              width={20}
              className="cursor-pointer"
            />
          </button>
          <button>
            <Image
              src={ClockCounterClockwise}
              alt="history-icon"
              height={20}
              width={20}
              className="cursor-pointer"
            />
          </button>
          <button
            onClick={toggleNotifications}
            aria-label="Toggle notifications"
          >
            <Image
              src={Bell}
              alt="notifications-icon"
              height={20}
              width={20}
              className="cursor-pointer"
            />
          </button>
          <button>
            <Image
              src={Sidebar}
              alt="sidebar-icon"
              height={20}
              width={20}
              className="cursor-pointer"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
