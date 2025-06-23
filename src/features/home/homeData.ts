import { industries } from "@/features/data";

// Shared data used across multiple home sections
export const stats: Status[] = [
  { quantity: "$100M+", description: "In Tax Credits Filed" },
  { quantity: "94.25%", description: "Success Rate" },
  { quantity: "$2.9M", description: "Largest Approved Claim" },
  { quantity: "$152K", description: "Average Claim" },
];

const colours = ["blue", "green", "amber", "purple", "rose"];

export const industriesWithColors = industries.map((industry, index) => ({
  industry,
  color: colours[index],
}));

// Types
export type Status = {
  quantity: string;
  description: string;
};

export type IndustryWithColor = {
  industry: string;
  color: string;
};
