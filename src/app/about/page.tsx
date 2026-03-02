"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CtaBanner from "@/components/home/CtaBanner";
import FadeUp from "@/components/ui/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";

const values = [
    {
        title: "Precision Engineering",
        description: "We apply elite-level technical standards to every vehicle, ensuring industrial-grade reliability for daily drivers.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        title: "Radical Transparency",
        description: "Zero hidden agendas. We utilize digital diagnostics to provide visual proof of every recommendation we make.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
    },
    {
        title: "Auckland Heritage",
        description: "Born and bred in Manurewa, we understand the specific environmental and mechanical needs of New Zealand drivers.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 012.5 2.5v.5m-9-1c.5 0 1 .5 1 1v2" />
            </svg>
        ),
    },
];

const stats = [
    { value: "15Y+", label: "Elite Experience" },
    { value: "02", label: "Advanced Facilities" },
    { value: "98%", label: "Client Retention" },
    { value: "NZTA", label: "Certified Grade" },
];

export default function AboutPage() {
    return (
        <div className="bg-dark min-h-screen">
            {/* Cinematic Hero */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about_hero.png"
                        alt="NZ Auto Centre Workshop"
                        fill
                        className="object-cover scale-110 opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
                </div>

                <div className="container-xl relative z-10 pt-32">
                    <FadeUp>
                        <div className="max-w-4xl">
                            <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full mb-8">
                                <span className="font-heading text-[10px] uppercase tracking-[0.4em] text-accent">Our Legacy</span>
                            </div>
                            <h1 className="font-display text-7xl md:text-9xl text-white tracking-tighter leading-none uppercase mb-8">
                                ENGINEERING <br />
                                <span className="text-accent">TRUST</span> SINCE 2012
                            </h1>
                            <p className="text-muted text-xl font-body max-w-2xl leading-relaxed">
                                NZ Auto Centre isn't just a workshop. We are a team of precision engineers dedicated to elevating the standard of automotive care in Auckland.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-dark-secondary border-y border-white/5 relative z-20">
                <div className="container-xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
                        {stats.map((stat, i) => (
                            <div key={i} className="py-12 px-8 text-center group">
                                <div className="font-display text-5xl text-white group-hover:text-accent transition-colors mb-2">{stat.value}</div>
                                <div className="font-heading text-[10px] uppercase tracking-[0.2em] text-muted">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Mission Section */}
            <section className="py-32 relative">
                <div className="container-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <FadeUp>
                            <div className="space-y-10">
                                <div className="w-20 h-1 bg-accent" />
                                <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter leading-tight">
                                    A RADICAL APPROACH TO <span className="text-accent">MECHANICAL SCIENCE</span>
                                </h2>
                                <div className="space-y-6 text-muted text-lg font-body leading-relaxed">
                                    <p>
                                        In an industry often marred by ambiguity, NZ Auto Centre was founded on a simple principle: **Certainty**. We believe every driver should know exactly what is happening beneath their hood.
                                    </p>
                                    <p>
                                        By combining old-school mechanical intuition with state-of-the-art digital diagnostics, we provide a service that is as transparent as it is precise. From our first branch in Manurewa to our expansion in Henderson, our mission has never wavered.
                                    </p>
                                </div>
                                <div className="pt-8">
                                    <Link href="/contact" className="inline-block bg-accent text-white px-10 py-5 font-heading text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_40px_rgba(245,197,18,0.15)] hover:scale-105 active:scale-95">
                                        SECURE AN APPOINTMENT
                                    </Link>
                                </div>
                            </div>
                        </FadeUp>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative aspect-[4/5] overflow-hidden border border-white/10 shadow-2xl"
                            >
                                <Image
                                    src="/images/mechanical_expertise.png"
                                    alt="Expert Mechanic at Work"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                                <div className="absolute bottom-10 left-10 right-10">
                                    <div className="p-8 backdrop-blur-xl bg-white/5 border border-white/10">
                                        <div className="text-accent font-heading text-xs uppercase tracking-widest mb-2">Technical Core</div>
                                        <div className="text-white text-sm font-body italic leading-relaxed">
                                            "Precision isn't just a goal, it's our standard operating procedure."
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
                            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-32 bg-dark-secondary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="container-xl relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="font-display text-5xl md:text-7xl text-white tracking-tighter uppercase mb-6">
                            OUR <span className="text-accent">DNA</span>
                        </h2>
                        <p className="text-muted text-lg max-w-2xl mx-auto font-body">
                            The fundamental codes that drive every repair, every inspection, and every interaction.
                        </p>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <StaggerItem key={i}>
                                <div className="p-12 bg-dark border border-white/5 hover:border-accent/30 transition-all duration-500 group">
                                    <div className="text-accent mb-8 group-hover:scale-110 transition-transform inline-block">
                                        {v.icon}
                                    </div>
                                    <h3 className="font-heading text-xl text-white uppercase tracking-widest mb-6">
                                        {v.title}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed font-body">
                                        {v.description}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            <CtaBanner
                title="READY TO EXPERIENCE THE DIFFERENCE?"
                subtitle="Join thousands of Auckland drivers who trust their machines to our elite engineers."
                variant="dark"
            />
        </div>
    );
}
