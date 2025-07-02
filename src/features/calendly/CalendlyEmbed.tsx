"use client";

import useCalendly from "./useCalendly";

function CalendlyEmbed() {
  useCalendly();
  return (
    <div
      className="flex justify-center items-center h-dvh w-full calendly-inline-widget"
      data-url="https://calendly.com/sredwithkevin"
    />
  );
}

export default CalendlyEmbed;
