import { mobileMenuAtom } from "@/lib/mobileMenuAtom";
import { useSetAtom } from "jotai";

export function useToggleMobileMenu() {
  const setState = useSetAtom(mobileMenuAtom);
  return () => setState((s) => !s);
}
