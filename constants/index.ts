import { Home, Inbox, Calendar, Search, Settings } from "lucide-react";

export const adminLinks = [
  { title: "Dashboard", url: "/admin/dashboard", icon: Home },
  { title: "Inbox", url: "/admin/inbox", icon: Inbox },
  { title: "Calendar", url: "/admin/calendar", icon: Calendar },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

export const orgLinks = [
  { title: "Organization Dashboard", url: "/org/dashboard", icon: Home },
  { title: "Search", url: "/org/search", icon: Search },
  { title: "Settings", url: "/org/settings", icon: Settings },
];

export const partnerLinks = [
  { title: "Partner Dashboard", url: "/partner/dashboard", icon: Home },
  { title: "Inbox", url: "/partner/inbox", icon: Inbox },
  { title: "Calendar", url: "/partner/calendar", icon: Calendar },
];

export const usrLinks = [
  { title: "User Dashboard", url: "/user/dashboard", icon: Home },
  { title: "Profile", url: "/user/profile", icon: Settings },
];
