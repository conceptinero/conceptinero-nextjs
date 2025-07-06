export const testimonials: Testimonial[] = [
  {
    quote:
      "Kevin brought structure, process, and discipline to our Digital Agency's SR&ED function. We had been doing claims ourselves for several years before Kevin came along but he offered two valuable things: 1) relieving us from the burden of collecting and filing SR&ED info at a cost-effective rate; 2) leveling up our documentation and process to withstand ever-growing audit demands. It's been a good partnership for Klick. Kevin's part of the family here and knows all the tech leaders personally, which helps when he has to pull them away from client work to talk about the technological obstacles and challenges of their work! We're happy to recommend Kevin's services to others.",
    author: "Glen Webster",
    company: "Klick Inc.",
    location: "Toronto",
  },
  {
    quote:
      "Conceptinero is a great organisation, I was and am very happy with all their work that they have completed for us. Alex is very knowledgeable, and he has guided us in the right directions, and walk us through every step. They are easy to work with: very good communicators. I highly recommend them. We look forward to using their expertise in the future to support our Solar, Wind, and Energy Innovation projects on an on-going basis.",
    author: "Michelle Gallo",
    company: "Gallo-Teck Inc.",
    location: "Bancroft, ON",
  },
  {
    quote:
      "Our Programmatic Advertising company has worked with Conceptinero for a number of years to help us file claims in the SR&ED program. Mike stays on top of the work and manages the project well. He has in-depth knowledge of the SR&ED process and knows exactly what the CRA is looking for. He was able to put the material together and do a technical write-up in the way the government likes to see it. He guided us through a CRA audit and knows just how much he can push the officials. We have been successful in all our SR&ED claims and I highly recommend Conceptinero.",
    author: "Jignesh Shah",
    company: "ClearPier",
    location: "Toronto",
  },
  {
    quote:
      "Kevin and Sandra have been very helpful working with us as our company grows. they have been responsive with our needs for SR&ED and always quick to assist.",
    author: "Richard Preiss",
    company: "Escarpment Laboratories",
    location: "Guelph, ON",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  company: string;
  location: string;
};

// old
// export type Testimonial = {
//   quote: string;
//   author: string;
//   position: string;
//   company: string;
//   image: string;
// };
