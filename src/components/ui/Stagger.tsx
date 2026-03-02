"use client";

/**
 * StaggerContainer + StaggerItem
 *
 * Wraps a grid/list so children animate in one-by-one.
 *
 * Usage:
 *   <StaggerContainer>
 *     {items.map(i => <StaggerItem key={i.id}>{...}</StaggerItem>)}
 *   </StaggerContainer>
 */

import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1] as any,
        },
    },
};

// ── Container ─────────────────────────────────────────────
interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    once?: boolean;
}

export function StaggerContainer({ children, className, style, once = true }: StaggerContainerProps) {
    return (
        <motion.div
            className={className}
            style={style}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-80px" }}
        >
            {children}
        </motion.div>
    );
}

// ── Item ─────────────────────────────────────────────────
interface StaggerItemProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export function StaggerItem({ children, className, style }: StaggerItemProps) {
    return (
        <motion.div
            className={className}
            style={style}
            variants={itemVariants}
        >
            {children}
        </motion.div>
    );
}
