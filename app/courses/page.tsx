import type { Metadata } from "next";
import CoursesContent from "./CoursesContent";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore GS Technology's 80+ training programs across Technical, Non-Technical, Employability, Biotechnology, and Chemical Engineering domains with 100% placement assistance.",
};

export default function CoursesPage() {
  return <CoursesContent />;
}
