import type { Metadata } from "next";
import CoursesContent from "./CoursesContent";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore GS Technology's comprehensive training programs — Business Analyst, Web Development, Java Full Stack, MERN Stack, Data Analytics, Power BI, and IoT.",
};

export default function CoursesPage() {
  return <CoursesContent />;
}
