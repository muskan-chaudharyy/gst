"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useMemo } from "react";
import { allCourseCategories, totalCourseCount } from "@/lib/allCourses";
import {
  Code,
  Briefcase,
  Award,
  Search,
  ArrowRight,
  ChevronDown,
  Users,
  FlaskConical,
  Beaker,
  MessageCircle,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Briefcase,
  Award,
  FlaskConical,
  Beaker,
};

export default function CoursesContent() {
  const [activeTab, setActiveTab] = useState("technical");
  const [search, setSearch] = useState("");
  const [openSubs, setOpenSubs] = useState<Record<string, boolean>>({});

  const toggleSub = (key: string) =>
    setOpenSubs((prev) => ({ ...prev, [key]: !prev[key] }));

  // Flatten all courses for search
  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    const results: { name: string; slug: string; category: string; subcategory: string }[] = [];
    for (const cat of allCourseCategories) {
      for (const sub of cat.subcategories) {
        for (const course of sub.courses) {
          if (course.name.toLowerCase().includes(q)) {
            results.push({
              name: course.name,
              slug: course.slug,
              category: cat.label,
              subcategory: sub.name,
            });
          }
        }
      }
    }
    return results;
  }, [search]);

  const activeCategory = allCourseCategories.find((c) => c.id === activeTab)!;

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
              Training Programs Offered
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              {totalCourseCount}+ Courses Across
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Every Domain
              </span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Online training with live sessions, industry projects, internship
              support, certifications, and placement assistance.
            </p>

            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search any course..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white text-gray-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-xl"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none"
                >
                  ×
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Results */}
      <AnimatePresence>
        {search.trim() && (
          <motion.section
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="py-10 bg-white border-b border-gray-100"
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-sm text-gray-500 mb-4 font-medium">
                {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for &ldquo;{search}&rdquo;
              </p>
              {searchResults.length === 0 ? (
                <p className="text-gray-400 text-sm">No courses found. Try a different keyword.</p>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {searchResults.map((r) => (
                    <Link
                      key={r.slug}
                      href="/contact"
                      className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-sm bg-gray-50 hover:bg-white transition-all group"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      <div>
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
                          {r.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {r.category} · {r.subcategory}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Category Tabs */}
      {!search.trim() && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              {allCourseCategories.map((cat) => {
                const Icon = iconMap[cat.icon] ?? Code;
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                      isActive
                        ? `bg-gradient-to-r ${cat.color} text-white border-transparent shadow-md`
                        : "bg-white text-gray-600 border-gray-200 hover:border-blue-200 hover:text-blue-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Active Category Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Header */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-gray-900">
                      {activeCategory.label}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                      {activeCategory.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 shrink-0">
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full font-semibold text-gray-600">
                      {activeCategory.subcategories.reduce(
                        (a, s) => a + s.courses.length,
                        0
                      )}{" "}
                      courses
                    </span>
                  </div>
                </div>

                {/* Subcategory Accordions */}
                <div className="space-y-4">
                  {activeCategory.subcategories.map((sub, si) => {
                    const key = `${activeTab}-${si}`;
                    const isOpen = openSubs[key] !== false; // open by default
                    return (
                      <div
                        key={sub.name}
                        className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
                      >
                        {/* Accordion Header */}
                        <button
                          onClick={() => toggleSub(key)}
                          className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-bold text-gray-800">
                            {sub.name}
                            <span className="ml-2 text-xs font-normal text-gray-400">
                              ({sub.courses.length} courses)
                            </span>
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Course Pills */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-5 flex flex-wrap gap-2.5">
                                {sub.courses.map((course) => (
                                  <Link
                                    key={course.slug}
                                    href="/contact"
                                    className="group relative inline-flex items-center gap-1.5 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 font-medium hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-all duration-150"
                                  >
                                    {course.name}
                                    {course.badge && (
                                      <span className="px-1.5 py-0.5 bg-blue-100 text-blue-600 text-[9px] font-bold rounded-full leading-none">
                                        {course.badge}
                                      </span>
                                    )}
                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* Mode of Training Banner */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-5xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
          {[
            { label: "Mode", value: "Online" },
            { label: "Live Sessions", value: "✓ Included" },
            { label: "Industry Projects", value: "✓ Included" },
            { label: "Internship Support", value: "✓ Included" },
            { label: "Placement Assist", value: "100%" },
          ].map((item) => (
            <div key={item.label} className="bg-white/10 rounded-xl px-4 py-3">
              <div className="text-blue-200 text-xs font-medium mb-1">{item.label}</div>
              <div className="text-white font-bold text-sm">{item.value}</div>
            </div>
          ))}
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
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Free Counseling
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/917404051406"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-green-500 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
