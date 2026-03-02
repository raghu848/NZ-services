import FadeUp from "@/components/ui/FadeUp";

export default function ContactSidebar() {
    const branches = [
        {
            name: "Manurewa (South)",
            phone: "09 XXX XXXX",
            address: "6 Holmes Road, Manurewa",
        },
        {
            name: "Henderson (West)",
            phone: "09 XXX XXXX",
            address: "17 View Road, Henderson",
        }
    ];

    return (
        <div className="space-y-12">
            <FadeUp>
                <div className="space-y-4">
                    <h3 className="text-2xl font-heading text-white">GET IN TOUCH</h3>
                    <p className="text-muted font-body leading-relaxed">
                        Have a question or need a quote? Call us directly or visit any of
                        our branches during business hours.
                    </p>
                </div>
            </FadeUp>

            <div className="space-y-8">
                {branches.map((branch, i) => (
                    <FadeUp key={i} delay={i * 100}>
                        <div className="p-6 bg-dark-card border border-border-dark group hover:border-accent/40 transition-fast">
                            <h4 className="text-lg font-heading text-accent mb-4 uppercase">{branch.name}</h4>
                            <div className="space-y-3 text-sm font-body">
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white/40">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.232-.853L4.35 2.25A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    <a href={`tel:${branch.phone}`} className="text-white hover:text-accent transition-fast">{branch.phone}</a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white/40 shrink-0">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <span className="text-white/80">{branch.address}</span>
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                ))}
            </div>

            <FadeUp delay={300}>
                <div className="p-8 bg-accent stripe-texture relative overflow-hidden">
                    <h4 className="text-xl font-heading text-white mb-2 uppercase">Emergency?</h4>
                    <p className="text-white/90 text-sm font-body mb-4 leading-relaxed">
                        Need urgent assistance or breakdown recovery? Call our priority line.
                    </p>
                    <a href="tel:09XXXXXXX" className="text-2xl font-heading text-white flex items-center gap-2">
                        09 XXX XXXX
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 animate-pulse">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                </div>
            </FadeUp>
        </div>
    );
}
