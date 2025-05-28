import { stats, Status } from "@/components/data";

function StatusBar() {
  return (
    <div className="bg-blue-900 dark:bg-blue-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.slice(0, 3).map((d, i) => (
            <StatusItem key={i} {...d} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatusItem({ quantity, description }: Status) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-white">{quantity}</p>
      <p className="text-sm text-blue-200">{description}</p>
    </div>
  );
}

export default StatusBar;
