"use client";

import { motion } from "framer-motion";

export default function TrustStrip() {
    const items = [
        { icon: "01", text: "NZTA Certified Techs" },
        { icon: "02", text: "Same-Day Turnaround" },
        { icon: "03", text: "OEM Parts Only" },
        { icon: "04", text: "Elite Equipment" },
        { icon: "05", text: "Auckland Wide Services" },
    ];

    return (
        <section className="bg-dark border-y border-white/5 py-6 overflow-hidden relative">
            <div className="absolute inset-0 bg-accent/5 opacity-20 pointer-events-none" />

            <div className="container-xl relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between gap-y-6 lg:gap-0 px-6 lg:px-0">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 lg:px-8 lg:border-r last:border-r-0 border-white/10 group w-full lg:w-auto"
                        >
                            <span className="font-display text-2xl text-accent/40 group-hover:text-accent transition-colors shrink-0">
                                {item.icon}
                            </span>
                            <span className="font-heading text-[11px] uppercase tracking-[0.2em] text-muted group-hover:text-white transition-colors whitespace-nowrap">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent pointer-events-none" />
        </section>
    );
}
