"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ICONS = [
    "/images/svg/hammer-head-tool-fix-setting-svgrepo-com.svg",
    "/images/svg/pliers-svgrepo-com.svg",
    "/images/svg/socket-tools-and-utensils-svgrepo-com.svg",
    "/images/svg/spanner-svgrepo-com.svg",
    "/images/svg/two-screws-svgrepo-com.svg",
    "/images/svg/wrench-svgrepo-com.svg",
];

interface FloatingIconProps {
    src: string;
    mouseX: any;
    mouseY: any;
    initialX: number;
    initialY: number;
}

const FloatingIcon = ({ src, mouseX, mouseY, initialX, initialY }: FloatingIconProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Use springs for smooth movement
    const translateX = useSpring(0, { stiffness: 50, damping: 20 });
    const translateY = useSpring(0, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const update = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const dx = mouseX.get() - centerX;
            const dy = mouseY.get() - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Repulsion effect when mouse is close
            if (distance < 200) {
                const power = (200 - distance) / 2;
                const angle = Math.atan2(dy, dx);
                translateX.set(-Math.cos(angle) * power);
                translateY.set(-Math.sin(angle) * power);
            } else {
                translateX.set(0);
                translateY.set(0);
            }
        };

        const unsubscribeX = mouseX.on("change", update);
        const unsubscribeY = mouseY.get() === 0 ? () => {} : mouseY.on("change", update);

        return () => {
            unsubscribeX();
            unsubscribeY();
        };
    }, [mouseX, mouseY, translateX, translateY]);

    return (
        <motion.div
            ref={ref}
            className="absolute pointer-events-none opacity-20 hover:opacity-40 transition-opacity"
            style={{
                left: `${initialX}%`,
                top: `${initialY}%`,
                x: translateX,
                y: translateY,
            }}
            animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
            }}
            transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <Image 
                src={src} 
                alt="Tool Icon" 
                width={32} 
                height={32} 
                className="grayscale brightness-200"
            />
        </motion.div>
    );
};

export default function FooterInteractiveBg() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    // Generate a fixed set of items to avoid hydration mismatch
    const [items, setItems] = useState<{ src: string; x: number; y: number }[]>([]);

    useEffect(() => {
        const newItems = [];
        for (let i = 0; i < 24; i++) {
            newItems.push({
                src: ICONS[i % ICONS.length],
                x: Math.random() * 100,
                y: Math.random() * 100,
            });
        }
        setItems(newItems);
    }, []);

    return (
        <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="absolute inset-0 z-0 overflow-hidden"
        >
            {items.map((item, i) => (
                <FloatingIcon 
                    key={i} 
                    src={item.src} 
                    mouseX={mouseX} 
                    mouseY={mouseY}
                    initialX={item.x}
                    initialY={item.y}
                />
            ))}
        </div>
    );
}
