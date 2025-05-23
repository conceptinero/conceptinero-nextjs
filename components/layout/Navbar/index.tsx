"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { BookConsultation } from "@/components/shared/BookConsultation";
import NavLinks from "./NavLinks";
import Logo from "../Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white dark:bg-gray-900 shadow-md py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLinks type="desktop" />
              <Button
                onClick={() => setConsultationOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Book Free Consultation
              </Button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-gray-200"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
            <div className="pt-2 pb-4 space-y-1 px-4">
              <NavLinks type="mobile" />
              <Button
                onClick={() => {
                  setConsultationOpen(true);
                  closeMenu();
                }}
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        )}
      </header>
      <div className="h-16 md:h-20"></div> {/* Spacer for fixed header */}
      <BookConsultation open={consultationOpen} setOpen={setConsultationOpen} />
    </>
  );
}
