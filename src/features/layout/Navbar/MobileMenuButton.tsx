"use client";
import { useIsMobileMenuOpen } from "@/jotai/hooks/useIsMobileMenuOpen";
import { useToggleMobileMenu } from "@/jotai/hooks/useToggleMobileMenu";
import { X, Menu } from "lucide-react";

function MobileMenuButton() {
  const isOpen = useIsMobileMenuOpen();
  const toggleMenu = useToggleMobileMenu();
  return (
    <button
      onClick={toggleMenu}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-gray-200"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
}

export default MobileMenuButton;
