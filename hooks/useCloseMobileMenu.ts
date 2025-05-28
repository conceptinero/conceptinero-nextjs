import { mobileMenuAtom } from "@/lib/mobileMenuAtom";
import { useSetAtom } from "jotai";

export function useCloseMobileMenu() {
  const setState = useSetAtom(mobileMenuAtom);
  return () => console.log("Closing mobile menu");
}
