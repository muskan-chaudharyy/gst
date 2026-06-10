"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  Globe,
  Code,
  Layers,
  BarChart2,
  PieChart,
  Cpu,
  Clock,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import type { Course } from "@/lib/courses";
import { useState } from "react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  Globe,
  Code,
  Layers,
  BarChart2,
  PieChart,
  Cpu,
};

export default function CourseDetailContent({ course }: { course: Course }) {
  const Icon = iconMap[course.icon] ?? Code;
  const [activeModule, setActiveModule] = useState(0);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className={`bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-20 px-4`}
      >
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6">
            <Link href="/courses" className="hover:text-white transition-colors">
              Courses
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{course.shortTitle}</span>
          </nav>

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-blue-300 text-sm font-medium uppercase tracking-wider">
                  {course.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
                  {course.title}
                </h1>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  {course.longDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-blue-200 text-sm">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-blue-200 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    {course.level}
                  </div>
                  <div className="flex items-center gap-2 text-blue-200 text-sm">
                    <BookOpen className="w-4 h-4" />
                    {course.curriculum.length} Modules
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enroll Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-2xl"
            >
              <h3 className="font-bold text-gray-900 text-lg mb-4">
                Enroll in this Course
              </h3>
              <ul className="space-y-2 mb-5">
                {course.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-200 mb-3"
              >
                Enroll Now
              </Link>
              <a
                href="https://wa.me/917404051406"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3.5 border-2 border-green-500 text-green-600 font-bold rounded-xl hover:bg-green-50 transition-all duration-200"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
              Course Curriculum
            </h2>
            <p className="text-gray-500">
              {course.curriculum.length} modules covering everything you need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-3 mb-4">
            {course.curriculum.map((mod, i) => (
              <button
                key={i}
                onClick={() => setActiveModule(i)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                  activeModule === i
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 bg-white text-gray-700 hover:border-blue-200"
                }`}
              >
                <div className="text-xs font-bold text-gray-400 mb-1">
                  MODULE {i + 1}
                </div>
                <div className="font-semibold text-sm">{mod.module}</div>
              </button>
            ))}
          </div>

          {course.curriculum[activeModule] && (
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-gray-200"
            >
              <h3 className="font-bold text-gray-900 mb-4">
                {course.curriculum[activeModule].module}
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {course.curriculum[activeModule].topics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {topic}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
              What You&apos;ll Be Able to Do
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {course.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-medium">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Ready to Begin Your {course.shortTitle} Journey?
          </h2>
          <p className="text-blue-100 mb-6">
            Enroll today and get started with the next batch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Enroll Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
