"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  phone: string;
  course: string;
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
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    reset();
    toast.success("Inquiry submitted! We'll reach out within 24 hours.");
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Have questions about a course or need career guidance? We&apos;re
            here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                value: "+91 98765 43210",
                href: "tel:+919876543210",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: Mail,
                title: "Email Us",
                value: "info@gstechnology.in",
                href: "mailto:info@gstechnology.in",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                value: "GS Technology Center, Pune, Maharashtra 411001",
                href: "#map",
                color: "bg-purple-100 text-purple-600",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.title} href={item.href} className="flex gap-4 group">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shrink-0`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                      {item.title}
                    </div>
                    <div className="text-gray-700 text-sm font-medium group-hover:text-blue-600 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              );
            })}

            {/* Google Maps Placeholder */}
            <div
              id="map"
              className="mt-6 rounded-2xl overflow-hidden border border-gray-200 h-48 bg-gray-100 flex items-center justify-center"
            >
              <div className="text-center text-gray-400">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">GS Technology Center</p>
                <p className="text-xs">Pune, Maharashtra</p>
              </div>
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-gray-50 rounded-2xl p-8 border border-gray-100"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-64 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Inquiry Sent!
                </h3>
                <p className="text-gray-500">
                  Our team will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Course Inquiry Form
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Enter a valid 10-digit mobile number",
                        },
                      })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
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
                        message: "Enter a valid email address",
                      },
                    })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Course of Interest *
                  </label>
                  <select
                    {...register("course", {
                      required: "Please select a course",
                    })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select a course...</option>
                    {courses.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.course && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.course.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any specific questions or requirements..."
                    {...register("message")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-200 disabled:opacity-60 transition-all duration-200"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Inquiry
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
  );
}
