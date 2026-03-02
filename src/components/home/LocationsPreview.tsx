"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeUp from "@/components/ui/FadeUp";

const branches = [
    {
        name: "Manurewa • South Auckland",
        address: "6 Holmes Road, Manurewa, Auckland",
        phone: "09 267 8700",
        email: "manurewa@nzautocentre.co.nz",
        hours: "Mon–Fri 8am–5:30pm | Sat 8am–3pm",
        mapLink: "https://maps.google.com/?q=6+Holmes+Road+Manurewa",
        image: "/workshop-2.jpeg"
    },
    {
        name: "Henderson • West Auckland",
        address: "17 View Road, Henderson, Auckland",
        phone: "09 837 0211",
        email: "henderson@nzautocentre.co.nz",
        hours: "Mon–Fri 8am–5:30pm | Sat 8am–3pm",
        mapLink: "https://maps.google.com/?q=17+View+Road+Henderson",
        image: "/workshop-3.jpeg"
    },
];

export default function LocationsPreview() {
    return (
        <section className="bg-dark-secondary py-32 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/3 pointer-events-none" />

            <div className="container-xl relative z-10">
                <FadeUp>
                    <div className="text-center mb-20">
                        <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
                            <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-accent">Strategically Positioned</span>
                        </div>
                        <h2 className="font-display text-5xl md:text-7xl text-white mb-6 uppercase">
                            EXPLORE OUR <span className="text-accent">GLOBAL-STANDARD</span> FACILITIES
                        </h2>
                        <p className="text-muted text-lg max-w-3xl mx-auto font-body">
                            Equipped with high-performance diagnostics and elite tools, our Auckland branches represent the pinnacle of automotive care.
                        </p>
                    </div>
                </FadeUp>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {branches.map((branch, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="group bg-dark-card border border-white/5 overflow-hidden shadow-2xl"
                        >
                            {/* Workshop Header Image */}
                            <div className="relative h-72 overflow-hidden">
                                <Image
                                    src={branch.image}
                                    alt={branch.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-90" />
                                <div className="absolute bottom-6 left-8">
                                    <h3 className="font-display text-3xl text-white uppercase">
                                        {branch.name}
                                    </h3>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="p-10">
                                <div className="space-y-6 mb-10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-accent/30 transition-colors">
                                            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-heading text-[10px] uppercase tracking-widest text-muted mb-1">HQ Address</div>
                                            <div className="text-white font-body text-sm leading-relaxed">{branch.address}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-accent/30 transition-colors">
                                            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-heading text-[10px] uppercase tracking-widest text-muted mb-1">Operational Hours</div>
                                            <div className="text-white font-body text-sm leading-relaxed">{branch.hours}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-accent/30 transition-colors">
                                            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-heading text-[10px] uppercase tracking-widest text-muted mb-1">Direct Hotline</div>
                                            <div className="text-white font-body text-sm tracking-widest">{branch.phone}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={branch.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-accent text-white text-center py-4 font-heading text-[15px] uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(245,197,18,0.2)] hover:scale-105 active:scale-95"
                                    >
                                        Initiate Navigation
                                    </a>
                                    <a
                                        href={`tel:${branch.phone.replace(/\s/g, '')}`}
                                        className="flex-1 border border-white/10 text-white text-center py-4 font-heading text-[15px] uppercase tracking-widest transition-all hover:bg-white/5 hover:scale-105 active:scale-95"
                                    >
                                        Immediate Call
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
