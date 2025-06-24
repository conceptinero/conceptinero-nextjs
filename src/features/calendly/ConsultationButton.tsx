import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const styles = {
  blue: "bg-blue-600 hover:bg-blue-700 text-white",
  white:
    "bg-white text-blue-600 border-2 border-white hover:bg-blue-600 hover:text-white",
};

function ConsultationButton({
  size = "default",
  className = "",
  style = "blue",
}: {
  size?: "default" | "sm" | "lg" | "icon";
  className?: string | undefined;
  style?: "blue" | "white";
}) {
  return (
    <Link
      href="/appointment"
      className={cn(buttonVariants({ size }), styles[style], className)}
    >
      Book A Free Appointment
    </Link>
  );
}

export default ConsultationButton;
