"use client";
import { useIsMobileMenuOpen } from "@/hooks/useIsMobileMenuOpen";
import React from "react";

type Props = { children: React.ReactNode };

function MobileNavigationController({ children }: Props) {
  const isOpen = useIsMobileMenuOpen();

  return <>{isOpen && children}</>;
}
export default MobileNavigationController;
