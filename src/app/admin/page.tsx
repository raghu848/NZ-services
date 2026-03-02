"use client";

import { useEffect, useState } from "react";
import { bookingApi, reviewApi } from "@/lib/api";
import FadeUp from "@/components/ui/FadeUp";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AdminOverview() {
    const [stats, setStats] = useState({
        total: 0,
        pending: 0,
        confirmedToday: 0,
        pendingReviews: 0
    });
    const [recentBookings, setRecentBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [bookingsRes, statsRes] = await Promise.all([
                    bookingApi.getAll({ limit: 5 }),
                    bookingApi.getStats()
                ]);

                setRecentBookings(bookingsRes.data.data || []);

                const statsData = statsRes.data.data;
                setStats({
                    total: statsData.total,
                    pending: statsData.pending,
                    confirmedToday: statsData.confirmedToday,
                    pendingReviews: statsData.pendingReviews
                });
            } catch (err) {
                console.error("Failed to fetch dashboard data", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="text-white font-heading animate-pulse">Loading Dashboard...</div>;

    return (
        <div className="space-y-12">
            <header>
                <h1 className="text-4xl font-display text-white mb-2">DASHBOARD OVERVIEW</h1>
                <p className="text-muted font-body">Welcome back, Admin. Here's what's happening today.</p>
            </header>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Bookings", value: stats.total, color: "text-white" },
                    { label: "Pending", value: stats.pending, color: "text-yellow-500" },
                    { label: "Confirmed Today", value: stats.confirmedToday, color: "text-blue-500" },
                    { label: "Pending Reviews", value: stats.pendingReviews, color: "text-accent" },
                ].map((stat, i) => (
                    <FadeUp key={i} delay={i * 100}>
                        <div className="bg-dark-card border border-border-dark p-6 space-y-2">
                            <p className="text-[10px] uppercase font-heading tracking-widest text-muted">{stat.label}</p>
                            <p className={cn("text-4xl font-display", stat.color)}>{stat.value}</p>
                        </div>
                    </FadeUp>
                ))}
            </div>

            {/* Recent Bookings Table */}
            <FadeUp delay={400}>
                <div className="bg-dark-card border border-border-dark overflow-hidden">
                    <div className="p-6 border-b border-border-dark flex justify-between items-center">
                        <h3 className="text-xl font-heading text-white">RECENT BOOKINGS</h3>
                        <Button variant="outline-red" size="sm" asChild>
                            <Link href="/admin/bookings">View All</Link>
                        </Button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm font-body">
                            <thead className="bg-dark/50 text-[10px] uppercase font-heading tracking-widest text-white/40">
                                <tr>
                                    <th className="px-6 py-4">ID</th>
                                    <th className="px-6 py-4">Customer</th>
                                    <th className="px-6 py-4">Service</th>
                                    <th className="px-6 py-4">Branch</th>
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-dark">
                                {recentBookings.map((booking: any) => (
                                    <tr key={booking.id} className="hover:bg-white/5 transition-fast">
                                        <td className="px-6 py-4 text-white/50">#{booking.id}</td>
                                        <td className="px-6 py-4 text-white font-medium">{booking.fullName}</td>
                                        <td className="px-6 py-4 text-white/80">{booking.serviceType.replace('_', ' ')}</td>
                                        <td className="px-6 py-4 text-white/80">{booking.branch}</td>
                                        <td className="px-6 py-4 text-white/80">{new Date(booking.preferredDate).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">
                                            <Badge variant={booking.status.toLowerCase() as any}>{booking.status}</Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </FadeUp>
        </div>
    );
}

// Utility function duplicated here for safety or can use @/lib/utils if possible
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}
