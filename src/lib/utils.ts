import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-NZ', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
};
