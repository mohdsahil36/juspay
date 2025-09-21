import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { NotificationsProvider } from "@/providers/NotificationProvider";
import AppShell from "./ShellFile";

const InterFont = Inter({ subsets: ["latin"], variable: "--inter" });
const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Custom Next.js Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${InterFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <SidebarProvider>
          <NotificationsProvider>
            <AppShell>{children}</AppShell>
          </NotificationsProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
