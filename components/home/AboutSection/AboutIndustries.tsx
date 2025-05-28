import { industriesWithColors } from "@/components/data";
import { Badge } from "@/components/ui/badge";

export const colorClassMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-300 dark:hover:text-blue-900",
  green:
    "bg-green-100 text-green-800 hover:bg-green-800 hover:text-green-100 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-300 dark:hover:text-green-900",
  amber:
    "bg-amber-100 text-amber-800 hover:bg-amber-800 hover:text-amber-100 dark:bg-amber-900 dark:text-amber-300 dark:hover:bg-amber-300 dark:hover:text-amber-900",
  purple:
    "bg-purple-100 text-purple-800 hover:bg-purple-800 hover:text-purple-100 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-300 dark:hover:text-purple-900",
  rose: "bg-rose-100 text-rose-800 hover:bg-rose-800 hover:text-rose-100 dark:bg-rose-900 dark:text-rose-300 dark:hover:bg-rose-300 dark:hover:text-rose-900",
};

function IndustryBadge({
  children,
  color,
}: {
  color: string;
  children: string;
}) {
  return <Badge className={colorClassMap[color]}>{children}</Badge>;
}

function AboutIndustries() {
  return (
    <div className="flex flex-wrap gap-3">
      {industriesWithColors.map((item, i) => (
        <IndustryBadge color={item.color} key={i}>
          {item.industry}
        </IndustryBadge>
      ))}
    </div>
  );
}

export default AboutIndustries;
