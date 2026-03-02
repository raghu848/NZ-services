"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { useBooking } from "@/hooks/useBooking";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
    phone: z.string().regex(/^(\+64|0)[1-9][0-9]{7,9}$/, "Please enter a valid NZ phone number"),
    email: z.string().email("Please enter a valid email address"),
    vehicleModel: z.string().min(2, "Please include make and model"),
    serviceType: z.enum(['GENERAL_SERVICING', 'TYRES_WHEELS', 'BRAKE_REPAIRS', 'MECHANICAL_REPAIRS', 'VEHICLE_INSPECTION', 'NOT_SURE']),
    branch: z.enum(['MANUREWA', 'HENDERSON']),
    preferredDate: z.string().refine(d => new Date(d) > new Date(), {
        message: 'Please select a future date'
    }),
    notes: z.string().max(500).optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
    const { submitBooking, loading, success, error } = useBooking();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
    });

    const onSubmit = async (data: BookingFormData) => {
        await submitBooking(data);
        if (!error) reset();
    };

    if (success) {
        return (
            <div className="bg-accent/10 border border-accent/20 p-12 text-center space-y-6">
                <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 scale-up-in">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </div>
                <h2 className="text-4xl font-display text-white">BOOKING RECEIVED!</h2>
                <p className="text-muted max-w-md mx-auto font-body">
                    Thank you for choosing NZ Auto Centre. We've sent a confirmation email to you
                    and our team will be in touch shortly to confirm your slot.
                </p>
                <div className="pt-6">
                    <Button variant="outline-red" onClick={() => window.location.reload()}>Book Another</Button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-dark-card border border-border-dark p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="space-y-2">
                    <label className="text-xs uppercase font-heading tracking-widest text-white/60">Full Name</label>
                    <input
                        {...register("fullName")}
                        className={cn(
                            "w-full bg-dark border p-4 text-white font-body focus:outline-none focus:border-accent transition-fast",
                            errors.fullName ? "border-red-500" : "border-border-dark"
                        )}
                        placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-[10px] uppercase font-heading">{errors.fullName.message}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                    <label className="text-xs uppercase font-heading tracking-widest text-white/60">Phone Number</label>
                    <input
                        {...register("phone")}
                        className={cn(
                            "w-full bg-dark border p-4 text-white font-body focus:outline-none focus:border-accent transition-fast",
                            errors.phone ? "border-red-500" : "border-border-dark"
                        )}
                        placeholder="021 123 4567"
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] uppercase font-heading">{errors.phone.message}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label className="text-xs uppercase font-heading tracking-widest text-white/60">Email Address</label>
                    <input
                        {...register("email")}
                        className={cn(
                            "w-full bg-dark border p-4 text-white font-body focus:outline-none focus:border-accent transition-fast",
                            errors.email ? "border-red-500" : "border-border-dark"
                        )}
                        placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-[10px] uppercase font-heading">{errors.email.message}</p>}
                </div>

                {/* Vehicle */}
                <div className="space-y-2">
                    <label className="text-xs uppercase font-heading tracking-widest text-white/60">Vehicle Make & Model</label>
                    <input
                        {...register("vehicleModel")}
                        className={cn(
                            "w-full bg-dark border p-4 text-white font-body focus:outline-none focus:border-accent transition-fast",
                            errors.vehicleModel ? "border-red-500" : "border-border-dark"
                        )}
                        placeholder="Toyota Hilux 2021"
                    />
                    {errors.vehicleModel && <p className="text-red-500 text-[10px] uppercase font-heading">{errors.vehicleModel.message}</p>}
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                    <label className="text-xs uppercase font-heading tracking-widest text-white/60">Service Type</label>
                    <select
                        {...register("serviceType")}
                        className={cn(
                            "w-full bg-dark border p-4 text-white font-body focus:outline-none focus:border-accent transition-fast appearance-none",
                            errors.serviceType ? "border-red-500" : "border-border-dark"
                        )}
                    >
                        <option value="">Select a service</option>
                        <option value="GENERAL_SERVICING">General Servicing</option>
                        <option value="TYRES_WHEELS">Tyres & Wheels</option>
                        <option value="BRAKE_REPAIRS">Brake Repairs</option>
                        <option value="MECHANICAL_REPAIRS">Mechanical Repairs</option>
                        <option value="VEHICLE_INSPECTION">Vehicle Inspection</option>
                        <option value="NOT_SURE">Not Sure / Other</option>
                    </select>
                    {errors.serviceType && <p className="text-red-500 text-[10px] uppercase font-heading">{errors.serviceType.message}</p>}
                </div>

                {/* Branch */}
                <div className="space-y-2">
                    <label className="text-xs uppercase font-heading tracking-widest text-white/60">Preferred Branch</label>
                    <select
                        {...register("branch")}
                        className={cn(
                            "w-full bg-dark border p-4 text-white font-body focus:outline-none focus:border-accent transition-fast appearance-none",
                            errors.branch ? "border-red-500" : "border-border-dark"
                        )}
                    >
                        <option value="">Select location</option>
                        <option value="MANUREWA">Manurewa (South Auckland)</option>
                        <option value="HENDERSON">Henderson (West Auckland)</option>
                    </select>
                    {errors.branch && <p className="text-red-500 text-[10px] uppercase font-heading">{errors.branch.message}</p>}
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                    <label className="text-xs uppercase font-heading tracking-widest text-white/60">Preferred Date</label>
                    <input
                        type="date"
                        {...register("preferredDate")}
                        className={cn(
                            "w-full bg-dark border p-4 text-white font-body focus:outline-none focus:border-accent transition-fast",
                            errors.preferredDate ? "border-red-500" : "border-border-dark"
                        )}
                    />
                    {errors.preferredDate && <p className="text-red-500 text-[10px] uppercase font-heading">{errors.preferredDate.message}</p>}
                </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
                <label className="text-xs uppercase font-heading tracking-widest text-white/60">Additional Notes (Optional)</label>
                <textarea
                    {...register("notes")}
                    rows={4}
                    className="w-full bg-dark border border-border-dark p-4 text-white font-body focus:outline-none focus:border-accent transition-fast"
                    placeholder="Please describe any issues..."
                />
                {errors.notes && <p className="text-red-500 text-[10px] uppercase font-heading">{errors.notes.message}</p>}
            </div>

            <div className="pt-4">
                <Button
                    type="submit"
                    variant="primary"
                    className="w-full sm:w-auto"
                    size="lg"
                    isLoading={loading}
                >
                    Confirm My Booking
                </Button>
                {error && <p className="mt-4 text-red-500 text-sm italic">{error}</p>}
            </div>
        </form>
    );
}
