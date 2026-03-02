"use client";

import { useEffect, useState, useCallback } from "react";
import { bookingApi } from "@/lib/api";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";

import { Modal } from "@/components/ui/Modal";

export default function BookingsManagementPage() {
    const [bookings, setBookings] = useState<any[]>([]);
    const [selectedBooking, setSelectedBooking] = useState<any>(null);
    const [isAdminNotesLoading, setIsAdminNotesLoading] = useState(false);
    const [adminNotes, setAdminNotes] = useState("");
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState("");
    const [branchFilter, setBranchFilter] = useState("");

    const fetchBookings = useCallback(async () => {
        setLoading(true);
        try {
            const params: any = {};
            if (statusFilter) params.status = statusFilter;
            if (branchFilter) params.branch = branchFilter;

            const res = await bookingApi.getAll(params);
            setBookings(res.data.data || []); // Fixed data access
        } catch (err) {
            console.error("Failed to fetch bookings", err);
        } finally {
            setLoading(false);
        }
    }, [statusFilter, branchFilter]);

    useEffect(() => {
        fetchBookings();
    }, [fetchBookings]);

    const handleUpdateStatus = async (id: number, status: string, notes?: string) => {
        try {
            await bookingApi.updateStatus(id, status, notes);
            fetchBookings();
            if (selectedBooking && selectedBooking.id === id) {
                setSelectedBooking(null);
            }
        } catch (err) {
            alert("Failed to update status");
        }
    };

    const handleUpdateNotes = async () => {
        if (!selectedBooking) return;
        setIsAdminNotesLoading(true);
        try {
            await bookingApi.updateStatus(selectedBooking.id, selectedBooking.status, adminNotes);
            fetchBookings();
            setSelectedBooking({ ...selectedBooking, adminNotes });
        } catch (err) {
            alert("Failed to update notes");
        } finally {
            setIsAdminNotesLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-display text-white mb-2">BOOKINGS MANAGEMENT</h1>
                    <p className="text-muted font-body">View and manage all customer appointments.</p>
                </div>
            </header>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 bg-dark-card border border-border-dark p-6">
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-dark border border-border-dark text-white p-2 text-xs font-heading uppercase tracking-widest focus:border-accent outline-none"
                >
                    <option value="">All Statuses</option>
                    <option value="PENDING">Pending</option>
                    <option value="CONFIRMED">Confirmed</option>
                    <option value="COMPLETED">Completed</option>
                    <option value="CANCELLED">Cancelled</option>
                </select>

                <select
                    value={branchFilter}
                    onChange={(e) => setBranchFilter(e.target.value)}
                    className="bg-dark border border-border-dark text-white p-2 text-xs font-heading uppercase tracking-widest focus:border-accent outline-none"
                >
                    <option value="">All Branches</option>
                    <option value="MANUREWA">Manurewa</option>
                    <option value="HENDERSON">Henderson</option>
                </select>

                <Button variant="ghost" size="sm" onClick={() => { setStatusFilter(""); setBranchFilter(""); }}>Reset</Button>
            </div>

            <div className="bg-dark-card border border-border-dark overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm font-body">
                        <thead className="bg-dark/50 text-[10px] uppercase font-heading tracking-widest text-white/40">
                            <tr>
                                <th className="px-6 py-4 whitespace-nowrap">ID</th>
                                <th className="px-6 py-4 whitespace-nowrap">Customer</th>
                                <th className="px-6 py-4 whitespace-nowrap">Contact</th>
                                <th className="px-6 py-4 whitespace-nowrap">Service</th>
                                <th className="px-6 py-4 whitespace-nowrap">Branch</th>
                                <th className="px-6 py-4 whitespace-nowrap">Date</th>
                                <th className="px-6 py-4 whitespace-nowrap">Status</th>
                                <th className="px-6 py-4 whitespace-nowrap">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-dark">
                            {bookings.length === 0 && !loading && (
                                <tr>
                                    <td colSpan={8} className="px-6 py-10 text-center text-muted italic">No bookings found matching filters.</td>
                                </tr>
                            )}
                            {bookings.map((booking: any) => (
                                <tr key={booking.id} className="hover:bg-white/5 transition-fast cursor-pointer" onClick={() => {
                                    setSelectedBooking(booking);
                                    setAdminNotes(booking.adminNotes || "");
                                }}>
                                    <td className="px-6 py-4 text-white/40">#{booking.id}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-white font-medium">{booking.fullName}</span>
                                            <span className="text-[10px] text-muted uppercase">{booking.vehicleModel}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col text-xs">
                                            <span className="text-white/80">{booking.phone}</span>
                                            <span className="text-muted">{booking.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-white/80">{booking.serviceType.replace('_', ' ')}</td>
                                    <td className="px-6 py-4 text-white/80">{booking.branch}</td>
                                    <td className="px-6 py-4 text-white/80">{new Date(booking.preferredDate).toLocaleDateString()}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant={booking.status.toLowerCase() as any}>{booking.status}</Badge>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                                        <div className="flex gap-2">
                                            {booking.status === 'PENDING' && (
                                                <button onClick={() => handleUpdateStatus(booking.id, 'CONFIRMED')} className="text-blue-500 hover:text-blue-400 text-xs uppercase font-heading">Confirm</button>
                                            )}
                                            {booking.status === 'CONFIRMED' && (
                                                <button onClick={() => handleUpdateStatus(booking.id, 'COMPLETED')} className="text-green-500 hover:text-green-400 text-xs uppercase font-heading">Complete</button>
                                            )}
                                            {booking.status !== 'CANCELLED' && booking.status !== 'COMPLETED' && (
                                                <button onClick={() => handleUpdateStatus(booking.id, 'CANCELLED')} className="text-red-500 hover:text-red-400 text-xs uppercase font-heading">Cancel</button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Booking Detail Modal */}
            <Modal
                isOpen={!!selectedBooking}
                onClose={() => setSelectedBooking(null)}
                title="Booking Details"
            >
                {selectedBooking && (
                    <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-8 pb-8 border-b border-border-dark">
                            <div>
                                <p className="text-[10px] uppercase font-heading tracking-widest text-muted mb-2">Customer Info</p>
                                <h4 className="text-white text-lg font-heading">{selectedBooking.fullName}</h4>
                                <p className="text-muted font-body text-sm">{selectedBooking.email}</p>
                                <p className="text-muted font-body text-sm">{selectedBooking.phone}</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-heading tracking-widest text-muted mb-2">Service Details</p>
                                <h4 className="text-white text-lg font-heading">{selectedBooking.serviceType.replace('_', ' ')}</h4>
                                <p className="text-muted font-body text-sm">Vehicle: {selectedBooking.vehicleModel}</p>
                                <p className="text-muted font-body text-sm">Branch: {selectedBooking.branch}</p>
                                <p className="text-muted font-body text-sm">Date: {new Date(selectedBooking.preferredDate).toLocaleDateString()}</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-[10px] uppercase font-heading tracking-widest text-muted mb-2">Customer Notes</p>
                            <p className="text-white/80 font-body text-sm bg-dark p-4 border border-border-dark italic">
                                {selectedBooking.notes || "No notes provided by customer."}
                            </p>
                        </div>

                        <div>
                            <p className="text-[10px] uppercase font-heading tracking-widest text-muted mb-2">Internal Admin Notes</p>
                            <textarea
                                value={adminNotes}
                                onChange={(e) => setAdminNotes(e.target.value)}
                                className="w-full bg-dark border border-border-dark p-4 text-white font-body text-sm min-h-[100px] outline-none focus:border-accent transition-fast"
                                placeholder="Add internal notes about this booking..."
                            />
                            <Button
                                variant="outline"
                                size="sm"
                                className="mt-2 border-white/20 text-white/60 hover:text-white"
                                onClick={handleUpdateNotes}
                                isLoading={isAdminNotesLoading}
                            >
                                Save Notes
                            </Button>
                        </div>

                        <div className="flex justify-between items-center pt-8 border-t border-border-dark">
                            <div className="flex gap-2">
                                <p className="text-[10px] uppercase font-heading tracking-widest text-muted flex items-center">Status:</p>
                                <Badge variant={selectedBooking.status.toLowerCase() as any}>{selectedBooking.status}</Badge>
                            </div>
                            <div className="flex gap-3">
                                {selectedBooking.status === 'PENDING' && (
                                    <Button variant="primary" size="sm" onClick={() => handleUpdateStatus(selectedBooking.id, 'CONFIRMED', adminNotes)}>Confirm Booking</Button>
                                )}
                                {selectedBooking.status === 'CONFIRMED' && (
                                    <Button variant="primary" size="sm" onClick={() => handleUpdateStatus(selectedBooking.id, 'COMPLETED', adminNotes)} className="bg-green-600 hover:bg-green-700 border-none">Mark As Completed</Button>
                                )}
                                {selectedBooking.status !== 'CANCELLED' && selectedBooking.status !== 'COMPLETED' && (
                                    <Button variant="outline" size="sm" onClick={() => handleUpdateStatus(selectedBooking.id, 'CANCELLED', adminNotes)} className="border-red-500 text-red-500 hover:bg-red-500">Cancel</Button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}
