import { mobileMenuAtom } from "../atoms/mobileMenuAtom";
import { useSetAtom } from "jotai";

export function useCloseMobileMenu() {
  const setState = useSetAtom(mobileMenuAtom);
  return () => setState(false);
}
