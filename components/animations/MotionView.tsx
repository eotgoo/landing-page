"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface MotionViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const MotionView = ({ children, className, delay = 0 }: MotionViewProps) => {
  const ref = useRef(null);

  // ❗ once: false болгосноор бүртгэлтэй хэвээр байна
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      // inView true бол visible, дэлгэцнээс гарахад буцаад hidden
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
