import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";

function MissionAndValues() {
  return (
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
            Our Mission & Values
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We believe every innovative Canadian company deserves to benefit
            from the SR&ED program.
          </p>
        </AnimatedSection>

        <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mission">Our Mission</TabsTrigger>
            <TabsTrigger value="values">Our Values</TabsTrigger>
            <TabsTrigger value="approach">Our Approach</TabsTrigger>
          </TabsList>
          <TabsContent value="mission" className="mt-8">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At Conceptinero, our mission is to help innovative Canadian
                companies maximize their SR&ED tax credits with a simple,
                stress-free experience. We&apos;re committed to removing the
                complexity and frustration from the SR&ED process so our clients
                can focus on what they do best - innovation.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We aim to be the most trusted partner for SR&ED claims,
                delivering exceptional results and providing unmatched expertise
                across multiple industries. Our goal is not just to help
                businesses secure tax credits, but to become a valued partner in
                their long-term growth and innovation strategies.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="values" className="mt-8">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">
                    Expertise
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We maintain deep industry knowledge and technical expertise
                    to maximize claim success.
                  </p>

                  <h4 className="text-lg font-semibold text-blue-600 mb-2">
                    Integrity
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We are honest, transparent, and ethical in all our dealings
                    with clients and the CRA.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">
                    Client-Centric
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We put our clients&apos; needs first, providing personalized
                    service from start to finish.
                  </p>

                  <h4 className="text-lg font-semibold text-blue-600 mb-2">
                    Innovation
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We constantly improve our processes to deliver better
                    results for our clients.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="approach" className="mt-8">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Conceptinero&apos;s approach to SR&ED consulting is rooted in
                three key principles:
              </p>
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4">
                    <span className="font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Industry-Specific Expertise
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our consultants have technical backgrounds in the
                      industries they serve, allowing them to better identify
                      and document eligible R&D activities.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4">
                    <span className="font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Comprehensive Service
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We handle the entire SR&ED process from eligibility
                      assessment to claim preparation and CRA defense.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4">
                    <span className="font-bold text-blue-600">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Success-Based Fee Structure
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our fees are based on successful outcomes, aligning our
                      interests with our clients&apos;.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default MissionAndValues;
