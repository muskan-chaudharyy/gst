"use client";

import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  Briefcase,
  Award,
  Clock,
  HeadphonesIcon,
  Target,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Expert Mentors",
    description:
      "Learn from industry professionals with 10+ years of real-world experience at top tech companies.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Practical Curriculum",
    description:
      "Hands-on projects and case studies that mirror real job requirements — not just theory.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Briefcase,
    title: "100% Placement Assistance",
    description:
      "Dedicated placement team connects you with 50+ hiring partners, from startups to MNCs.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Award,
    title: "Industry Certification",
    description:
      "Get a recognized certificate that holds value with top employers across India.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Clock,
    title: "Flexible Batches",
    description:
      "Morning, evening, and weekend batches designed for students and working professionals.",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: HeadphonesIcon,
    title: "Lifetime Support",
    description:
      "Access to recorded sessions, doubt clearing, and community support even after course completion.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Target,
    title: "Mock Interviews",
    description:
      "Simulated technical and HR interviews with feedback from experienced professionals.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: TrendingUp,
    title: "Career Guidance",
    description:
      "Personalized career roadmap, resume building, and LinkedIn profile optimization.",
    color: "bg-indigo-100 text-indigo-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            Why GS Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            The GS Advantage
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We don&apos;t just train you — we prepare you to succeed in the real
            world.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg bg-gray-50 hover:bg-white transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${reason.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
