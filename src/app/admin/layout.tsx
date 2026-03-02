"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sidebarLinks = [
    { name: "Overview", href: "/admin", icon: "📊" },
    { name: "Bookings", href: "/admin/bookings", icon: "📅" },
    { name: "Reviews", href: "/admin/reviews", icon: "⭐" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [authorized, setAuthorized] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Basic auth check
        const token = localStorage.getItem("admin_token");
        if (!token && pathname !== "/admin/login") {
            router.push("/admin/login");
        } else {
            setAuthorized(true);
        }
    }, [pathname, router]);

    // Don't wrap login page in admin layout shell
    if (pathname === "/admin/login") return <>{children}</>;

    if (!authorized) return null;

    return (
        <div className="min-h-screen bg-dark flex">
            {/* Admin Sidebar */}
            <aside className="w-64 bg-dark-secondary border-r border-border-dark hidden lg:flex flex-col">
                <div className="p-8 border-b border-border-dark">
                    <Link href="/admin" className="text-xl font-display text-white tracking-tighter block mb-1">
                        NZ AUTO <span className="text-accent">CENTRE</span>
                    </Link>
                    <span className="text-[10px] text-muted uppercase tracking-[3px]">Control Panel</span>
                </div>

                <nav className="flex-grow p-6 space-y-2">
                    {sidebarLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "flex items-center gap-4 px-4 py-3 font-heading uppercase tracking-wider text-sm transition-fast",
                                pathname === link.href ? "bg-accent text-white" : "text-white/60 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <span>{link.icon}</span>
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="p-6 border-t border-border-dark">
                    <button
                        onClick={() => {
                            localStorage.removeItem("admin_token");
                            localStorage.removeItem("admin_user");
                            router.push("/admin/login");
                        }}
                        className="flex items-center gap-4 px-4 py-3 font-heading uppercase tracking-wider text-sm text-red-500 hover:bg-red-500/10 w-full text-left transition-fast"
                    >
                        🚪 Logout
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-grow flex flex-col min-h-screen">
                {/* Mobile Header */}
                <div className="lg:hidden bg-dark-secondary border-b border-border-dark p-6 flex justify-between items-center">
                    <span className="text-xl font-display text-white uppercase">NZ AUTO <span className="text-accent">ADMIN</span></span>
                    <button onClick={() => {
                        localStorage.removeItem("admin_token");
                        router.push("/admin/login");
                    }} className="text-xs font-heading text-red-500 uppercase">Logout</button>
                </div>

                <div className="p-8 md:p-12 flex-grow overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
