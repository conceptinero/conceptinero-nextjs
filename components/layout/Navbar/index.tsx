import NavLinks from "./NavLinks";
import Logo from "../Logo";
import ConsultationButton from "@/components/shared/ConsultationButton";
import MobileMenuButton from "./MobileMenuButton";
import MobileNavigation from "./MobileNavigation";
import MobileNavigationController from "./MobileNavigationController";
import { ModeSwitcher } from "./ModeSwitcher";

export function Navbar() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white dark:bg-gray-900 shadow-md py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLinks type="desktop" />
              <ConsultationButton />
              <ModeSwitcher />
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <MobileMenuButton />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNavigationController>
          <MobileNavigation />
        </MobileNavigationController>
      </header>
      <div className="h-16" /> {/* Spacer for fixed header */}
    </>
  );
}
