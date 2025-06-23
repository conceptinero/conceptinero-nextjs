"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Check } from "lucide-react";

interface ShareButtonProps {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

export default function ShareButton({
  variant = "outline",
  size = "lg",
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  // Copy link to clipboard
  const handleCopyLink = async () => {
    try {
      // Get the current URL fresh each time the button is clicked
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log("Failed to copy link:", error);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className="gap-2"
      onClick={handleCopyLink}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-green-600" />
          Link Copied!
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4" />
          Share Article
        </>
      )}
    </Button>
  );
}
