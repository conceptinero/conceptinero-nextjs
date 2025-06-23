"use client";

import { motion } from "framer-motion";

import type { HTMLMotionProps } from "framer-motion";

type Props = Omit<HTMLMotionProps<"header">, "ref"> & {
  children?: React.ReactNode;
};

export default function AnimatedHeader({ children, ...props }: Props) {
  return <motion.header {...props}>{children}</motion.header>;
}
