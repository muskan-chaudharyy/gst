"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Star, Users, Award, TrendingUp } from "lucide-react";

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 fill-blue-400 text-blue-400" />
              India&apos;s Trusted Training Institute
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Launch Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Tech Career
              </span>{" "}
              with Confidence
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg"
            >
              Industry-aligned training programs with guaranteed placement
              assistance. Learn from experts, build real projects, and land your
              dream job.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Courses
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/placement"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                <Play className="w-4 h-4" />
                Our Placements
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="grid grid-cols-3 gap-6"
            >
              {[
                { icon: Users, value: "2500+", label: "Students Trained" },
                { icon: Award, value: "95%", label: "Placement Rate" },
                { icon: TrendingUp, value: "50+", label: "Hiring Partners" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <Icon className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs text-gray-400">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Placement Ready</div>
                    <div className="text-blue-300 text-sm">
                      Industry-focused curriculum
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Live projects & real-world experience",
                    "Expert mentors from top companies",
                    "Resume building & mock interviews",
                    "100% placement assistance",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                      </div>
                      <span className="text-gray-200 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Avg. Salary</div>
                    <div className="text-sm font-bold text-gray-900">
                      ₹6–12 LPA
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {["bg-blue-500", "bg-green-500", "bg-purple-500"].map(
                      (color, i) => (
                        <div
                          key={i}
                          className={`w-7 h-7 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                        >
                          {String.fromCharCode(65 + i)}
                        </div>
                      )
                    )}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">New batch</div>
                    <div className="text-sm font-bold text-gray-900">
                      Starting soon
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
