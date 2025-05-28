import { mobileMenuAtom } from "@/lib/mobileMenuAtom";
import { useAtomValue } from "jotai";

export function useIsMobileMenuOpen() {
  const state = useAtomValue(mobileMenuAtom);
  return state;
}
