"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
    navLinks: { name: string; href: string }[];
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="md:hidden">
            {/* Menu Trigger */}
            <button
                onClick={() => setIsOpen(true)}
                className="text-white p-2"
                aria-label="Open Menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            {/* Overlay Drawer */}
            <div className={cn(
                "fixed inset-0 z-[100] bg-dark transition-transform duration-500 ease-in-out",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-12">
                        <span className="text-xl font-display text-white tracking-tighter">
                            NZ AUTO <span className="text-accent">CENTRE</span>
                        </span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white p-2"
                            aria-label="Close Menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "font-heading uppercase text-2xl tracking-widest transition-fast",
                                    pathname === link.href ? "text-accent" : "text-white/90"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-8">
                            <Button
                                className="w-full bg-accent text-white"
                                size="lg"
                                onClick={() => {
                                    setIsOpen(false);
                                    window.location.href = "/contact";
                                }}
                            >
                                Book Appointment
                            </Button>
                        </div>
                    </nav>

                    <div className="mt-auto pt-10 border-t border-border-dark">
                        <p className="text-muted text-sm mb-2">Need immediate help?</p>
                        <a href="tel:09XXXXXXX" className="text-xl font-heading text-white">09 XXX XXXX</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
