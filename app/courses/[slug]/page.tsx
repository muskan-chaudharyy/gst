import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses, getCourseBySlug } from "@/lib/courses";
import CourseDetailContent from "./CourseDetailContent";

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CourseDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();
  return <CourseDetailContent course={course} />;
}
