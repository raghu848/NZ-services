"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/ui/FadeUp";

const reviews = [
    {
        authorName: "James Mitchell",
        suburb: "Manurewa, Auckland",
        rating: 5,
        body: "Absolutely outstanding service from start to finish. The team was professional, fast, and the pricing was completely transparent. My car came back running better than ever.",
    },
    {
        authorName: "Sarah Taufa",
        suburb: "Henderson, Auckland",
        rating: 5,
        body: "Found NZ Auto Centre after a terrible experience at a dealer service. Night and day difference. They explained everything clearly, finished on time, and the price was very fair.",
    },
    {
        authorName: "Raj Patel",
        suburb: "South Auckland",
        rating: 5,
        body: "Brought in my van for a WOF and minor repairs. The team was honest about what was needed, didn't try to upsell me on anything unnecessary. Great experience and great value.",
    },
];

export default function ReviewsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-dark py-32 overflow-hidden relative">
            {/* Background Text */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none">
                <span className="font-display text-[20rem] text-white/[0.02] leading-none uppercase">TESTIMONIALS</span>
            </div>

            <div className="container-xl relative z-10">
                <div className="flex flex-col items-center">
                    <FadeUp>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-8 h-[1px] bg-accent" />
                            <span className="font-heading text-[10px] uppercase tracking-[0.4em] text-accent">Real Experiences</span>
                            <div className="w-8 h-[1px] bg-accent" />
                        </div>
                        <h2 className="font-display text-5xl md:text-7xl text-white text-center mb-12 uppercase">
                            TRUSTED BY THE <span className="text-accent">COMMUNITY</span>
                        </h2>
                    </FadeUp>

                    <div className="max-w-4xl w-full perspective-[2000px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, rotateX: -10, y: 20 }}
                                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                                exit={{ opacity: 0, rotateX: 10, y: -20 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-dark-card border border-white/5 p-12 md:p-20 relative shadow-2xl backdrop-blur-sm"
                            >
                                {/* Quote Icon */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-2xl">
                                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.125 21C3.125 18.3137 5.81129 21 9.125 21H11.125V18C11.125 16.8954 10.2296 16 9.125 16H6.125C5.57272 16 5.125 15.5523 5.125 15V9C5.125 8.44772 5.57272 8 6.125 8H10.125C10.6773 8 11.125 8.44772 11.125 9V12C11.125 12.5523 11.5727 13 12.125 13H14.125C14.6773 13 15.125 12.5523 15.125 12V9C15.125 7.34315 13.7818 6 12.125 6H6.125C4.46815 6 3.125 7.34315 3.125 9V15C3.125 18.3137 5.81129 21 9.125 21H11.125" />
                                    </svg>
                                </div>

                                <div className="text-center">
                                    <div className="flex justify-center gap-1 mb-8">
                                        {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <p className="font-body text-xl md:text-3xl text-white italic leading-relaxed mb-12">
                                        "{reviews[currentIndex].body}"
                                    </p>

                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-1 bg-accent mb-6" />
                                        <div className="font-heading text-[12px] uppercase tracking-[0.3em] text-white mb-2">
                                            {reviews[currentIndex].authorName}
                                        </div>
                                        <div className="font-body text-[10px] uppercase tracking-widest text-muted">
                                            {reviews[currentIndex].suburb}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination */}
                    <div className="flex gap-4 mt-16">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-1 transition-all duration-500 rounded-full ${i === currentIndex ? 'w-12 bg-accent' : 'w-6 bg-white/10 hover:bg-white/20'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
