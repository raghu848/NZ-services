"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeUp from "@/components/ui/FadeUp";
import CtaBanner from "@/components/home/CtaBanner";

const locations = [
    {
        name: "Manurewa • South Auckland",
        address: "6 Holmes Road, Manurewa, Auckland",
        phone: "09 267 8700",
        email: "manurewa@nzautocentre.co.nz",
        hours: "Mon–Fri 8am–5:30pm | Sat 8am–3pm",
        mapLink: "https://maps.google.com/?q=6+Holmes+Road+Manurewa",
        image: "/workshop-2.jpeg",
        features: ["Premium Diagnostics", "Major Mechanical", "Tyre Centre", "WOF Inspection"]
    },
    {
        name: "Henderson • West Auckland",
        address: "17 View Road, Henderson, Auckland",
        phone: "09 837 0211",
        email: "henderson@nzautocentre.co.nz",
        hours: "Mon–Fri 8am–5:30pm | Sat 8am–3pm",
        mapLink: "https://maps.google.com/?q=17+View+Road+Henderson",
        image: "/workshop-3.jpeg",
        features: ["Full Servicing", "Brake Specialists", "Computer Scanning", "Safety Checks"]
    },
];

export default function LocationsPage() {
    return (
        <div className="bg-dark min-h-screen">
            {/* Locations Hero */}
            <section className="relative py-32 md:py-48 overflow-hidden bg-dark-secondary">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/location_map_bg.png"
                        alt="NZ Auto Centre Locations Map"
                        fill
                        className="object-cover opacity-50 grayscale blur-[0.5px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                </div>

                <div className="container-xl relative z-10 text-center">
                    <FadeUp>
                        <div className="max-w-3xl mx-auto">
                            <h1 className="font-display text-7xl md:text-9xl text-white tracking-tighter uppercase mb-8 leading-none">
                                OUR <span className="text-accent">LOCATIONS</span>
                            </h1>
                            <p className="text-muted text-xl font-body max-w-xl mx-auto leading-relaxed">
                                Strategically positioned across Auckland to provide elite mechanical care for every community.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Locations Showcase */}
            <section className="py-32">
                <div className="container-xl">
                    <div className="space-y-48">
                        {locations.map((branch, i) => (
                            <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                                {/* Image Column */}
                                <div className="lg:col-span-7 relative h-[500px] overflow-hidden group border border-white/5">
                                    <Image
                                        src={branch.image}
                                        alt={branch.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />

                                    <div className="absolute bottom-8 left-8 p-6 backdrop-blur-md bg-black/40 border border-white/10 max-w-sm">
                                        <div className="flex gap-2 flex-wrap">
                                            {branch.features.map((feature, j) => (
                                                <span key={j} className="text-[8px] uppercase tracking-widest text-accent font-bold px-2 py-1 bg-accent/20 border border-accent/20">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Column */}
                                <div className="lg:col-span-5 space-y-12">
                                    <FadeUp>
                                        <div className="space-y-8">
                                            <div className="w-12 h-1 bg-accent" />
                                            <h2 className="font-display text-5xl text-white uppercase tracking-tighter">
                                                {branch.name}
                                            </h2>

                                            <div className="space-y-6">
                                                <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/5 hover:border-accent/20 transition-all group">
                                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <div className="font-heading text-[10px] uppercase tracking-widest text-muted mb-1">HQ Address</div>
                                                        <div className="text-white font-body text-sm leading-relaxed">{branch.address}</div>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/5 hover:border-accent/20 transition-all group">
                                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <div className="font-heading text-[10px] uppercase tracking-widest text-muted mb-1">Operational Hours</div>
                                                        <div className="text-white font-body text-sm leading-relaxed">{branch.hours}</div>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/5 hover:border-accent/20 transition-all group">
                                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <div className="font-heading text-[10px] uppercase tracking-widest text-muted mb-1">Direct Hotline</div>
                                                        <div className="text-white font-display text-xl tracking-widest">{branch.phone}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-4 pt-6">
                                                <a
                                                    href={branch.mapLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 bg-accent text-white text-center py-5 font-heading text-[10px] uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_30px_rgba(245,197,18,0.2)] hover:scale-105 active:scale-95"
                                                >
                                                    Direct GPS
                                                </a>
                                                <a
                                                    href={`tel:${branch.phone.replace(/\s/g, '')}`}
                                                    className="flex-1 border border-white/10 text-white text-center py-5 font-heading text-[10px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/5 hover:scale-105 active:scale-95"
                                                >
                                                    Contact Branch
                                                </a>
                                            </div>
                                        </div>
                                    </FadeUp>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBanner
                title="CLOSER THAN YOU THINK"
                subtitle="High-performance care is just a short drive away. Book your slot now."
                variant="red"
            />
        </div>
    );
}
