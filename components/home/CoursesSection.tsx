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
  ArrowRight,
  Clock,
  TrendingUp,
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

const courses = [
  {
    slug: "business-analyst",
    title: "Business Analyst",
    description:
      "Bridge the gap between business needs and tech solutions. Master requirements, Agile, and stakeholder management.",
    duration: "3 Months",
    level: "Beginner",
    icon: "Briefcase",
    color: "from-blue-500 to-indigo-600",
    badge: "High Demand",
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Build modern responsive websites with HTML, CSS, JavaScript, and frameworks. From zero to job-ready.",
    duration: "4 Months",
    level: "Beginner",
    icon: "Globe",
    color: "from-green-500 to-teal-600",
    badge: "",
  },
  {
    slug: "java-fullstack",
    title: "Java Full Stack",
    description:
      "Master Java, Spring Boot, and React to build enterprise-grade applications end-to-end.",
    duration: "6 Months",
    level: "Beginner to Advanced",
    icon: "Code",
    color: "from-orange-500 to-red-600",
    badge: "Most Popular",
  },
  {
    slug: "mern-stack",
    title: "MERN Stack",
    description:
      "Full-stack JavaScript with MongoDB, Express.js, React, and Node.js. Build modern web apps.",
    duration: "5 Months",
    level: "Intermediate",
    icon: "Layers",
    color: "from-purple-500 to-pink-600",
    badge: "Trending",
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    description:
      "Turn data into insights with Python, SQL, and visualization tools. Start your data career today.",
    duration: "3 Months",
    level: "Beginner",
    icon: "BarChart2",
    color: "from-cyan-500 to-blue-600",
    badge: "",
  },
  {
    slug: "power-bi",
    title: "Power BI",
    description:
      "Build stunning dashboards and reports. Master DAX, data modeling, and business intelligence.",
    duration: "2 Months",
    level: "Beginner",
    icon: "PieChart",
    color: "from-yellow-500 to-orange-600",
    badge: "",
  },
];

export default function CoursesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Industry-Aligned Courses
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Carefully designed programs to match what top companies are actually
            hiring for.
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {courses.map((course, i) => {
            const Icon = iconMap[course.icon] ?? Code;
            return (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link href={`/courses/${course.slug}`} className="block group">
                  <div className="h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent transition-all duration-300 hover:-translate-y-1">
                    {/* Icon + badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-md`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {course.badge && (
                        <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                          {course.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {course.level}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-600 text-sm font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200"
          >
            View All Courses
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
