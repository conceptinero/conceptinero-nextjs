export const stats: Status[] = [
  { quantity: "$100M+", description: "In Tax Credits Filed" },
  { quantity: "94.25%", description: "Success Rate" },
  { quantity: "$2.9M", description: "Largest Approved Claim" },
  { quantity: "$152K", description: "Average Claim" },
];

// Types
export type Status = {
  quantity: string;
  description: string;
};
