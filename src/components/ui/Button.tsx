import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "outline-red" | "white" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, asChild = false, children, ...props }, ref) => {
        const Comp = (asChild ? Slot : "button") as any;
        const baseStyles = "inline-flex items-center justify-center font-heading uppercase tracking-[1.5px] transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-accent text-white",
            outline: "border border-white text-white",
            "outline-red": "border border-accent text-accent",
            white: "bg-white text-dark",
            ghost: "text-white",
        };

        const sizes = {
            sm: "px-4 py-2 text-xs",
            md: "px-8 py-4 text-sm",
            lg: "px-10 py-5 text-base",
        };

        return (
            <Comp
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {asChild ? children : (
                    <>
                        {isLoading && (
                            <span className="mr-2 h-4 w-4 animate-spin border-2 border-current border-t-transparent rounded-full" />
                        )}
                        {children}
                    </>
                )}
            </Comp>
        );
    }
);

Button.displayName = "Button";

export { Button };
