"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Users,
  Building2,
  Handshake,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Award,
  Briefcase,
  MessageSquare,
  Phone,
} from "lucide-react";

const process = [
  {
    step: "01",
    icon: FileText,
    title: "Profile Building",
    description:
      "We craft a professional resume, LinkedIn profile, and GitHub portfolio that showcase your skills to recruiters.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    step: "02",
    icon: MessageSquare,
    title: "Aptitude & Soft Skills",
    description:
      "Focused sessions on communication, problem-solving, and aptitude to clear HR and technical rounds confidently.",
    color: "bg-green-100 text-green-600",
  },
  {
    step: "03",
    icon: Users,
    title: "Mock Interviews",
    description:
      "Simulated technical and behavioral interviews with panel feedback to prepare you for real interview scenarios.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    step: "04",
    icon: Building2,
    title: "Company Connect",
    description:
      "Direct referrals to our 50+ hiring partners. We get your profile in front of the right decision-makers.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    step: "05",
    icon: Handshake,
    title: "Offer & Negotiation",
    description:
      "We help you evaluate job offers and negotiate the best possible compensation package.",
    color: "bg-cyan-100 text-cyan-600",
  },
];

const stats = [
  { value: "95%", label: "Placement Rate", icon: Award },
  { value: "3 Weeks", label: "Avg. Time to Offer", icon: TrendingUp },
  { value: "50+", label: "Hiring Partners", icon: Building2 },
  { value: "₹6-12 LPA", label: "Average Package", icon: Briefcase },
];

const partners = [
  "TCS", "Infosys", "Wipro", "Capgemini", "Accenture",
  "HCL Technologies", "Tech Mahindra", "Cognizant", "Mphasis",
  "LTIMindtree", "Persistent", "KPIT", "Cyient", "Hexaware",
  "Mastech", "Synechron", "Zensar", "EPAM", "GlobalLogic",
  "Softclix Technologies",
];

export default function PlacementContent() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-green-500/20 text-green-300 rounded-full text-sm font-medium mb-6">
              Placement Assistance
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              We Don&apos;t Just Train You —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                We Place You
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto mb-8">
              Our dedicated placement team works with you from day one, ensuring
              you have every advantage to land your dream job.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Icon className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-extrabold text-gray-900">{value}</div>
              <div className="text-sm text-gray-500">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              Our Placement Process
            </h2>
            <p className="text-gray-500">
              A structured, step-by-step approach to getting you hired.
            </p>
          </motion.div>

          <div className="space-y-5">
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center shrink-0`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 mb-1">
                      STEP {step.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              What&apos;s Included in Placement Support
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "ATS-optimized resume writing",
              "LinkedIn profile optimization",
              "GitHub / portfolio setup",
              "Technical mock interviews",
              "HR & behavioral interview prep",
              "Aptitude & reasoning sessions",
              "Communication & soft skills training",
              "Salary negotiation guidance",
              "Dedicated placement officer",
              "Direct company referrals",
              "Job portal registration assistance",
              "Post-placement career guidance",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
              Our Hiring Partners
            </h2>
            <p className="text-gray-500 mb-8">
              Companies that trust GS Technology students.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {partners.map((company) => (
                <span
                  key={company}
                  className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm transition-all"
                >
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Ready to Launch Your Career?
          </h2>
          <p className="text-green-100 mb-6">
            Join GS Technology today and get access to our complete placement
            support ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+917404051406"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
