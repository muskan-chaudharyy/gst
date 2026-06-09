import type { Metadata } from "next";
import TestimonialsContent from "./TestimonialsContent";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Read real success stories from GS Technology students who landed top jobs at TCS, Infosys, Wipro, Capgemini, and more.",
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}
