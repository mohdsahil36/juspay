export interface SidebarLink {
  label: string;
  href: string;
  icon: string; // SVG import type
}

export interface SidebarSubmenuItem {
  label: string;
  href: string;
}

export interface SidebarPageItem {
  label: string;
  href?: string;
  icon?: string; // SVG import type
  submenu?: SidebarSubmenuItem[];
}

export interface SidebarData {
  dashboardLinks: SidebarLink[];
  pageLinks: SidebarPageItem[];
}
