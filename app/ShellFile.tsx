"use client";
import Sidebar from "./components/Sidebar";
import NotificationsBar from "./components/navbar/NotificationsBar";
import { Navbar } from "./components/navbar/Navbar";
import { useNotifications } from "@/providers/NotificationProvider";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return <AppShellContent>{children}</AppShellContent>;
}

function AppShellContent({ children }: { children: React.ReactNode }) {
  const { notificationsOpen } = useNotifications();

  return (
    <div className="flex h-screen w-full">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0 transition-all duration-300">
        <Navbar />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>

      {/* Desktop drawer (only for lg and up) */}
      <div
        className={`hidden lg:block transition-all duration-300 ${
          notificationsOpen ? "w-[280px]" : "w-0"
        } overflow-hidden`}
      >
        <NotificationsBar />
      </div>

      {/* Mobile/Tablet overlay (below lg) */}
      {notificationsOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => {
              // clicking backdrop closes
              const event = new MouseEvent("click", { bubbles: true });
              document
                .querySelector('[aria-label="Close notifications"]')
                ?.dispatchEvent(event);
            }}
          />
          {/* Drawer */}
          <div className="w-[80%] max-w-[280px] bg-white shadow-lg h-full transition-all duration-300">
            <NotificationsBar />
          </div>
        </div>
      )}
    </div>
  );
}
