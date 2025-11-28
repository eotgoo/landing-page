"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MotionView } from "../../../components/animations/MotionView";

const words = ["хөрөнгө", "өгөөж", "баталгаа", "боломж"];

export const Tagline = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2600);

        return () => clearInterval(id);
    }, []);

    const currentWord = words[index];

    return (
        <section
            className="
    py-12 sm:py-16 text-center text-white
    bg-gradient-to-b 
    from-[#05040a] via-[#050712] to-[#050816]
  "
        >
            <MotionView>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 flex flex-wrap items-center justify-center gap-2">
                    <span>Бодит</span>
                    <span className="relative inline-flex min-w-[90px] justify-center">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentWord}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.35 }}
                                className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent"
                            >
                                {currentWord}
                            </motion.span>
                        </AnimatePresence>
                    </span>
                </h2>
            </MotionView>
        </section>
    );
};
