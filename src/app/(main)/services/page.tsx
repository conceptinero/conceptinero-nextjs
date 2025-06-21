"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Check,
  FileCheck,
  BarChartHorizontal,
  FileClock,
  PieChart,
  Users,
} from "lucide-react";

import AnimatedSection from "@/components/shared/AnimatedSection";
import ConsultationButton from "@/components/shared/ConsultationButton";

const industryIcons = {
  software: PieChart,
  healthcare: FileCheck,
  manufacturing: BarChartHorizontal,
  engineering: Users,
  food: FileClock,
};

const industries = [
  {
    id: "software",
    name: "Software & IT",
    description: `Technology companies often have eligible SR&ED activities but don't realize it. We specialize in identifying qualifying software development work and maximizing claims.`,
    activities: [
      "New algorithm development",
      "Novel software architectures",
      "Integration of disparate systems",
      "Performance optimization research",
      "Overcoming technical challenges in development",
    ],
    image: "/services/1.webp",
  },
  {
    id: "healthcare",
    name: "Healthcare & Medical Sciences",
    description:
      "From pharmaceuticals to medical devices, healthcare companies engage in significant R&D. Our healthcare specialists can help identify and document eligible activities.",
    activities: [
      "Novel drug formulation development",
      "Medical device design and testing",
      "Clinical study protocol development",
      "Biotech research activities",
      "Diagnostic methodologies",
    ],
    image: "/services/2.webp",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description:
      "Manufacturing companies often develop new processes, materials, or tools that qualify for SR&ED. Our technical team can help identify these activities and maximize your claim.",
    activities: [
      "Process improvement research",
      "New material development",
      "Custom tooling and fixture design",
      "Quality control method development",
      "Manufacturing automation research",
    ],
    image: "/services/3.webp",
  },
  {
    id: "engineering",
    name: "Engineering",
    description:
      "Engineering firms regularly engage in SR&ED-eligible work through problem-solving and innovation. Our engineering experts can identify qualifying projects and maximize your claim.",
    activities: [
      "Prototyping and testing novel designs",
      "Simulation and modeling of new systems",
      "Development of more efficient processes",
      "Systems integration challenges",
      "Environmental engineering solutions",
    ],
    image: "/services/4.webp",
  },
  {
    id: "food",
    name: "Food & Life Sciences",
    description:
      "Food science and agri-food companies engage in significant R&D when developing new products, processes, or improving shelf-life. Our specialists understand this industry.",
    activities: [
      "Food preservation technique development",
      "Nutritional enhancement research",
      "Novel ingredient applications",
      "Processing method improvements",
      "Shelf-life extension research",
    ],
    image: "/services/5.webp",
  },
];

const services = [
  {
    id: "eligibility",
    name: "Eligibility Assessment",
    description:
      "We review your R&D activities to determine if they qualify for SR&ED tax credits and provide an estimate of your potential claim amount.",
    icon: FileCheck,
    details: [
      "Comprehensive review of your R&D activities",
      "Identification of eligible projects and expenditures",
      "Preliminary claim amount calculation",
      "Assessment of documentation requirements",
      "Strategic recommendations",
    ],
  },
  {
    id: "claim",
    name: "Claim Preparation",
    description:
      "Our team of technical writers and financial experts prepare a comprehensive, audit-ready SR&ED claim on your behalf.",
    icon: PieChart,
    details: [
      "Technical narrative writing by industry experts",
      "Eligible expenditure calculation",
      "Supporting documentation preparation",
      "Financial schedule development",
      "Claim submission via CRA portal",
    ],
  },
  {
    id: "audit",
    name: "Audit Defense",
    description:
      "If your claim is selected for review or audit, our team of experts will defend your claim at no additional cost.",
    icon: Users,
    details: [
      "Preparation for CRA meetings and interviews",
      "Response to CRA information requests",
      "Development of technical defense documents",
      "Representation during audit proceedings",
      "Appeals process management if necessary",
    ],
  },
  {
    id: "training",
    name: "SR&ED Training & Documentation",
    description:
      "We train your team on how to identify and document SR&ED activities throughout the year, making future claims easier and more robust.",
    icon: BarChartHorizontal,
    details: [
      "Custom SR&ED training workshops",
      "Documentation system implementation",
      "Project tracking tools and templates",
      "Ongoing eligibility assessments",
      "R&D planning for maximum SR&ED benefits",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our SR&ED Consulting Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From eligibility assessment to claim preparation and audit
              defense, our full-service approach ensures maximum SR&ED tax
              credits.
            </p>
          </AnimatedSection>

          <AnimatedSection
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
                >
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-auto"
                    onClick={() =>
                      document
                        .getElementById(service.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Learn More
                  </Button>
                </div>
              );
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 lg:py-20 bg-blue-900 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our SR&ED Services?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 inline-flex mb-4">
                  <span className="text-white text-3xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Industry-Specific Expertise
                </h3>
                <p className="text-blue-100">
                  Our consultants have technical backgrounds in the industries
                  they serve, allowing for deeper insights and more robust
                  claims.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 inline-flex mb-4">
                  <span className="text-white text-3xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Success-Based Fees
                </h3>
                <p className="text-blue-100">
                  You only pay when your claim is successful. No upfront costs,
                  no hidden fees – our interests are aligned with yours.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 inline-flex mb-4">
                  <span className="text-white text-3xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  94.25% Success Rate
                </h3>
                <p className="text-blue-100">
                  Our claims are approved at a rate far above the industry
                  average, resulting in more tax credits for our clients.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center mt-12">
            <ConsultationButton />
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our SR&ED Services in Detail
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive SR&ED support for Canadian businesses of all sizes.
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <AnimatedSection
                  key={service.id}
                  id={service.id}
                  className="flex flex-col md:flex-row items-center gap-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="md:w-2/5 bg-gray-50 dark:bg-gray-900 rounded-xl p-8 flex justify-center items-center">
                    <Icon className="h-40 w-40 text-blue-600" />
                  </div>
                  <div className="md:w-3/5">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.name}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our team has deep expertise across multiple industries, ensuring
              your SR&ED claim is handled by someone who understands your
              technical work.
            </p>
          </AnimatedSection>

          <Tabs defaultValue="software" className="mt-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              {industries.map((industry) => (
                <TabsTrigger key={industry.id} value={industry.id}>
                  {industry.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {industries.map((industry) => {
              const Icon =
                industryIcons[industry.id as keyof typeof industryIcons];
              return (
                <TabsContent key={industry.id} value={industry.id}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-8 lg:p-10">
                        <div className="flex items-center mb-6">
                          <Icon className="h-8 w-8 text-blue-600 mr-3" />
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {industry.name}
                          </h3>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                          {industry.description}
                        </p>

                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Common SR&ED Activities:
                        </h4>
                        <ul className="space-y-3 mb-8">
                          {industry.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">
                                {activity}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <ConsultationButton />
                      </div>
                      <div className="relative min-h-[300px] lg:min-h-full">
                        <Image
                          src={industry.image}
                          alt={industry.name}
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 dark:bg-blue-800 rounded-xl p-8 md:p-12">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Maximize Your SR&ED Tax Credits?
                </h2>
                <p className="text-xl text-blue-100">
                  Book your free strategy session today and discover how we can
                  help your business.
                </p>
              </div>
              <div className="flex-shrink-0">
                <ConsultationButton className="bg-white text-blue-600 hover:bg-blue-50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// export default function ServicesPage() {
//   return <p>SERVICES</p>;
// }
