import { IndustriesAsService } from "@/features/Industries";
import {
  Hero,
  ValueProposition,
  DetailedServices,
  CallToAction,
} from "@/features/services";

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <DetailedServices />
      <IndustriesAsService />
      <CallToAction />
    </>
  );
}

// export default function ServicesPage() {
//   return <p>SERVICES</p>;
// }
