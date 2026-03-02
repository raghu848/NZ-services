import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "pending" | "confirmed" | "completed" | "cancelled" | "live";
    className?: string;
}

export function Badge({ children, variant = "pending", className }: BadgeProps) {
    const variants = {
        pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
        confirmed: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        completed: "bg-green-500/10 text-green-500 border-green-500/20",
        cancelled: "bg-red-500/10 text-red-500 border-red-500/20",
        live: "bg-red-600 text-white animate-pulse border-none",
    };

    return (
        <span className={cn(
            "px-2 py-0.5 text-[10px] font-heading tracking-wider uppercase border inline-flex items-center rounded-sm",
            variants[variant],
            className
        )}>
            {variant === 'live' && <span className="w-1.5 h-1.5 bg-white rounded-full mr-1.5" />}
            {children}
        </span>
    );
}
