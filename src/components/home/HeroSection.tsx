"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const heroContainerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const heroItemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
    },
};

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center bg-dark"
        >
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-70 scale-105"
                >
                    <source src="/WhatsApp Video 2026-02-26 at 12.15.16 PM.mp4" type="video/mp4" />
                </video>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/10 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/5 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(225,29,72,0.1),transparent_50%)] z-10" />
            </div>

            {/* Content Section */}
            <div className="container-xl relative z-20 pt-[100px] pb-20 md:pt-[120px] w-full">
                <motion.div
                    variants={heroContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl text-left"
                >
                    {/* Badge */}
                    <motion.div
                        variants={heroItemVariants}
                        className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8 mt-0 backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-accent">
                            Certified Experts • Auckland Regions
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={heroItemVariants}
                        className="font-display text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.85] text-white mb-8"
                    >
                        UNLEASH THE <br />
                        <span className="text-accent underline decoration-white/10 underline-offset-8">PERFORMANCE</span> <br />
                        OF YOUR MACHINE
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={heroItemVariants}
                        className="font-body text-lg md:text-xl text-muted max-w-xl mb-12 leading-relaxed"
                    >
                        Precision diagnostics, elite workmanship, and transparent service. We don't just fix cars; we optimize your driving experience.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={heroItemVariants}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto bg-accent text-white px-10 py-5 font-heading text-sm uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_40px_rgba(245,197,18,0.2)] hover:shadow-[0_0_60px_rgba(245,197,18,0.4)] hover:scale-105 active:scale-95 text-center"
                        >
                            Book Your Service
                        </Link>
                        <Link
                            href="/services"
                            className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-10 py-5 font-heading text-sm uppercase tracking-[0.2em] transition-all duration-300 backdrop-blur-xl hover:bg-white/10 hover:scale-105 active:scale-95 text-center"
                        >
                            Explore Solutions
                        </Link>
                    </motion.div>


                </motion.div>
            </div>

            {/* Ambient Red Glow in Corner */}
            <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full z-0 pointer-events-none" />

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
            >
                <div className="w-5 h-9 border-2 border-white/10 rounded-full flex justify-center pt-2">
                    <motion.div
                        animate={{ height: [4, 8, 4] }}
                        className="w-1 bg-accent rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
