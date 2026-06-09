"use client";

import { motion } from "framer-motion";
import {
  FileSearch,
  Clock,
  CheckCircle2,
  Sparkles,
  Bell,
  Mail,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type NotifyForm = {
  name: string;
  email: string;
};

const benefits = [
  {
    icon: FileSearch,
    title: "ATS Score Check",
    description:
      "Find out if your resume passes Applicant Tracking Systems used by top companies.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: CheckCircle2,
    title: "Content Feedback",
    description:
      "Get actionable suggestions on your summary, skills, and work experience sections.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Sparkles,
    title: "Keyword Optimisation",
    description:
      "We'll identify the right keywords for your target role to boost recruiter visibility.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Clock,
    title: "24-Hour Turnaround",
    description:
      "Receive your detailed review within 24 hours — no waiting for weeks.",
    color: "bg-green-100 text-green-600",
  },
];

const steps = [
  { step: "01", label: "Submit your resume" },
  { step: "02", label: "Expert reviews it" },
  { step: "03", label: "Get detailed feedback" },
  { step: "04", label: "Land more interviews" },
];

export default function ResumeReviewContent() {
  const [notified, setNotified] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NotifyForm>();

  const onNotify = async (data: NotifyForm) => {
    await new Promise((r) => setTimeout(r, 800));
    setNotified(true);
    reset();
    toast.success("You're on the list! We'll notify you when we launch.");
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 py-24 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              Coming Soon
            </div>

            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/30">
              <FileSearch className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Free Resume Review
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-1">
                — Coming Soon
              </span>
            </h1>

            <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed mb-4">
              We&apos;re building something great. Our expert team will review
              your resume, score it for ATS compatibility, and give you
              personalised feedback — completely free.
            </p>

            <p className="text-purple-300 text-sm mb-10">
              Drop your email below and we&apos;ll be the first to let you know
              when it goes live.
            </p>

            {/* Notify Form */}
            {notified ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500/20 border border-green-400/40 rounded-2xl text-green-300 text-sm font-medium"
              >
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                You&apos;re on the list! We&apos;ll notify you at launch.
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onNotify)}
                noValidate
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Your name"
                    {...register("name", { required: true })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    {...register("email", {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-xl hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 disabled:opacity-60 transition-all duration-200 whitespace-nowrap"
                >
                  {isSubmitting ? (
                    "..."
                  ) : (
                    <>
                      <Bell className="w-4 h-4" />
                      Notify Me
                    </>
                  )}
                </button>
              </form>
            )}

            {(errors.name || errors.email) && !notified && (
              <p className="text-pink-400 text-xs mt-2">
                Please fill in both your name and a valid email.
              </p>
            )}
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48L60 40C120 32 240 16 360 12C480 8 600 16 720 20C840 24 960 24 1080 20C1200 16 1320 8 1380 4L1440 0V48H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* What you'll get */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              What&apos;s Included
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              What You&apos;ll Get — Free
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A thorough, personalised review by our placement experts. No
              strings attached.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md hover:bg-white transition-all duration-300 text-center"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${b.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {b.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
              How It Will Work
            </h2>
            <p className="text-gray-500 text-sm">Simple. Fast. Free.</p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex flex-col items-center text-center gap-2 flex-1"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-extrabold text-sm shadow-lg">
                  {s.step}
                </div>
                <p className="text-sm font-semibold text-gray-700">{s.label}</p>
                {/* Connector line — only between items */}
                {i < steps.length - 1 && (
                  <div className="hidden sm:block absolute" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Dashed connector line between steps on desktop */}
          <div className="hidden sm:flex items-center justify-between mt-[-2.5rem] mb-8 px-8 pointer-events-none">
            {Array.from({ length: steps.length - 1 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 border-t-2 border-dashed border-purple-200 mx-1"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Mail className="w-10 h-10 text-white/80 mx-auto mb-4" />
            <h2 className="text-2xl font-extrabold text-white mb-3">
              Be the First to Know
            </h2>
            <p className="text-purple-100 mb-6">
              We&apos;re launching soon. Get notified and be first in line for a
              free resume review.
            </p>
            {notified ? (
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 rounded-xl text-white font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                You&apos;re on the list!
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onNotify)}
                noValidate
                className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  {...register("email")}
                  className="flex-1 px-4 py-3 rounded-xl bg-white/15 border border-white/30 text-white placeholder-purple-200 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-purple-700 text-sm font-bold rounded-xl hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 transition-all duration-200"
                >
                  Notify Me
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
