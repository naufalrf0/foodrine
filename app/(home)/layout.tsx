"use client"
import HomeFooter from "@/components/partials/home-footer";
import HomeHeader from "@/components/partials/home-header";
import { SessionProvider } from "next-auth/react";

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
    <SessionProvider>
      <HomeHeader />
      <main>{children}</main>
      <HomeFooter />
    </SessionProvider>
    </>
  );
}
