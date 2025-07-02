"use client";
import { useIsMobileMenuOpen } from "@/jotai/hooks/useIsMobileMenuOpen";

type Props = { children: React.ReactNode };

function MobileNavigationController({ children }: Props) {
  const isOpen = useIsMobileMenuOpen();

  return <>{isOpen && children}</>;
}
export default MobileNavigationController;
