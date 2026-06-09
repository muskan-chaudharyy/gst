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
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Resume Building",
    description:
      "Our experts craft an ATS-optimized resume that gets you past automated filters and onto recruiters' shortlists.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Users,
    step: "02",
    title: "Interview Preparation",
    description:
      "Rigorous mock technical and HR interviews with detailed feedback to sharpen your performance.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Building2,
    step: "03",
    title: "Company Connect",
    description:
      "Direct referrals to 50+ hiring partners ranging from product startups to established MNCs.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Handshake,
    step: "04",
    title: "Offer & Negotiation",
    description:
      "Guidance on evaluating offers and negotiating your salary for the best possible start.",
    color: "bg-orange-100 text-orange-600",
  },
];

const companies = [
  "TCS", "Infosys", "Wipro", "Capgemini", "Accenture",
  "HCL", "Tech Mahindra", "Cognizant", "Mphasis", "LTIMindtree",
];

export default function PlacementSupport() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              Placement Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              We Don&apos;t Stop at Training
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Our placement team works alongside you every step of the way —
              from your first resume to your final offer letter.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Dedicated placement officer for each student",
                "Access to exclusive job openings",
                "LinkedIn profile optimization",
                "Soft skills & communication training",
                "Regular placement drives on campus",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/placement"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              Learn About Placements
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right — Steps */}
          <div className="space-y-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
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
                    <h3 className="font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Hiring Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
            Our Students Work At
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {companies.map((company) => (
              <span
                key={company}
                className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:border-blue-200 hover:text-blue-600 hover:shadow-sm transition-all duration-200"
              >
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
