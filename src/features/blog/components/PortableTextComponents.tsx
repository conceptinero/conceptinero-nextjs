import { PortableTextComponents } from "@portabletext/react";
import { ReactNode } from "react";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageHotspot, SanityImageCrop } from "@/sanity/types";
import Image from "next/image";

// Custom PortableText components for beautiful rendering
export const portableTextComponents: PortableTextComponents = {
  block: {
    // Headings
    h1: ({ children }: { children?: ReactNode }) => (
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-12 mb-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: ReactNode }) => (
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3 leading-tight">
        {children}
      </h4>
    ),
    h5: ({ children }: { children?: ReactNode }) => (
      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mt-5 mb-3 leading-tight">
        {children}
      </h5>
    ),
    h6: ({ children }: { children?: ReactNode }) => (
      <h6 className="text-base font-semibold text-gray-900 dark:text-white mt-4 mb-2 leading-tight">
        {children}
      </h6>
    ),

    // Paragraphs
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
        {children}
      </p>
    ),

    // Blockquotes
    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
        <div className="text-lg italic text-gray-800 dark:text-gray-200">
          {children}
        </div>
      </blockquote>
    ),
  },

  // Lists
  list: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <ul className="list-disc list-inside space-y-3 mb-6 ml-4 text-lg text-gray-700 dark:text-gray-300">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: ReactNode }) => (
      <ol className="list-decimal list-inside space-y-3 mb-6 ml-4 text-lg text-gray-700 dark:text-gray-300">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: { children?: ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },

  // Marks (inline styles)
  marks: {
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-semibold text-gray-900 dark:text-white">
        {children}
      </strong>
    ),
    em: ({ children }: { children?: ReactNode }) => (
      <em className="italic text-gray-800 dark:text-gray-200">{children}</em>
    ),
    code: ({ children }: { children?: ReactNode }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-blue-600 dark:text-blue-400">
        {children}
      </code>
    ),
    link: ({
      children,
      value,
    }: {
      children?: ReactNode;
      value?: { href: string };
    }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-2 hover:underline-offset-4 transition-all duration-200"
      >
        {children}
      </a>
    ),
  },

  // Code blocks
  types: {
    code: ({ value }: { value: { code: string; language?: string } }) => (
      <div className="my-8">
        <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-xl overflow-x-auto">
          <code className="text-sm font-mono leading-relaxed">
            {value.code}
          </code>
        </pre>
      </div>
    ),
    image: ({
      value,
    }: {
      value: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        caption?: string;
        _type: "image";
      };
    }) => {
      if (!value.asset) return null;

      return (
        <figure className="my-8">
          <Image
            src={urlFor(value.asset).url()}
            alt={value.alt || "Blog image"}
            className="w-full h-auto rounded-xl shadow-lg"
            width={1000}
            height={1000}
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};
