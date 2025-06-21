import { modalAtom } from "../atoms/modalAtom";
import { useAtomValue } from "jotai";

export function useIsModalOpen() {
  const state = useAtomValue(modalAtom);
  return state;
}
