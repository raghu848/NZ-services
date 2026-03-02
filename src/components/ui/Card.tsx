import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverGlow?: boolean;
}

export function Card({ children, className, hoverGlow = true }: CardProps) {
    return (
        <div className={cn(
            "bg-dark-card border border-border-dark p-6 transition-fast",
            hoverGlow && "hover:-translate-y-[5px] hover:shadow-accent-glow hover:border-accent/40",
            className
        )}>
            {children}
        </div>
    );
}
