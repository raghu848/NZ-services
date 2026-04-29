import WhatsappContactForm from "@/components/contact/WhatsappContactForm";

export default function TestWhatsappPage() {
    return (
        <div style={{ padding: "100px", color: "white" }}>
            <h1>Test WhatsApp Form</h1>
            <p style={{ marginBottom: "20px" }}>This is the unstyled component to test the logic.</p>
            <div style={{ backgroundColor: "#111", padding: "20px", borderRadius: "8px" }}>
                <WhatsappContactForm />
            </div>
        </div>
    );
}
