"use client";
import { Button } from "../ui/button";
import { useOpenModal } from "@/hooks/useOpenModal";

{
  /* <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
  Book Free Consultation
</Button>; */
}

function ConsultationButton({
  size = "default",
}: {
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const openModal = useOpenModal();
  return (
    <Button
      size={size}
      onClick={openModal}
      className="bg-blue-600 hover:bg-blue-700 text-white"
    >
      Book Free Consultation
    </Button>
  );
}

export default ConsultationButton;
