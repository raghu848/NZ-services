import type { Metadata } from "next";
import { Bebas_Neue, Oswald, DM_Sans, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NZ Auto Centre | Auckland's Trusted Mechanics",
  description: "Professional automotive repairs and servicing in South & West Auckland. Brakes, tyres, WOF, general servicing — fast, transparent pricing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${oswald.variable} ${dmSans.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <body style={{ 
        backgroundColor: "#0a0a0a", 
        color: "white", 
        overflowX: "hidden",
        cursor: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'%3E%3Cg fill='%23F5C512' stroke='black' stroke-width='20' stroke-linejoin='round'%3E%3Cpath d='M198.4,228.6l-46.6-46.6c-11,15.4-18.6,33.3-21.8,52.7h66C196.7,232.6,197.5,230.6,198.4,228.6z'/%3E%3Cpath d='M330,151.8c-15.4-11-33.3-18.6-52.7-21.9v66c2.1,0.7,4.1,1.5,6.1,2.5L330,151.8z'/%3E%3Cpath d='M256,234.7c-11.8,0-21.3,9.6-21.3,21.3c0,11.8,9.6,21.3,21.3,21.3c11.8,0,21.3-9.6,21.3-21.3C277.3,244.3,267.8,234.7,256,234.7z'/%3E%3Cpath d='M313.6,283.4l46.6,46.6c11-15.4,18.6-33.3,21.8-52.7h-66C315.3,279.4,314.5,281.5,313.6,283.4z'/%3E%3Cpath d='M195.9,277.3h-66c3.3,19.4,10.9,37.3,21.8,52.7l46.6-46.6C197.5,281.5,196.7,279.4,195.9,277.3z'/%3E%3Cpath d='M234.7,195.9v-66c-19.4,3.3-37.3,10.9-52.7,21.8l46.6,46.6C230.6,197.5,232.6,196.7,234.7,195.9z'/%3E%3Cpath d='M313.6,228.6c0.9,2,1.7,4,2.5,6.1h66c-3.3-19.4-10.9-37.3-21.8-52.7L313.6,228.6z'/%3E%3Cpath d='M256,0C114.8,0,0,114.9,0,256s114.8,256,256,256s256-114.8,256-256S397.2,0,256,0z M377,376.2c-0.1,0.1-0.2,0.3-0.3,0.5c-0.1,0.1-0.3,0.2-0.5,0.3C345.3,407.7,302.8,426.7,256,426.7c-46.9,0-89.4-19-120.2-49.7c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.2-0.3-0.3-0.5C104.3,345.3,85.3,302.8,85.3,256c0-46.8,19-89.3,49.7-120.2c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.3-0.2,0.4-0.3C166.6,104.3,209.1,85.3,256,85.3c46.8,0,89.3,19,120.2,49.7c0.1,0.1,0.3,0.2,0.5,0.3c0.1,0.1,0.2,0.3,0.3,0.4c30.7,30.9,49.7,73.4,49.7,120.2C426.7,302.8,407.7,345.3,377,376.2z'/%3E%3Cpath d='M181.9,360.2c15.4,11,33.3,18.6,52.7,21.9v-66c-2.1-0.7-4.1-1.5-6.1-2.5L181.9,360.2z'/%3E%3Cpath d='M277.3,316.1v66c19.4-3.3,37.3-10.9,52.7-21.8l-46.6-46.6C281.4,314.5,279.4,315.3,277.3,316.1z'/%3E%3C/g%3E%3C/svg%3E\") 16 16, auto" 
      }}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
