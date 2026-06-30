import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GS Technologies | Training & Placement Institute",
    template: "%s | GS Technologies",
  },
  description:
    "GS Technologies offers industry-aligned training in Business Analysis, Web Development, Java Full Stack, MERN Stack, Data Analytics, Power BI, and IoT with 100% placement assistance.",
  keywords: [
    "IT training institute",
    "placement assistance",
    "business analyst training",
    "MERN stack course",
    "Java full stack",
    "data analytics",
    "Power BI training",
    "IoT training",
   
  ],
  authors: [{ name: "GS Technologies" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gstechnology.in",
    siteName: "GS Technologies",
    title: "GS Technologies | Training & Placement Institute",
    description:
      "Launch your tech career with GS Technologies's industry-focused training and 100% placement assistance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GS Technologies | Training & Placement Institute",
    description:
      "Launch your tech career with GS Technologies's industry-focused training and 100% placement assistance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
