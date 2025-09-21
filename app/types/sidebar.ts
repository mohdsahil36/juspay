import type { StaticImageData } from "next/image";

export interface SidebarLink {
  label: string;
  href: string;
  icon: StaticImageData; // ✅ SVG/Image import type
}

export interface SidebarSubmenuItem {
  label: string;
  href: string;
}

export interface SidebarPageItem {
  label: string;
  href?: string;
  icon?: StaticImageData; // ✅ optional icon
  submenu?: SidebarSubmenuItem[];
}

export interface SidebarData {
  dashboardLinks: SidebarLink[];
  pageLinks: SidebarPageItem[];
}
