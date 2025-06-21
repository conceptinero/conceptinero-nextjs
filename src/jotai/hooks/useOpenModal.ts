import { modalAtom } from "../atoms/modalAtom";
import { useSetAtom } from "jotai";

export function useOpenModal() {
  const setState = useSetAtom(modalAtom);
  return () => setState(true);
}
