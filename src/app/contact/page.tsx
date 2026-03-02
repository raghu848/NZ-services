import BookingForm from "@/components/contact/BookingForm";
import Link from "next/link";

const contactInfo = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F5C512" style={{ width: "20px", height: "20px" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
        label: "South Auckland",
        value: "09 XXX XXXX",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F5C512" style={{ width: "20px", height: "20px" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
        label: "West Auckland",
        value: "09 XXX XXXX",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F5C512" style={{ width: "20px", height: "20px" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
        label: "Email",
        value: "info@nzautocentre.co.nz",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F5C512" style={{ width: "20px", height: "20px" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        label: "Working Hours",
        value: "Mon–Fri 8am–5:30pm | Sat 8am–3pm",
    },
];

export default function ContactPage() {
    return (
        <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
            {/* Page Hero */}
            <section style={{
                padding: "120px 0 60px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                position: "relative",
                overflow: "hidden",
            }}>
                <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                    pointerEvents: "none",
                }} />
                <div className="container-xl" style={{ position: "relative", zIndex: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                        <Link href="/" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "13px", color: "#555", textDecoration: "none" }}>Home</Link>
                        <span style={{ color: "#333" }}>›</span>
                        <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "13px", color: "#888" }}>Contact</span>
                    </div>
                    <div style={{ display: "block", width: "40px", height: "3px", backgroundColor: "#F5C512", marginBottom: "20px" }} />
                    <h1 style={{
                        fontFamily: "var(--font-bebas), sans-serif",
                        fontSize: "clamp(3rem, 8vw, 6rem)",
                        textTransform: "uppercase",
                        color: "white",
                        lineHeight: 1,
                        marginBottom: "16px",
                    }}>BOOK A <span style={{ color: "#F5C512" }}>SERVICE</span></h1>
                    <p style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        color: "#888",
                        fontSize: "16px",
                        maxWidth: "480px",
                        lineHeight: 1.7,
                    }}>
                        Fill out the form below and we'll confirm your booking within 2 business hours.
                    </p>
                </div>
            </section>

            {/* Main content */}
            <section style={{ padding: "64px 0" }}>
                <div className="container-xl">
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "40px",
                        alignItems: "start",
                    }}>
                        {/* Form */}
                        <div style={{
                            gridColumn: "span 2",
                            backgroundColor: "#111111",
                            border: "1px solid rgba(255,255,255,0.06)",
                            padding: "40px 36px",
                        }}
                            className="contact-form-col"
                        >
                            <h2 style={{
                                fontFamily: "var(--font-oswald), sans-serif",
                                fontSize: "22px",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                color: "white",
                                marginBottom: "6px",
                            }}>Request Your Booking</h2>
                            <p style={{
                                fontFamily: "var(--font-dm-sans), sans-serif",
                                color: "#888",
                                fontSize: "14px",
                                marginBottom: "28px",
                            }}>We'll get back to you within 2 business hours to confirm.</p>
                            <BookingForm />
                        </div>

                        {/* Sidebar */}
                        <div>
                            <h3 style={{
                                fontFamily: "var(--font-oswald), sans-serif",
                                fontSize: "16px",
                                textTransform: "uppercase",
                                letterSpacing: "2px",
                                color: "#888",
                                marginBottom: "24px",
                            }}>Get In Touch</h3>

                            {contactInfo.map((item, i) => (
                                <div key={i} style={{
                                    display: "flex",
                                    gap: "16px",
                                    padding: "20px",
                                    backgroundColor: "#111111",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                    marginBottom: "8px",
                                }}>
                                    <div style={{ flexShrink: 0, marginTop: "2px" }}>{item.icon}</div>
                                    <div>
                                        <div style={{ fontFamily: "var(--font-oswald), sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "2px", color: "#555", marginBottom: "4px" }}>{item.label}</div>
                                        <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "14px", color: "white" }}>{item.value}</div>
                                    </div>
                                </div>
                            ))}

                            {/* WhatsApp CTA */}
                            <div style={{
                                backgroundColor: "#1a2e1a",
                                border: "1px solid rgba(37,211,102,0.2)",
                                padding: "20px",
                                marginTop: "16px",
                                display: "flex",
                                gap: "16px",
                                alignItems: "center",
                            }}>
                                <div style={{ fontSize: "28px", flexShrink: 0 }}>💬</div>
                                <div>
                                    <div style={{ fontFamily: "var(--font-oswald), sans-serif", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1.5px", color: "#25d366", marginBottom: "4px" }}>WhatsApp Us</div>
                                    <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "13px", color: "#888" }}>Quick questions? Message us on WhatsApp for fast replies.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (min-width: 900px) {
                    .contact-form-col {
                        grid-column: span 2 !important;
                    }
                }
            `}</style>
        </div>
    );
}
