"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import FadeUp from "@/components/ui/FadeUp";

const services = [
    {
        num: "01",
        title: "Advanced Oil Engineering",
        description: "Premium synthetic oil changes using manufacturer-spec lubricants and filters to extend engine life and maximize efficiency.",
        image: "/images/oil_change_service_1772083942488.jpeg",
        tags: ["Lubrication", "Filter", "Efficiency"],
    },
    {
        num: "02",
        title: "Performance Brake Systems",
        description: "High-precision brake repairs and component upgrades. pad, rotor, and fluid services designed for extreme stopping power.",
        image: "/images/brake_service_1772083962571.png",
        tags: ["Safety", "Control", "Confidece"],
    },
    {
        num: "03",
        title: "Elite Tyre Solutions",
        description: "Performance tyres for every terrain. Expert fitting, digital balancing, and laser wheel alignment for a smoother ride.",
        image: "/images/tyre_service_1772083985399.png",
        tags: ["Grip", "Handling", "Durability"],
    },
    {
        num: "04",
        title: "Engine Diagnostics",
        description: "State-of-the-art computer diagnostics to pinpoint issues instantly. ECU tuning and performance analysis.",
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80&auto=format&fit=crop",
        tags: ["Tech", "Scan", "Tuning"],
    },
    {
        num: "05",
        title: "WOF & Safety Compliance",
        description: "Official Warrant of Fitness inspections and pre-purchase safety reports by NZTA certified inspectors.",
        image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=800&q=80&auto=format&fit=crop",
        tags: ["NZTA", "Local", "Safety"],
    },
    {
        num: "06",
        title: "Transmission Surgery",
        description: "Complete drivetrain repair and transmission servicing. Smooth gear transitions and long-term reliability guaranteed.",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format&fit=crop",
        tags: ["Gearbox", "Drive", "Power"],
    },
];

export default function ServicesPreview() {
    return (
        <section className="bg-dark-secondary relative py-24 md:py-32 overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

            <div className="container-xl relative z-10">
                <FadeUp>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                        <div className="max-w-3xl">
                            <div className="w-12 h-1 bg-accent mb-6" />
                            <h2 className="font-display text-5xl md:text-7xl text-white mb-4">
                                ENGINE <span className="text-accent">DYNAMICS</span> & CARE
                            </h2>
                            <p className="text-muted text-lg leading-relaxed font-body max-w-lg">
                                We combine industrial-grade technology with precision engineering to provide Auckland's most comprehensive automotive solutions.
                            </p>
                        </div>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-4 text-accent hover:text-white transition-colors group"
                        >
                            <span className="font-heading text-sm uppercase tracking-widest">Discover All Services</span>
                            <div className="w-10 h-10 border border-accent rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-dark-secondary transition-all group-hover:scale-110 active:scale-95">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </FadeUp>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <StaggerItem key={i}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="group bg-dark-card border border-dark-border hover:border-accent/40 transition-all duration-500 overflow-hidden relative"
                            >
                                {/* card top image */}
                                <div className="h-64 overflow-hidden relative">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-80" />

                                    {/* Service Number */}
                                    <div className="absolute top-4 right-6 font-display text-6xl text-white/5 group-hover:text-accent/10 transition-colors">
                                        {service.num}
                                    </div>

                                    {/* Icon representation (Simple) */}
                                    <div className="absolute bottom-4 left-6 flex gap-2">
                                        {service.tags.map((tag, j) => (
                                            <span key={j} className="px-2 py-1 bg-accent/20 backdrop-blur-md text-[8px] uppercase tracking-widest text-accent border border-accent/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* card content */}
                                <div className="p-8">
                                    <h3 className="font-heading text-xl text-white mb-4 uppercase tracking-wider group-hover:text-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed mb-8 opacity-80">
                                        {service.description}
                                    </p>

                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-white/40 group-hover:text-accent transition-all animate-pulse-slow"
                                    >
                                        Inquire Now
                                        <svg className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-500" />
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
