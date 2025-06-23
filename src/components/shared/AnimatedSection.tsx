"use client";

import { motion } from "framer-motion";

import type { HTMLMotionProps } from "framer-motion";

type Props = Omit<HTMLMotionProps<"div">, "ref"> & {
  children?: React.ReactNode;
};

export default function AnimatedSection({ children, ...props }: Props) {
  return <motion.div {...props}>{children}</motion.div>;
}
