"use client";

/**
 * FadeIn — generic fade (no Y movement). Good for images, full sections, overlays.
 * FadeLeft / FadeRight — slide in from a side (for split layouts).
 */

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
    delay?: number;
    once?: boolean;
    children: React.ReactNode;
    x?: number;
}

export function FadeIn({ children, delay = 0, once = true, ...rest }: Omit<Props, "x">) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once, margin: "-60px" }}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
            {...rest}
        >
            {children}
        </motion.div>
    );
}

export function FadeLeft({ children, delay = 0, once = true, x = 48, ...rest }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -x }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once, margin: "-60px" }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as any }}
            {...rest}
        >
            {children}
        </motion.div>
    );
}

export function FadeRight({ children, delay = 0, once = true, x = 48, ...rest }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once, margin: "-60px" }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as any }}
            {...rest}
        >
            {children}
        </motion.div>
    );
}

export function ScaleIn({ children, delay = 0, once = true, ...rest }: Omit<Props, "x">) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once, margin: "-60px" }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as any }}
            {...rest}
        >
            {children}
        </motion.div>
    );
}
