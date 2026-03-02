"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    onClose: () => void;
}

export function Toast({ message, type = "info", duration = 3000, onClose }: ToastProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 300); // Wait for fade out animation
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const variants = {
        success: "bg-green-600 border-green-400",
        error: "bg-accent border-accent-hover",
        info: "bg-blue-600 border-blue-400",
    };

    return (
        <div className={cn(
            "fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 border rounded-sm text-white font-heading text-sm tracking-wider uppercase flex items-center gap-3 transition-all duration-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            variants[type]
        )}>
            {type === "success" && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
            )}
            {type === "error" && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
            )}
            <span>{message}</span>
        </div>
    );
}

// Global Toast Manager would be better but this is a simple implementation
export function useToast() {
    const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

    const showToast = (message: string, type: ToastType = "info") => {
        setToast({ message, type });
    };

    return { toast, showToast, hideToast: () => setToast(null) };
}
