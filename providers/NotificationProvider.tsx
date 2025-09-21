"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface NotificationsContextType {
  notificationsOpen: boolean;
  openNotifications: () => void;
  closeNotifications: () => void;
  toggleNotifications: () => void;
}

const NotificationsContext = createContext<
  NotificationsContextType | undefined
>(undefined);

export function NotificationsProvider({ children }: { children: ReactNode }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const openNotifications = () => setNotificationsOpen(true);
  const closeNotifications = () => setNotificationsOpen(false);
  const toggleNotifications = () => setNotificationsOpen((prev) => !prev);

  return (
    <NotificationsContext.Provider
      value={{
        notificationsOpen,
        openNotifications,
        closeNotifications,
        toggleNotifications,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationsContext);
  if (context === undefined) {
    throw new Error(
      "useNotifications must be used within a NotificationsProvider"
    );
  }
  return context;
}
