import { modalAtom } from "@/lib/modalAtom";
import { useSetAtom } from "jotai";

export function useSetIsModalOpen() {
  const setState = useSetAtom(modalAtom);
  return setState;
}
