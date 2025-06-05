export const testimonials = [
  {
    quote:
      "Working with Conceptinero was a game-changer for our tech startup. They secured over $180,000 in SR&ED credits for us, which was critical for our R&D investments. Their process was smooth and their expertise was evident.",
    author: "Sarah Chen",
    position: "CTO, TechInnovate Solutions",
    company: "Software & IT",
    image: "/testimonials/testimonial-1.webp",
  },
  {
    quote:
      "After struggling with SR&ED claims on our own for years, we brought in Conceptinero. They increased our claim amount by 43% and handled everything from documentation to CRA questions. I only wish we'd found them sooner.",
    author: "Michael Patel",
    position: "CEO, MediTech Labs",
    company: "Healthcare & Medical Sciences",
    image: "/testimonials/testimonial-2.webp",
  },
  {
    quote:
      "As a manufacturing company, we were skeptical about whether our innovations qualified for SR&ED. Conceptinero not only confirmed our eligibility but secured us a $245,000 tax credit. Their industry knowledge was impressive.",
    author: "Jennifer Wilson",
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
