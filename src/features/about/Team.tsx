import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import {
  getCachedAuthors,
  transformSanityAuthor,
} from "@/sanity/lib/blogService";

async function Team() {
  try {
    // Fetch authors from Sanity (cached)
    const authorsData = await getCachedAuthors();
    const teamMembers = authorsData.map(transformSanityAuthor);

    return (
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our team of industry specialists and former CRA auditors is
              dedicated to maximizing your SR&ED claims.
            </p>
          </AnimatedSection>

          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <AnimatedSection
                  key={member.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {member.image && (
                    <div className="relative h-64 w-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    {member.role && (
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {member.role}
                      </p>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No team members found. Please add authors in Sanity Studio.
              </p>
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error loading team members:", error);
    return (
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-red-600 dark:text-red-400">
              Unable to load team members. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;

// Enable ISR caching - revalidate every hour
export const revalidate = 3600;
