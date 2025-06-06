export const testimonials = [
  {
    quote:
      "Kevin was able to navigate with confidence and clarity the twists and turns of the SR&ED process, and at the same time quickly apply the SRED filter to our Internet Security Technology development. He gives sound advice and looks for how to best represent the work done in the succinct format required. His personable touch and interview skills with our technical team are the best I’ve seen and saved us a tonne of time. Highly recommended for any company doing SR&ED.",
    author: "Juan Serra",
    position: "CTO, TechInnovate Solutions",
    company: "Software & IT",
    image: "/testimonials/testimonial-1.webp",
  },
  {
    quote:
      "It was a pleasure working with Kevin. Very professional, and with his efforts, our SR&ED submission related to our Internet Mailing Engine was on time and extremely detailed. I would not hesitate to work with Kevin again.",
    author: "Michael Booth",
    position: "CEO, MediTech Labs",
    company: "Healthcare & Medical Sciences",
    image: "/testimonials/testimonial-2.webp",
  },
  {
    quote:
      "Our Programmatic Advertising company has worked with Conceptinero for a number of years to help us file claims in the SR&ED program. Mike stays on top of the work and manages the project well. He has in-depth knowledge of the SR&ED process and knows exactly what the CRA is looking for. He was able to put the material together and do a technical write-up in the way the government likes to see it. He guided us through a CRA audit and knows just how much he can push the officials. We have been successful in all our SR&ED claims and I highly recommend Conceptinero.",
    author: "Jignesh Shah",
    position: "Director of Operations, Precision Manufacturing",
    company: "Manufacturing",
    image: "/testimonials/testimonial-3.webp",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
};
