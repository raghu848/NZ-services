"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CtaBannerProps {
    title?: string;
    subtitle?: string;
    variant?: "red" | "dark";
}

export default function CtaBanner({
    title = "PEACE OF MIND MOTORING STARTS HERE",
    subtitle = "Ready to book your next service?",
    variant = "red",
}: CtaBannerProps) {
    const isRed = variant === "red";

    return (
        <section className={`relative py-24 overflow-hidden ${isRed ? 'bg-accent' : 'bg-dark'}`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            {!isRed && (
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[100px] -skew-x-12 translate-x-1/2" />
            )}

            <div className="container-xl relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-5xl md:text-7xl text-white mb-6 uppercase"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`font-body text-lg md:text-xl mb-12 ${isRed ? 'text-white/80' : 'text-muted'}`}
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link
                            href="/contact"
                            className={`px-12 py-5 font-heading text-sm uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1 ${isRed
                                ? 'bg-white text-accent hover:scale-105 active:scale-95'
                                : 'bg-accent text-white shadow-[0_0_40px_rgba(245,197,18,0.2)] hover:scale-105 active:scale-95'
                                }`}
                        >
                            Secure Your Slot
                        </Link>

                        {isRed ? (
                            <a
                                href="tel:091234567"
                                className="px-12 py-5 font-heading text-sm uppercase tracking-[0.2em] border-2 border-white/20 text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                            >
                                Call Tech Advisor
                            </a>
                        ) : (
                            <Link
                                href="/services"
                                className="px-12 py-5 font-heading text-sm uppercase tracking-[0.2em] bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
                            >
                                View Pricing Matrix
                            </Link>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
