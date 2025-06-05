import FrustrationCard from "./FrustrationCard";
import { frustrationItems } from "@/components/data";

function FrustrationCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
      {frustrationItems.map((item, i) => (
        <FrustrationCard {...item} key={i} index={i} />
      ))}
    </div>
  );
}

export default FrustrationCards;
