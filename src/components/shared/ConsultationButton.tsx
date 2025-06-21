"use client";

import { useCloseMobileMenu } from "@/jotai/hooks/useCloseMobileMenu";
import { Button } from "../ui/button";
import { useOpenModal } from "@/jotai/hooks/useOpenModal";
import { cn } from "@/lib/utils";

function ConsultationButton({
  size = "default",
  className = "",
}: {
  size?: "default" | "sm" | "lg" | "icon";
  className?: string | undefined;
}) {
  const openModal = useOpenModal();
  const closeMobileMenu = useCloseMobileMenu();

  return (
    <Button
      size={size}
      onClick={() => {
        closeMobileMenu();
        openModal();
      }}
      className={cn("bg-blue-600 hover:bg-blue-700 text-white", className)}
    >
      Book Free Consultation
    </Button>
  );
}

export default ConsultationButton;
