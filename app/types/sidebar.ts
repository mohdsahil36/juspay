import type { StaticImageData } from "next/image";

type SidebarIcon = StaticImageData | string;

export interface SidebarLink {
  label: string;
  href: string;
  icon: SidebarIcon; // ✅ SVG/Image import type
}

export interface SidebarSubmenuItem {
  label: string;
  href: string;
}

export interface SidebarPageItem {
  label: string;
  href?: string;
  icon?: SidebarIcon; // ✅ optional icon
  submenu?: SidebarSubmenuItem[];
}

export interface SidebarData {
  dashboardLinks: SidebarLink[];
  pageLinks: SidebarPageItem[];
}
