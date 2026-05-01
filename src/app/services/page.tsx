"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CtaBanner from "@/components/home/CtaBanner";
import FadeUp from "@/components/ui/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";

const services = [
    {
        id: "engine",
        num: "01",
        title: "Engine Dynamics & Efficiency",
        tagline: "The Core of Performance",
        description: "Utilizing advanced synthetic formulations and precision filtration systems to maintain internal combustion health.",
        details: [
            "Industrial-grade synthetic oil engineering",
            "High-flow filtration replacement",
            "Fuel system optimization & cleaning",
            "Cooling system thermal analysis"
        ],
        image: "/images/oil_change_service_1772083942488.jpeg"
    },
    {
        id: "braking",
        num: "02",
        title: "Stop-Force Engineering",
        tagline: "Safety Without Compromise",
        description: "Kinetic energy management through high-performance friction materials and hydraulic system optimization.",
        details: [
            "Friction pad & rotor replacement",
            "Hydraulic fluid thermal testing",
            "ABS digital system diagnostics",
            "Calliper precision calibration"
        ],
        image: "/images/brake_service_1772083962571.png"
    },
    {
        id: "tyres",
        num: "03",
        title: "Pneumatic & Traction Systems",
        tagline: "Surface Intelligence",
        description: "Optimizing the critical contact patch through laser-guided alignment and dynamic balancing.",
        details: [
            // "Laser wheel alignment (4-wheel)",
            "High-performance tyre fitment",
            "Digital dynamic balancing",
            "Tread depth & compound analysis"
        ],
        image: "/images/tyre_service_1772083985399.png"
    },
    {
        id: "diagnostics",
        num: "04",
        title: "Digital Intelligence Scans",
        tagline: "Insight Through Technology",
        description: "Deep-level ECU interrogations and electronic system mapping to identify ghost faults before they manifest.",
        details: [
            "Full ECU system interrogation",
            "Real-time sensor data mapping",
            "Electrical node fault finding",
            "Software update & reset"
        ],
        image: "/images/diagnostic_gear.png" // To be copied
    },
    {
        id: "wof",
        num: "05",
        title: "Compliance & Safety (WOF)",
        tagline: "Official NZTA Standards",
        description: "Rigorous multi-point safety inspections to ensure full adherence to New Zealand Transport Agency regulations.",
        details: [
            "NZTA Certified WOF Inspection",
            "Structural integrity vetting",
            "Safety restraint verification",
            "Emissions & lighting compliance"
        ],
        image: "/images/wof_inspection.png"
    },
    {
        id: "drivetrain",
        num: "06",
        title: "Drivetrain & Precision Flow",
        tagline: "Power Delivery Systems",
        description: "Ensuring seamless torque transfer from engine to surface through transmission and differential care.",
        details: [
            "Transmission fluid engineering",
            "Differential system servicing",
            "CV joint & axle replacement",
            "Clutch system calibration"
        ],
        image: "/images/transmission_repair.png"
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-dark min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105"
                    >
                        <source src="/images/service.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent z-10" />
                </div>

                <div className="container-xl relative z-10 pt-32 flex justify-end w-full">
                    <FadeUp>
                        <div className="max-w-3xl text-right">
                            <h1 className="font-display text-7xl md:text-9xl text-white tracking-tighter uppercase mb-8 leading-none">
                                ELITE <span className="text-accent">DYNAMICS</span>
                            </h1>
                            <p className="text-white text-xl font-body max-w-xl leading-relaxed ml-auto">
                                Our service protocols are designed for those who view their vehicles as precision machines, not just transport.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Detailed Services Loop */}
            <section className="pt-32 pb-16 md:pb-20">
                <div className="container-xl">
                    <div className="space-y-48">
                        {services.map((service, i) => (
                            <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                                <FadeUp>
                                    <div className={`space-y-10 ${i % 2 === 1 ? 'lg:pl-24' : 'lg:pr-24'}`}>
                                        <div className="flex items-center gap-6">
                                            <span className="font-display text-4xl text-accent/40">{service.num}</span>
                                            <div className="h-[1px] w-20 bg-accent/20" />
                                            <span className="font-heading text-[10px] uppercase tracking-[0.4em] text-accent font-bold">{service.tagline}</span>
                                        </div>

                                        <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter leading-tight">
                                            {service.title}
                                        </h2>

                                        <p className="text-muted text-lg font-body leading-relaxed">
                                            {service.description}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                                            {service.details.map((detail, j) => (
                                                <div key={j} className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                                                    <span className="text-white/60 text-sm font-body">{detail}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-10">
                                            <Link href="/contact" className="inline-block border border-accent text-accent px-10 py-4 font-heading text-[15px] uppercase tracking-widest transition-all hover:bg-accent hover:text-dark-secondary hover:scale-105 active:scale-95">
                                                Schedule Analysis
                                            </Link>
                                        </div>
                                    </div>
                                </FadeUp>

                                <motion.div
                                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="relative w-[90%] md:w-[80%] lg:w-[70%] mx-auto aspect-[4/5] lg:aspect-[3/4] overflow-hidden group"
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />

                                    {/* Glass Accent */}
                                    <div className="absolute bottom-6 right-6 p-6 backdrop-blur-xl bg-white/5 border border-white/10 hidden md:block">
                                        <div className="font-heading text-[10px] uppercase tracking-widest text-white/40 mb-1">Standard Grade</div>
                                        <div className="text-white text-xs font-body">Performance Optimized</div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Board Section */}
            <section className="pb-24 md:pb-32 pt-8 lg:pt-12 relative border-t border-white/5 bg-gradient-to-b from-transparent to-black/20 overflow-hidden">
                <div className="container-xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <FadeUp>
                            <div className="space-y-8 max-w-xl">
                                <div className="flex items-center gap-6">
                                    <div className="h-[1px] w-12 bg-accent/20" />
                                    <span className="font-heading text-xs uppercase tracking-[0.4em] text-accent font-bold">Comprehensive Overview</span>
                                </div>
                                <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter leading-tight">
                                    Station <span className="text-accent">Service Board</span>
                                </h2>
                                <p className="text-muted text-lg font-body leading-relaxed">
                                    Explore our comprehensive list of service offerings and packages directly from our station board. We believe in complete transparency and delivering high-quality automotive engineering solutions.
                                </p>
                                <div className="pt-6">
                                    <Link href="/contact" className="inline-block border border-accent text-accent px-10 py-4 font-heading text-[15px] uppercase tracking-widest transition-all hover:bg-accent hover:text-dark-secondary hover:scale-105 active:scale-95">
                                        Book A Service
                                    </Link>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <div className="relative w-[90%] sm:w-[80%] lg:w-[85%] mx-auto lg:ml-auto lg:mr-0 aspect-[4/5] md:aspect-square lg:aspect-[4/5] xl:aspect-[3/4] rounded-xl overflow-hidden border border-white/10 group shadow-2xl shadow-black/50 bg-black/40">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(225,29,72,0.05),transparent_70%)] z-0" />
                                <Image
                                    src="/images/board.png"
                                    alt="NZ Auto Centre Service Board"
                                    fill
                                    className="object-contain p-8 md:p-12 xl:p-16 relative z-10 scale-100 group-hover:scale-[1.02] transition-transform duration-700"
                                />
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            <CtaBanner
                title="DIAGNOSTIC UNCERTAINTY?"
                subtitle="Let our master technicians perform a full baseline interrogation of your machine."
                variant="red"
            />
        </div>
    );
}
