import { modalAtom } from "@/lib/modalAtom";
import { useSetAtom } from "jotai";

export function useCloseModal() {
  const setState = useSetAtom(modalAtom);
  return () => setState(false);
}
