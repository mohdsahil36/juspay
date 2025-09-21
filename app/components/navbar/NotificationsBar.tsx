"use client";
import { useNotifications } from "@/providers/NotificationProvider";

export default function NotificationsBar() {
  const { toggleNotifications } = useNotifications();

  return (
    <aside className="relative h-full w-full bg-white shadow-lg border-l border-gray-200">
      <button
        onClick={toggleNotifications}
        className="absolute top-4 right-4 z-10 text-xl text-gray-500 hover:text-gray-800 cursor-pointer"
        aria-label="Close notifications"
      >
        &times;
      </button>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Notifications</h2>
        <p className="text-sm text-gray-500">No notifications yet.</p>
      </div>
    </aside>
  );
}
