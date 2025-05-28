"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <Button
      variant="outline"
      size="icon"
      className="group/toggle size-8 p-2 bg-neutral outline-1 outline outline-blue-600"
      onClick={toggleTheme}
    >
      <SunIcon className="hidden [html.dark_&]:block text-blue-600" />
      <MoonIcon className="hidden [html.light_&]:block text-blue-600 " />
    </Button>
  );
}
