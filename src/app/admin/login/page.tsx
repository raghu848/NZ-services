"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { authApi } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { useToast, Toast } from "@/components/ui/Toast";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function AdminLoginPage() {
    const [loading, setLoading] = useState(false);
    const { toast, showToast, hideToast } = useToast();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        setLoading(true);
        try {
            const res = await authApi.login(data);
            localStorage.setItem("admin_token", res.data.token);
            localStorage.setItem("admin_user", JSON.stringify(res.data.admin));
            router.push("/admin");
        } catch (err: any) {
            showToast(err.response?.data?.message || "Invalid credentials", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4">
            {toast && <Toast message={toast.message} type={toast.type} onClose={hideToast} />}
            <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none" />

            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-10">
                    <span className="text-3xl font-display text-white tracking-tighter block mb-2">
                        NZ AUTO <span className="text-accent">CENTRE</span>
                    </span>
                    <p className="text-muted font-heading uppercase text-xs tracking-[4px]">Admin Portal</p>
                </div>

                <div className="bg-dark-card border border-border-dark p-8 md:p-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-heading tracking-widest text-white/60">Admin Email</label>
                            <input
                                {...register("email")}
                                type="email"
                                className="w-full bg-dark border border-border-dark p-4 text-white font-body focus:outline-none focus:border-accent transition-fast"
                                placeholder="admin@nzautocentre.co.nz"
                            />
                            {errors.email && <p className="text-red-500 text-[10px] uppercase font-heading">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase font-heading tracking-widest text-white/60">Password</label>
                            <input
                                {...register("password")}
                                type="password"
                                className="w-full bg-dark border border-border-dark p-4 text-white font-body focus:outline-none focus:border-accent transition-fast"
                                placeholder="••••••••"
                            />
                            {errors.password && <p className="text-red-500 text-[10px] uppercase font-heading">{errors.password.message}</p>}
                        </div>

                        <Button type="submit" variant="primary" className="w-full" size="lg" isLoading={loading}>
                            Login to Dashboard
                        </Button>
                    </form>
                </div>

                <div className="text-center mt-8">
                    <Button variant="ghost" size="sm" asChild>
                        <a href="/" className="text-muted hover:text-white">← Return to Website</a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
