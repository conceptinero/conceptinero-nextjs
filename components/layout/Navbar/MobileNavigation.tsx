"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import { useToggleMobileMenu } from "@/hooks/useToggleMobileMenu";
import { useOpenModal } from "@/hooks/useOpenModal";

function MobileNavigation() {
  const toggleMenu = useToggleMobileMenu();
  const openModal = useOpenModal();
  return (
    <nav className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
      <div className="pt-2 pb-4 space-y-1 px-4">
        <NavLinks type="mobile" />
        <Button
          onClick={() => {
            openModal();
            toggleMenu();
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          Book Free Consultation
        </Button>
      </div>
    </nav>
  );
}

export default MobileNavigation;
