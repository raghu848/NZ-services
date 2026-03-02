"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Locations", href: "/locations" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -120 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-[100] bg-transparent pt-4 pointer-events-none"
            >
                {/* Dark inner bar - restoring pointer events for children */}
                <div className="navbar-inner pointer-events-auto">
                    {/* Logo Group */}
                    <div className="flex items-center gap-4">
                        <Link href="/" className="logo-hex-custom no-underline">
                            NZ
                        </Link>
                        <div className="flex flex-col">
                            <span className="logo-name-custom italic">
                                AUTO <span className="text-accent">CENTRE</span>
                            </span>
                            <span className="text-[9px] text-black/40 tracking-[0.4em] uppercase font-bold leading-none mt-1">
                                PREMIUM AUTO CARE
                            </span>
                        </div>
                    </div>

                    {/* Desktop Links Group */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "nav-link-custom",
                                    pathname === link.href && "active"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Action Button Group */}
                    <div className="hidden lg:block">
                        <Link href="/contact" className="cta-btn-curved">
                            Book Service
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none group"
                        aria-label="Toggle menu"
                    >
                        <motion.div
                            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-8 h-0.5 bg-black rounded-full group-hover:bg-accent transition-colors"
                        />
                        <motion.div
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-8 h-0.5 bg-black rounded-full group-hover:bg-accent transition-colors"
                        />
                        <motion.div
                            animate={isOpen ? { rotate: -45, y: -8, width: "32px" } : { rotate: 0, y: 0, width: "20px" }}
                            className="h-0.5 bg-accent rounded-full group-hover:bg-black transition-colors"
                        />
                    </button>
                </div>
            </motion.header>

            {/* Mobile Drawer (Simplified integration) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        className="fixed inset-0 z-[110] bg-[#111] flex flex-col p-10 pt-32 gap-6 lg:hidden"
                    >
                        {/* Close button and links same as before but styled for current brand */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-8 text-white hover:text-accent transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-4xl font-bold text-white hover:text-accent transition-colors uppercase italic"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
