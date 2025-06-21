import { mobileMenuAtom } from "../atoms/mobileMenuAtom";
import { useAtomValue } from "jotai";

export function useIsMobileMenuOpen() {
  const state = useAtomValue(mobileMenuAtom);
  return state;
}
