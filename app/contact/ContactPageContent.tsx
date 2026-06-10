"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Clock,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";
import { submitToSheets } from "@/lib/submitToSheets";

type FormData = {
  name: string;
  email: string;
  phone: string;
  course: string;
  background: string;
  message: string;
};

const courses = [
  "Business Analyst",
  "Web Development",
  "Java Full Stack",
  "MERN Stack",
  "Data Analytics",
  "Power BI",
  "IoT Training",
  "Not sure yet — need counseling",
];

const backgrounds = [
  "College Student",
  "Fresh Graduate",
  "Job Seeker",
  "Working Professional",
];

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await submitToSheets({
      name: data.name,
      email: data.email,
      phone: data.phone,
      course: data.course,
      background: data.background,
      message: data.message ?? "",
      submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      source: "contact-page",
    });
    setSubmitted(true);
    reset();
    toast.success("Message sent! We'll be in touch within 24 hours.");
  };

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
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-xl text-blue-100 max-w-xl mx-auto">
              Questions about a course, placement, or your career path? We&apos;re
              here 6 days a week to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                  Get In Touch
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Whether you&apos;re ready to enroll or just exploring your
                  options, our counselors are happy to guide you.
                </p>
              </div>

              {[
                {
                  icon: Phone,
                  title: "Phone",
                  lines: ["+91 74040 51406"],
                  href: "tel:+917404051406",
                  color: "bg-blue-100 text-blue-600",
                },
                {
                  icon: Mail,
                  title: "Email",
                  lines: ["info@gstechnology.in", "admissions@gstechnology.in"],
                  href: "mailto:info@gstechnology.in",
                  color: "bg-green-100 text-green-600",
                },
                {
                  icon: MapPin,
                  title: "Address",
                  lines: [
                    "GS Technology Center",
                    "Pune, Maharashtra 411001",
                  ],
                  href: "#map",
                  color: "bg-purple-100 text-purple-600",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: Closed"],
                  href: null,
                  color: "bg-orange-100 text-orange-600",
                },
              ].map(({ icon: Icon, title, lines, href, color }) => (
                <div
                  key={title}
                  className={href ? "flex gap-4 group cursor-pointer" : "flex gap-4"}
                  onClick={href ? () => { if (href !== "#map") window.location.href = href; } : undefined}
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center shrink-0`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                      {title}
                    </div>
                    {lines.map((line) => (
                      <div
                        key={line}
                        className="text-sm text-gray-700 font-medium group-hover:text-blue-600 transition-colors"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Follow Us
                </div>
                <div className="flex gap-3">
                  {[
                    { icon: FaFacebook, href: "#", label: "Facebook" },
                    { icon: FaInstagram, href: "#", label: "Instagram" },
                    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                    { icon: FaYoutube, href: "#", label: "YouTube" },
                    { icon: FaWhatsapp, href: `https://wa.me/917404051406`, label: "WhatsApp" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div
                id="map"
                className="rounded-2xl overflow-hidden border border-gray-200 h-52 bg-gray-100 flex items-center justify-center"
              >
                <div className="text-center text-gray-400">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">GS Technology Center</p>
                  <p className="text-xs">Pune, Maharashtra 411001</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center min-h-64 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Our team will reach out within 24 hours to discuss your
                    queries.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 font-semibold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      Course Inquiry / Enrollment
                    </h2>
                    <p className="text-sm text-gray-400">
                      Fill out the form and we&apos;ll contact you within 24 hours.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile number"
                        {...register("phone", {
                          required: "Phone is required",
                          pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: "Enter a valid 10-digit number",
                          },
                        })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email",
                        },
                      })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Course Interest *
                      </label>
                      <select
                        {...register("course", { required: "Please select" })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a course...</option>
                        {courses.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      {errors.course && (
                        <p className="text-red-500 text-xs mt-1">{errors.course.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Your Background *
                      </label>
                      <select
                        {...register("background", { required: "Please select" })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select...</option>
                        {backgrounds.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                      {errors.background && (
                        <p className="text-red-500 text-xs mt-1">{errors.background.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Your Message (Optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your goals, experience, or any questions..."
                      {...register("message")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-200 disabled:opacity-60 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
