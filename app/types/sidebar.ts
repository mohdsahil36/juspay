export interface SidebarLink {
  label: string;
  href: string;
  icon: any; // SVG import type
}

export interface SidebarSubmenuItem {
  label: string;
  href: string;
}

export interface SidebarPageItem {
  label: string;
  href?: string;
  icon?: any; // SVG import type
  submenu?: SidebarSubmenuItem[];
}

export interface SidebarData {
  dashboardLinks: SidebarLink[];
  pageLinks: SidebarPageItem[];
}
