"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  adminLinks,
  orgLinks,
  partnerLinks,
  usrLinks,
} from "@/constants";

const getMenuItemsByRole = (role: string) => {
  switch (role) {
    case "ADMIN":
      return adminLinks;
    case "ORGANIZATION":
      return orgLinks;
    case "PARTNER":
      return partnerLinks;
    case "USER":
      return usrLinks;
    default:
      return [];
  }
};

export function AppSidebar() {
  const { data: session, status } = useSession();

  // Pastikan tidak ada rendering hingga sesi terautentikasi atau logout selesai
  if (status === "loading") {
    return <p>Loading...</p>; // Placeholder saat sesi sedang dimuat
  }

  const role = session?.user?.role || "guest"; 
  const menuItems = getMenuItemsByRole(role);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Link href="/" className="flex items-center">
              <Image
                src="/logo_horizontal.png"
                alt="FoodrinE Logo"
                width={512}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="mr-2" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
