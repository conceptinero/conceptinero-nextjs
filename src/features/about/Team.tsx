import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import { User } from "lucide-react";
import LinkedInIcon from "@/icons/LinkedInIcon";
import { getAllAuthors, transformSanityAuthor } from "@/sanity/lib/blogService";

async function Team() {
  try {
    // Fetch authors from Sanity
    const authorsData = await getAllAuthors();
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
            <div className="grid grid-cols-1 gap-8">
              {teamMembers.map((member, index) => (
                <AnimatedSection
                  key={member.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="md:flex">
                    {member.image && (
                      <div className="md:w-2/5 relative h-80 md:h-auto">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="md:w-3/5 p-6 md:p-8">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                          {member.name}
                        </h3>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors ml-4"
                            aria-label={`${member.name}'s LinkedIn profile`}
                          >
                            <LinkedInIcon />
                          </a>
                        )}
                      </div>
                      {member.role && (
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium mb-4">
                          <User className="h-4 w-4 mr-1" />
                          {member.role}
                        </div>
                      )}
                      {member.bio && (
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {member.bio}
                        </p>
                      )}
                    </div>
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

// Enable ISR caching - revalidate every 24 hours
export const revalidate = 86400;
