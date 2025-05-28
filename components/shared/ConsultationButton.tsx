"use client";
import { Button } from "../ui/button";
import { useOpenModal } from "@/hooks/useOpenModal";

function ConsultationButton() {
  const openModal = useOpenModal();
  return (
    <Button
      onClick={openModal}
      className="bg-blue-600 hover:bg-blue-700 text-white"
    >
      Book Free Consultation
    </Button>
  );
}

export default ConsultationButton;
