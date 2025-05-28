import { frustrationItems } from "./FrustrationData";
import FrustrationCard from "./FrustrationCard";

function FrustrationCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
      {frustrationItems.map((item, i) => (
        <FrustrationCard {...item} key={i} />
      ))}
    </div>
  );
}

export default FrustrationCards;
