import ChartPieSlice from "@/public/assets/ChartPieSlice.svg";
import ShoppingBagOpen from "@/public/assets/ShoppingBagOpen.svg";
import FolderNotch from "@/public/assets/FolderNotch.svg";
import BookOpen from "@/public/assets/BookOpen.svg";
import ChatsTeardrop from "@/public/assets/ChatsTeardrop.svg";
import Notebook from "@/public/assets/Notebook.svg";
import IdentificationCard from "@/public/assets/IdentificationCard.svg";
import UsersThree from "@/public/assets/UsersThree.svg";
import type { SidebarData } from "@/app/types/sidebar";

export const sidebarData: SidebarData = {
  dashboardLinks: [
    { label: "Default", href: "/dashboard", icon: ChartPieSlice },
    { label: "eCommerce", href: "/dashboard/ecommerce", icon: ShoppingBagOpen },
    { label: "Projects", href: "/dashboard/projects", icon: FolderNotch },
    {
      label: "Online Courses",
      href: "/dashboard/online-courses",
      icon: BookOpen,
    },
  ],
  pageLinks: [
    {
      label: "User Profile",
      submenu: [
        { label: "Overview", href: "/profile/overview" },
        { label: "Projects", href: "/profile/projects" },
        { label: "Campaigns", href: "/profile/campaigns" },
        { label: "Documents", href: "/profile/documents" },
        { label: "Followers", href: "/profile/followers" },
      ],
    },
    { label: "Account", icon: IdentificationCard, href: "/account" },
    { label: "Corporate", icon: UsersThree, href: "/corporate" },
    { label: "Blog", icon: Notebook, href: "/blog" },
    { label: "Social", icon: ChatsTeardrop, href: "/social" },
  ],
};
