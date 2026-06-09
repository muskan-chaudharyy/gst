"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { courses } from "@/lib/courses";
import {
  Briefcase,
  Globe,
  Code,
  Layers,
  BarChart2,
  PieChart,
  Cpu,
  ArrowRight,
  Clock,
  TrendingUp,
  Users,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  Globe,
  Code,
  Layers,
  BarChart2,
  PieChart,
  Cpu,
};

const categories = ["All", "Business", "Development", "Data", "Technology"];

export default function CoursesContent() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-5">
              Our Programs
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
              Choose Your Career Path
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              7 industry-aligned programs designed to take you from beginner to
              job-ready in the shortest time possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => {
              const Icon = iconMap[course.icon] ?? Code;
              return (
                <motion.div
                  key={course.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                >
                  <Link
                    href={`/courses/${course.slug}`}
                    className="flex flex-col h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent transition-all duration-300 hover:-translate-y-1 group"
                  >
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-5 shadow-md`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      {course.category}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                      {course.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {course.level}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-5">
                      {course.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-1 text-blue-600 text-sm font-semibold mt-auto">
                      View Course Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Users className="w-10 h-10 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
              Not Sure Which Course to Pick?
            </h2>
            <p className="text-gray-500 mb-6">
              Talk to our counselors for free. We&apos;ll help you find the
              right path based on your background and goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Free Counseling
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
