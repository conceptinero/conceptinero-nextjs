export const faqData: FAQ[] = [
  {
    question: "How does the free consultation work?",
    answer:
      "Our free consultation is a 15-minute call with one of our SR&ED specialists. We'll discuss your business activities, determine if you might qualify for SR&ED tax credits, and give you an estimate of your potential claim amount.",
  },
  {
    question: "What are your fees?",
    answer:
      "We work on a success-fee basis, which means you only pay if your claim is successful. Our fee is a percentage of the tax credits received, with no upfront costs or hidden fees.",
  },
  {
    question: "How long does the SR&ED claim process take?",
    answer:
      "From initial assessment to receiving your tax credit, the process typically takes 3-5 months. The CRA aims to process claims within 120 days for first-time claimants and 60 days for returning claimants.",
  },
  {
    question: "What if my claim is audited?",
    answer:
      "If your claim is selected for audit, we'll defend it at no additional cost. Our team includes former CRA auditors who know exactly what the CRA is looking for and how to present your claim in the best possible light.",
  },
];

type FAQ = {
  question: string;
  answer: string;
};
