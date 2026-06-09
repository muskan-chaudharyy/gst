import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GS Technology — our mission, vision, values, and the team that powers India's trusted training and placement institute.",
};

export default function AboutPage() {
  return <AboutContent />;
}
