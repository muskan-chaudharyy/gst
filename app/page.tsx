import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CoursesSection from "@/components/home/CoursesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsSection from "@/components/home/StatsSection";
import PlacementSupport from "@/components/home/PlacementSupport";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "GS Technology | Training & Placement Institute",
  description:
    "India's trusted training and placement institute. Industry-aligned courses in Business Analysis, Web Development, Java, MERN Stack, Data Analytics, Power BI, and IoT.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <WhyChooseUs />
      <StatsSection />
      <PlacementSupport />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
