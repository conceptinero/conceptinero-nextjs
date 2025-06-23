import { stats, Status } from "../homeData";

function AboutCards() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {stats.map((d, i) => (
        <AboutCard {...d} key={i} />
      ))}
    </div>
  );
}

function AboutCard({ quantity, description }: Status) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
      <div className="text-2xl font-bold text-blue-600">{quantity}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {description}
      </div>
    </div>
  );
}

export default AboutCards;
