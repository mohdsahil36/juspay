"use client";
import Image from "next/image";
import UserIcon from "@/public/assets/ByeWind.svg";
import { Sidebar as SidebarPrimitive } from "@/components/ui/sidebar";
import { sidebarData } from "@/app/data/sidebar-data";
import { DashboardSection } from "./sidebar/DashboardSection";
import { PagesSection } from "./sidebar/PagesSection";
import { FavoritesSection } from "./sidebar/FavoritesSection";

const favoritesItems = [{ label: "Overview" }, { label: "Projects" }];

export default function Sidebar() {
  return (
    <SidebarPrimitive className="max-w-[212px] bg-transparent">
      <div className="py-5 px-4 flex flex-col gap-y-4 h-full">
        <div className="flex items-center h-[32px] w-[180px] md:mx-auto">
          <Image src={UserIcon} alt="user-icon" height={24} width={24} />
          <h2 className="ps-[8px] font-normal text-sm text-black">ByeWind</h2>
        </div>

        <FavoritesSection items={favoritesItems} />

        <DashboardSection links={sidebarData.dashboardLinks} />

        <PagesSection links={sidebarData.pageLinks} />
      </div>
    </SidebarPrimitive>
  );
}
