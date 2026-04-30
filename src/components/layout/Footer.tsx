"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-dark border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

            <div className="container-xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="space-y-8">
                        <div>
                            <Link href="/" className="inline-block mb-6">
                                <motion.div
                                    animate={{ rotate: [0, 1080, 1080] }}
                                    transition={{
                                        duration: 4,
                                        times: [0, 0.3, 1],
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Image
                                        src="/images/Asset 1.png"
                                        alt="NZ Auto Centre Logo"
                                        width={300}
                                        height={100}
                                        className="object-contain h-16 md:h-20 w-auto"
                                    />
                                </motion.div>
                            </Link>
                            <p className="text-muted text-sm leading-relaxed font-body max-w-xs">
                                Auckland's premier destination for high-performance automotive care and precision mechanical engineering.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            {['FB', 'IG', 'TW'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-[10px] font-heading text-muted hover:border-accent hover:text-accent transition-all">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-heading text-xs uppercase tracking-[0.3em] text-white mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Elite Services", href: "/services" },
                                { label: "Workshop Locations", href: "/locations" },
                                { label: "About The Brand", href: "/about" },
                                { label: "Contact Intelligence", href: "/contact" },
                                { label: "Book Appointment", href: "/contact" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-muted hover:text-accent transition-colors text-sm font-body">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Engineering Services */}
                    <div>
                        <h4 className="font-heading text-xs uppercase tracking-[0.3em] text-white mb-8">Engineering</h4>
                        <ul className="space-y-4">
                            {[
                                "Oil Engineering",
                                "Performance Brakes",
                                "Tyre Dynamics",
                                "Digital Diagnostics",
                                "Compliance (WOF)",
                                "Transmission Surgery"
                            ].map((service) => (
                                <li key={service}>
                                    <Link href="/services" className="text-muted hover:text-white transition-colors text-sm font-body">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Intelligence */}
                    <div>
                        <h4 className="font-heading text-xs uppercase tracking-[0.3em] text-white mb-8">Contact</h4>
                        <div className="space-y-8">
                            <div>
                                <div className="font-heading text-[10px] uppercase tracking-widest text-accent mb-2">Support Line</div>
                                <div className="text-white font-display text-2xl tracking-tight">09 558 7788</div>
                            </div>
                            <div>
                                <div className="font-heading text-[10px] uppercase tracking-widest text-accent mb-2">Main Email</div>
                                <div className="text-white font-body text-sm">support@nzautocentre.co.nz</div>
                            </div>
                            <div className="flex flex-wrap gap-3 pt-4">
                                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-accent">Open 7 Days: 9am - 7pm</span>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-muted">Auckland Wide</span>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-muted">24/7 Booking</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Copyright Area */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-muted text-[10px] font-body uppercase tracking-widest">
                        © {new Date().getFullYear()} NZ AUTO CENTRE. PRECISION AUTOMOTIVE CARE.
                    </div>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-muted hover:text-white transition-colors text-[10px] font-heading uppercase tracking-widest">Privacy Protocol</Link>
                        <Link href="/terms" className="text-muted hover:text-white transition-colors text-[10px] font-heading uppercase tracking-widest">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
