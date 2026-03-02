"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: "fade-up" | "fade-left" | "fade-right" | "fade-in" | "scale-up";
    delay?: number; // ms
    threshold?: number; // 0-1
    className?: string;
}

export default function ScrollReveal({
    children,
    animation = "fade-up",
    delay = 0,
    threshold = 0.12,
    className = "",
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Apply initial hidden state
        el.classList.add(`sr-${animation}`);
        if (delay) el.style.transitionDelay = `${delay}ms`;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("sr-visible");
                    observer.unobserve(el); // animate once
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [animation, delay, threshold]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
