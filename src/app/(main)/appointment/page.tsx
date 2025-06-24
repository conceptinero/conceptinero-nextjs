"use client";

import useCalendly from "@/features/calendly/useCalendly";

export default function CalendlyPage() {
  useCalendly();

  return (
    <div className="h-dvh w-full flex justify-center items-center">
      <div
        className="flex justify-center items-center h-dvh w-full calendly-inline-widget"
        data-url="https://calendly.com/sredwithkevin"
      ></div>
    </div>
  );
}
