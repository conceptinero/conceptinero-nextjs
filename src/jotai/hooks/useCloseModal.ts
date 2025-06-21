import { modalAtom } from "../atoms/modalAtom";
import { useSetAtom } from "jotai";

export function useCloseModal() {
  const setState = useSetAtom(modalAtom);
  return () => setState(false);
}
