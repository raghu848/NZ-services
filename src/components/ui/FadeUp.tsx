"use client";

/**
 * FadeUp — Fades an element in from below when it enters the viewport.
 * Drop-in replacement for a <div> wrapper.
 *
 * Props:
 *   delay  — optional stagger delay in seconds (default 0)
 *   once   — animate only once (default true)
 *   y      — slide distance in px (default 36)
 */

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface FadeUpProps extends HTMLMotionProps<"div"> {
    delay?: number;
    once?: boolean;
    y?: number;
    children: React.ReactNode;
}

export default function FadeUp({
    children,
    delay = 0,
    once = true,
    y = 36,
    ...rest
}: FadeUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, margin: "-80px" }}
            transition={{
                duration: 0.65,
                delay,
                ease: [0.22, 1, 0.36, 1] as any,
            }}
            {...rest}
        >
            {children}
        </motion.div>
    );
}
