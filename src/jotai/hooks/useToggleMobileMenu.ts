import { mobileMenuAtom } from "../atoms/mobileMenuAtom";
import { useSetAtom } from "jotai";

export function useToggleMobileMenu() {
  const setState = useSetAtom(mobileMenuAtom);
  return () => setState((s) => !s);
}
